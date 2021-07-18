// Setup
var recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  const record  = records[id]
  if (value) {
    if (prop == "tracks") {
      record[prop] = record[prop] || []
      record[prop].push(value)
    } else {
      record[prop] = value;
    }

  } else {
    delete record[prop];
  }
  return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');