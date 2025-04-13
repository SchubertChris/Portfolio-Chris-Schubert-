import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/pages/Rechtliches.scss';

const Rechtliches: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'impressum' | 'datenschutz' | 'cookies'>('impressum');
  const location = useLocation();
  
  useEffect(() => {
    // URL-Parameter für die Tab-Auswahl verarbeiten
    const searchParams = new URLSearchParams(location.search);
    const tabParam = searchParams.get('tab');
    
    if (tabParam === 'datenschutz' || tabParam === 'cookies' || tabParam === 'impressum') {
      setActiveTab(tabParam as 'impressum' | 'datenschutz' | 'cookies');
    }
  }, [location]);

  return (
    <div className="rechtliches-section">
      <div className="section-container">
        <h1 className="page-title">Rechtliches</h1>
        
        <div className="tabs-container">
          <div className="tabs-header">
            <button 
              className={`tab-button ${activeTab === 'impressum' ? 'active' : ''}`}
              onClick={() => setActiveTab('impressum')}
            >
              Impressum
            </button>
            <button 
              className={`tab-button ${activeTab === 'datenschutz' ? 'active' : ''}`}
              onClick={() => setActiveTab('datenschutz')}
            >
              Datenschutzerklärung
            </button>
            <button 
              className={`tab-button ${activeTab === 'cookies' ? 'active' : ''}`}
              onClick={() => setActiveTab('cookies')}
            >
              Cookie-Richtlinie
            </button>
          </div>

          <div className="tab-content">
            {activeTab === 'impressum' && (
              <div className="impressum-content">
                <h2>Impressum</h2>
                <div className="legal-section">
                  <h3>Angaben gemäß § 5 TMG</h3>
                  <p>Chris Schubert<br />
                  Hans-Marchwitza-Ring 19<br />
                  14473 Potsdam</p>
                  
                  <h3>Kontakt</h3>
                  <p>Telefon: 016094168348<br />
                  E-Mail: schubert_chris@rocketmail.com</p>
                  
                  <h3>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h3>
                  <p>Chris Schubert<br />
                  Hans-Marchwitza-Ring 19<br />
                  14473 Potsdam</p>
                  
                  <h3>Haftungsausschluss</h3>
                  
                  <h4>Haftung für Inhalte</h4>
                  <p>Die Inhalte dieser Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann ich jedoch keine Gewähr übernehmen. Als Diensteanbieter bin ich gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG bin ich als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werde ich diese Inhalte umgehend entfernen.</p>
                  
                  <h4>Haftung für Links</h4>
                  <p>Diese Website enthält Links zu externen Webseiten Dritter, auf deren Inhalte ich keinen Einfluss habe. Deshalb kann ich für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werde ich derartige Links umgehend entfernen.</p>
                  
                  <h4>Urheberrecht</h4>
                  <p>Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitte ich um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werde ich derartige Inhalte umgehend entfernen.</p>
                </div>
              </div>
            )}
            
            {activeTab === 'datenschutz' && (
              <div className="datenschutz-content">
                <h2>Datenschutzerklärung</h2>
                <div className="legal-section">
                  <h3>1. Datenschutz auf einen Blick</h3>
                  
                  <h4>Allgemeine Hinweise</h4>
                  <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.</p>
                  
                  <h4>Datenerfassung auf dieser Website</h4>
                  <p><strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
                  Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.</p>
                  
                  <p><strong>Wie erfasse ich Ihre Daten?</strong><br />
                  Ihre Daten werden zum einen dadurch erhoben, dass Sie mir diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
                  Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch meine IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.</p>
                  
                  <p><strong>Wofür nutze ich Ihre Daten?</strong><br />
                  Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.</p>
                  
                  <p><strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong><br />
                  Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
                  Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an mich wenden.</p>
                  
                  <h3>2. Hosting</h3>
                  <p>Meine Website wird bei einem externen Dienstleister gehostet (Hoster). Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.</p>
                  <p>Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung gegenüber potentiellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung meines Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).</p>
                  <p>Mein Hoster wird Ihre Daten nur insoweit verarbeiten, wie dies zur Erfüllung seiner Leistungspflichten erforderlich ist und meine Weisungen in Bezug auf diese Daten befolgen.</p>
                  
                  <h3>3. Allgemeine Hinweise und Pflichtinformationen</h3>
                  
                  <h4>Datenschutz</h4>
                  <p>Der Betreiber dieser Seiten nimmt den Schutz Ihrer persönlichen Daten sehr ernst. Ich behandle Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
                  <p>Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten ich erhebe und wofür ich sie nutze. Sie erläutert auch, wie und zu welchem Zweck das geschieht.</p>
                  <p>Ich weise darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.</p>
                  
                  <h4>Hinweis zur verantwortlichen Stelle</h4>
                  <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
                  <p>Chris Schubert<br />
                  Hans-Marchwitza-Ring 19<br />
                  14473 Potsdam</p>
                  <p>Telefon: 016094168348<br />
                  E-Mail: schubert_chris@rocketmail.com</p>
                  <p>Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.</p>
                  
                  <h4>Speicherdauer</h4>
                  <p>Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, bleiben Ihre personenbezogenen Daten bei mir, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern ich keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten habe (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.</p>
                  
                  <h4>Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser Website</h4>
                  <p>Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeite ich Ihre personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im Falle einer ausdrücklichen Einwilligung in die Übertragung personenbezogener Daten in Drittstaaten erfolgt die Datenverarbeitung außerdem auf Grundlage von Art. 49 Abs. 1 lit. a DSGVO. Sofern Sie in die Speicherung von Cookies oder in den Zugriff auf Informationen in Ihr Endgerät (z. B. via Device-Fingerprinting) eingewilligt haben, erfolgt die Datenverarbeitung zusätzlich auf Grundlage von § 25 Abs. 1 TTDSG. Die Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten zur Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, verarbeite ich Ihre Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeite ich Ihre Daten, sofern diese zur Erfüllung einer rechtlichen Verpflichtung erforderlich sind auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Die Datenverarbeitung kann ferner auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO erfolgen. Über die jeweils im Einzelfall einschlägigen Rechtsgrundlagen wird in den folgenden Absätzen dieser Datenschutzerklärung informiert.</p>
                  
                  <h4>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h4>
                  <p>Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.</p>
                  
                  <h4>Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)</h4>
                  <p>WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN; DIES GILT AUCH FÜR EIN AUF DIESE BESTIMMUNGEN GESTÜTZTES PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER DATENSCHUTZERKLÄRUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES SEI DENN, WIR KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN ÜBERWIEGEN ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG VON RECHTSANSPRÜCHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).</p>
                  <p>WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH FÜR DAS PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH NACH ART. 21 ABS. 2 DSGVO).</p>
                  
                  <h4>Beschwerderecht bei der zuständigen Aufsichtsbehörde</h4>
                  <p>Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.</p>
                  
                  <h4>Recht auf Datenübertragbarkeit</h4>
                  <p>Sie haben das Recht, Daten, die ich auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeite, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.</p>
                  
                  <h4>Auskunft, Löschung und Berichtigung</h4>
                  <p>Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an mich wenden.</p>
                  
                  <h4>Recht auf Einschränkung der Verarbeitung</h4>
                  <p>Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit an mich wenden. Das Recht auf Einschränkung der Verarbeitung besteht in folgenden Fällen:</p>
                  <ul>
                    <li>Wenn Sie die Richtigkeit Ihrer bei mir gespeicherten personenbezogenen Daten bestreiten, benötige ich in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
                    <li>Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie statt der Löschung die Einschränkung der Datenverarbeitung verlangen.</li>
                    <li>Wenn ich Ihre personenbezogenen Daten nicht mehr benötige, Sie sie jedoch zur Ausübung, Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
                    <li>Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen Ihren und meinen Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
                  </ul>
                  <p>Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten – von ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Europäischen Union oder eines Mitgliedstaats verarbeitet werden.</p>
                  
                  <h3>4. Datenerfassung auf dieser Website</h3>
                  
                  <h4>Kontaktformular</h4>
                  <p>Wenn Sie mir per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei mir gespeichert. Diese Daten gebe ich nicht ohne Ihre Einwilligung weiter.</p>
                  <p>Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf meinem berechtigten Interesse an der effektiven Bearbeitung der an mich gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die Einwilligung ist jederzeit widerrufbar.</p>
                  <p>Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei mir, bis Sie mich zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.</p>
                  
                  <h4>Anfrage per E-Mail, Telefon oder Telefax</h4>
                  <p>Wenn Sie mich per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei mir gespeichert und verarbeitet. Diese Daten gebe ich nicht ohne Ihre Einwilligung weiter.</p>
                  <p>Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf meinem berechtigten Interesse an der effektiven Bearbeitung der an mich gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die Einwilligung ist jederzeit widerrufbar.</p>
                  <p>Die von Ihnen an mich per Kontaktanfragen übersandten Daten verbleiben bei mir, bis Sie mich zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen – insbesondere gesetzliche Aufbewahrungsfristen – bleiben unberührt.</p>
                  
                  <h3>5. Plugins und Tools</h3>
                  
                  <h4>Google Fonts</h4>
                  <p>Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Google Fonts, die von Google bereitgestellt werden. Beim Aufruf einer Seite lädt Ihr Browser die benötigten Fonts in ihren Browsercache, um Texte und Schriftarten korrekt anzuzeigen.</p>
                  <p>Zu diesem Zweck muss der von Ihnen verwendete Browser Verbindung zu den Servern von Google aufnehmen. Hierdurch erlangt Google Kenntnis darüber, dass über Ihre IP-Adresse diese Website aufgerufen wurde. Die Nutzung von Google Fonts erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der einheitlichen Darstellung des Schriftbildes auf seiner Website. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des TTDSG umfasst. Die Einwilligung ist jederzeit widerrufbar.</p>
                  <p>Wenn Ihr Browser Google Fonts nicht unterstützt, wird eine Standardschrift von Ihrem Computer genutzt.</p>
                  <p>Weitere Informationen zu Google Fonts finden Sie unter <a href="https://developers.google.com/fonts/faq" target="_blank" rel="noopener noreferrer">https://developers.google.com/fonts/faq</a> und in der Datenschutzerklärung von Google: <a href="https://policies.google.com/privacy?hl=de" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy?hl=de</a>.</p>
                  
                  <h4>FormSubmit</h4>
                  <p>Ich nutze für mein Kontaktformular den Dienst "FormSubmit". Wenn Sie das Kontaktformular auf meiner Website ausfüllen und absenden, werden die von Ihnen eingegebenen Daten über den Service "FormSubmit" übertragen und per E-Mail an mich weitergeleitet.</p>
                  <p>Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf meinem berechtigten Interesse an der effektiven Bearbeitung der an mich gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), sofern diese abgefragt wurde.</p>
                  <p>Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei mir, bis Sie mich zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z.B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.</p>
                  <p>Weitere Informationen zum Datenschutz bei FormSubmit finden Sie unter: <a href="https://formsubmit.co/privacy.pdf" target="_blank" rel="noopener noreferrer">https://formsubmit.co/privacy.pdf</a>.</p>
                </div>
              </div>
            )}
            
            {activeTab === 'cookies' && (
              <div className="cookies-content">
              <h2>Cookie-Richtlinie</h2>
              <div className="legal-section">
                <h3>Was sind Cookies?</h3>
                <p>Cookies sind kleine Textdateien, die auf Ihrem Computer gespeichert werden und die bestimmte Informationen im Zusammenhang mit Ihrem Besuch einer Website speichern. Cookies können keine Programme ausführen oder Viren auf Ihren Computer übertragen. Sie dienen dazu, das Internetangebot insgesamt nutzerfreundlicher und effektiver zu machen.</p>
                
                <h3>Verwendung von Cookies auf dieser Website</h3>
                <p>Diese Website verwendet keine Cookies für Analyse- oder Marketingzwecke. Es werden lediglich technisch notwendige Cookies verwendet, die für die grundlegende Funktionalität der Website erforderlich sind.</p>
                
                <h4>Technisch notwendige Cookies</h4>
                <p>Diese Cookies sind notwendig, damit Sie durch die Seiten navigieren und wesentliche Funktionen nutzen können. Sie ermöglichen Grundfunktionen wie Seitennavigation und Zugriff auf geschützte Bereiche der Website. Die Website kann ohne diese Cookies nicht richtig funktionieren.</p>
                <p>Rechtsgrundlage für die Verwendung technisch notwendiger Cookies ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse). Mein berechtigtes Interesse besteht darin, eine funktionsfähige Website bereitzustellen.</p>
                
                <h3>Wie Sie die Verwendung von Cookies kontrollieren können</h3>
                <p>Sie können Ihre Browser-Einstellungen anpassen, um das Speichern von Cookies zu deaktivieren oder einzuschränken. Sie können auch bereits gespeicherte Cookies jederzeit löschen. Die dafür notwendigen Schritte und Maßnahmen hängen von Ihrem konkreten Browser ab. Bei Fragen nutzen Sie bitte die Hilfefunktion oder die Dokumentation Ihres Browsers oder wenden Sie sich an dessen Hersteller bzw. Support.</p>
                
                <h3>Externe Dienste</h3>
                <p>Diese Website verwendet keine externen Dienste, die Cookies setzen, wie z.B. Google Analytics, Facebook Pixel oder andere Tracking-Tools für Marketing oder Analysezwecke.</p>
                
                <h3>Kontaktformular und FormSubmit</h3>
                <p>Das auf dieser Website verwendete Kontaktformular nutzt den Dienst FormSubmit zur Übermittlung Ihrer Anfragen. FormSubmit selbst setzt keine Cookies auf Ihrem Gerät.</p>
                
                <h3>Google Fonts</h3>
                <p>Diese Website nutzt Google Fonts zur Darstellung von Schriftarten. Beim Laden der Google Fonts können Daten, einschließlich Ihrer IP-Adresse und der angeforderten Schriftarten, an Server von Google übertragen werden. Weitere Informationen finden Sie in der Datenschutzerklärung unter dem Abschnitt "Google Fonts".</p>
                
                <h3>Cookie-Einwilligung</h3>
                <p>Beim ersten Besuch dieser Website wird Ihnen ein Cookie-Banner angezeigt, mit dem Sie der Verwendung von Google Fonts zustimmen oder diese ablehnen können. Diese Einwilligung wird in Ihrem Browser gespeichert, damit Sie nicht bei jedem Besuch erneut gefragt werden müssen.</p>
                <p>Sie können Ihre Einwilligung jederzeit ändern, indem Sie Ihre Browser-Cookies löschen und die Seite neu laden.</p>
                
                <h3>Änderungen dieser Cookie-Richtlinie</h3>
                <p>Ich behalte mir vor, diese Cookie-Richtlinie anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen meiner Leistungen in der Cookie-Richtlinie umzusetzen, z.B. bei der Einführung neuer Services. Für Ihren erneuten Besuch gilt dann die neue Cookie-Richtlinie.</p>
                
                <h3>Fragen zum Datenschutz</h3>
                <p>Wenn Sie Fragen zum Datenschutz oder zur Verwendung von Cookies auf dieser Website haben, kontaktieren Sie mich bitte über die im Impressum angegebenen Kontaktdaten.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
);
};

export default Rechtliches;