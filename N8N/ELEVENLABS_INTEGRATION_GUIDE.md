# 🎵 ElevenLabs Audio Integration Guide

**📋 Document Version**: `v1.0.0`  
**🔄 Last Updated**: June 26, 2025 at 9:56 PM  
**🎯 Purpose**: Complete guide for integrating ElevenLabs premium voices

---

## 🎤 **ElevenLabs Configuration Format**

### **📝 Required JSON Structure**
```json
{
  "voiceModel": "elevenlabs",
  "voice.ConnectionID": "my-elevenlabs-connection",
  "voiceID": "21m00Tcm4TlvDq8ikWAM"
}
```

### **🔧 Configuration Parameters**
```javascript
// ElevenLabs specific settings
voiceModel: "elevenlabs"              // Fixed value for ElevenLabs
"voice.ConnectionID": string          // Your ElevenLabs connection ID
voiceID: string                       // Specific voice ID from ElevenLabs
```

---

## 🎭 **Available ElevenLabs Voices**

### **👩 Female Voices**
```javascript
elevenLabsFemaleVoices: [
  {
    voiceID: "21m00Tcm4TlvDq8ikWAM",
    name: "Rachel",
    style: "Natural, Calm",
    description: "Perfect for biblical narration, clear and reverent"
  },
  {
    voiceID: "AZnzlk1XvdvUeBnXmlld", 
    name: "Domi",
    style: "Strong, Confident",
    description: "Powerful delivery for prophetic passages"
  },
  {
    voiceID: "EXAVITQu4vr4xnSDxMaL",
    name: "Bella",
    style: "Soft, Gentle", 
    description: "Ideal for Psalms and gentle teachings"
  },
  {
    voiceID: "ThT5KcBeYPX3keUQqHPh",
    name: "Dorothy",
    style: "Pleasant, Warm",
    description: "Engaging for longer biblical passages"
  }
]
```

### **👨 Male Voices**
```javascript
elevenLabsMaleVoices: [
  {
    voiceID: "ErXwobaYiN019PkySvjV",
    name: "Antoni", 
    style: "Well-rounded, Versatile",
    description: "Excellent for Gospel readings and teachings"
  },
  {
    voiceID: "VR6AewLTigWG4xSOukaG",
    name: "Arnold",
    style: "Crisp, Authoritative",
    description: "Perfect for Old Testament narratives"
  },
  {
    voiceID: "pNInz6obpgDQGcFmaJgB",
    name: "Adam",
    style: "Deep, Resonant", 
    description: "Commanding presence for major biblical events"
  },
  {
    voiceID: "yoZ06aMxZJJ28mfd3POQ",
    name: "Sam",
    style: "Friendly, Approachable",
    description: "Great for parables and everyday teachings"
  }
]
```

---

## 🔧 **UI Implementation**

### **🎛️ Voice Selection Component**
```jsx
// React component example
const VoiceSelector = () => {
  const [selectedVoice, setSelectedVoice] = useState({
    voiceModel: "elevenlabs",
    connectionID: "my-elevenlabs-connection", 
    voiceID: "21m00Tcm4TlvDq8ikWAM"
  });

  const elevenLabsVoices = [
    {
      id: "21m00Tcm4TlvDq8ikWAM",
      label: "Rachel (Female, Natural)",
      gender: "female",
      style: "natural"
    },
    {
      id: "ErXwobaYiN019PkySvjV", 
      label: "Antoni (Male, Well-rounded)",
      gender: "male",
      style: "versatile"
    }
    // ... more voices
  ];

  return (
    <div className="voice-selector">
      <label>Voice Provider</label>
      <select onChange={handleProviderChange}>
        <option value="azure">Azure Neural</option>
        <option value="elevenlabs">ElevenLabs Premium</option>
      </select>
      
      {selectedVoice.voiceModel === "elevenlabs" && (
        <>
          <label>Connection ID</label>
          <input 
            type="text"
            value={selectedVoice.connectionID}
            onChange={handleConnectionChange}
            placeholder="my-elevenlabs-connection"
          />
          
          <label>Voice Selection</label>
          <select onChange={handleVoiceChange}>
            {elevenLabsVoices.map(voice => (
              <option key={voice.id} value={voice.id}>
                {voice.label}
              </option>
            ))}
          </select>
        </>
      )}
    </div>
  );
};
```

---

## 📝 **JSON2Video Template Integration**

### **🎬 Template Voice Configuration**
```json
{
  "scenes": [
    {
      "id": "scene1_biblical",
      "elements": [
        {
          "id": "scene1_voice",
          "type": "voice",
          "text": "{{scene1_voiceOverText}}",
          "voiceModel": "elevenlabs",
          "voice.ConnectionID": "{{elevenLabsConnectionID}}",
          "voiceID": "{{elevenLabsVoiceID}}",
          "speed": 0.9
        }
      ]
    }
  ]
}
```

### **🔄 Dynamic Voice Variables**
```json
{
  "variables": {
    "elevenLabsConnectionID": "my-elevenlabs-connection",
    "elevenLabsVoiceID": "21m00Tcm4TlvDq8ikWAM",
    "voiceSpeed": 0.9
  }
}
```

---

## ⚙️ **Backend Integration**

### **🔄 n8n Workflow Configuration**
```javascript
// n8n node configuration for ElevenLabs
const voiceConfig = {
  voiceModel: "elevenlabs",
  "voice.ConnectionID": "{{ $('Voice Settings').item.json.connectionID }}",
  voiceID: "{{ $('Voice Settings').item.json.voiceID }}",
  speed: "{{ $('Voice Settings').item.json.speed }}"
};

// JSON2Video API call with ElevenLabs voice
const json2videoPayload = {
  template_id: templateId,
  variables: {
    ...sceneVariables,
    elevenLabsConnectionID: voiceConfig["voice.ConnectionID"],
    elevenLabsVoiceID: voiceConfig.voiceID,
    voiceSpeed: voiceConfig.speed
  }
};
```

