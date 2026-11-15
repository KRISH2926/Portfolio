from pathlib import Path
from zipfile import ZipFile
from xml.etree import ElementTree as ET
import json

source = Path(r"C:\Users\krish\Downloads\Portfolio (1).docx")
out = Path(__file__).parent / "assets" / "source-images"
out.mkdir(parents=True, exist_ok=True)
ns = {
    "w": "http://schemas.openxmlformats.org/wordprocessingml/2006/main",
    "a": "http://schemas.openxmlformats.org/drawingml/2006/main",
    "r": "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
    "rel": "http://schemas.openxmlformats.org/package/2006/relationships",
}

with ZipFile(source) as archive:
    relationships = ET.fromstring(archive.read("word/_rels/document.xml.rels"))
    targets = {item.attrib["Id"]: item.attrib["Target"] for item in relationships}
    document = ET.fromstring(archive.read("word/document.xml"))
    index = []
    for paragraph in document.findall(".//w:p", ns):
        caption = "".join(node.text or "" for node in paragraph.findall(".//w:t", ns)).strip()
        for image in paragraph.findall(".//a:blip", ns):
            rel_id = image.attrib.get(f"{{{ns['r']}}}embed")
            target = targets.get(rel_id, "")
            member = "word/" + target.lstrip("/") if not target.startswith("/") else target.lstrip("/")
            if not member.startswith("word/media/"):
                continue
            filename = Path(member).name
            destination = out / filename
            if not destination.exists():
                destination.write_bytes(archive.read(member))
            index.append({"file": filename, "caption": caption, "relationship": rel_id})

    # Retain every supplied image, including assets referenced through drawing types
    # not represented by a standard inline picture.
    for member in archive.namelist():
        if member.startswith("word/media/") and not (out / Path(member).name).exists():
            (out / Path(member).name).write_bytes(archive.read(member))

(out / "index.json").write_text(json.dumps(index, indent=2), encoding="utf-8")
print(f"Extracted source images to {out}")
