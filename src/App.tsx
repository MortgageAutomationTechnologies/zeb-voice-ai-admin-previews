import React, { useState, useEffect, useRef } from 'react';
import { Mic, MicOff, X, ChevronUp } from 'lucide-react';

const LOAVoiceAssistant = () => {
  const [isListening, setIsListening] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const [currentText, setCurrentText] = useState('');
  const [showSamples, setShowSamples] = useState(false);
  const [pulseIntensity, setPulseIntensity] = useState(1);
  const [orbScale, setOrbScale] = useState(1);

  useEffect(() => {
    // Animate orb based on state
    if (isListening) {
      const interval = setInterval(() => {
        setPulseIntensity(1 + Math.random() * 0.5);
      }, 200);
      return () => clearInterval(interval);
    } else if (isThinking) {
      const interval = setInterval(() => {
        setOrbScale(1 + Math.sin(Date.now() / 300) * 0.1);
      }, 50);
      return () => clearInterval(interval);
    }
  }, [isListening, isThinking]);

  const handleVoiceToggle = () => {
    if (isListening) {
      setIsListening(false);
      setCurrentText('');
    } else {
      setIsListening(true);
      setCurrentText('Listening...');
      // Simulate voice recognition
      setTimeout(() => {
        setCurrentText('Find the Johnson loan');
        setIsListening(false);
        setIsThinking(true);
        setTimeout(() => {
          setCurrentText('Found 3 Johnson files:\n• Sarah Johnson - $425,000 - Refinance\n• Mike Johnson - $380,000 - Purchase\n• Tom Johnson - $520,000 - Construction\n\nWhich would you like to open?');
          setIsThinking(false);
        }, 2000);
      }, 3000);
    }
  };

  const sampleCommands = [
    { text: 'Find loan', description: 'Search for loan files' },
    { text: 'Update loan amount', description: 'Change loan values' },
    { text: 'Run credit', description: 'Pull credit reports' },
    { text: 'Run DU', description: 'Desktop underwriter' },
    { text: 'Generate pre-approval', description: 'Create documents' },
    { text: 'What\'s my pipeline?', description: 'View your loans' },
  ];

  const handleSampleCommand = (command) => {
    setShowSamples(false);
    setCurrentText(command.text);
    setIsThinking(true);
    setTimeout(() => {
      setIsThinking(false);
      if (command.text === 'Find loan') {
        setCurrentText('What loan would you like me to find? You can say the borrower\'s name or loan number.');
      } else if (command.text === 'Update loan amount') {
        setCurrentText('Current loan amount is $425,000. What would you like the new amount to be?');
      } else if (command.text === 'Run credit') {
        setCurrentText('I\'ll run the tri-merge credit report. This will take 2-3 minutes. The report will appear in your document vault.');
      } else if (command.text === 'What\'s my pipeline?') {
        setCurrentText('Your pipeline:\n• 12 active loans - $4.2M total\n• 5 closing this week - $1.8M\n• 3 pending conditions\n• 94% on-time rate');
      } else {
        setCurrentText('Processing your request...');
      }
    }, 1500);
  };

  return (
    <div className="flex flex-col h-screen bg-black text-white relative overflow-hidden">
      {/* Ambient gradient background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-red-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl" />
      </div>

      {/* Minimal header */}
      <div className="relative z-10 pt-8 px-6">
        <div className="text-center">
          <h1 className="text-xs font-light tracking-widest text-gray-500 uppercase">LOA</h1>
        </div>
      </div>

      {/* Main content area - centered orb */}
      <div className="flex-1 flex items-center justify-center relative z-10">
        <div className="relative">
          {/* Orb container */}
          <div 
            className="relative"
            style={{
              transform: `scale(${orbScale})`,
              transition: 'transform 0.3s ease-out'
            }}
          >
            {/* Outer glow rings */}
            {isListening && (
              <>
                <div 
                  className="absolute inset-0 w-48 h-48 -left-8 -top-8 rounded-full border border-red-500/20 animate-ping"
                  style={{ animationDuration: '2s' }}
                />
                <div 
                  className="absolute inset-0 w-56 h-56 -left-12 -top-12 rounded-full border border-red-500/10 animate-ping"
                  style={{ animationDuration: '3s' }}
                />
              </>
            )}

            {/* Main orb */}
            <div 
              className="w-32 h-32 relative"
              style={{
                filter: isListening ? `brightness(${pulseIntensity})` : 'brightness(1)'
              }}
            >
              {/* Gradient orb background */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500 via-red-600 to-orange-600 rounded-full opacity-90" />
              
              {/* Glass effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/20 rounded-full" />
              
              {/* Inner shadow for depth */}
              <div className="absolute inset-2 bg-black/30 rounded-full blur-md" />
              
              {/* Thinking animation dots */}
              {isThinking && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex gap-1">
                    {[0, 1, 2].map(i => (
                      <div
                        key={i}
                        className="w-2 h-2 bg-white rounded-full animate-pulse"
                        style={{ animationDelay: `${i * 200}ms` }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Microphone icon */}
              {!isThinking && (
                <div className="absolute inset-0 flex items-center justify-center">
                  {isListening ? (
                    <MicOff className="w-8 h-8 text-white/90" />
                  ) : (
                    <Mic className="w-8 h-8 text-white/90" />
                  )}
                </div>
              )}
            </div>

            {/* Touch target */}
            <button
              onClick={handleVoiceToggle}
              className="absolute inset-0 w-32 h-32 rounded-full"
              aria-label="Voice command"
            />
          </div>

          {/* Status text below orb */}
          <div className="mt-8 text-center">
            <p className="text-xs text-gray-500 uppercase tracking-wider">
              {isListening ? 'Listening' : isThinking ? 'Thinking' : 'Tap to speak'}
            </p>
          </div>
        </div>
      </div>

      {/* Text display area */}
      <div className="relative z-10 px-6 pb-8">
        <div className="min-h-[120px] max-h-[200px] overflow-y-auto">
          {currentText ? (
            <div className="text-center">
              <p className="text-lg font-light leading-relaxed text-gray-100 whitespace-pre-line">
                {currentText}
              </p>
            </div>
          ) : (
            <div className="text-center">
              <p className="text-sm text-gray-600">
                Say "Hey LOA" or tap the orb
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Sample commands drawer */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <button
          onClick={() => setShowSamples(!showSamples)}
          className="w-full py-3 flex items-center justify-center"
        >
          <ChevronUp 
            className={`w-5 h-5 text-gray-600 transform transition-transform ${showSamples ? 'rotate-180' : ''}`}
          />
        </button>
        
        <div className={`bg-gray-950/95 backdrop-blur-xl transition-all duration-300 ${showSamples ? 'h-auto' : 'h-0 overflow-hidden'}`}>
          <div className="px-6 pb-6 pt-2">
            <p className="text-xs text-gray-500 uppercase tracking-wider mb-4">Sample Commands</p>
            <div className="space-y-2">
              {sampleCommands.map((cmd, i) => (
                <button
                  key={i}
                  onClick={() => handleSampleCommand(cmd)}
                  className="w-full text-left p-3 bg-gray-900/50 rounded-lg hover:bg-gray-800/50 transition-colors"
                >
                  <p className="text-sm text-gray-200">{cmd.text}</p>
                  <p className="text-xs text-gray-500 mt-1">{cmd.description}</p>
                </button>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-gray-800">
              <div className="flex justify-between text-xs text-gray-600">
                <span>41 active commands</span>
                <span>Powered by Big AI</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Corner indicator for active loan */}
      <div className="absolute top-8 right-6 z-10">
        <div className="text-right">
          <p className="text-xs text-gray-600">Active loan</p>
          <p className="text-sm text-gray-400">Sarah Johnson</p>
          <p className="text-xs text-gray-600">$425,000</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .float-animation {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default LOAVoiceAssistant;
