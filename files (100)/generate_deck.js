const pptxgen = require("pptxgenjs");
const { html2pptx } = require("./html2pptx");

async function createPitchDeck() {
  const pptx = new pptxgen();
  
  // Set presentation properties
  pptx.layout = "LAYOUT_16x9";
  pptx.title = "AURION Research Labs - Investor Pitch Deck";
  pptx.subject = "Building the Intelligence that Builds the Future";
  pptx.author = "AURION Research Labs";
  pptx.company = "AURION Research Labs";
  
  // Define slide files in order
  const slides = [
    "slide01_title.html",
    "slide02_problem.html",
    "slide03_solution.html",
    "slide04_product.html",
    "slide05_moat.html",
    "slide06_verticals.html",
    "slide07_market.html",
    "slide08_business.html",
    "slide09_traction.html",
    "slide10_competition.html",
    "slide11_gtm.html",
    "slide12_team_ask.html"
  ];
  
  // Process each slide
  for (const slideFile of slides) {
    console.log(`Processing ${slideFile}...`);
    await html2pptx(slideFile, pptx);
  }
  
  // Save the presentation
  const outputPath = "AURION_Investor_Pitch_Deck.pptx";
  await pptx.writeFile(outputPath);
  console.log(`\nPresentation saved to ${outputPath}`);
}

createPitchDeck().catch(console.error);