---

## 🔐 **Authentication & Setup**

### **🔑 Required Credentials**
```javascript
// Frontend form fields
elevenLabsConfig: {
  apiKey: string,           // ElevenLabs API key
  connectionID: string,     // Connection identifier
  voiceID: string,         // Selected voice ID
  model: "elevenlabs"      // Fixed model type
}
```

### **✅ Connection Validation**
```javascript
// Test ElevenLabs connection
const validateElevenLabsConnection = async (config) => {
  try {
    const response = await fetch('https://api.elevenlabs.io/v1/voices', {
      headers: {
        'Authorization': `Bearer ${config.apiKey}`,
        'Content-Type': 'application/json'
      }
    });
    
    if (response.ok) {
      const voices = await response.json();
      return {
        valid: true,
        availableVoices: voices.voices
      };
    }
  } catch (error) {
    return {
      valid: false,
      error: error.message
    };
  }
};
```

---

## 🎯 **UI Form Configuration**

### **📋 Voice Provider Selection**
```html
<!-- Voice Provider Radio Buttons -->
<div class="voice-provider-selection">
  <input type="radio" id="azure" name="voiceProvider" value="azure" checked>
  <label for="azure">Azure Neural (Recommended)</label>
  
  <input type="radio" id="elevenlabs" name="voiceProvider" value="elevenlabs">
  <label for="elevenlabs">ElevenLabs (Premium)</label>
</div>

<!-- ElevenLabs Specific Fields -->
<div id="elevenlabs-config" style="display: none;">
  <label for="connectionID">Connection ID:</label>
  <input type="text" id="connectionID" placeholder="my-elevenlabs-connection">
  
  <label for="elevenLabsVoice">Voice Selection:</label>
  <select id="elevenLabsVoice">
    <option value="21m00Tcm4TlvDq8ikWAM">Rachel (Female, Natural)</option>
    <option value="ErXwobaYiN019PkySvjV">Antoni (Male, Well-rounded)</option>
    <option value="AZnzlk1XvdvUeBnXmlld">Domi (Female, Strong)</option>
    <!-- More options -->
  </select>
</div>
```

---

## 💰 **Cost Considerations**

### **💵 ElevenLabs Pricing**
```javascript
elevenLabsPricing: {
  free: {
    charactersPerMonth: 10000,
    costPerCharacter: 0,
    note: "Limited to 10k characters/month"
  },
  starter: {
    monthlyFee: 5,
    charactersPerMonth: 30000,
    costPerCharacter: 0.30,
    note: "Good for testing and small projects"
  },
  creator: {
    monthlyFee: 22,
    charactersPerMonth: 100000,
    costPerCharacter: 0.24,
    note: "Recommended for biblical video production"
  },
  pro: {
    monthlyFee: 99,
    charactersPerMonth: 500000,
    costPerCharacter: 0.18,
    note: "High-volume production"
  }
}
```

### **📊 Cost Comparison**
```javascript
// Per 4-minute biblical video (600 words ≈ 3000 characters)
costComparison: {
  azure: 0.02,           // Very low cost
  elevenLabs: 0.72,      // Creator plan (3000 * 0.24)
  qualityDifference: "ElevenLabs offers more natural, expressive voices"
}
```

---

## 🎵 **Voice Quality Guidelines**

### **📖 Best Voices for Biblical Content**

#### **🕊️ For Psalms & Worship**
- **Rachel (21m00Tcm4TlvDq8ikWAM)** - Natural, reverent
- **Bella (EXAVITQu4vr4xnSDxMaL)** - Soft, gentle

#### **📜 For Narrative Passages**
- **Antoni (ErXwobaYiN019PkySvjV)** - Well-rounded, engaging
- **Arnold (VR6AewLTigWG4xSOukaG)** - Authoritative, clear

#### **⚡ For Prophetic Content**
- **Domi (AZnzlk1XvdvUeBnXmlld)** - Strong, confident
- **Adam (pNInz6obpgDQGcFmaJgB)** - Deep, commanding

---

## 🔧 **Implementation Checklist**

### **✅ Setup Tasks**
- [ ] Create ElevenLabs account
- [ ] Generate API key
- [ ] Set up connection ID
- [ ] Test voice selection API
- [ ] Update JSON2Video templates
- [ ] Configure n8n workflows
- [ ] Add UI voice selector
- [ ] Implement cost tracking
- [ ] Test full integration
- [ ] Document voice guidelines

---

## 🎯 **Final Configuration Example**

### **🎬 Complete ElevenLabs Setup**
```json
{
  "voiceConfiguration": {
    "provider": "elevenlabs",
    "voiceModel": "elevenlabs",
    "voice.ConnectionID": "my-elevenlabs-connection",
    "voiceID": "21m00Tcm4TlvDq8ikWAM",
    "speed": 0.9,
    "apiKey": "your-elevenlabs-api-key"
  },
  "templateVariables": {
    "elevenLabsConnectionID": "my-elevenlabs-connection",
    "elevenLabsVoiceID": "21m00Tcm4TlvDq8ikWAM",
    "voiceSpeed": 0.9
  }
}
```

**🎤 RESULT**: Premium ElevenLabs voices integrated with your existing biblical video generation system, providing natural, expressive narration for professional-quality biblical content.**