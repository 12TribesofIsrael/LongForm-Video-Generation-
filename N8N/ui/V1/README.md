# 🖥️ **V1 Frontend - Bible Video Generator**

**🔄 Last Updated**: July 28, 2025

**🎯 Professional React TypeScript Interface for Biblical Video Generation**

[![React](https://img.shields.io/badge/React-18.3.1-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.2-purple)](https://vitejs.dev/)
[![Tailwind](https://img.shields.io/badge/Tailwind-3.4.1-cyan)](https://tailwindcss.com/)
[![Live Demo](https://img.shields.io/badge/Live%20Demo-Available-green)](https://superb-brioche-7a2e90.netlify.app/)

---

## 🚀 **Live Demo**

**🌐 Try it now**: [https://superb-brioche-7a2e90.netlify.app/](https://superb-brioche-7a2e90.netlify.app/)

---

## 🎯 **Features Overview**

### **✨ Core Functionality**
- **📝 Smart Text Processing**: Real-time word count, duration estimates, and scene calculations
- **🎵 Voice Settings**: ElevenLabs integration with premium voice selection
- **🎨 Visual Settings**: Biblical realism styles with professional caption options
- **⚙️ Advanced Controls**: Template management and n8n webhook integration
- **📊 Progress Tracking**: 6-stage generation pipeline with real-time updates
- **💰 Cost Calculator**: Dynamic pricing based on content length and services

### **🎨 User Experience**
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Professional UI**: Clean, modern interface with intuitive navigation
- **Real-time Feedback**: Instant updates on word count, costs, and timing
- **Sample Integration**: Built-in biblical text samples (Psalm 23, John 3:16)
- **Template System**: Save and load custom configurations

---

## 🛠️ **Tech Stack**

### **Frontend Framework**
- **React 18.3.1**: Latest React with concurrent features
- **TypeScript 5.5.3**: Full type safety and better development experience
- **Vite 5.4.2**: Lightning-fast build tool and development server

### **Styling & UI**
- **Tailwind CSS 3.4.1**: Utility-first CSS framework
- **Lucide React**: Beautiful, customizable icons
- **Custom Components**: Modular, reusable component architecture

### **Development Tools**
- **ESLint**: Code quality and consistency
- **PostCSS**: CSS processing and optimization
- **Autoprefixer**: Cross-browser compatibility

---

## 📦 **Project Structure**

```
V1/project/
├── src/
│   ├── components/          # Modular component architecture
│   │   ├── Header.tsx       # Navigation and branding
│   │   ├── TextInput.tsx    # Biblical text processing
│   │   ├── ContentTypeSelector.tsx
│   │   ├── VoiceSettings.tsx
│   │   ├── VisualSettings.tsx
│   │   ├── AdvancedSettings.tsx
│   │   ├── GenerationControls.tsx
│   │   └── ProgressTracker.tsx
│   ├── App.tsx             # Main application logic
│   └── main.tsx           # Entry point
├── public/                 # Static assets
├── package.json           # Dependencies and scripts
└── README.md             # This file
```

---

## 🚀 **Quick Start**

### **Prerequisites**
- **Node.js**: Version 16 or higher
- **npm**: Package manager

### **Installation & Setup**

1. **Navigate to the project directory:**
   ```bash
   cd "LongForm-Video-Generation-/N8N/ui/V1/project"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173/`

### **Available Scripts**
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

---

## 🎨 **Component Architecture**

### **📝 TextInput Component**
- **Real-time Processing**: Word count, duration estimates, scene calculations
- **Auto-processing Toggle**: Smart text optimization
- **Sample Integration**: Built-in biblical text samples
- **Smart Analytics**: 150 words/minute narration, 1 scene per 40 words

### **🎵 VoiceSettings Component**
- **Provider Selection**: ElevenLabs integration
- **Voice Options**: Premium voice selection (bella-premium default)
- **Speed Control**: Adjustable narration speed (0.9 default)
- **Real-time Preview**: Voice characteristics display

### **🎨 VisualSettings Component**
- **Image Quality**: Flux-pro quality settings
- **Visual Style**: Biblical realism with cultural authenticity
- **Caption Settings**: Professional yellow captions with black outline
- **Customization**: Size and color controls

### **⚙️ GenerationControls Component**
- **Cost Calculation**: Dynamic pricing based on content length
- **Template Management**: Save/load custom configurations
- **n8n Integration**: Webhook testing and connection status
- **File Operations**: Import/export functionality

### **📊 ProgressTracker Component**
- **6-Stage Pipeline**: Visual progress tracking
- **Real-time Updates**: Live status indicators
- **Error Handling**: Graceful error recovery
- **Animation**: Smooth transitions and loading states

---

## 🔧 **Configuration**

### **Default Settings**
```typescript
// Content Type
contentType: 'black-hebrew'

// Voice Settings
voiceProvider: 'elevenlabs'
selectedVoice: 'bella-premium'
voiceSpeed: 0.9

// Visual Settings
imageQuality: 'flux-pro'
visualStyle: 'biblical-realism'
captionSettings: {
  enabled: true,
  size: 80,
  color: '#FFD700'
}
```

### **Cost Structure**
- **Perplexity AI**: $0.15 (scene generation)
- **ElevenLabs**: $0.50-$2.50 (voice synthesis, based on word count)
- **JSON2Video**: $1.00 (video rendering)
- **Total**: ~$1.27 per video

---

## 🎯 **Usage Guide**

### **1. Text Input**
- Paste or type biblical text
- Enable auto-processing for optimization
- Use sample texts for quick testing
- Monitor real-time word count and estimates

### **2. Content Configuration**
- Select content type (black-hebrew default)
- Choose voice provider and settings
- Configure visual style and captions
- Adjust advanced settings as needed

### **3. Generation Process**
- Review cost and time estimates
- Test n8n connection if needed
- Start generation process
- Monitor 6-stage progress pipeline

### **4. Template Management**
- Save current configuration as template
- Load previously saved templates
- Export/import template files
- Organize templates by use case

---

## 🔗 **Integration Points**

### **n8n Workflow Integration**
- **Webhook Testing**: Verify n8n connection
- **Status Endpoints**: Monitor generation progress
- **Download Endpoints**: Retrieve completed videos
- **Error Handling**: Graceful failure recovery

### **API Services**
- **Perplexity AI**: Scene generation and text processing
- **ElevenLabs**: Voice synthesis and narration
- **JSON2Video**: Video rendering and effects
- **Custom Backend**: Template management and storage

---

## 🚀 **Deployment**

### **Local Development**
```bash
npm run dev
# Access at http://localhost:5173/
```

### **Production Build**
```bash
npm run build
# Output in dist/ directory
```

### **Netlify Deployment**
- Connected to GitHub repository
- Automatic deployments on push
- Live demo available at provided URL

---

## 📚 **Documentation**

### **Related Documentation**
- **Main Platform**: [../README.md](../README.md)
- **Production Guide**: [../../PRODUCTION_USER_GUIDE.md](../../PRODUCTION_USER_GUIDE.md)
- **System Architecture**: [../../SYSTEM_ARCHITECTURE.md](../../SYSTEM_ARCHITECTURE.md)

### **Component Documentation**
Each component includes:
- TypeScript interfaces
- Props documentation
- Usage examples
- Integration guidelines

---

## 🤝 **Contributing**

### **Development Guidelines**
- Follow TypeScript best practices
- Use Tailwind CSS for styling
- Maintain component modularity
- Add proper error handling
- Include TypeScript interfaces

### **Code Quality**
- ESLint configuration included
- TypeScript strict mode enabled
- Component prop validation
- Responsive design principles

---

## 📞 **Support**

### **Getting Help**
- **Live Demo**: [https://superb-brioche-7a2e90.netlify.app/](https://superb-brioche-7a2e90.netlify.app/)
- **Main Documentation**: [../../DOCUMENTATION_INDEX.md](../../DOCUMENTATION_INDEX.md)
- **Production Guide**: [../../PRODUCTION_USER_GUIDE.md](../../PRODUCTION_USER_GUIDE.md)

### **Known Issues**
- Browserslist warning (non-critical)
- Some npm audit warnings (development dependencies)

---

**🎬 Welcome to the future of biblical video creation! This modern frontend provides a professional, user-friendly interface for creating high-quality biblical content with AI automation.**

**All documentation current as of July 28, 2025.** 