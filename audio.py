import sounddevice as sd
import soundfile as sf
import scipy
from scipy.io import wavfile

fs = 48000
filename = 'recording.wav'
duration = 10
sd.default.samplerate = fs
sd.default.channels = 1
myrecording = sd.rec(int(duration * fs))
wavfile.write(filename, fs, myrecording)