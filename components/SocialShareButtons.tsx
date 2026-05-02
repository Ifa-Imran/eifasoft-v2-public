'use client';

import { useState, useEffect } from 'react';

export function SocialShareButtons() {
  const [currentUrl, setCurrentUrl] = useState('');
  const [pageTitle, setPageTitle] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setCurrentUrl(window.location.href);
    setPageTitle(document.title);
    
    // Show after scrolling down a bit
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const shareLinks = [
    {
      name: 'Facebook',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      color: 'hover:bg-[#1877F2] hover:text-white',
      getUrl: () => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
    },
    {
      name: 'X (Twitter)',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      color: 'hover:bg-black hover:text-white',
      getUrl: () => `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(pageTitle)}`,
    },
    {
      name: 'LinkedIn',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      color: 'hover:bg-[#0A66C2] hover:text-white',
      getUrl: () => `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`,
    },
    {
      name: 'WhatsApp',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      ),
      color: 'hover:bg-[#25D366] hover:text-white',
      getUrl: () => `https://wa.me/?text=${encodeURIComponent(pageTitle + ' ' + currentUrl)}`,
    },
    {
      name: 'Telegram',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
        </svg>
      ),
      color: 'hover:bg-[#0088cc] hover:text-white',
      getUrl: () => `https://t.me/share/url?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(pageTitle)}`,
    },
    {
      name: 'Pinterest',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
        </svg>
      ),
      color: 'hover:bg-[#E60023] hover:text-white',
      getUrl: () => `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(currentUrl)}&description=${encodeURIComponent(pageTitle)}`,
    },
    {
      name: 'Reddit',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
        </svg>
      ),
      color: 'hover:bg-[#FF4500] hover:text-white',
      getUrl: () => `https://reddit.com/submit?url=${encodeURIComponent(currentUrl)}&title=${encodeURIComponent(pageTitle)}`,
    },
    {
      name: 'Tumblr',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.563 24c-5.093 0-7.031-3.756-7.031-6.411V9.747H5.116V6.648c3.63-1.313 4.512-4.596 4.71-6.469C9.84.051 9.941 0 9.999 0h3.517v6.114h4.801v3.633h-4.82v7.47c.016 1.001.375 2.371 2.207 2.371h.09c.631-.02 1.486-.205 1.936-.419l1.156 3.425c-.436.636-2.4 1.374-4.156 1.404h-.178l.011.002z"/>
        </svg>
      ),
      color: 'hover:bg-[#36465D] hover:text-white',
      getUrl: () => `https://www.tumblr.com/share/link?url=${encodeURIComponent(currentUrl)}&name=${encodeURIComponent(pageTitle)}`,
    },
    {
      name: 'Pocket',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.813 10.259l-5.646 5.419c-.32.305-.737.458-1.154.458-.42 0-.837-.153-1.158-.459l-5.648-5.418c-.673-.646-.733-1.721-.087-2.393.645-.672 1.721-.733 2.393-.086l4.5 4.319 4.497-4.319c.672-.647 1.748-.586 2.394.086.645.672.585 1.747-.086 2.393M20.5 0h-17C1.57 0 0 1.57 0 3.5v8c0 .352.027.699.079 1.041.053.355.125.702.215 1.041.329 1.245.854 2.417 1.548 3.47.693 1.052 1.551 1.992 2.538 2.786C6.339 21.498 8.905 22.5 11.688 22.5h.625c2.782 0 5.349-1.002 7.307-2.662.987-.794 1.845-1.734 2.538-2.786.694-1.053 1.219-2.225 1.548-3.47.09-.339.162-.686.215-1.041.052-.342.079-.689.079-1.041v-8C24 1.57 22.43 0 20.5 0"/>
        </svg>
      ),
      color: 'hover:bg-[#EF3F56] hover:text-white',
      getUrl: () => `https://getpocket.com/save?url=${encodeURIComponent(currentUrl)}&title=${encodeURIComponent(pageTitle)}`,
    },
    {
      name: 'Skype',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.069 18.874c-4.023 0-5.82-1.979-5.82-3.464 0-.765.561-1.296 1.333-1.296 1.723 0 1.273 2.477 4.487 2.477 1.641 0 2.55-.895 2.55-1.811 0-.551-.269-1.16-1.354-1.429l-3.576-.895c-2.88-.724-3.403-2.286-3.403-3.751 0-3.047 2.861-4.191 5.549-4.191 2.471 0 5.393 1.373 5.393 3.199 0 .784-.688 1.24-1.453 1.24-1.469 0-1.198-2.037-4.164-2.037-1.469 0-2.292.664-2.292 1.617s1.153 1.258 2.157 1.487l2.637.587c2.891.649 3.624 2.346 3.624 3.944 0 2.476-1.902 4.324-5.722 4.324m11.084-4.882l-.029.135-.044-.024c.119-.486.178-.988.174-1.498.001-4.023-3.274-7.298-7.299-7.298-.503-.005-1.003.053-1.488.172l-.025-.044.135-.029C13.573 1.963 10.957 0 7.952 0 3.567.002.003 3.569 0 7.955c-.002 3.007 1.963 5.623 4.393 6.628l.03-.135.044.024c-.12.487-.18.99-.175 1.497-.001 4.025 3.275 7.3 7.299 7.3.503.005 1.003-.052 1.487-.171l.025.043-.134.03c1.003 2.43 3.62 4.393 6.627 4.392C23.564 27.561 27.001 23.995 27.003 19.609c.002-3.008-1.963-5.624-4.393-6.629"/>
        </svg>
      ),
      color: 'hover:bg-[#00AFF0] hover:text-white',
      getUrl: () => `https://web.skype.com/share?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(pageTitle)}`,
    },
    {
      name: 'Viber',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.4 0C9.473.028 5.333.344 3.02 2.467 1.302 4.187.507 6.771.361 10.015c-.146 3.244-.192 9.32 5.7 11.088h.005l-.002 2.527s-.037.974.619 1.171c.644.205 1.023-.398 1.638-1.07.337-.37.803-.91 1.155-1.323 3.18.265 5.624-.334 5.904-.432.647-.227 4.307-.659 4.905-5.38.616-4.872-.285-7.949-1.857-9.33l.002-.002c-.469-.473-2.648-2.011-7.065-2.227-.548-.032-.934-.037-1.107-.037h-.792zM11.516 1.63h.762c.163 0 .53.006 1.05.036 3.904.19 5.708 1.473 6.076 1.832l.002.002c1.257 1.1 2.063 3.759 1.53 8.032-.503 3.972-3.461 4.27-4.021 4.467-.227.079-2.39.609-5.115.429 0 0-2.025 2.376-2.657 3.008-.1.099-.216.143-.294.126-.11-.024-.14-.144-.139-.319l.016-3.256c-4.96-1.487-4.683-6.636-4.565-9.269.128-2.869.826-5.054 2.251-6.453 1.902-1.744 5.476-2.058 7.104-2.08zm.468 2.793c-.179 0-.325.147-.323.326a.323.323 0 00.323.32c1.044.014 1.952.314 2.697.893.748.584 1.273 1.46 1.56 2.604.048.176.206.295.381.295.025 0 .051-.003.077-.008a.327.327 0 00.24-.393c-.332-1.32-.959-2.347-1.864-3.054-.905-.707-2.003-1.065-3.263-1.065zm-3.647.583a1.171 1.171 0 00-.49.073c-.276.121-.656.432-.883.735-.453.605-.45 1.219-.16 1.827.001.003.003.005.004.008l.004.007c.391.771.948 1.668 1.646 2.445a9.869 9.869 0 002.636 2.416l.018.01a9.631 9.631 0 001.558.855c.527.234.999.378 1.418.378.372 0 .703-.112 1.017-.358l.004-.004c.265-.224.482-.477.636-.77.154-.293.24-.606.24-.896-.001-.172-.035-.318-.104-.468a.784.784 0 00-.131-.196 6.71 6.71 0 00-.627-.611c-.403-.35-.893-.704-1.138-.893a.623.623 0 00-.382-.13.654.654 0 00-.492.22l-.426.506c-.168.199-.372.337-.598.337h-.003c-.095 0-.193-.022-.296-.066-1.02-.46-1.927-1.16-2.575-2.016l-.006-.007c-.209-.319-.407-.678-.48-1.088a.316.316 0 01.07-.263l.459-.5a.638.638 0 00.164-.47.663.663 0 00-.162-.432c-.161-.198-.492-.576-.895-.96a7.167 7.167 0 00-.685-.594c-.204-.149-.39-.213-.577-.214zm4.052.877a.321.321 0 00-.054.004.324.324 0 00-.262.376c.102.593.333 1.08.686 1.453.355.376.842.637 1.449.78.019.004.038.006.057.006a.323.323 0 00.057-.642c-.483-.113-.849-.305-1.108-.58-.261-.276-.439-.651-.52-1.117a.323.323 0 00-.305-.28z"/>
        </svg>
      ),
      color: 'hover:bg-[#665CAC] hover:text-white',
      getUrl: () => `viber://forward?text=${encodeURIComponent(pageTitle + ' ' + currentUrl)}`,
    },
    {
      name: 'Email',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      ),
      color: 'hover:bg-gray-700 hover:text-white',
      getUrl: () => `mailto:?subject=${encodeURIComponent(pageTitle)}&body=${encodeURIComponent('Check out this page: ' + currentUrl)}`,
    },
  ];

  const handleShare = (getUrl: () => string) => {
    window.open(getUrl(), '_blank', 'width=600,height=400');
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      alert('Link copied to clipboard!');
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = currentUrl;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div
      className={`fixed left-0 top-1/2 -translate-y-1/2 z-40 transition-all duration-300 ${
        isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
      }`}
    >
      <div className="flex flex-col bg-white shadow-lg rounded-r-xl overflow-hidden border border-l-0 border-gray-200">
        {/* Share Label */}
        <div className="bg-gray-100 px-2 py-2 text-center">
          <span className="text-xs font-semibold text-gray-600 uppercase tracking-wide" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
            Share
          </span>
        </div>
        
        {/* Social Buttons */}
        {shareLinks.map((link) => (
          <button
            key={link.name}
            onClick={() => handleShare(link.getUrl)}
            className={`p-3 text-gray-600 transition-all duration-200 ${link.color} border-t border-gray-100 first:border-t-0`}
            title={`Share on ${link.name}`}
            aria-label={`Share on ${link.name}`}
          >
            {link.icon}
          </button>
        ))}
        
        {/* Copy Link Button */}
        <button
          onClick={handleCopyLink}
          className="p-3 text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-200 border-t border-gray-100"
          title="Copy link"
          aria-label="Copy link to clipboard"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
