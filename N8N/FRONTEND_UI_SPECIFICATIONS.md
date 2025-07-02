# 🖥️ Frontend UI Specifications - Bible Video Generator

**📋 Document Version**: `v1.0.0`  
**🔄 Last Updated**: June 26, 2025 at 9:56 PM  
**🎯 Purpose**: Complete specification for user-friendly frontend interface

---

## 🎯 **Core UI Requirements**

### **🎬 Primary Goal**
Create a simple, user-friendly frontend that hides all technical complexity while giving users full control over video generation parameters.

### **👤 Target User**
- **Non-technical content creators**
- **Church leaders and biblical educators**  
- **Video producers focused on biblical content**
- **Users who want professional results without backend complexity**

---

## 📝 **Essential UI Input Categories**

## 1. 📖 **Content Input Section**

### **🔤 Biblical Text Input**
```
Component: Large text area (textarea) with integrated processor
Label: "Biblical Text Content"
Placeholder: "Enter your biblical text here (Genesis 1:1-31, Psalm 23, etc.)"
Validation: 
  - Minimum 50 words
  - Maximum 2000 words (raw input)
  - Auto-processed to 1000 words optimal
  - Character count display
Features:
  - Auto-save draft
  - Word count display (raw vs processed)
  - Estimated video length preview
  - Sample text button (loads Psalm 23 example)
  - Built-in text processor (biblical_text_processor.py logic)
  - Real-time processing preview
  - Processing toggle (auto vs manual)
```

### **🔧 Built-in Text Processor**
```
Component: Integrated processing engine
Label: "Text Optimization"
Features:
  - Auto-clean biblical text (removes verse numbers, references)
  - Smart truncation to 1000 words maximum
  - Sentence-boundary preservation
  - Real-time word count and video length estimation
  - Processing preview with before/after comparison
  - Manual processing trigger button
  - Auto-processing toggle (on by default)
Processing Display:
  - Original word count: 1,234 words
  - Processed word count: 987 words  
  - Expected video length: 6.6 minutes
  - Expected scenes: 24 scenes
  - Status: "✅ Optimized for video generation"
```

### **📚 Content Type Selector**
```
Component: Radio buttons or dropdown
Options:
  ○ General Biblical Content (Standard presentation)
  ○ Black Hebrew Israelite (Culturally authentic representation)
  ○ Scale/General (Non-biblical content)
Default: General Biblical Content
```

---

## 2. 🎵 **Voice & Audio Settings**

### **🗣️ Voice Model Selection**
```
Component: Dropdown with audio preview
Label: "Narrator Voice"
Options:
  Azure Neural Voices:
  - "Aria (Female, Professional)" → en-US-AriaNeural
  - "Jenny (Female, Warm)" → en-US-JennyNeural  
  - "Guy (Male, Authoritative)" → en-US-GuyNeural
  - "Davis (Male, Deep)" → en-US-DavisNeural
  - "Ana (Female, Gentle)" → en-US-AnaNeural
  
  ElevenLabs Voices:
  - "Rachel (Female, Natural)" → 21m00Tcm4TlvDq8ikWAM
  - "Domi (Female, Strong)" → AZnzlk1XvdvUeBnXmlld
  - "Bella (Female, Soft)" → EXAVITQu4vr4xnSDxMaL
  - "Antoni (Male, Well-rounded)" → ErXwobaYiN019PkySvjV
  - "Arnold (Male, Crisp)" → VR6AewLTigWG4xSOukaG
  
Default: en-US-AriaNeural (most used in templates)
Features:
  - Audio preview button for each voice
  - Sample biblical text for preview
  - Provider grouping (Azure vs ElevenLabs)
```

### **⚡ Voice Speed Control**
```
Component: Slider with live preview
Label: "Narration Speed"
Range: 0.7 - 1.2
Default: 0.9
Display: 
  - 0.7-0.8: "Slow & Reverent"
  - 0.9-1.0: "Normal Pace" 
  - 1.1-1.2: "Faster Pace"
Features:
  - Real-time preview
  - Estimated video duration update
```

### **🎚️ Voice Model Provider**
```
Component: Dropdown (Advanced Settings)
Label: "Voice Provider"
Options:
  - "Azure Neural (Recommended)" → azure
  - "ElevenLabs (Premium)" → elevenlabs
  - "Google Cloud" → google
  - "Amazon Polly" → aws
Default: azure
Note: Hidden in basic mode, shown in advanced
```

---

## 3. 🎨 **Visual & Style Settings**

### **🖼️ Image Generation Model**
```
Component: Dropdown with quality indicators
Label: "Image Quality"
Options:
  - "Flux Pro (Highest Quality)" → flux-pro
  - "Flux Standard (Balanced)" → flux-standard  
  - "DALL-E 3 (Alternative)" → dalle-3
Default: flux-pro
Features:
  - Quality indicator (★★★★★)
  - Cost per image display
  - Sample image preview
```

