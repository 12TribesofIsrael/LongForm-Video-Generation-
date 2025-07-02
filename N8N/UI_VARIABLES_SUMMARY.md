# 📋 UI Variables Summary - All Configurable Inputs

**🎯 Purpose**: Complete list of all variables that need UI controls  
**🔄 Last Updated**: June 26, 2025 at 9:56 PM

---

## 🔑 **Critical Variables (Must Have UI Controls)**

### **📝 Content & Text**
```javascript
// Primary content input
inputText: string              // Raw biblical text content
processedText: string          // Auto-processed optimized text
contentType: "general" | "bhi" | "scale"  // Content type selector
wordCount: number             // Raw word count, display only
processedWordCount: number    // Processed word count, display only
estimatedDuration: number     // Auto-calculated from processed text
estimatedScenes: number       // Auto-calculated scene count
autoProcessing: boolean       // Enable/disable auto-processing
processingStatus: string      // Processing status display
```

### **🔧 Text Processing Engine**
```javascript
// Built-in biblical_text_processor.py functionality
textProcessor: {
  maxWords: number,           // Default 1000, configurable
  cleanText: boolean,         // Remove verse numbers/references
  preserveSentences: boolean, // Truncate at sentence boundaries
  autoFormat: boolean,        // Auto-format for video scenes
  realTimeProcessing: boolean // Process as user types
}
```

### **🎵 Voice & Audio**
```javascript
// Voice configuration
voiceModel: string            // "azure", "elevenlabs", "google", "aws"
voiceProvider: string         // "azure", "elevenlabs", "google", "aws"
voiceSpeed: number           // 0.7 - 1.2 (slider)
voiceGender: string          // "female", "male" (derived from model)
voiceStyle: string           // "professional", "warm", "authoritative"

// Azure Neural voices
azureVoiceID: string         // "en-US-AriaNeural", "en-US-JennyNeural", etc.

// ElevenLabs voices
elevenLabsConnectionID: string  // "my-elevenlabs-connection"
elevenLabsVoiceID: string      // "21m00Tcm4TlvDq8ikWAM", etc.
```

### **🎨 Visual & Styling**
```javascript
// Image generation
imageModel: string           // "flux-pro", "flux-standard", "dalle-3"
visualStyle: string          // "biblical-realism", "artistic", "modern"
imageQuality: string         // "highest", "high", "standard"

// Caption styling
captionFont: string          // "Arial", "Times New Roman", "Helvetica"
captionSize: number          // 60-100 (slider)
captionColor: string         // "#FFFF00" (color picker)
captionOutline: boolean      // true/false (toggle)
captionOutlineWidth: number  // 4-12 pixels (slider)
captionOutlineColor: string  // "#000000" (color picker)
```

### **🔑 API Configuration**
```javascript
// API credentials
perplexityApiKey: string     // Secure password field
json2videoApiKey: string     // Secure password field
templateId: string           // Template ID input
projectId: string            // Optional project ID

// ElevenLabs configuration
elevenLabsApiKey: string     // Secure password field
elevenLabsConnectionID: string  // Connection ID for ElevenLabs

// AI model settings
aiModel: string              // "llama-3.1-sonar-large-128k-online"
temperature: number          // 0.1-1.0 (slider, default 0.7)
maxTokens: number           // Number input (default 5000)
```

---

## ⚙️ **Advanced Variables (Collapsible/Advanced Mode)**

### **📝 Prompt Customization**
```javascript
// Custom prompt settings
useCustomPrompt: boolean     // Toggle: default vs custom
customPromptText: string     // Large text editor
promptVariables: object      // Available variables for prompt
```

### **🎬 Scene Control**
```javascript
// Scene generation settings
maxScenes: number           // Default 20, number input
minWordsPerScene: number    // Default 20, number input
sceneDuration: string       // "auto" or "fixed"
fixedSceneDuration: number  // If fixed duration selected
combineShortVerses: boolean // Toggle for text overlap
```

