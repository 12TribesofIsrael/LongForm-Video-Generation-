# 🎨 Genspark UI Design Prompt - Bible Video Generator Frontend

**📋 Document Version**: `v1.0.0`  
**🔄 Last Updated**: June 26, 2025 at 9:56 PM  
**🎯 Purpose**: Complete design prompt for Genspark frontend development

---

## 🎬 **PROJECT OVERVIEW**

**App Name**: Bible Video Generator  
**Purpose**: Professional biblical video creation platform that transforms biblical text into high-quality videos with AI-generated visuals, premium voice narration, and professional captions.

**Target Users**: Church leaders, biblical educators, content creators, and video producers who want to create professional biblical videos without technical expertise.

**Core Value Proposition**: Generate 4-7 minute professional biblical videos in 8-13 minutes with word-for-word biblical accuracy, premium voice narration, and AI-generated imagery.

---

## 🎯 **DESIGN BRIEF FOR GENSPARK**

### **Create a modern, professional web application interface for a Bible Video Generator with the following specifications:**

## 📱 **OVERALL DESIGN REQUIREMENTS**

### **🎨 Design Style**
- **Theme**: Clean, modern, professional with subtle biblical/spiritual elements
- **Color Palette**: 
  - Primary: Deep blue (#1976D2) for trust and spirituality
  - Secondary: Gold/yellow (#FFD700) for divine elements
  - Accent: Green (#4CAF50) for success states
  - Background: Light gray (#F8F9FA) with white content areas
  - Text: Dark gray (#333333) for readability
- **Typography**: 
  - Headers: Modern sans-serif (Inter, Roboto)
  - Body text: Clean, readable font
  - Biblical text: Serif font (Georgia, Times) for reverence
- **Visual Elements**: Subtle religious iconography, professional gradients, clean shadows
- **Responsive**: Mobile-first design, works on all devices

### **🖥️ MAIN INTERFACE LAYOUT**

```
┌─────────────────────────────────────────────────────────────┐
│ 🎬 Bible Video Generator                    [⚙️] [👤] [❓]   │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  📖 BIBLICAL TEXT INPUT & PROCESSING                       │
│  ┌─────────────────────────────────────────────────────────┐ │
│  │ [Large textarea with biblical text styling]            │ │
│  │ "Enter your biblical text here..."                     │ │
│  │                                                         │ │
│  │ Raw: 1,234 words → Processed: 987 words               │ │
│  │ 📊 Est. video: 6.6 min | 🎬 Scenes: 24               │ │
│  └─────────────────────────────────────────────────────────┘ │
│                                                             │
│  [🔄 Auto-Process: ON] [⚙️ Process Settings] [📋 Sample]   │
│  Content Type: ○ General ● Black Hebrew Israelite ○ Scale  │
│                                                             │
│  🎵 VOICE & AUDIO SETTINGS                                 │
│  ┌─────────────────────────────────────────────────────────┐ │
│  │ Voice Provider: ○ Azure Neural ● ElevenLabs            │ │
│  │ Voice: [Rachel (Female, Natural) ▼] [🔊 Preview]       │ │
│  │ Speed: [████████●═══] 0.9 (Normal Pace)               │ │
│  └─────────────────────────────────────────────────────────┘ │
│                                                             │
│  🎨 VISUAL & STYLE SETTINGS                                │
│  ┌─────────────────────────────────────────────────────────┐ │
│  │ Image Quality: [Flux Pro ★★★★★ ▼]                     │ │
│  │ Visual Style: [Biblical Realism ▼]                     │ │
│  │ Captions: [🟡] Size: [80] [👁️ Preview]               │ │
│  └─────────────────────────────────────────────────────────┘ │
│                                                             │
│  ⚙️ ADVANCED SETTINGS (Collapsible)                       │
│  [📝 API Keys] [🤖 Custom Prompts] [🎛️ Scene Control]     │
│                                                             │
│  ┌─────────────────────────────────────────────────────────┐ │
│  │ [🚀 GENERATE VIDEO] [💾 Save Template] [📤 Export]     │ │
│  └─────────────────────────────────────────────────────────┘ │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## 🔧 **DETAILED COMPONENT SPECIFICATIONS**

### **1. 📖 Biblical Text Input Section**
```
Design Requirements:
- Large, prominent textarea (min 300px height)
- Biblical text styling with serif font
- Real-time word count display
- Processing metrics in colored badges
- Auto-save indicator
- Sample text button with biblical examples

Features to Include:
- Character/word counter with color coding
- Processing status indicator (✅ Optimized, ⚠️ Too Long, etc.)
- Estimated video metrics (duration, scenes)
- Before/after processing comparison
- Drag-and-drop file upload capability
```

### **2. 🔄 Text Processing Controls**
```
Design Requirements:
- Toggle switch for auto-processing (prominent, green when ON)
- Settings button that opens modal/sidebar
- Sample text dropdown with biblical passages
- Processing status with visual indicators

Processing Settings Modal:
- Maximum words slider (500-2000)
- Text cleaning options (checkboxes)
- Sentence preservation toggle
- Preview of processed text
```

### **3. 📻 Content Type Selector**
```
Design Requirements:
- Radio button cards with descriptions
- Visual icons for each type
- Clear labeling and help text

Options:
○ General Biblical Content
  "Standard biblical presentation for all audiences"
  
● Black Hebrew Israelite  
  "Culturally authentic representation with melanated imagery"
  
○ Scale/General
  "Non-biblical content for general video creation"
```

### **4. 🎵 Voice & Audio Settings**
```
Design Requirements:
- Provider selection with radio buttons
- Voice dropdown with audio preview buttons
- Speed slider with descriptive labels
- Visual waveform or audio icon

Voice Selection:
- Grouped by provider (Azure Neural vs ElevenLabs)
- Gender and style indicators
- Audio preview buttons (🔊)
- Quality/cost indicators for ElevenLabs
```

### **5. 🎨 Visual & Style Settings**
```
Design Requirements:
- Image quality dropdown with star ratings
- Visual style cards with preview images
- Caption editor with live preview
- Color picker for caption styling

Features:
- Quality indicators (★★★★★)
- Cost per image display
- Style preview thumbnails
- Caption preview with biblical text sample
```

### **6. 🔐 API Configuration (Advanced)**
```
Design Requirements:
- Collapsible section (hidden by default)
- Secure password fields with show/hide toggle
- Connection test buttons with status indicators
- Credit/usage display for each service

Layout:
- Tabbed interface for different APIs
- Visual connection status (🟢 Connected, 🔴 Error)
- Usage meters for API credits
- Help links for API setup
```

### **7. 📊 Processing Status & Progress**
```
Design Requirements:
- Multi-stage progress bar
- Current stage highlighting
- Time estimates for each stage
- Cancel/retry options

Progress Stages:
1. 🔄 Processing Biblical Text...
2. 🎭 Generating Scenes...
3. 🖼️ Creating Images...
4. 🎵 Adding Narration...
5. 🎬 Finalizing Video...
6. ✅ Complete!
```

---

## 📱 **RESPONSIVE DESIGN SPECIFICATIONS**

### **Desktop (1024px+)**
```
- Full three-column layout
- Sidebar for settings
- Large text input area
- All controls visible
- Advanced features accessible
```

### **Tablet (768px-1024px)**
```
- Two-column layout
- Collapsible sidebar
- Medium text input area
- Essential controls visible
- Advanced settings in modal
```

### **Mobile (320px-768px)**
```
- Single column layout
- Stacked components
- Touch-friendly controls
- Swipe gestures for navigation
- Simplified interface
```

---

## 🎨 **VISUAL DESIGN ELEMENTS**

### **🎯 Key Visual Components**
```
1. Hero Section:
   - Professional gradient background
   - Clear value proposition
   - "Create Your First Biblical Video" CTA

2. Input Section:
   - Clean white card with subtle shadow
   - Biblical text styling (serif font)
   - Real-time metrics dashboard

3. Settings Panels:
   - Organized in logical groups
   - Clear visual hierarchy
   - Consistent spacing and typography

4. Action Buttons:
   - Primary: Large "Generate Video" button (blue gradient)
   - Secondary: Save, Export, Settings (outlined)
   - Destructive: Cancel, Reset (red accent)

5. Status Indicators:
   - Success: Green with checkmark
   - Warning: Yellow with exclamation
   - Error: Red with X
   - Processing: Blue with spinner
```

### **🎨 Color Usage Guidelines**
```
Primary Blue (#1976D2):
- Main CTA buttons
- Active states
- Progress indicators

Gold/Yellow (#FFD700):
- Caption preview
- Premium features
- Success highlights

Green (#4CAF50):
- Success states
- Auto-processing toggle
- Completion indicators

Gray Scale:
- #F8F9FA: Background
- #E9ECEF: Card borders
- #6C757D: Secondary text
- #333333: Primary text
```

---

## 🔧 **INTERACTIVE FEATURES**

### **🎮 User Interactions**
```
1. Real-time Text Processing:
   - Debounced input processing
   - Live word count updates
   - Instant video length estimates

2. Voice Preview:
   - Audio samples for each voice
   - Play/pause controls
   - Volume adjustment

3. Caption Preview:
   - Live preview of caption styling
   - Sample biblical text overlay
   - Font size and color adjustments

4. Settings Management:
   - Auto-save user preferences
   - Template saving/loading
   - Export/import configurations

5. Progress Tracking:
   - Real-time progress updates
   - Stage-by-stage completion
   - Error handling with retry options
```

### **🎯 Micro-interactions**
```
- Smooth transitions between states
- Hover effects on interactive elements
- Loading animations for processing
- Success celebrations on completion
- Gentle error state animations
```

---

## 📋 **FUNCTIONAL REQUIREMENTS**

### **🔄 Core Workflow**
```
1. User Input:
   - Paste/type biblical text
   - Auto-processing kicks in
   - Real-time metrics update

2. Configuration:
   - Select voice and style options
   - Adjust processing settings
   - Preview configurations

3. Generation:
   - Click "Generate Video"
   - Monitor progress stages
   - Handle errors gracefully

4. Completion:
   - Download video
   - Save configuration
   - Start next video
```

### **💾 Data Management**
```
- Auto-save drafts every 30 seconds
- Local storage for user preferences
- Session persistence across browser refreshes
- Export/import functionality for settings
```

---

## 🎯 **USER EXPERIENCE PRIORITIES**

### **🚀 Primary Goals**
```
1. Simplicity: Non-technical users can create videos easily
2. Speed: 8-13 minutes from text to finished video
3. Quality: Professional results with biblical accuracy
4. Reliability: 95%+ success rate with clear error handling
5. Accessibility: Works on all devices and browsers
```

### **📊 Success Metrics**
```
- Time to first video: <10 minutes
- User completion rate: >90%
- Error recovery rate: >95%
- Mobile usability: >85% completion on mobile
- User satisfaction: >4.5/5 rating
```

---

## 🛠️ **TECHNICAL SPECIFICATIONS**

### **🏗️ Frontend Stack**
```
Framework: React.js with TypeScript
Styling: Tailwind CSS + Custom Components
State Management: Zustand or Context API
HTTP Client: Axios with React Query
UI Components: Headless UI or Radix UI
Icons: Heroicons or Lucide React
Animations: Framer Motion
```

### **📱 Browser Support**
```
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)
```

---

## 🎨 **DESIGN INSPIRATION REFERENCES**

### **🎯 Style References**
```
Look and Feel Similar To:
- Notion (clean, professional interface)
- Figma (intuitive design tools)
- Canva (user-friendly content creation)
- Loom (simple video creation workflow)

But With:
- Biblical/spiritual design elements
- Professional video production feel
- Enterprise-grade reliability
- Educational technology aesthetics
```

### **🎨 Visual Inspiration**
```
- Clean, modern SaaS application design
- Subtle religious iconography (crosses, doves, scrolls)
- Professional video editing software UI
- Educational platform interfaces
- Content creation tool aesthetics
```

---

## 📋 **IMPLEMENTATION CHECKLIST**

### **✅ Phase 1: Core Interface**
- [ ] Main layout with responsive design
- [ ] Biblical text input with processing
- [ ] Voice selection with preview
- [ ] Basic visual settings
- [ ] Generate video workflow

### **✅ Phase 2: Advanced Features**
- [ ] API configuration interface
- [ ] Advanced processing settings
- [ ] Template management
- [ ] Progress tracking
- [ ] Error handling

### **✅ Phase 3: Polish & Optimization**
- [ ] Micro-interactions and animations
- [ ] Performance optimization
- [ ] Accessibility improvements
- [ ] Mobile experience refinement
- [ ] User testing and iteration

---

## 🎯 **SPECIFIC GENSPARK INSTRUCTIONS**

**Create a modern, professional web application for biblical video generation with:**

1. **Clean, intuitive interface** that non-technical users can navigate easily
2. **Real-time text processing** with visual feedback and metrics
3. **Professional voice selection** with audio previews and provider options
4. **Visual customization tools** for captions and styling
5. **Progressive workflow** from text input to video generation
6. **Mobile-responsive design** that works on all devices
7. **Professional aesthetics** suitable for church and educational use

**Key Features to Implement:**
- Large biblical text input area with auto-processing
- Voice provider selection (Azure Neural vs ElevenLabs)
- Real-time metrics (word count, video length, scenes)
- Caption styling with live preview
- Processing progress tracking
- Template saving and management

**Design Priority:** Create an interface that makes professional biblical video creation accessible to everyone, regardless of technical expertise.

**🎬 RESULT GOAL**: A beautiful, functional frontend that transforms complex backend workflows into a simple, powerful user experience for creating professional biblical videos.**