### **🎭 Visual Style Preset**
```
Component: Image card selector
Label: "Visual Style"
Options:
  - "Biblical Realism" (photorealistic biblical scenes)
  - "Artistic Biblical" (painted/artistic style)
  - "Modern Biblical" (contemporary interpretation)
  - "Traditional Hebrew" (authentic cultural representation)
Default: Biblical Realism
Features:
  - Visual preview cards
  - Style description tooltips
```

### **🌈 Caption Styling**
```
Component: Visual editor with preview
Label: "Caption Appearance"
Settings:
  - Font: Arial, Times New Roman, Helvetica
  - Size: 60-100 (slider with preview)
  - Color: Color picker (default: #FFFF00 yellow)
  - Outline: On/Off toggle
  - Outline Width: 4-12 pixels
  - Outline Color: Color picker (default: black)
Default: Arial, Size 80, Yellow text, Black outline (8px)
```

---

## 4. 🔑 **API Configuration**

### **🤖 AI Processing Settings**
```
Component: Collapsible advanced section
Label: "AI Configuration"

Perplexity AI Settings:
  - API Key: Password field with validation
  - Model: Dropdown
    * "llama-3.1-sonar-large-128k-online" (Default)
    * "llama-3.1-sonar-huge-128k-online" 
    * "llama-3.1-sonar-small-128k-online"
  - Temperature: Slider 0.1-1.0 (Default: 0.7)
  - Max Tokens: Number input (Default: 5000)

JSON2Video Settings:
  - API Key: Password field with validation
  - Template ID: Text input with validation
  - Project ID: Text input (optional)

ElevenLabs Settings:
  - API Key: Password field with validation
  - Connection ID: Text input with validation
  - Voice Model: Dropdown selection
```

### **🔐 API Key Management**
```
Component: Secure credential manager
Features:
  - Encrypted storage
  - Test connection buttons
  - API usage tracking
  - Credit balance display
  - Auto-validation on input
Labels:
  - "Perplexity AI API Key"
  - "JSON2Video API Key"
  - "ElevenLabs API Key"
  - "Template ID"
  - "ElevenLabs Connection ID"
```

---

## 5. ⚙️ **Advanced Prompt Customization**

### **📝 Custom Prompt Editor**
```
Component: Expandable code editor
Label: "Custom AI Prompt (Advanced)"
Default: Load from workflow templates
Options:
  - "Use Default Prompt" (recommended)
  - "Customize Prompt" (shows editor)
Features:
  - Syntax highlighting
  - Variable placeholders highlighted
  - Reset to default button
  - Prompt preview with sample text
Variables Available:
  - {{inputText}} - The biblical content
  - {{contentType}} - General/BHI/Scale
  - {{visualStyle}} - Selected visual style
```

### **🎯 Scene Generation Settings**
```
Component: Advanced settings panel
Label: "Scene Control"
Settings:
  - Max Scenes: Number input (Default: 20)
  - Min Words per Scene: Number input (Default: 20)
  - Scene Duration: 
    * "Auto-calculated" (recommended)
    * "Fixed duration" with slider
  - Overlap Text: Toggle (combine short verses)
```

---

## 6. 📊 **Production Controls**

### **🎬 Video Output Settings**
```
Component: Settings panel
Label: "Video Output"
Settings:
  - Resolution: 
    * "Full HD (1920x1080)" → full-hd
    * "HD (1280x720)" → hd
    * "4K (3840x2160)" → 4k
  - Format: MP4 (fixed)
  - Quality: High (fixed)
Default: Full HD
```

### **📈 Production Tracking**
```
Component: Dashboard widgets
Displays:
  - Videos Generated Today: Counter
  - API Credits Remaining: Progress bars
  - Average Processing Time: Timer
  - Success Rate: Percentage
  - Cost per Video: Dollar amount
```

---

## 7. 🚀 **User Experience Features**

### **⚡ Quick Actions**
```
Components: Action buttons
- "Generate Video" (primary action)
- "Preview Settings" (test configuration)
- "Save as Template" (save current settings)
- "Load Template" (load saved settings)
- "Reset to Defaults" (clear all settings)
```

### **📋 Processing Status**
```
Component: Progress tracker
Stages:
  1. "Processing Biblical Text..." (AI analysis)
  2. "Generating Scenes..." (Scene creation)
  3. "Creating Images..." (Visual generation)
  4. "Adding Narration..." (Voice synthesis)
  5. "Finalizing Video..." (Video compilation)
  6. "Complete!" (Download ready)
Features:
  - Progress bar with percentage
  - Estimated time remaining
  - Cancel option
  - Error handling with retry
```

### **📱 Responsive Design**
```
Breakpoints:
  - Mobile: 320px-768px (simplified interface)
  - Tablet: 768px-1024px (condensed layout)
  - Desktop: 1024px+ (full interface)
Features:
  - Touch-friendly controls
  - Swipe gestures for mobile
  - Keyboard shortcuts for desktop
```

---

## 8. 💾 **Data Management**

### **📂 Project Management**
```
Component: Project organizer
Features:
  - Save current configuration as project
  - Load previous projects
  - Project templates (Psalm videos, Genesis series, etc.)
  - Export/Import settings
  - Project history with thumbnails
```

