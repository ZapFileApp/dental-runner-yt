const yukonCities = [
  "Beaver Creek", "Burwash Landing", "Carcross", "Carmacks", "Dawson",
  "Destruction Bay", "Faro", "Haines Junction", "Marsh Lake", "Mayo",
  "Old Crow", "Pelly Crossing", "Ross River", "Swift River", "Tagish",
  "Teslin", "Watson Lake", "Whitehorse",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < yukonCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(yukonCities[i]);
}

module.exports = { batches };
