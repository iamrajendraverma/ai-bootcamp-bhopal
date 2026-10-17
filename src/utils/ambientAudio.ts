// Subtle organic room tone generator using Web Audio API
// Generates gentle rain on cedar courtyard or soft acoustic warmth without external audio assets

class AmbientSoundEngine {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private gainNode: GainNode | null = null;
  private noiseNode: AudioNode | null = null;
  private currentMode: 'rain' | 'hearth' | 'breeze' = 'rain';

  private initContext() {
    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioContextClass();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public play(mode: 'rain' | 'hearth' | 'breeze' = 'rain') {
    this.initContext();
    if (!this.ctx) return;

    this.stop();
    this.currentMode = mode;

    const bufferSize = this.ctx.sampleRate * 2;
    const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);

    let lastOut = 0.0;
    // Generate pink noise / brown noise depending on mode
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      if (mode === 'rain') {
        // Pinkish rain flutter
        output[i] = (lastOut + 0.02 * white) / 1.02;
        lastOut = output[i];
      } else if (mode === 'hearth') {
        // Deeper brown warmth with gentle crackle
        output[i] = (lastOut + 0.015 * white) / 1.015;
        lastOut = output[i];
      } else {
        // Soft wind murmur
        output[i] = (lastOut + 0.03 * white) / 1.03;
        lastOut = output[i];
      }
    }

    const whiteNoise = this.ctx.createBufferSource();
    whiteNoise.buffer = noiseBuffer;
    whiteNoise.loop = true;

    // Filter to make it sound soft, muffled, natural
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(mode === 'rain' ? 450 : mode === 'hearth' ? 280 : 380, this.ctx.currentTime);
    filter.Q.setValueAtTime(1.5, this.ctx.currentTime);

    this.gainNode = this.ctx.createGain();
    // Keep volume whisper quiet (quiet luxury)
    this.gainNode.gain.setValueAtTime(0.001, this.ctx.currentTime);
    this.gainNode.gain.exponentialRampToValueAtTime(0.035, this.ctx.currentTime + 1.2);

    whiteNoise.connect(filter);
    filter.connect(this.gainNode);
    this.gainNode.connect(this.ctx.destination);

    whiteNoise.start(0);
    this.noiseNode = whiteNoise;
    this.isPlaying = true;
  }

  public stop() {
    if (this.gainNode && this.ctx) {
      try {
        this.gainNode.gain.linearRampToValueAtTime(0.0001, this.ctx.currentTime + 0.5);
        setTimeout(() => {
          if (this.noiseNode && 'stop' in this.noiseNode) {
            (this.noiseNode as AudioBufferSourceNode).stop();
          }
          this.noiseNode = null;
        }, 550);
      } catch {
        // ignore error during quick abort
      }
    }
    this.isPlaying = false;
  }

  public toggle(mode: 'rain' | 'hearth' | 'breeze' = 'rain'): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.play(mode);
      return true;
    }
  }

  public getStatus() {
    return { isPlaying: this.isPlaying, mode: this.currentMode };
  }
}

export const ambientSound = new AmbientSoundEngine();
