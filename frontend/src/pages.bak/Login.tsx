import React, { useState, useRef, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import RegisterForm from '../components/Auth/RegisterForm';

export const Login: React.FC = () => {
  const { token, login, verifyMfa, error, setError, loading } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState<string[]>(['', '', '', '', '', '']);
  const [activeStep, setActiveStep] = useState<'sso' | 'mfa'>('sso');
  const [isRegistering, setIsRegistering] = useState(false);
  const [mfaSubmitting, setMfaSubmitting] = useState(false);

  const otpRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null)
  ];

  useEffect(() => {
    setError('');
  }, [activeStep, isRegistering]);

  if (token) {
    return <Navigate to="/" replace />;
  }

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setActiveStep('mfa');
    // Auto-focus first OTP input after sliding transition
    setTimeout(() => {
      otpRefs[0].current?.focus();
    }, 500);
  };

  const handleOtpChange = (value: string, index: number) => {
    const val = value.replace(/\D/g, '');
    const newOtp = [...otp];
    newOtp[index] = val.substring(0, 1);
    setOtp(newOtp);

    // Auto-tab to next input
    if (val && index < 5) {
      otpRefs[index + 1].current?.focus();
    }
  };

  const handleOtpKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      otpRefs[index - 1].current?.focus();
    }
  };

  const handleFinalLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const otpCode = otp.join('');
    if (otpCode.length !== 6) {
      setError('MFA Code must be 6 digits.');
      return;
    }
    if (!password) {
      setError('Password is required.');
      return;
    }

    setMfaSubmitting(true);
    try {
      // Step 1: Call credentials login
      const loginData = await login(email, password);
      // Step 2: Validate MFA code (simulate MFA check with the fetched data)
      const success = await verifyMfa(otpCode, loginData);
      if (!success) {
        setError('MFA Validation Failed.');
      }
    } catch (err: any) {
      // login error is captured by AuthContext and shown
    } finally {
      setMfaSubmitting(false);
    }
  };

  const handleBackToEmail = () => {
    setActiveStep('sso');
  };

  const handleToggleRegister = () => {
    setIsRegistering(!isRegistering);
  };

  return (
    <div className="bg-[#F7FAFF] font-body-md text-on-surface min-h-screen flex items-center justify-center p-lg overflow-hidden relative">
      {/* Background Pattern */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.03]" 
        style={{ 
          backgroundImage: 'radial-gradient(#0061a4 1px, transparent 1px)', 
          backgroundSize: '32px 32px' 
        }}
      ></div>

      <main className="relative w-full max-w-[440px] z-10">
        {/* Logo Section */}
        <div className="flex flex-col items-center mb-xl">
          <div className="flex items-center gap-sm mb-sm">
            <div className="w-10 h-10 bg-primary-container flex items-center justify-center rounded-lg shadow-sm">
              <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'wght' 700" }}>cloud_done</span>
            </div>
            <h1 className="font-display text-[32px] font-extrabold text-primary tracking-tight">AMDOX</h1>
          </div>
          <p className="font-label-md text-label-md text-outline uppercase tracking-widest">Enterprise Cloud Access</p>
        </div>

        {/* Form Container */}
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden shadow-[0_10px_15px_-3px_rgba(0,0,0,0.05)]">
          {error && (
            <div className="mx-xl mt-lg p-sm bg-red-100 text-error border border-error-container text-xs rounded-lg font-semibold flex items-center gap-sm">
              <span className="material-symbols-outlined text-[16px]">warning</span>
              {error}
            </div>
          )}

          {isRegistering ? (
            <div className="p-xl">
              <div className="mb-lg">
                <h2 className="font-headline-md text-headline-md text-on-surface mb-xs">Register Tenant</h2>
                <p className="font-body-md text-body-md text-on-surface-variant">Create a new organization workspace.</p>
              </div>
              <RegisterForm onToggleRegister={handleToggleRegister} />
            </div>
          ) : (
            <div 
              className="flex w-[200%] transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]" 
              style={{ transform: activeStep === 'mfa' ? 'translateX(-50%)' : 'translateX(0%)' }}
            >
              {/* STEP 1: SSO/Email */}
              <section className="w-1/2 p-xl" id="step-sso">
                <div className="mb-lg">
                  <h2 className="font-headline-md text-headline-md text-on-surface mb-xs">Welcome back</h2>
                  <p className="font-body-md text-body-md text-on-surface-variant">Sign in to your enterprise account.</p>
                </div>
                <form className="space-y-lg" onSubmit={handleContinue}>
                  <div className="space-y-xs">
                    <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="email">CORPORATE EMAIL</label>
                    <div className="relative">
                      <input 
                        className="w-full h-[48px] px-md bg-surface-container-low border border-outline-variant rounded-lg focus:ring-0 focus:border-primary transition-all duration-150 outline-none text-body-md" 
                        id="email" 
                        placeholder="name@company.com" 
                        required 
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">alternate_email</span>
                    </div>
                  </div>
                  <button 
                    className="w-full h-[48px] bg-primary-container text-white font-label-md rounded-lg hover:bg-[#0B7DFF] active:scale-[0.98] transition-all duration-150 flex items-center justify-center gap-sm shadow-sm group" 
                    type="submit"
                  >
                    Continue
                    <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </button>
                  <div className="relative flex items-center py-md">
                    <div className="flex-grow border-t border-outline-variant"></div>
                    <span className="flex-shrink mx-4 text-label-md text-outline uppercase font-medium">Single Sign-On</span>
                    <div className="flex-grow border-t border-outline-variant"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-md">
                    <button 
                      className="flex items-center justify-center h-[40px] border border-outline-variant rounded-lg hover:bg-surface-container-low transition-colors gap-sm" 
                      type="button"
                    >
                      <span className="material-symbols-outlined text-primary">key</span>
                      <span className="text-label-md text-on-surface">Okta</span>
                    </button>
                    <button 
                      className="flex items-center justify-center h-[40px] border border-outline-variant rounded-lg hover:bg-surface-container-low transition-colors gap-sm" 
                      type="button"
                    >
                      <span className="material-symbols-outlined text-primary">cloud</span>
                      <span className="text-label-md text-on-surface">Azure AD</span>
                    </button>
                  </div>

                  <div className="text-center pt-md border-t border-outline-variant/30 mt-md">
                    <button
                      type="button"
                      onClick={handleToggleRegister}
                      className="text-xs text-primary font-semibold hover:underline"
                    >
                      Need an organization? Register Tenant
                    </button>
                  </div>
                </form>
              </section>

              {/* STEP 2: MFA/Password */}
              <section className="w-1/2 p-xl" id="step-mfa">
                <button 
                  className="flex items-center text-primary text-label-md hover:underline mb-lg transition-all" 
                  onClick={handleBackToEmail}
                  type="button"
                >
                  <span className="material-symbols-outlined text-[18px] mr-1">arrow_back</span>
                  Back to email
                </button>
                <div className="mb-lg">
                  <h2 className="font-headline-md text-headline-md text-on-surface mb-xs">Identity Verification</h2>
                  <p className="font-body-md text-body-md text-on-surface-variant italic overflow-hidden text-ellipsis whitespace-nowrap" id="display-email">
                    {email || 'name@company.com'}
                  </p>
                </div>
                <form className="space-y-lg" onSubmit={handleFinalLoginSubmit}>
                  <div className="space-y-xs">
                    <label className="font-label-md text-label-md text-on-surface-variant">MULTI-FACTOR CODE</label>
                    <div className="flex gap-sm">
                      {otp.map((digit, idx) => (
                        <input 
                          key={idx}
                          ref={otpRefs[idx]}
                          className="mfa-input w-full h-[56px] text-center text-headline-md border border-outline-variant rounded-lg focus:border-primary outline-none bg-surface-container-low" 
                          maxLength={1} 
                          type="text"
                          value={digit}
                          onChange={(e) => handleOtpChange(e.target.value, idx)}
                          onKeyDown={(e) => handleOtpKeyDown(e, idx)}
                        />
                      ))}
                    </div>
                    <p className="text-[11px] text-outline mt-sm">Check your registered authenticator app or email for the 6-digit code.</p>
                  </div>
                  <div className="space-y-xs">
                    <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="password">ENTERPRISE PASSWORD</label>
                    <div className="relative">
                      <input 
                        className="w-full h-[48px] px-md bg-surface-container-low border border-outline-variant rounded-lg focus:ring-0 focus:border-primary transition-all duration-150 outline-none text-body-md" 
                        id="password" 
                        placeholder="••••••••" 
                        required 
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">lock</span>
                    </div>
                  </div>
                  <button 
                    className="w-full h-[48px] bg-primary-container text-white font-label-md rounded-lg hover:bg-[#0B7DFF] active:scale-[0.98] transition-all duration-150 flex items-center justify-center gap-sm shadow-sm overflow-hidden relative" 
                    id="final-btn" 
                    type="submit"
                    disabled={mfaSubmitting || loading}
                  >
                    {(mfaSubmitting || loading) ? (
                      <div className="flex items-center justify-center">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      </div>
                    ) : (
                      <span>Unlock Secure Access</span>
                    )}
                  </button>
                  <p className="text-center">
                    <a className="text-label-md text-primary hover:underline" href="#forgot">Forgot your credentials?</a>
                  </p>
                </form>
              </section>
            </div>
          )}
        </div>

        {/* Footer Info */}
        <footer className="mt-lg flex flex-col items-center gap-md">
          <div className="flex gap-lg">
            <a className="text-label-md text-outline hover:text-primary transition-colors" href="#privacy">Privacy Policy</a>
            <a className="text-label-md text-outline hover:text-primary transition-colors" href="#security">Security Standards</a>
            <a className="text-label-md text-outline hover:text-primary transition-colors" href="#support">Contact IT</a>
          </div>
          <div className="flex items-center gap-xs text-[10px] text-outline/50 uppercase tracking-widest font-semibold">
            <span className="material-symbols-outlined text-[14px]">shield</span>
            SECURED BY AMDOX CYBER-CORE v2.4
          </div>
        </footer>
      </main>

      {/* Side Image Decorative (Desktop Only) */}
      <div className="hidden lg:block fixed right-0 top-0 bottom-0 w-1/3 bg-surface-container-highest border-l border-outline-variant">
        <div className="h-full w-full relative">
          <img 
            className="h-full w-full object-cover grayscale opacity-40 mix-blend-multiply" 
            alt="Futuristic data core illustration"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrGk6R5NEVppc-7f-eLxhmW5yq-rioOCSYr91COXIPU0mqC8-5LK00jkw4aHZ-oyYQVQjIujdP2Dvzgi_5avrrvrPZugk4FMSBromXcpsnAZIpo_H_rDNvvSfn53qj2mjQtiAxecNKxtkrNNFEGebsFgkgxv9SnIY8tksS0wdSMoMdZgPleXIzR2pJPdY9j0TXwtptdHiryogwOp6vimuQXTi6V_PFpUJg5rm6VSOV_wA1BuF0GZf3cjHKJBpJeLdh4UFlq8mgYtQ"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#F7FAFF]"></div>
          <div className="absolute bottom-xl left-xl right-xl p-lg bg-white/80 backdrop-blur-md border border-white/50 rounded-lg">
            <p className="font-headline-md text-primary mb-xs">Welcome to Enterprise Cloud</p>
            <p className="text-body-md text-on-surface-variant">Next-generation data management with surgical precision and cloud-native DNA.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
