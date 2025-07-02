# 4-Minute Biblical Video Optimization Guide

## Project Overview
This guide provides the optimal word count and configuration for creating consistent 4-minute biblical videos using the Bible Chapter Video Generator system.

## Objective
Maximize video length to 4 minutes by calculating the optimal word count for biblical input text, ensuring full utilization without unused scenes or exceeding limits.

---

## JSON2Video Platform Limits

### Plan Comparison
| Plan | Monthly Cost | Max Video Length | Credits | Generated Minutes |
|------|-------------|------------------|---------|-------------------|
| **Free** | $0 | 3 minutes | 600 | 10 min |
| **Professional** | $49.95 | 10 minutes | 12,000 | 200 min |
| **Startup** | $99.95 | **30 minutes** | 30,000 | 500 min |
| **Enterprise** | $199.95 | 30 minutes | 78,000 | 1,300 min |

**Recommendation**: Startup Plan ($99.95/month) for maximum flexibility

---

## Voice-Over Speech Rate Analysis

### Industry Standards (Words Per Minute)
- **Biblical Narration**: 120-150 WPM (slower for clarity and reverence)
- **Professional Voice-Over**: 150-180 WPM average
- **Audiobook Narration**: 150-160 WPM
- **Azure Voice (en-US-AriaNeural at 0.9 speed)**: 140-160 WPM

### Optimal Rate for Biblical Content
**150 WPM** - Perfect balance of:
- Reverent pacing for spiritual content
- Clear articulation for understanding
- Engaging rhythm for audience retention

---

## 4-Minute Video Calculation

### Mathematical Formula
**Video Length (minutes) × Speech Rate (WPM) = Total Words Needed**

### 4-Minute Calculations
- **At 140 WPM**: 4 × 140 = **560 words**
- **At 150 WPM**: 4 × 150 = **600 words**
- **At 160 WPM**: 4 × 160 = **640 words**

---

## OPTIMAL RECOMMENDATION

### Target Input Text: **600-650 words**

### Why This Works Perfectly:
1. **Consistent Length**: Every video will be approximately 4 minutes
2. **No Unused Scenes**: Uses 12-15 scenes (within 20-scene template capacity)
3. **No Waste**: No empty scenes generating placeholder text
4. **Optimal Pacing**: 150 WPM is perfect for biblical content
5. **Predictable**: Pre-select biblical passages in target word range

---

## Implementation Strategy

### Step-by-Step Process:
1. **Pre-calculate biblical text**: Count words in chosen passages
2. **Target 600-650 words**: Ensures consistent 4-minute videos
3. **Use 20-scene template**: Handles 15+ scenes when needed
4. **Select appropriate passages**: Most Bible chapters fit this range

### Template Configuration:
- **Current Template**: 20 scenes (scene1 through scene20)
- **Expected Usage**: 12-15 scenes for 600-650 word input
- **Unused Scenes**: Automatically handled by n8n workflow cleanup

---

## Biblical Passage Examples (600-650 Word Range)

### Suggested Biblical Content:
- **Psalm 23 + Psalm 91** (combined passages)
- **Matthew 5:1-20** (Beatitudes + additional verses)
- **1 Corinthians 13** (Love chapter + context)
- **Genesis 1:1-25** (Creation account)
- **John 3:1-21** (Nicodemus encounter)
- **Romans 8:28-39** (Nothing can separate us)
- **Ephesians 6:10-20** (Armor of God)
- **Philippians 4:4-20** (Rejoice + Peace + Provision)

### Word Count Verification:
Before processing, verify your selected passage is within the 600-650 word target range using:
- Microsoft Word word count
- Google Docs word count
- Online word count tools

---

## Technical Specifications

### Current System Configuration:
- **AI Model**: Perplexity AI (llama-3.1-sonar-large-128k-online)
- **Max Tokens**: 5,000
- **Voice**: Azure en-US-AriaNeural at 0.9 speed
- **Template**: 20-scene biblical template with auto duration
- **Image Generation**: Flux-pro model
- **Caption Style**: Yellow text, Oswald Bold font, size 80

### Scene Distribution:
- **600 words**: ~12-13 scenes (48-52 seconds per scene average)
- **650 words**: ~14-15 scenes (16-17 seconds per scene average)
- **Scene Duration**: Auto-calculated based on voice-over length

---

## Quality Assurance Checklist

### Before Processing:
- [ ] Biblical text is 600-650 words
- [ ] Text is spiritually appropriate and reverent
- [ ] Passage tells a complete story or message
- [ ] Word count verified using reliable tool

### After Processing:
- [ ] Video length is approximately 4 minutes (240 seconds)
- [ ] All scenes contain actual biblical content (no placeholder text)
- [ ] Captions are properly sized and readable
- [ ] Audio quality is clear and appropriate speed
- [ ] Images are biblically appropriate and reverent

---

## Expected Results

### Consistent Output:
- **Video Duration**: 240 seconds (4 minutes) ±10 seconds
- **Scene Count**: 12-15 active scenes
- **Word-for-Word Accuracy**: Exact biblical text narration
- **Professional Quality**: Proper pacing, imagery, and captions

### Benefits:
- **Predictable**: Every video will be approximately 4 minutes
- **Efficient**: No wasted scenes or processing time
- **Professional**: Consistent quality and pacing
- **Scalable**: Can process multiple 4-minute videos reliably

---

## Troubleshooting

### If Video is Too Short (< 3:30):
- Increase input text to 650-700 words
- Verify all text is being processed by Perplexity AI
- Check for scene generation errors in n8n workflow

### If Video is Too Long (> 4:30):
- Reduce input text to 550-600 words
- Check speech rate settings in template
- Verify Azure voice speed is set to 0.9

### If Unused Scenes Appear:
- Verify n8n workflow includes scene cleanup code
- Check template variable population in formatting node
- Ensure empty scene variables are properly handled

---

## Conclusion

By targeting **600-650 words** for biblical input text, you will consistently generate **4-minute professional biblical videos** that maximize content length while maintaining quality and avoiding technical issues. This approach provides predictable, scalable video production for your Bible Chapter Video Generator system.

---

*Last Updated: January 2025*  
*Bible Chapter Video Generator - Phase 1 Complete* 