### **🎥 Video Output**
```javascript
// Output settings
videoResolution: string     // "full-hd", "hd", "4k"
videoFormat: string         // "mp4" (fixed)
videoQuality: string        // "high" (fixed)
```

---

## 📊 **Display-Only Variables (No UI Controls)**

### **📈 Status & Metrics**
```javascript
// Processing status
processingStage: string     // Current processing step
progressPercentage: number  // 0-100 progress
estimatedTimeRemaining: number  // Minutes remaining
errorMessage: string        // Error details if failed

// Usage tracking
videosGeneratedToday: number
apiCreditsRemaining: object  // Per service
successRate: number         // Percentage
costPerVideo: number        // Dollar amount
averageProcessingTime: number  // Minutes
```

---

## 🎯 **Voice Model Options (Dropdown Values)**

### **🗣️ Available Voice Models**
```javascript
voiceOptions: [
  // Azure Neural Voices
  {
    id: "en-US-AriaNeural",
    label: "Aria (Female, Professional)",
    gender: "female",
    style: "professional",
    provider: "azure",
    voiceModel: "azure"
  },
  {
    id: "en-US-JennyNeural", 
    label: "Jenny (Female, Warm)",
    gender: "female",
    style: "warm",
    provider: "azure",
    voiceModel: "azure"
  },
  {
    id: "en-US-GuyNeural",
    label: "Guy (Male, Authoritative)", 
    gender: "male",
    style: "authoritative",
    provider: "azure",
    voiceModel: "azure"
  },
  {
    id: "en-US-DavisNeural",
    label: "Davis (Male, Deep)",
    gender: "male", 
    style: "deep",
    provider: "azure",
    voiceModel: "azure"
  },
  {
    id: "en-US-AnaNeural",
    label: "Ana (Female, Gentle)",
    gender: "female",
    style: "gentle", 
    provider: "azure",
    voiceModel: "azure"
  },
  
  // ElevenLabs Voices
  {
    id: "21m00Tcm4TlvDq8ikWAM",
    label: "Rachel (Female, Natural)",
    gender: "female",
    style: "natural",
    provider: "elevenlabs",
    voiceModel: "elevenlabs",
    connectionID: "my-elevenlabs-connection"
  },
  {
    id: "AZnzlk1XvdvUeBnXmlld",
    label: "Domi (Female, Strong)",
    gender: "female", 
    style: "strong",
    provider: "elevenlabs",
    voiceModel: "elevenlabs",
    connectionID: "my-elevenlabs-connection"
  },
  {
    id: "EXAVITQu4vr4xnSDxMaL",
    label: "Bella (Female, Soft)",
    gender: "female",
    style: "soft", 
    provider: "elevenlabs",
    voiceModel: "elevenlabs",
    connectionID: "my-elevenlabs-connection"
  },
  {
    id: "ErXwobaYiN019PkySvjV",
    label: "Antoni (Male, Well-rounded)",
    gender: "male",
    style: "well-rounded",
    provider: "elevenlabs", 
    voiceModel: "elevenlabs",
    connectionID: "my-elevenlabs-connection"
  },
  {
    id: "VR6AewLTigWG4xSOukaG",
    label: "Arnold (Male, Crisp)",
    gender: "male",
    style: "crisp",
    provider: "elevenlabs",
    voiceModel: "elevenlabs", 
    connectionID: "my-elevenlabs-connection"
  }
]
```

---

## 🤖 **AI Model Options (Dropdown Values)**

### **🧠 Perplexity AI Models**
```javascript
aiModelOptions: [
  {
    id: "llama-3.1-sonar-large-128k-online",
    label: "Llama 3.1 Large (Recommended)",
    description: "Best balance of quality and speed",
    costPer1000: 0.002
  },
  {
    id: "llama-3.1-sonar-huge-128k-online", 
    label: "Llama 3.1 Huge (Highest Quality)",
    description: "Maximum quality, slower processing",
    costPer1000: 0.005
  },
  {
    id: "llama-3.1-sonar-small-128k-online",
    label: "Llama 3.1 Small (Fastest)",
    description: "Faster processing, good quality",
    costPer1000: 0.001
  }
]
```

