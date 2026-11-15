# Personal portfolio

Light, editorial portfolio built with React and Vite. The photographs are taken from the supplied portfolio document. Original image files are retained in `assets/source-images`; the site uses optimized WebP copies in `public/images/portfolio`.

## Run locally

```sh
npm install
npm run dev
```

Open `http://localhost:5173/` while the Vite server is running. The development server is configured to listen on all local interfaces at port 5173.

## Contact form

The form posts messages to `krishtiwari136118@gmail.com` using FormSubmit's AJAX endpoint. The integration was tested. FormSubmit replied that this form needs activation and sent an activation email to the mailbox. Open that email and click its activation link before expecting contact messages to arrive. The site now shows this setup step if someone submits before activation.

For production, configure the contact provider for the deployed domain and replace the client side endpoint with a server side endpoint if the recipient address should not be public. FormSubmit setup details: https://formsubmit.co/ajax-documentation.

## Travel photos

Travel chapters are data driven in `src/data.js`. Each entry has a name, category, location tag, short photo based note, cover image and image list. To add a destination, place optimized WebP photos in `public/images/travel/<destination>/`, then add one entry to `destinations`. The location list, carousel, chapter book and category previews use that data automatically. Mussoorie currently includes the 21 photographs shared for this update.

## Vengeance UI

The project uses original Vengeance UI sources for Interactive Particles, Interactive Book, Liquid Text, Liquid Metal, Glass Dock, Spotlight Navbar, Gooey Search, Circular Gallery, Image Trail, Staggered Grid, Image Collage, Cylinder Carousel and Wave Grid. Wave Grid is the page background. Image Collage is part of the TUNIC project, and Cylinder Carousel appears behind the opening portrait. Their source files are in `src/components/ui`.

Model Viewer would fit as a preview for a project prototype, but no project `.glb` asset was provided. It remains optional until a suitable model is available.
