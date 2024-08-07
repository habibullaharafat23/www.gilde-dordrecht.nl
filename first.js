//linking to google font

var link = document.createElement("link");
link.rel = "stylesheet";
link.href =
  "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200";
document.getElementsByTagName("head")[0].appendChild(link);

//linking to css file

var link = document.createElement("link");
link.type = "text/css";
link.rel = "stylesheet";
link.href ="https://cdn.jsdelivr.net/gh/habibullaharafat23/www.gilde-dordrecht.nl@15dbcc33af49ae59cbd151481ecc56245586ff81/style.css";
// link.href = "style.css";
document.getElementsByTagName("head")[0].appendChild(link);

//html elements

var consentdiv = document.createElement("div");

consentdiv.innerHTML = `
<div class=consent-banner-wrapper>
  <div class=consent-content-area>
    <div class="navigation-header">
      <div class="nav-item active-nav consent">
        <h3 class="consent-headlines">Toestemming</h3>
      </div>
      <div class="nav-item details">
        <h3 class="consent-headlines">Details</h3>
      </div>
      <div class="nav-item about">
        <h3 class="consent-headlines">About</h3>
      </div>
    </div>
    


    <div class="section-container">
      <div class="section-content active-section-content" id="consentSection">
        <p class="consent-descriptions">We gebruiken cookies om inhoud en advertenties te personaliseren, om functies voor sociale media te bieden en om ons verkeer te analyseren. We delen ook informatie over uw gebruik van onze site met onze sociale media-, advertentie- en analysepartners, die deze kunnen combineren met andere informatie die u aan hen heeft verstrekt of die ze hebben verzameld op basis van uw gebruik van hun diensten.</p>
      </div>
      <div class="section-content" style="display:none" id="detailsSection">
        <div class="cookie-detail-wrapper necessaryCookies">
          <div class="cookie-detail-headline">
            <div class="arrow-icon">
              <span class="catagoryIcon material-symbols-outlined">expand_more</span>
            </div>
            <div class="cookie-catagory-name">
              <span class="consent-headlines atwithIconText cookieCatagory">Noodzakelijk</span>
              <div class="totalCookiesWrapper">
                <span class="totalCookies" id="totalNecessaryCookies"></span>
              </div>
            </div>
            <div class="cookie-toggle">
              <label class="ConsentSwitch">
                <input type="checkbox" checked class="inputDisable" disabled>
                <span class="ConsentSlider"></span>
              </label>
            </div>
          </div>
          <div class="cookie-details-descriptions">
            <p class="consent-descriptions">Noodzakelijke cookies helpen een website bruikbaar te maken door basisfuncties zoals paginanavigatie en toegang tot beveiligde delen van de website mogelijk te maken. Zonder deze cookies kan de website niet goed functioneren.</p>
          </div>
          <div class="all-cookies" style="display:none"></div>
        </div>
        <div class="cookie-detail-wrapper preferencesCookies">
          <div class="cookie-detail-headline">
            <div class="arrow-icon">
              <span class="catagoryIcon material-symbols-outlined">expand_more</span>
            </div>
            <div class="cookie-catagory-name">
              <span class="consent-headlines atwithIconText cookieCatagory">Voorkeuren</span>
              <div class="totalCookiesWrapper">
                <span class="totalCookies" id="totalPreferencesCookies"></span>
              </div>
            </div>
            <div class="cookie-toggle">
              <label class="ConsentSwitch">
                // <input type="checkbox">
                
                <span class="ConsentSlider"></span>
              </label>
            </div>
          </div>
          <div class="cookie-details-descriptions">
            <p class="consent-descriptions">Voorkeurscookies stellen een website in staat om informatie te onthouden die de manier waarop de website zich gedraagt of eruitziet verandert, zoals je voorkeurstaal of de regio waarin je je bevindt.</p>
          </div>
          <div class="all-cookies" style="display:none"></div>
        </div>
        <div class="cookie-detail-wrapper analyticsCookies">
          <div class="cookie-detail-headline">
            <div class="arrow-icon">
              <span class="catagoryIcon material-symbols-outlined">expand_more</span>
            </div>
            <div class="cookie-catagory-name">
              <span class="consent-headlines atwithIconText cookieCatagory">Analytics</span>
              <div class="totalCookiesWrapper">
                <span class="totalCookies" id="totalAnalyticsCookies"></span>
              </div>
            </div>
            <div class="cookie-toggle">
              <label class="ConsentSwitch">
                <input type="checkbox">
                <span class="ConsentSlider"></span>
              </label>
            </div>
          </div>
          <div class="cookie-details-descriptions">
            <p class="consent-descriptions">Statistische cookies helpen website-eigenaren te begrijpen hoe bezoekers met websites omgaan door informatie anoniem te verzamelen en te rapporteren.</p>
          </div>
          <div class="all-cookies" style="display:none"></div>
        </div>
        <div class="cookie-detail-wrapper marketingCookies">
          <div class="cookie-detail-headline">
            <div class="arrow-icon">
              <span class="catagoryIcon material-symbols-outlined">expand_more</span>
            </div>
            <div class="cookie-catagory-name">
              <span class="consent-headlines atwithIconText cookieCatagory">Marketing</span>
              <div class="totalCookiesWrapper">
                <span class="totalCookies" id="totalMarketingCookies"></span>
              </div>
            </div>
            <div class="cookie-toggle">
              <label class="ConsentSwitch">
                <input type="checkbox">
                <span class="ConsentSlider"></span>
              </label>
            </div>
          </div>
          <div class="cookie-details-descriptions">
            <p class="consent-descriptions">Marketingcookies worden gebruikt om bezoekers over websites heen te volgen. Het doel is om advertenties weer te geven die relevant en aantrekkelijk zijn voor de individuele gebruiker, en daarmee waardevoller voor uitgevers en derden adverteerders.</p>
          </div>
          <div class="all-cookies" style="display:none"></div>
        </div>
      </div>
      <div class="section-content" style="display:none" id="aboutSection">
        <p class="consent-descriptions">
          <span class="sec3Content" style="margin-top:15px">Cookies zijn kleine tekstbestanden die door websites kunnen worden gebruikt om de ervaring van een gebruiker efficiënter te maken.</span>
          <span class="sec3Content">De wet bepaalt dat wij cookies op uw apparaat mogen opslaan als ze strikt noodzakelijk zijn voor de werking van deze site. Voor alle andere soorten cookies hebben wij uw toestemming nodig. Dit betekent dat cookies die worden geclassificeerd als noodzakelijk, worden verwerkt op basis van GDPR Art. 6 (1) (f). Alle andere cookies, dat wil zeggen die uit de categorieën voorkeuren en marketing, worden verwerkt op basis van GDPR Art. 6 (1) (a) GDPR.</span>

          <span class="sec3Content">Deze site maakt gebruik van verschillende soorten cookies. Sommige cookies worden geplaatst door derden die op onze pagina's verschijnen.</span>
          
        </p>
      </div>
    </div>
    


  </div>

  <div class=consent-action-footer>
    <div class=action-buttons id=consentActionButtons>
      <button action="accept" class="action-btn active" id=acceptConsentButton>ACCEPTEREN</button>
      <button action="reject" class="action-btn" id="rejectConsentButton" style="display:none">REJECT</button>
      <button action="preference" class="action-btn" id="preferenceConsentButton">Voorkeur</button>
    </div>
  </div>

</div>

<div class=miniConsentBanner>
  <img alt="" src=https://cdn.jsdelivr.net/gh/alifmahmudashik/marketing@marketing/consent-banner/img/cookie-icon.svg width=100%>
</div>
`;

document.body.appendChild(consentdiv);
