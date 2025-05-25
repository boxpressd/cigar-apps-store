import React, {useRef, useState} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {isIOS, isMobileOnly} from "mobile-device-detect";
import reCAPTCHA from "react-google-recaptcha"

const Submit = () => {
  const [successResponse, setSuccessResponse] = useState(null);
  const [errorResponse, setErrorResponse] = useState(null);
  const captchaRef = useRef(null)

  return (
    <div style={!isMobileOnly ? {display: 'flex', flexDirection: 'column', height: '100vh'} : {}}>
      <Header/>
      <div style={{flex: 1}}>
        <h1 style={{fontSize: '18px', margin: 20}}>Submit Cigar App</h1>
        <div style={{maxWidth: 800, margin: 'auto'}}>
          <div className="alert alert-dark">
            <form onSubmit={(e) => {
              e.preventDefault();
              const data = new FormData(e.target);
              const body = {};
              for (let entry of data.entries()) {
                const [key, value] = entry;
                body[key] = value;
              }
              console.log(body);
              fetch("https://formsubmit.co/ajax/6bfb286a88f5f731052cebd22fe39397", {
                method: "POST",
                headers: {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
                },
                body: JSON.stringify(body),
              }).then(() => {
                setSuccessResponse('Thanks for your submission! Our team will review it and contact you shortly.');
              }).catch((err) => {
                console.error(err);
                setErrorResponse('Unfortunately, there was an error submitting your PWA. Please try again later or email us directly.');
              }).finally(() => {
                captchaRef.current.reset();
              });
            }}>
              <input type="hidden" name="_replyto" value="support@boxpressd.com" />
              <input type="hidden" name="_subject" value="Cigar App Store Submission" />
              <div className="form-group">
                <label>URL of PWA</label>
                <input required type="url" name="url" className="form-control"/>
              </div>
              <div className="form-group">
                <label>Manifest URL (Optional*)</label>
                <input type="url" name="manifest" className="form-control"/>
              </div>
              <div className="form-group">
                <label>Contact email address (in case we need anything, this is not public)</label>
                <input required name="email" type="email" className="form-control"/>
              </div>
              <div className="form-check" style={{ marginTop: 10 }}>
                <input required type="checkbox" className="form-check-input" id="checkbox" name="authorize" />
                <label className="form-check-label" for="checkbox">By submitting a PWA, I acknowledge and agree that the review process is essential before the PWA is added to the database. It is understood that if the app fails to meet certain requirements, such as being installable, having a fully responsive design, treating personal information fairly, and achieving a good or perfect audit with <a rel="noopener noreferrer" target="_blank" href="https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk">Google Lighthouse</a>, it may not be included in the database. I also agree to the terms below and those in our <a rel="noreferrer noopener" target="_blank" href="https://boxpressd.com/legal/privacy">privacy policy</a>.</label>
              </div>
              <reCAPTCHA ref={captchaRef} sitekey="6Lc0jV0mAAAAAL5DSJ9OHXWUCTMuFZkEotSK0sQB" />
              {successResponse && <div className="alert alert-success" role="alert" style={{ margin: '12px 0' }}>{successResponse}</div>}
              {errorResponse && <div className="alert alert-error" role="alert" style={{ margin: '12px 0' }}>{errorResponse}</div>}
              <button
                type="submit"
                style={isIOS ? {
                  border: 'none',
                  backgroundColor: '#0070c9',
                  color: 'white',
                  padding: '2px 24px',
                  borderRadius: 14,
                  fontWeight: 700,
                  height: 28,
                  margin: '10px 0',
                  cursor: 'pointer',
                } : {
                  backgroundColor: '#01875f',
                  color: '#fff',
                  fontFamily: 'Google Sans,Roboto,Arial,sans-serif',
                  fontWeight: 700,
                  height: 36,
                  padding: '8px 16px',
                  border: 'none',
                  borderRadius: '8px',
                  margin: '10px 0',
                  cursor: 'pointer',
                }}
              >
                {'Submit'}
              </button>
            </form>
          </div>
          <div className="alert alert-dark">
            <span style={{ color: '#dfdfdf' }}>Information:</span>

            <p>To ensure compatibility and optimal performance, all icons and screenshots should be directly added to
              the manifest file of your PWA. We only accept cigar-related PWAs - this excludes cigarette, vaping, and similar non-cigar apps.</p>

            <p>To allow for an experience similar to popular app stores, <a rel="noreferrer noopener" target="_blank" href="https://github.com/boxpressd/cigar-apps-store">a small script</a> can be added to your PWA. To learn
              about the requirements and how to install the script, <a rel="noreferrer noopener" target="_blank" href="https://boxpressd.freshdesk.com/support/solutions/articles/150000089694-verified-badge-for-cigar-app-on-our-cigar-apps-store">visit our help center</a>.</p>

            <p>Currently, all submitted apps are manually published by our team to the public database. We handle the
              publishing process to maintain quality control and ensure that only approved apps are listed.</p>

            <p>If you encounter any difficulties while submitting your PWA, please don't hesitate to <a
              href="mailto:support@cigarappstore.com">reach out to us via email</a>. We are here to assist you and
              resolve any issues you may encounter during the submission process.</p>

            <p>If you need to make changes or request the removal of your app from our platform, please <a
              href="mailto:support@cigarappstore.com">contact us via email</a>. We will promptly address your request
              and assist you accordingly.</p>

            <span style={{ color: '#dfdfdf' }}>Contact:</span>

            <p>For any questions or inquiries, feel free to contact us. If you need assistance updating your manifest, please <a
              href="mailto:support@cigarappstore.com">contact us</a>.</p>

            <span style={{ color: '#dfdfdf' }}>Additional Help:</span>

            <p>How to include screenshots in your manifest file:</p>

            <p>To include screenshots in your manifest file, you can use the "screenshots" property. This property
              allows you to provide an array of image URLs representing the screenshots of your PWA. Here's an example
              of how a valid manifest file with screenshots can look:</p>

            <pre>
              <code>
                {`
{
  "name": "Your PWA Name",
  "short_name": "Short Name",
  "description": "Description of your PWA",
  "icons": [
      {
        "src": "icon-192x192.png",
        "sizes": "192x192",
        "type": "image/png"
      },
      {
        "src": "icon-512x512.png",
        "sizes": "512x512",
        "type": "image/png"
      }
  ],
  "screenshots": [
      "screenshot-1.png",
      "screenshot-2.png",
      "screenshot-3.png"
  ],
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#000000"
}
                `}
              </code>
            </pre>
            <p>In the above example, you can replace "screenshot-1.png", "screenshot-2.png", and "screenshot-3.png" with
              the URLs of your actual screenshots. Make sure the URLs are accessible and represent the desired
              screenshots of your PWA.</p>

            <p>We reserve the right to save the app's icon and screenshots provided during the submission process. These assets may be used to create a banner image for recommended apps when necessary. It is important to note that additional information regarding the handling of personal data can be found in the <a rel="noreferrer noopener" target="_blank" href="https://boxpressd.com/legal/privacy">privacy policy</a>.</p>

            <p>If you have any further questions or need assistance, please feel free to contact us.</p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Submit;
