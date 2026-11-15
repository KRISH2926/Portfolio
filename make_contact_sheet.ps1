$source = 'D:\Krish-portfolio\assets\source-images'
$files = Get-ChildItem -LiteralPath $source -File | Where-Object { $_.Extension -match '^\.(png|jpe?g)$' } | Sort-Object { [int]($_.BaseName -replace '\D','') }
Add-Type -AssemblyName System.Drawing
$cellW = 180; $cellH = 145; $cols = 6
$rows = [Math]::Ceiling($files.Count / $cols)
$bmp = New-Object System.Drawing.Bitmap ($cols * $cellW), ($rows * $cellH)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.Clear([System.Drawing.Color]::White)
for ($i=0; $i -lt $files.Count; $i++) {
  $x = ($i % $cols) * $cellW; $y = [Math]::Floor($i / $cols) * $cellH
  $img = [System.Drawing.Image]::FromFile($files[$i].FullName)
  $scale = [Math]::Min(160 / $img.Width, 112 / $img.Height)
  $w = [int]($img.Width * $scale); $h = [int]($img.Height * $scale)
  $g.DrawImage($img, $x + 10 + (160-$w)/2, $y + 4 + (112-$h)/2, $w, $h)
  $font = New-Object System.Drawing.Font('Arial', 10)
  $g.DrawString($files[$i].BaseName, $font, [System.Drawing.Brushes]::Black, $x + 8, $y + 118)
  $img.Dispose(); $font.Dispose()
}
$bmp.Save('D:\Krish-portfolio\portfolio-contact-sheet.jpg', [System.Drawing.Imaging.ImageFormat]::Jpeg)
$g.Dispose(); $bmp.Dispose()