### **📊 Analytics Dashboard**
```
Component: Usage analytics
Displays:
  - Most used voice models
  - Average video length
  - Popular biblical passages
  - Cost tracking over time
  - API usage patterns
  - Success/failure rates
```

---

## 🔧 **Technical Implementation Requirements**

### **🏗️ Frontend Architecture**
```
Recommended Stack:
  - React.js or Vue.js (component-based UI)
  - Tailwind CSS (responsive styling)
  - Zustand/Pinia (state management)
  - Axios (API communication)
  - React Query (data fetching)
  - Framer Motion (animations)
```

### **🔐 Security Requirements**
```
Security Features:
  - Client-side API key encryption
  - Secure credential storage
  - Input validation and sanitization
  - Rate limiting protection
  - Session management
  - HTTPS enforcement
```

### **⚡ Performance Requirements**
```
Performance Targets:
  - Initial load: <3 seconds
  - Form interactions: <100ms
  - API calls: Progress indicators
  - Image previews: Lazy loading
  - Auto-save: Debounced (500ms)
  - Responsive: <16ms frame time
```

---

## 📋 **UI Layout Specification**

### **🎨 Main Interface Layout**
```
┌─────────────────────────────────────────────────┐
│ 🎬 Bible Video Generator                        │
├─────────────────────────────────────────────────┤
│ 📖 CONTENT INPUT & PROCESSING                   │
│ ┌─────────────────────────────────────────────┐ │
│ │ Biblical Text (large textarea)              │ │
│ │ Raw: 1,234 words | Processed: 987 words    │ │
│ │ Est. video: 6.6 min | Scenes: 24           │ │
│ └─────────────────────────────────────────────┘ │
│ [🔄 Auto-Process: ON] [⚙️ Process Settings]    │
│ Content Type: ○ General ● BHI ○ Scale           │
├─────────────────────────────────────────────────┤
│ 🎵 VOICE & AUDIO                               │
│ Voice: [Aria (Female) ▼] [🔊 Preview]          │
│ Speed: [====●====] 0.9 (Normal Pace)           │
├─────────────────────────────────────────────────┤
│ 🎨 VISUAL SETTINGS                             │
│ Quality: [Flux Pro ▼] Style: [Biblical ▼]     │
│ Captions: [Color] [Size] [Preview]             │
├─────────────────────────────────────────────────┤
│ ⚙️ ADVANCED (Collapsible)                      │
│ API Keys | Custom Prompts | Scene Control      │
├─────────────────────────────────────────────────┤
│ [🚀 Generate Video] [💾 Save Template]         │
└─────────────────────────────────────────────────┘
```

### **📱 Mobile Layout**
```
┌─────────────────────┐
│ 🎬 Bible Generator  │
├─────────────────────┤
│ 📖 Text Input       │
│ [Large textarea]    │
│ Words: 234          │
├─────────────────────┤
│ 🎵 Voice Settings   │
│ [Voice Dropdown]    │
│ [Speed Slider]      │
├─────────────────────┤
│ 🎨 Visual Settings  │
│ [Quality] [Style]   │
├─────────────────────┤
│ [Generate Video]    │
└─────────────────────┘
```

---

## 🎯 **User Journey Flow**

### **🚀 New User Flow**
```
1. Landing Page → "Create Your First Biblical Video"
2. Quick Setup → API keys with guided tutorial
3. Sample Content → Pre-loaded Psalm 23
4. Voice Selection → Audio previews
5. Generate → Watch progress
6. Download → Success celebration
7. Next Steps → Save template, create more
```

### **🔄 Returning User Flow**
```
1. Dashboard → Recent projects & templates
2. Quick Actions → "New Video" or "Load Template"
3. Content Input → Auto-save previous settings
4. One-Click Generate → Familiar interface
5. Background Processing → Continue other work
6. Notification → Video ready for download
```

---

## 📊 **Success Metrics**

### **🎯 User Experience Metrics**
```
Primary KPIs:
  - Time to First Video: <10 minutes
  - User Retention: >80% return within 7 days
  - Success Rate: >95% successful video generation
  - User Satisfaction: >4.5/5 rating
  - Support Tickets: <5% of users need help
```

### **⚡ Technical Metrics**
```
Performance KPIs:
  - Page Load Time: <3 seconds
  - Form Responsiveness: <100ms
  - API Success Rate: >99%
  - Error Recovery: <2% failed generations
  - Mobile Usability: >90% mobile completion rate
```

---

## 🔮 **Future Enhancement Ideas**

### **🚀 Phase 2 Features**
```
Advanced Features:
  - Batch video generation
  - Custom voice cloning
  - Multi-language support
  - Video series management
  - Social media integration
  - Collaborative editing
  - AI-powered content suggestions
```

### **📈 Scaling Features**
```
Enterprise Features:
  - Team collaboration
  - White-label branding
  - API access for developers
  - Advanced analytics
  - Custom model training
  - Enterprise security
  - SLA guarantees
```

---

**🎬 GOAL**: Transform complex backend workflows into a simple, powerful, user-friendly interface that anyone can use to create professional biblical videos in minutes, not hours.**