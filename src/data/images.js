// Photos are free to use under the Pexels License (https://www.pexels.com/license/).
// They load from Pexels' image CDN, which resizes and compresses them on the fly.
// Each one has a local fallback in /public/img so a broken link never shows an empty box.
// Full credits: CREDITS.md

export const pexels = (id, w = 800) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

const photo = (id, fallback, alt) => ({ id, fallback, alt });

export const photos = {
  heroTechnician: photo(33694019, '/img/photos/electrical.webp', 'Technician adjusting wiring inside an electrical control panel'),
  panelMultimeter: photo(34054464, '/img/photos/electrical.webp', 'Electrician testing an electrical panel with a multimeter'),
  panelWork: photo(27928762, '/img/photos/background.webp', 'Engineer working on an electrical distribution panel'),
  fuseBox: photo(17842832, '/img/photos/background.webp', 'Electrician working at a fuse box'),
  controlRoom: photo(33706880, '/img/photos/background.webp', 'Industrial electrical control room with switchgear cabinets'),
  robots: photo(18471441, '/img/photos/machines.webp', 'Automated robotic production line in a factory'),
  solarRoof: photo(35237908, '/img/photos/electrical.webp', 'Worker installing solar panels on a roof'),
  solarTeam: photo(8853539, '/img/photos/electrical.webp', 'Solar technicians working on site'),
  solarInstall: photo(4254165, '/img/photos/electrical.webp', 'Technician installing a solar panel'),
  solarField: photo(11645008, '/img/photos/electrical.webp', 'Solar panels being installed on a frame'),
  substation: photo(18468536, '/img/photos/background.webp', 'Power distribution substation'),
  powerLines: photo(34180305, '/img/photos/background.webp', 'High voltage power lines against a blue sky'),
  transmission: photo(236089, '/img/photos/background.webp', 'Power transmission station'),
  teamBlueprint: photo(8482865, '/img/photos/shipment.webp', 'Engineers in hard hats reviewing plans on a laptop'),
  teamSite: photo(8961030, '/img/photos/shipment.webp', 'Two engineers in hard hats talking at a site'),
  warehouse: photo(5156696, '/img/photos/shipment.webp', 'Boxes stored on warehouse shelves'),
  cables: photo(17072947, '/img/products/pcb-components.webp', 'Close-up of electrical cables'),
  wires: photo(4480525, '/img/products/pcb-components.webp', 'Blue, red and yellow electrical wires'),
  eWaste: photo(9953442, '/img/photos/machines.webp', 'Discarded electronic equipment ready for recycling'),
  eWastePile: photo(19037726, '/img/photos/machines.webp', 'Pile of electronic waste'),
  circuitBoards: photo(31945005, '/img/products/pcb-components.webp', 'Close-up of disassembled circuit boards'),
};
