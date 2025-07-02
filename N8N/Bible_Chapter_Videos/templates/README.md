# 🎨 Template Variations Collection

**📋 Purpose**: JSON2Video template variations and customizations for Bible Chapter Video Generator  
**🔄 Last Updated**: June 27, 2025  
**📁 Directory Status**: Ready for template variations

---

## 🎯 **Template Management**

### **🎬 Active Production Template**
- **Location**: `BibleChapterTemplate.json` (parent directory)
- **Scenes**: 20 scenes with dynamic duration
- **Resolution**: Full HD (1920x1080)
- **Status**: ✅ Production Ready

### **📋 Template Specifications**
```json
{
  "templateName": "Bible Chapter Generator",
  "version": "v2.1.0",
  "scenes": 20,
  "maxDuration": "30 minutes",
  "voiceModel": "azure",
  "captionStyle": "yellow, size 80, black outline"
}
```

### **🎬 Template Variable Examples**

#### **Scene Configuration Pattern**
```json
{
  "variables": {
    "scene1_voiceOverText": "In the beginning God created the heavens and the earth...",
    "scene1_overlaidText": "God Creates", 
    "scene1_imagePrompt": "Majestic cosmic scene showing the creation of the universe, swirling galaxies and stars forming, divine light breaking through darkness, cinematic lighting, photorealistic, 8K quality",
    
    "scene2_voiceOverText": "Now the earth was formless and empty...",
    "scene2_overlaidText": "Formless Earth",
    "scene2_imagePrompt": "Primordial earth floating in space, dark and formless, covered with deep waters, mysterious atmosphere, cinematic shot, award-winning photography"
  }
}
```

#### **Voice & Caption Settings**
```json
{
  "voiceSettings": {
    "voice": "en-US-AriaNeural",
    "speed": 0.9,
    "pitch": "medium",
    "volume": 100
  },
  "captionSettings": {
    "font": "Arial",
    "size": 80,
    "color": "#FFFF00",
    "outlineColor": "#000000",
    "outlineWidth": 8,
    "position": "bottom-center"
  }
}
```

#### **Dynamic Scene Structure**
```json
{
  "scenes": [
    {
      "id": "scene1_biblical",
      "duration": "auto",
      "elements": [
        {
          "type": "image",
          "src": "{{ generated_image }}",
          "prompt": "{{ scene1_imagePrompt }}",
          "duration": "auto"
        },
        {
          "type": "voice",
          "text": "{{ scene1_voiceOverText }}",
          "voice": "en-US-AriaNeural",
          "speed": 0.9
        },
        {
          "type": "text",
          "text": "{{ scene1_overlaidText }}",
          "style": {
            "fontSize": 80,
            "color": "#FFFF00",
            "stroke": "#000000"
          }
        }
      ]
    }
  ]
}
```

---

## 🎨 **Template Variations** (Future Development)

### **📚 Content-Specific Templates**

#### **1. Short Verses Template** (`short-verses-template.json`)
- **Scenes**: 5-8 scenes
- **Duration**: 1-3 minutes
- **Use Case**: Psalms, Proverbs, short passages
- **Caption Style**: Larger font (size 90) for emphasis

#### **2. Narrative Template** (`narrative-template.json`)
- **Scenes**: 15-25 scenes
- **Duration**: 8-15 minutes
- **Use Case**: Genesis stories, historical accounts
- **Visual Style**: Cinematic storytelling focus

#### **3. Teaching Template** (`teaching-template.json`)
- **Scenes**: 10-20 scenes
- **Duration**: 5-12 minutes
- **Use Case**: Epistles, instructional content
- **Visual Style**: Clear, educational presentation

### **🎭 Style Variations**

#### **1. Classic Biblical** (`classic-biblical-template.json`)
- **Color Scheme**: Gold and deep blue
- **Fonts**: Traditional serif fonts
- **Imagery**: Classical biblical art style

#### **2. Modern Spiritual** (`modern-spiritual-template.json`)
- **Color Scheme**: Contemporary earth tones
- **Fonts**: Clean, modern sans-serif
- **Imagery**: Contemporary spiritual photography

#### **3. Black Hebrew Israelite** (`bhi-template.json`)
- **Status**: ✅ Available in `RELEASES/v3.0.0/`
- **Specialization**: Cultural authenticity
- **Features**: Melanated representation requirements

---

## 🔧 **Template Development Guidelines**

### **📝 Template Structure Standards**
```json
{
  "comment": "Template Name - Purpose Description",
  "resolution": "full-hd",
  "quality": "high",
  "variables": {
    "templateVersion": "vX.Y.Z",
    "targetDuration": "X minutes",
    "sceneCount": "X scenes"
  },
  "scenes": [
    // Dynamic scene array
  ]
}
```

### **🎨 Design Principles**
- **Readability**: High contrast, clear fonts
- **Biblical Reverence**: Respectful, appropriate imagery
- **Technical Quality**: HD resolution, professional audio
- **Accessibility**: Clear captions, appropriate timing

---

## 📊 **Template Testing Framework**

### **✅ Quality Checklist**
- [ ] Video renders successfully
- [ ] All 20 scene variables populate correctly
- [ ] Captions are readable (appropriate size/contrast)
- [ ] Audio synchronization is accurate
- [ ] Voice speed is appropriate (0.9 recommended)
- [ ] Biblical accuracy maintained
- [ ] Visual elements are respectful and appropriate

### **🧪 Test Content**
```
Standard Test Text: Psalm 23 (168 words)
Expected Output: ~1.1 minute video, 4-5 scenes
Quality Metrics: Clear audio, readable captions, biblical imagery
```

---

## 🎯 **Template Categories**

### **📖 By Content Type**
- **Psalms**: Worship-focused, musical elements
- **Gospels**: Story-driven, character-focused
- **Epistles**: Teaching-focused, clear typography
- **Prophecy**: Dramatic, powerful imagery
- **History**: Narrative flow, chronological presentation

### **⏱️ By Duration**
- **Quick Verses** (1-2 min): 5-8 scenes
- **Chapter Segments** (4-7 min): 12-18 scenes  
- **Full Chapters** (8-15 min): 20+ scenes
- **Extended Passages** (15+ min): Dynamic scaling

### **🎭 By Audience**
- **General Christian**: Broad appeal, traditional
- **Black Hebrew Israelite**: Cultural authenticity
- **Youth Ministry**: Contemporary, engaging
- **Study Groups**: Educational, detailed

---

## 🔄 **Template Versioning**

### **📋 Naming Convention**
```
{purpose}-{version}-template.json

Examples:
- bible-chapter-v2.1.0-template.json
- short-verses-v1.0.0-template.json
- bhi-specialized-v3.0.0-template.json
```

### **🏷️ Version Control**
- **Major**: Breaking changes, new functionality
- **Minor**: New features, enhancements
- **Patch**: Bug fixes, minor adjustments

---

## 🚀 **Integration Points**

### **🔄 Workflow Compatibility**
- All templates must work with `BibleChapterMaster.json`
- Variable naming consistency required
- Scene count flexibility maintained

### **📊 Performance Considerations**
- **Rendering Speed**: Optimize for 2-5 minute generation times
- **API Efficiency**: Minimize credit usage
- **Quality Balance**: High quality without excessive processing

---

**💡 Note**: Current production uses the main template. This directory is prepared for future template variations and A/B testing. 