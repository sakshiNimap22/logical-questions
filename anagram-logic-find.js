// logic for anagram program with its time complexity. (for large strings)


function isAnagram(str1, str2) {
    // Convert both strings to lowercase and remove non-alphabetic characters
    str1 = str1.toLowerCase().replace(/[^a-z]/g, '');
    str2 = str2.toLowerCase().replace(/[^a-z]/g, '');
    
    // Create frequency maps for both strings
    const freqMap1 = {}, freqMap2 = {};
    for (let i = 0; i < str1.length; i++) {
      freqMap1[str1[i]] = (freqMap1[str1[i]] || 0) + 1;
    }
    for (let i = 0; i < str2.length; i++) {
      freqMap2[str2[i]] = (freqMap2[str2[i]] || 0) + 1;
    }
    
    // Compare frequency maps
    if (Object.keys(freqMap1).length !== Object.keys(freqMap2).length) {
      return false;
    }
    for (let key in freqMap1) {
      if (freqMap1[key] !== freqMap2[key]) {
        return false;
      }
    }
    return true;
  }