---

## 🖼️ **Image Model Options (Dropdown Values)**

### **🎨 Image Generation Models**
```javascript
imageModelOptions: [
  {
    id: "flux-pro",
    label: "Flux Pro (Highest Quality)",
    stars: 5,
    costPerImage: 0.055,
    description: "Professional photorealistic images"
  },
  {
    id: "flux-standard",
    label: "Flux Standard (Balanced)", 
    stars: 4,
    costPerImage: 0.025,
    description: "Good quality, faster generation"
  },
  {
    id: "dalle-3",
    label: "DALL-E 3 (Alternative)",
    stars: 4,
    costPerImage: 0.040,
    description: "Creative alternative style"
  }
]
```

---

## 📱 **UI State Management**

### **💾 Form State**
```javascript
// UI state variables
isAdvancedMode: boolean     // Show/hide advanced settings
isProcessing: boolean       // Currently generating video
isDirty: boolean           // Unsaved changes
lastSaved: timestamp       // Auto-save tracking
currentTab: string         // Active settings tab
```

### **🔄 Auto-Save Data**
```javascript
// Data to auto-save
userSettings: {
  voiceModel: string,
  voiceSpeed: number,
  imageModel: string,
  captionStyle: object,
  apiKeys: object          // Encrypted
}

recentProjects: [
  {
    id: string,
    name: string,
    content: string,
    settings: object,
    createdAt: timestamp,
    thumbnail: string
  }
]
```

---

## 🎯 **Default Values**

### **⚙️ Recommended Defaults**
```javascript
defaultSettings = {
  // Voice & Audio
  voiceModel: "en-US-AriaNeural",
  voiceSpeed: 0.9,
  voiceProvider: "azure",
  
  // Visual
  imageModel: "flux-pro",
  visualStyle: "biblical-realism",
  
  // Captions
  captionFont: "Arial",
  captionSize: 80,
  captionColor: "#FFFF00",
  captionOutline: true,
  captionOutlineWidth: 8,
  captionOutlineColor: "#000000",
  
  // AI Settings
  aiModel: "llama-3.1-sonar-large-128k-online",
  temperature: 0.7,
  maxTokens: 5000,
  
  // Scene Control
  maxScenes: 20,
  minWordsPerScene: 20,
  sceneDuration: "auto",
  combineShortVerses: true,
  
  // Output
  videoResolution: "full-hd",
  contentType: "general"
}
```

---

## 🔧 **Implementation Priority**

### **🚀 Phase 1 (MVP)**
1. **inputText** - Biblical content input
2. **processedText** - Auto-processed optimized text
3. **autoProcessing** - Enable/disable text processing
4. **voiceModel** - Voice selection dropdown (Azure/ElevenLabs)
5. **voiceSpeed** - Speed slider
6. **contentType** - General/BHI/Scale selector
7. **perplexityApiKey** - API key input
8. **json2videoApiKey** - API key input
9. **templateId** - Template ID input
10. **elevenLabsApiKey** - ElevenLabs API key (if using ElevenLabs)
11. **elevenLabsConnectionID** - ElevenLabs connection ID

### **⚡ Phase 2 (Enhanced)**
12. **maxWords** - Text processor word limit (configurable)
13. **imageModel** - Image quality selection
14. **captionColor/Size** - Caption styling
15. **customPromptText** - Prompt customization
16. **maxScenes** - Scene control
17. **videoResolution** - Output quality

### **🎯 Phase 3 (Advanced)**
18. **temperature** - AI creativity control
19. **visualStyle** - Style presets
20. **projectManagement** - Save/load projects
21. **analytics** - Usage tracking

---

**🎬 RESULT**: 47 total configurable variables identified, with 7 critical variables for MVP and full specification for production-ready frontend interface.** 