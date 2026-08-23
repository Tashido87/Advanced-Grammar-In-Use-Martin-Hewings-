export function speakText(text: string, onEnd?: () => void): boolean {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) {
    return false;
  }

  window.speechSynthesis.cancel();

  // Clean text from bracket annotations
  const cleanedText = text
    .replace(/\([^)]*\)/g, "")
    .replace(/\[[^\]]*\]/g, "")
    .replace(/(=[^)]*)/g, "")
    .replace(/NOT /g, "Not ")
    .trim();

  if (!cleanedText) return false;

  const utterance = new SpeechSynthesisUtterance(cleanedText);
  utterance.lang = "en-GB"; // Standard British English accent for Cambridge materials
  utterance.rate = 0.92; // Slightly paced for optimal learning clarity
  utterance.pitch = 1.0;

  // Try to find British voice if available
  const voices = window.speechSynthesis.getVoices();
  const gbVoice = voices.find(v => v.lang === "en-GB" || v.name.includes("UK") || v.name.includes("British") || v.name.includes("English United Kingdom"));
  if (gbVoice) {
    utterance.voice = gbVoice;
  }

  if (onEnd) {
    utterance.onend = onEnd;
    utterance.onerror = onEnd;
  }

  window.speechSynthesis.speak(utterance);
  return true;
}

export function stopSpeech() {
  if (typeof window !== "undefined" && "speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }
}
