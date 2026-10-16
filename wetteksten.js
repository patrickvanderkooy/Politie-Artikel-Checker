// wetteksten.js - Volledige databank gebaseerd op de officiële Toetsmatrijs PSI en toelichtingen
const database = [
    {
        id: "gw_1",
        law: "Grondwet",
        article: "Artikel 1",
        title: "Gelijkheid & Discriminatieverbod",
        inMatrix: true,
        eis: "De student kan in een praktijksituatie herkennen wanneer sprake is van discriminatie en kan aangeven hoe daar volgens de wet mee omgegaan moet worden. (Grondwet, artikel 1) (T)",
        text: "Allen die zich in Nederland bevinden, worden in gelijke gevallen gelijk behandeld. Discriminatie wegens godsdienst, levensovertuiging, politieke gezindheid, ras, geslacht, handicap, seksuele gerichtheid of op welke grond dan ook, is niet toegestaan.",
        explanation: "Dit is het gelijkheidsbeginsel.\nUitgangspunt is dat gelijke gevallen een gelijke behandeling moeten krijgen. Wat precies een gelijke behandeling is, staat beschreven in de Algemene wet gelijke behandeling.\nEchter, in de praktijk bevindt geen enkel mens zich in een gelijk geval als een ander mens, dus zal de behandeling van de overheid regelmatig moeten verschillen. De overheid mag dit verschil niet willekeurig maken. Dit heet het ‘verbod op willekeur’. Ook mag zij hierin niet discrimineren.\nArtikel 1 Grondwet verbiedt het niet om onderscheid te maken tussen gevallen, maar dit onderscheid moet gerechtvaardigd zijn.\nDUS: willekeur en onrechtvaardig onderscheid zijn verboden."
    },
    {
        id: "gw_10_11",
        law: "Grondwet",
        article: "Artikel 10 & 11",
        title: "Eerbiediging persoonlijke levenssfeer & Onaantastbaarheid lichaam",
        inMatrix: true,
        eis: "De student kan in een praktijksituatie bepalen wanneer de politie bij het uitvoeren van haar taken inbreuk mag maken op rechten uit de Grondwet. (Grondwet, artikel 10 en 11) (T)",
        text: "Art. 10. Eerbiediging persoonlijke levenssfeer\nIeder heeft, behoudens bij of krachtens de wet te stellen beperkingen, recht op eerbiediging van zijn persoonlijke levenssfeer.\nDe wet stelt regels ter bescherming van de persoonlijke levenssfeer in verband met het vastleggen en verstrekken van persoonsgegevens.\nDe wet stelt regels inzake de aanspraken van personen op kennisneming van over hen vastgelegde gegevens en van het gebruik dat daarvan wordt gemaakt, alsmede op verbetering van zodanige gegevens.\n\nArt. 11. Onaantastbaarheid lichaam.\nIeder heeft, behoudens bij of krachtens de wet te stellen beperkingen, recht op onaantastbaarheid van zijn lichaam.",
        explanation: "De artikelen 10 tot en met 13 van de Grondwet beschermen de persoonlijke levenssfeer van de burger. De overheid mag hier inbreuk op maken, echter staan hiervoor wel regels beschreven in bijvoorbeeld de Algemene verordening gegevensbescherming (AVG) of Wet politiegegevens (WPG).\nArtikel 10: Eerbiediging persoonlijke levenssfeer\nPrivacy: Ieder heeft recht op eerbiediging van zijn persoonlijke levenssfeer,\nBeperkingen: behoudens beperkingen bij of krachtens de wet (= niet absoluut).\nArtikel 11: Onaantastbaarheid van het lichaam\nLichamelijke integriteit: Ieder heeft het recht om zelf te bepalen wat er met het eigen lichaam gebeurt, bijvoorbeeld bij medische behandelingen.\nBeperkingen: Net als bij artikel 10, kan dit recht alleen beperkt worden als dit wettelijk is geregeld.\nToepassing: Het beschermt tegen onvrijwillige medische ingrepen of ingrepen in de lichamelijke integriteit."
    },
    {
        id: "gw_12",
        law: "Grondwet",
        article: "Artikel 12",
        title: "Huisrecht",
        inMatrix: true,
        eis: "De student kan uitleggen onder welke voorwaarden binnentreden in een woning zonder toestemming van de bewoner is toegestaan. (Grondwet, artikel 12) (B)",
        text: "Het binnentreden in een woning zonder toestemming van de bewoner is alleen geoorloofd in de gevallen bij of krachtens de wet bepaald, door hen die daartoe bij of krachtens de wet zijn aangewezen.\nVoor het binnentreden overeenkomstig het eerste lid zijn voorafgaande legitimatie en mededeling van het doel van het binnentreden vereist, behoudens bij de wet gestelde uitzonderingen.\nAan de bewoner wordt zo spoedig mogelijk een schriftelijk verslag van het binnentreden verstrekt. Indien het binnentreden in het belang van de nationale veiligheid of dat van de strafvordering heeft plaatsgevonden, kan volgens bij de wet te stellen regels de verstrekking van het verslag worden uitgesteld. In de bij de wet te bepalen gevallen kan de verstrekking achterwege worden gelaten, indien het belang van de nationale veiligheid zich tegen verstrekking blijvend verzet.",
        explanation: "Op grond van dit artikel mag een woning niet worden betreden tenzij hiervoor redenen zijn die dit toestaan.\nZonder toestemming van de bewoner mag je slechts een woning betreden in het geval van hulpverlening (Politiewet art. 7 lid 2) en op basis van een wettelijke bevoegdheid. Als je volgens een wet bevoegd bent binnen te treden, is de awbi van belang. Deze wet regelt de vormvoorschriften voor binnentreden in woningen.\nToestemming = een voor de ambtenaar kenbare uiting van een door de bewoner in vrijheid genomen beslissing om de ambtenaar binnen te laten.\nBewoner = feitelijke gebruiker die er zijn privéleven leidt (dit kan dus ook een huurder zijn):\nGezin >> ouders zijn bewoner.\nZijn de ouders niet thuis >> oudere kinderen zijn bewoner.\nZijn er meer mensen bewoner >> toestemming van één bewoner is voldoende.\nOppas of logé >> als er verder niemand thuis is, hebben zij het recht om al dan niet toestemming te geven.\nEen kraker is ook een bewoner."
    },
    {
        id: "gw_15",
        law: "Grondwet",
        article: "Artikel 15",
        title: "Persoonlijke vrijheid",
        inMatrix: true,
        eis: "De student kan uitleggen wat wordt bedoeld met het recht op vrijheid en onder welke voorwaarden iemand zijn vrijheid mag worden ontnomen. (Grondwet, artikel 15) (B).",
        text: "Buiten de gevallen bij of krachtens de wet bepaald mag niemand zijn vrijheid worden ontnomen.\nHij aan wie anders dan op rechterlijk bevel zijn vrijheid is ontnomen, kan aan de rechter zijn invrijheidstelling verzoeken. Hij wordt in dat geval door de rechter gehoord binnen een bij de wet te bepalen termijn. De rechter gelast de onmiddellijke invrijheidstelling, indien hij de vrijheidsontneming onrechtmatig oordeelt.\nDe berechting van hem aan wie met het oog daarop zijn vrijheid is ontnomen, vindt binnen een redelijke termijn plaats.\nHij aan wie rechtmatig zijn vrijheid is ontnomen, kan worden beperkt in de uitoefening van grondrechten voor zover deze zich niet met de vrijheidsontneming verdraagt.",
        explanation: "De vrijheid van een persoon mag niet worden ontnomen, tenzij dit door de wet is bepaald.\nart. 56a, lid 1 WvSv – ophouden voor onderzoek\nart. 56a, lid 2 WvSv – ophouden voor onderzoek misdrijf VH-feit max. 9 uur, geen VH-feit max. 6 uur. Termijn tussen 24:00 en 09:00 uur wordt niet meegerekend.\nart. 56b, lid 1 WvSv – vaststellen ID niet mogelijk voor geen VH-feit, termijn verlengen met 6 uur op bevel van (h)OvJ.\nart. 57 WvSv – inverzekeringstelling door (h)OvJ. In geval van bevel door hOvJ moet OvJ direct in kennis worden gesteld.\nart. 58, lid 1 en 2 WvSv – in het geval van een VH-feit is inverzekeringstelling mogelijk voor maximaal 3 dagen en kan eenmaal met 3 dagen worden verlengd door OvJ.\nart. 59a, lid 1 WvSv - uiterlijk 3 dagen en 18 uur na tijdstip aanhouding voorgeleiding RC.\nart. 63/64 WvSv – RC op vordering OvJ bevel tot inbewaringstelling van maximaal 14 dagen, verlenging niet mogelijk.\nart. 65/66 lid 1 WvSv – rechtbank op bevel van OvJ bevel tot in gevangenhouding bij verdachte die in bewaring zit van maximaal 90 dagen. Is een verdachte, als de terechtzitting begint, nog op vrije voeten, dan kan de rechtbank ambtshalve of op vordering van de OvJ, een bevel tot gevangenneming van de verdachte uitvaardigen.\nDUS:\nVrijheidsontneming: Niemand mag zomaar worden vastgehouden.\nWettelijke basis: Vrijheidsontneming alleen als dit in een wet is bepaald.\nRechterlijke controle: kan de rechter vragen om hem of haar vrij te laten.\nInvrijheidstelling: De rechter gelast de onmiddellijke invrijheidstelling als de vrijheidsontneming onrechtmatig is.\nUITGANGSPUNT: Wanneer het kan, wordt een verdachte gemotiveerd in vrijheid gesteld. In NL, in vergelijking met andere EU-landen, zitten wel de meeste mensen in voorlopige hechtenis."
    },
    {
        id: "pw_2_3",
        law: "Politiewet 2012",
        article: "Artikel 2 & 3",
        title: "Ambtenaren van politie & Taak politie",
        inMatrix: true,
        eis: "De student kan beschrijven wie volgens de wet als ambtenaren van politie worden beschouwd en wat de taak van de politie is. (Politiewet, artikel 2 en 3) (K)",
        text: "Art. 2. Ambtenaren van politie\nAmbtenaren van politie in de zin van deze wet zijn:\na. ambtenaren die zijn aangesteld voor de uitvoering van de politietaak;\nb. ambtenaren die zijn aangesteld voor de uitvoering van technische, administratieve en andere taken ten dienste van de politie;\nc. vrijwillige ambtenaren die zijn aangesteld voor de uitvoering van de politietaak, onderscheidenlijk voor de uitvoering van technische, administratieve en andere taken ten dienste van de politie;\nd. ambtenaren van de rijksrecherche die zijn aangesteld voor de uitvoering van de politietaak, onderscheidenlijk voor de uitvoering van technische, administratieve en andere taken ten dienste van de rijksrecherche.\n\nArt. 3. Taak politie\nDe politie heeft tot taak in ondergeschiktheid aan het bevoegd gezag en in overeenstemming met de geldende rechtsregels te zorgen voor de daadwerkelijke handhaving van de rechtsorde en het verlenen van hulp aan hen die deze behoeven.",
        explanation: "De politie heeft gelet op artikel 3 de volgende taken:\nDaadwerkelijke handhaving van de rechtsorde\nHet verlenen van hulp aan hen dat behoeven\nOndergeschikt aan het bevoegd gezag\nIn overeenstemming met de geldende rechtsregels\nWie het bevoegd gezag is, is afhankelijk van de situatie:\nDe burgemeester bij de handhaving van de openbare orde en hulpverlening;\nDe OvJ bij de opsporing van strafbare feiten en strafrechtelijke handhaving.\nHet uitvoeren van een buurtonderzoek kan op grond van dit artikel worden gedaan. E.e.a. samen met artikel 141 en 132a WvSv."
    },
    {
        id: "pw_6",
        law: "Politiewet 2012",
        article: "Artikel 6",
        title: "Territoriale bevoegdheid ambtenaar van politie",
        inMatrix: true,
        eis: "De student kan beschrijven dat een politieambtenaar landelijk bevoegd is, maar meestal alleen binnen zijn eigen werkgebied optreedt, tenzij anders toegestaan. (Politiewet, artikel 6) (K)",
        text: "Art. 6. Territoriale bevoegdheid ambtenaar van politie\nDe ambtenaar van politie is bevoegd zijn taak uit te oefenen in het gehele land.\nHoewel bevoegd in het gehele land, onthoudt de ambtenaar van politie die is tewerkgesteld bij een regionale eenheid, zich van optreden buiten zijn gebied van tewerkstelling, tenzij zijn optreden redelijkerwijs noodzakelijk is, dan wel ingevolge regels, gesteld bij of krachtens de wet, dan wel in opdracht of met toestemming van het bevoegd gezag over de politie.",
        explanation: "In eerste instantie opereert een opsporingsambtenaar in een regionale eenheid waar hij is aangesteld, tenzij de aanstelling landelijk is, denk aan de LE Expertise en Operaties en Opsporing en Interventies.\nTwee andere uitzonderingen zijn gelegen in de regelgeving en wanneer het bevoegd gezag hier opdracht/toestemming voor geeft.\nDUS: een politiefunctionaris treedt buiten zijn gebied van tewerkstelling alleen op als dit dringend noodzakelijk is of met toestemming van het bevoegd gezag."
    },
    {
        id: "pw_7_1",
        law: "Politiewet 2012",
        article: "Artikel 7 lid 1",
        title: "Bevoegdheden ambtenaar van politie (Geweld)",
        inMatrix: true,
        eis: "De student kan in een praktijksituatie beoordelen of het gebruik van geweld of vrijheidsbeperkende middelen door een politieambtenaar rechtmatig is (Politiewet, artikel 7 lid 1) (T)",
        text: "Art. 7. Bevoegdheden ambtenaar van politie\nDe ambtenaar van politie die is aangesteld voor de uitvoering van de politietaak, is bevoegd in de rechtmatige uitoefening van zijn bediening geweld of vrijheidsbeperkende middelen te gebruiken, wanneer het daarmee beoogde doel dit, mede gelet op de aan het gebruik hiervan verbonden gevaren, rechtvaardigt en dat doel niet op een andere wijze kan worden bereikt. Aan het gebruik van geweld gaat zo mogelijk een waarschuwing vooraf.",
        explanation: "De ambtenaar die is aangesteld tot uitvoering politietaak is bevoegd in bepaalde situaties geweld te gebruiken op grond van de regels gesteld in de ambtsinstructie. Zo stelt art. 4 Ambtsinstructie dat het gebruik van een geweldmiddel uitsluitend is toegestaan aan een ambtenaar die in het gebruik van dat middel is geoefend. Denk hierbij aan een vuurwapen. Daarnaast moet de ambtenaar in de rechtmatige uitoefening van zijn bediening zijn.\nOnder geweld wordt volgens art. 1 lid 4 Ambtsinstructie elke dwangmatige kracht van meer dan geringe betekenis uitgeoefend op personen of zaken verstaan.\nOok heeft een ambtenaar de bevoegdheid tot het inzetten van vrijheidsbeperkende middelen. Hiervoor gelden dezelfde eisen als voor de geweldsbevoegdheid.\nGewelduitoefening en vrijheidsbeperking moeten subsidiair en proportioneel zijn:\nSubsidiariteit = gematigd: het beoogde doel kan niet op een andere, mildere wijze worden bereikt.\nProportionaliteit = redelijk: het gebruikte geweld moet in verhouding staan tot het beoogde doel.\nPolitieagenten moeten, zoals in de ambtsinstructie staat:\nEerst een waarschuwing geven.\nDe politiefunctionaris die geweld heeft gebruikt moet dit melden aan de HOvJ. Als lichamelijk letsel is ontstaan of een vuurwapen is gebruikt, wordt dit gemeld aan de OvJ.\nOok moet dit in het pv worden opgeschreven als dit redelijkerwijs van belang is voor de beslissing van de rechter."
    },
    {
        id: "pw_7_2",
        law: "Politiewet 2012",
        article: "Artikel 7 lid 2",
        title: "Toegang tot elke plaats ter hulpverlening",
        inMatrix: true,
        eis: "De student kan in een praktijksituatie bepalen of de politie bevoegd is tot het betreden van een plaats ter hulpverlening en houdt hierbij rekening met de voorwaarden gesteld in de Awbi. (Politiewet, artikel 7 lid 2) (T)",
        text: "Art. 7. Bevoegdheden ambtenaar van politie\nDe ambtenaar van politie, bedoeld in het eerste lid, heeft toegang tot elke plaats, voor zover dat voor het verlenen van hulp aan hen die deze behoeven, redelijkerwijs nodig is.",
        explanation: "Dit artikel is de juridische basis om bijvoorbeeld een woning binnen te gaan als er sprake is van een acute medische noodsituatie, huiselijk geweld, of een vermissing, ook wanneer de bewoner daar geen toestemming voor geeft.\nDe Awbi blijft van toepassing, maar biedt uitzonderingen als het gaat om legitimatieplicht (art. 1, lid 2 Awbi) en machtiging (art. 2, lid 3) ter voorkoming of bestrijding van ernstig en onmiddellijk gevaar voor de veiligheid van personen of goederen."
    },
    {
        id: "pw_7_3",
        law: "Politiewet 2012",
        article: "Artikel 7 lid 3",
        title: "Veiligheidsfouillering",
        inMatrix: true,
        eis: "De student kan beschrijven onder welke voorwaarden een onderzoek kleding ten behoeve van veiligheid (veiligheidsfouillering) wordt uitgevoerd. (Politiewet, artikel 7 lid 3) (K)",
        text: "Art. 7. Bevoegdheden ambtenaar van politie\nDe ambtenaar van politie, bedoeld in het eerste lid, is bevoegd tot het onderzoek aan de kleding van personen en het onderzoek van de voorwerpen die personen bij zich dragen of met zich mee voeren bij de uitoefening van een hem wettelijk toegekende bevoegdheid of bij een handeling ter uitvoering van de politietaak, indien uit feiten of omstandigheden blijkt dat een onmiddellijk gevaar dreigt voor hun leven of veiligheid of die van de ambtenaar zelf of van derden, en dit onderzoek noodzakelijk is ter afwending van dit gevaar.",
        explanation: "Dit artikel beschrijft dat een veiligheidsfouillering uitgevoerd mag worden als uit feiten en omstandigheden een onmiddellijk gevaar blijkt voor het leven of veiligheid van de persoon, ambtenaar of van derden. Er moeten concrete aanwijzingen zijn dat de persoon een gevaarlijk voorwerp of een gevaarlijke stof bij zich heeft.\nDaarnaast dient de politieambtenaar bevoegd te zijn bij de uitoefening van een hem toegekende wettelijke bevoegdheid of bij een handeling ter uitvoering van de politietaak. Fouillering moet dus altijd verband houden met het politieoptreden, zoals opsporen van strafbare feiten, handhaven openbare orde of hulpverlening.\nDe veiligheidsfouillering betreft onderzoek aan de kleding van personen en onderzoek aan voorwerpen die persoon met zich meedraagt of vervoert, met als doel het afwenden van gevaar. Denk hierbij aan dat iemand een wapen draagt of door iemand agressief of dreigend gedrag wordt vertoond of er aanwijzingen zijn voor direct gevaar voor agenten of derden. Daarnaast moet het geconstateerde gevaar niet op een andere manier kunnen worden afgewend, zoals de persoon eerst vragen om zakken leeg te maken.\nEr hoeft voor deze veiligheidsfouillering dus geen sprake te zijn van een verdachte, maar mag op elke burger worden toegepast. Van de veiligheidsfouillering moet wel een schriftelijke melding worden gedaan bij de hOvJ.\nLET OP: Veiligheidsfouillering staat nooit op zichzelf, maar houdt altijd verband met ander politieoptreden, bv. tijdens handhaven van de openbare orde, verlenen van hulp.\nBelangrijk onderscheid:\nart. 7 lid 3 Politiewet -> veiligheidsfouillering (orde/veiligheid)\nart. 56 WvSv e.v. -> strafvorderlijke fouillering in het kader van opsporing"
    },
    {
        id: "pw_7_4",
        law: "Politiewet 2012",
        article: "Artikel 7 lid 4",
        title: "Vervoers- en insluitingsfouillering",
        inMatrix: true,
        eis: "De student kan in een praktijksituatie beoordelen of een onderzoek kleding ten behoeve van vervoer (vervoersfouillering) mag worden uitgevoerd. (Politiewet, artikel 7 lid 4) (T)",
        text: "Art. 7. Bevoegdheden ambtenaar van politie\nDe ambtenaar van politie, bedoeld in het eerste lid, is bevoegd een te vervoeren of in te sluiten persoon aan zijn kleding te onderzoeken op de aanwezigheid van voorwerpen die een gevaar voor de veiligheid van betrokkene of voor anderen kunnen vormen, alsmede daartoe de voorwerpen te onderzoeken die betrokkene bij zich draagt of met zich meevoert.",
        explanation: "Dit artikel beschrijft dat een vervoers- en insluitingsfouillering uitgevoerd mag worden bij het vervoeren of insluiten van personen, ook wanneer er geen aantoonbare dreiging is. Als een politieambtenaar een persoon gaat vervoeren of insluiten, is hij bevoegd hem aan zijn kleding en voorwerpen die deze persoon bij zich draagt of meevoert, te onderzoeken."
    },
    {
        id: "pw_7_7",
        law: "Politiewet 2012",
        article: "Artikel 7 lid 7",
        title: "Redelijk en gematigd (Proportionaliteit en Subsidiariteit)",
        inMatrix: true,
        eis: "De student kan beschrijven dat de uitoefening van bepaalde bevoegdheden (benoemd in artikel 7 lid 1 t/m 4) redelijk en gematigd moet zijn in verhouding tot het beoogde doel. (Politiewet, artikel 7 lid 7) (K)",
        text: "Art. 7. Bevoegdheden ambtenaar van politie\nDe uitoefening van de bevoegdheden, bedoeld in het eerste tot en met zesde lid, dient in verhouding tot het beoogde doel redelijk en gematigd te zijn.",
        explanation: "Alle handelingen die in voorgaande leden van artikel 7 van de Politiewet zijn beschreven, zijn onderworpen aan subsidiariteit en proportionaliteit."
    },
    {
        id: "pw_8",
        law: "Politiewet 2012",
        article: "Artikel 8",
        title: "Vorderen inzage identiteitsbewijs",
        inMatrix: true,
        eis: "De student kan in een praktijksituatie bepalen of hij inzage van een identiteitsbewijs mag vorderen van personen tijdens de uitvoering van de politietaak. (Politiewet, artikel 8) (T)",
        text: "Art. 8. Vorderen inzage identiteitsbewijs\nEen ambtenaar van politie die is aangesteld voor de uitvoering van de politietaak, is bevoegd tot het vorderen van inzage van een identiteitsbewijs als bedoeld in artikel 1 van de Wet op de identificatieplicht van personen, voor zover dat redelijkerwijs noodzakelijk is voor de uitoefening van de politietaak.\nGelijke bevoegdheid komt toe aan een buitengewoon opsporingsambtenaar als bedoeld in artikel 142, eerste lid, van het Wetboek van Strafvordering, voor zover dat redelijkerwijs noodzakelijk is voor de uitoefening van zijn taak.\nGelijke bevoegdheid komt toe aan de militair van de Koninklijke marechaussee, voor zover dat redelijkerwijs noodzakelijk is voor de uitvoering van zijn politietaak, bedoeld in artikel 4, eerste lid, en aan de militair van de Koninklijke marechaussee of van enig ander onderdeel van de krijgsmacht die op grond van deze wet bijstand verleent.",
        explanation: "Het vorderen van een identiteitsbewijs mag alleen wanneer er sprake is van de uitvoering van de politietaak (art. 3 Politiewet), te weten:\nStrafrechtelijke handhaving van de rechtsorde (Vooral van toepassing bij niet-aangehouden verdachten; Voor aangehouden verdachten: WvSv).\nHandhaving van openbare orde (Situaties waarin geen sprake is van een concrete verdachte of van strafbare feiten waar een verdenking tegen een bepaalde persoon op kan worden gebaseerd).\nHulpverleningstaak.\nToezichtstaken.\nHet is dus geen controlebevoegdheid waarbij op elk moment een identiteitsbewijs kan worden gevorderd. Ook hierbij geldt proportionaliteit en subsidiariteit.\nIedereen van 14 jaar en ouder is verplicht op eerste vordering een identiteitsbewijs te laten zien.\nHet niet voldoen aan de identificatieplicht is strafbaar gesteld (art. 447e SR).\nDUS: je kunt iemands ID vorderen als je voldoet aan art. 3 Politiewet en als de persoon geen verdachte is. Een verdachte hoeft namelijk niet mee te werken aan zijn eigen veroordeling."
    },
    {
        id: "ai_2",
        law: "Ambtsinstructie",
        article: "Artikel 2",
        title: "Legitimatieplicht politieambtenaar",
        inMatrix: true,
        eis: "De student kan benoemen in welke situaties hij zich moet legitimeren met zijn politie-legitimatiebewijs. (AI, artikel 2) (K)",
        text: "Art. 2. Legitimatie\nDe ambtenaar legitimeert zich met het legitimatiebewijs dat aan hem is verstrekt:\na. bij optreden in burgerkleding ongevraagd, tenzij bijzondere omstandigheden dit onmogelijk maken, en\nb. bij optreden in uniform, op verzoek daartoe.",
        explanation: "Wanneer legitimeren met politie-ID?\nIn uniform --> op verzoek daartoe.\nIn burgerkleding --> ongevraagd, tenzij bijzondere omstandigheden.\nWanneer niet kan worden gelegitimeerd, moet dit concreet worden beschreven in het PV waarom dit niet mogelijk was. Veiligheid, tactische belangen of frustreren van een politieoptreden kunnen hierbij van belang zijn.\nDenk aan omstandigheden als observatie- of infiltratiehandelingen, het schaden van de veiligheid van de ambtenaar of derden, dreigende escalatie, situaties waar een snelle aanhouding of optreden noodzakelijk is.\nLegitimatieplicht geldt voor de politie, de Koninklijke marechaussee en andere opsporingsambtenaren."
    },
    {
        id: "gw_172",
        law: "Gemeentewet",
        article: "Artikel 172",
        title: "Handhaving openbare orde",
        inMatrix: true,
        eis: "De student kan beschrijven welke rol en bevoegdheden de burgemeester heeft bij de handhaving van de openbare orde. (Gemeentewet, artikel 172) (K)",
        text: "Art 172. Handhaving openbare orde\n1. De burgemeester is belast met de handhaving van de openbare orde.\n2. De burgemeester is bevoegd overtredingen van wettelijke voorschriften die betrekking hebben op de openbare orde, te beletten of te beëindigen. Hij bedient zich daarbij van de onder zijn gezag staande politie.\n3. De burgemeester is bevoegd bij verstoring van de openbare orde of bij ernstige vrees voor het ontstaan daarvan, de bevelen te geven die noodzakelijk te achten zijn voor de handhaving van de openbare orde.\n4. De commissaris van de Koning geeft, indien een ordeverstoring van meer dan plaatselijke betekenis dan wel ernstige vrees voor het ontstaan van zodanige ordeverstoring zulks noodzakelijk maakt, de burgemeesters in de provincie zoveel mogelijk na overleg met hen, de nodige aanwijzingen met betrekking tot het door hen ter handhaving van de openbare orde te voeren beleid. De aanwijzingen worden zo enigszins mogelijk schriftelijk gegeven.",
        explanation: "De burgemeester heeft een eigen autonome bevoegdheid voor de openbare orde, waarbij hij gebruik mag maken van de politie. Hij mag bevelen uitgeven bij verstoringen van de openbare orde of het ontstaan daarvan.\nBelangrijk hierbij is dat het bevel zich toespitst op de noodzakelijkheid en tijdelijk karakter van het bevel en dat het bevel niet bedoeld is als algemene bestuursbevoegdheid.\nHet heeft als doel; veiligheid en rust op straat, voorkomen van wanordelijkheden en directe verstoringen van het maatschappelijk leven.\nHet bevel kan ook worden gegeven aan individuen.\nLid 3: lichte bevelsbevoegdheid: Als er sprake is van een acute, concrete dreiging (een \"onmiddellijkheidssituatie\"), mag de burgemeester direct concrete bevelen opleggen aan burgers. Bijvoorbeeld: Het bevelen van groepen om een plein te verlaten (verwijderingsbevel), het sluiten van een pand, gebiedsverbod of samenscholingsverbod.\nLet op: subsidiariteit hier van belang: alleen gebruiken als er geen andere wetgeving (bv. APV) beschikbaar is.\nNiet luisteren/meewerken aan bevel burgemeester lid 3? = Niet voldoen aan bevel, artikel 184 Sr.\nGericht op specifieke persoon/groep mensen.\nVerschil noodverordening (Artikel 176 gemeentewet): Bij de lichte bevelsbevoegdheid zijn er normale omstandigheden maar (vrees voor) lokale, directe verstoring van de orde. Bij een noodverordening is er sprake van een uitzonderlijke omstandigheid, zoals een ramp, rellen/ crisis. De noodverordening geldt ook voor iedereen in een bepaald gebied."
    },
    {
        id: "wpg_1",
        law: "Wet politiegegevens",
        article: "Artikel 1",
        title: "Definitie politiegegevens",
        inMatrix: true,
        eis: "De student kan beschrijven wat wordt verstaan onder politiegegevens en welke soorten gegevens hieronder vallen. (Wet politiegegevens, artikel 1) (K)",
        text: "Art. 1. Definities\nPolitiegegeven: elk persoonsgegeven dat wordt verwerkt in het kader van de uitvoering van de politietaak, bedoeld in de artikelen 3 en 4 van de Politiewet 2012, met uitzondering van:\nde uitvoering van wettelijke voorschriften anders dan de Wet administratiefrechtelijke handhaving verkeersvoorschriften,\nde bij of krachtens de Vreemdelingenwet 2000 opgedragen taken, bedoeld in artikel 1, eerste lid, onderdeel i, onder 1° en artikel 4, eerste lid, onderdeel f, van de Politiewet 2012;\nPersoonsgegeven: alle informatie over een geïdentificeerde of identificeerbare natuurlijke persoon;",
        explanation: "Het specifieke karakter van politiegegevens is dat deze persoonsgegevens verwerkt worden ter uitvoering van de politietaak (artikel 3 & 4 Politiewet).\nDUS: politiegegevens zijn alle persoonsgegevens die de politie verwerkt ten behoeve van de uitvoering van de wettelijke politietaak, waaronder identificatiegegevens, uiterlijke kenmerken, biometrische gegevens en strafrechtelijke informatie. Deze gegevens worden verder gecategoriseerd naar verwerkingsdoel, variërend van de dagelijkse politietaak tot gerichte onderzoeken en inlichtingen over criminele netwerken.\nDeze omschrijving is identiek aan die van de AVG, zij het dat de AVG daar in art. 4, onder 1 nog aan toevoegt dat als identificeerbaar wordt beschouwd een natuurlijke persoon die direct of indirect kan worden geïdentificeerd, met name aan de hand van een identificatiemiddel, zoals een naam, een identificatienummer, locatiegegevens, een online identificatiemiddel of van één of meer elementen die kenmerkend zijn voor de fysieke, fysiologische, genetische, psychische, economische, culturele of sociale identiteit van die natuurlijke persoon."
    },
    {
        id: "wpg_8",
        law: "Wet politiegegevens",
        article: "Artikel 8 lid 1 en 6",
        title: "Uitvoering dagelijkse politietaak",
        inMatrix: true,
        eis: "De student kan beschrijven onder welke voorwaarden politiegegevens kunnen worden verwerkt. (Wet politiegegevens, artikel 8, lid 1 en 6) (K)",
        text: "Art. 8. Uitvoering dagelijkse politietaak\n1. Politiegegevens kunnen worden verwerkt met het oog op de uitvoering van de dagelijkse politietaak gedurende een periode van één jaar na de datum van de eerste verwerking.\n(Lid 2, 3, 4, 5...)\n6. De politiegegevens, die zijn verwerkt op grond van het eerste, tweede en derde lid, worden vernietigd zodra zij niet langer noodzakelijk zijn voor de uitvoering van de dagelijkse politietaak en worden in ieder geval uiterlijk vijf jaar na de datum van eerste verwerking verwijderd.",
        explanation: "Lid 1: Doel verwerking = Politiegegevens alleen verwerken bij uitvoering van de dagelijkse politietaak en voor 1 jaar na datum eerste verwerking. VB: Denk hierbij aan de verwerking van gegevens via de ANPR-camera's.\nLid 6: Bewaartermijn en vernietiging: vernietigen gegevens als ze niet langer noodzakelijk zijn voor uitvoering dagelijkse politietaak en uiterlijk vijf jaar na datum eerste verwerking."
    },
    {
        id: "sr_1",
        law: "Wetboek van Strafrecht",
        article: "Artikel 1",
        title: "Legaliteitsbeginsel",
        inMatrix: true,
        eis: "De student kan beschrijven wanneer een gepleegd feit strafbaar is (legaliteitsbeginsel). (Sr, artikel 1) (K)",
        text: "Art. 1. Legaliteitsbeginsel (ook wel art. 16 Grondwet)\n1. Geen feit is strafbaar dan uit kracht van een daaraan voorafgegane wettelijke strafbepaling.\n2. Bij verandering in de wetgeving na het tijdstip waarop het feit begaan is, worden de voor de verdachte gunstigste bepalingen toegepast.",
        explanation: "De eerste artikelen van het WvSr gaan over de werking van het strafrecht naar tijd en plaats. Hoofdregel is dat ons strafrecht geldt voor ieder die zich op Nederlands grondgebied bevindt.\nLegaliteitsbeginsel (art. 1 Sr en art. 16 GW en art. 7 EVRM) = werking naar tijd: “Geen feit is strafbaar dan uit kracht van een daaraan voorafgegane strafbepaling.”\nEen strafbepaling mag geen terugwerkende kracht hebben.\nMoment van de daad is bepalend, niet van terechtzitting.\nAls er na het plegen van de daad een wijziging in Sr is aangebracht die gunstig is voor de verdachte, moet deze worden aangehouden (art. 1 lid 2 Sr). Dit geldt ook voor hoger beroep en cassatie.\nDe overheid kan alleen bij wet een bepaalde gedraging strafbaar stellen.\nGeen strafbaarstelling op basis van gewoonte.\nAnalogie (oprekken van delictsomschrijvingen) is niet toegestaan.\nUitleggen van de wet is wel toegestaan.\nWet = alle algemeen geldende overheidsvoorschriften, zoals wetten in formele zin, algemene maatregelen van bestuur en provinciale en gemeentelijke verordeningen).\nTerritorialiteitsbeginsel (art. 2 Sr) = werking naar plaats: Het Nederlandse strafrecht is van toepassing op eenieder die zich in Nederland schuldig maakt aan een strafbaar feit.\nUitbreiding van werking naar plaats (art. 3 t/m 7 Sr) en beperking van de werking naar plaats (art. 8 Sr)."
    },
    {
        id: "sr_39",
        law: "Wetboek van Strafrecht",
        article: "Artikel 39",
        title: "Ontoerekenbaarheid",
        inMatrix: true,
        eis: "De student in een praktijksituatie bepalen of iemand ontoerekeningsvatbaar is wegens een psychische stoornis of geestelijke beperking en wat de gevolgen hiervan zijn voor de strafoplegging. (Sr, artikel 39) (T)",
        text: "Art. 39. Ontoerekenbaarheid\nNiet strafbaar is hij die een feit begaat, dat hem wegens de psychische stoornis, psychogeriatrische aandoening of verstandelijke handicap niet kan worden toegerekend.",
        explanation: "Ontoerekenbaarheid = schulduitsluitingsgrond.\nPsychisch gestoorde of geestelijk gehandicapte daders kunnen niet gestraft worden als de daad hem vanwege zijn stoornis, psychogeriatrische aandoening of handicap niet kan worden toegerekend.\nAdagium = geen straf zonder schuld.\nStrafuitsluitingsgronden geven redenen aan waarom een dader die een strafbaar feit pleegt toch niet gestraft wordt. Er wordt onderscheid gemaakt tussen rechtvaardigingsgronden en schulduitsluitingsgronden. Rechtvaardigingsgronden sluiten strafbaarheid uit omdat het feit niet strafbaar is. Schulduitsluitingsgronden sluiten strafbaarheid uit omdat de dader niet strafbaar is."
    },
    {
        id: "sr_40",
        law: "Wetboek van Strafrecht",
        article: "Artikel 40",
        title: "Overmacht",
        inMatrix: true,
        eis: "De student kan in een praktijksituatie bepalen of er sprake is van overmacht als strafuitsluitingsgrond en wat dit betekent voor de strafbaarheid van een verdachte. (Sr, artikel 40) (T)",
        text: "Art. 40. Overmacht\nNiet strafbaar is hij die een feit begaat waartoe hij door overmacht is gedrongen.",
        explanation: "Overmacht:\nPsychische overmacht = schulduitsluitingsgrond. Het gaat om een dusdanig heftige, van buiten komende druk dat de dader daaraan redelijkerwijs geen weerstand kan bieden en ook niet behoefde te bieden, zoals onder schot gehouden worden om een ruit in te tikken. Echter, als je slechts gedreigd wordt met geweld, is het geen psychische overmacht, omdat je naar de politie kan gaan.\nOvermacht als noodtoestand = rechtvaardigingsgrond. Twee plichten die botsen; vaak een wettelijke plicht en een menselijke plicht. Er was een noodsituatie die onmiddellijk om een oplossing vroeg, de afweging voor de menselijke plicht was zwaarder dan de wettelijke plicht, proportionaliteit en subsidiariteit."
    },
    {
        id: "sr_41",
        law: "Wetboek van Strafrecht",
        article: "Artikel 41",
        title: "Noodweer en noodweerexces",
        inMatrix: true,
        eis: "De student kan in een praktijksituatie bepalen of er sprake is van noodweer en noodweerexces en welke juridische gevolgen dit heeft. (Sr, artikel 41) (T)",
        text: "Art. 41. Noodweer/exces\n1. Niet strafbaar is hij die een feit begaat, geboden door de noodzakelijke verdediging van eigen of eens anders lijf, eerbaarheid of goed tegen ogenblikkelijke, wederrechtelijke aanranding.\n2. Niet strafbaar is de overschrijding van de grenzen van noodzakelijke verdediging, indien zij het onmiddellijk gevolg is geweest van een hevige gemoedsbeweging, door de aanranding veroorzaakt.",
        explanation: "Noodweer = rechtvaardigingsgrond. Een dader die zichzelf verdedigt is niet strafbaar. Noodweer kent 5 voorwaarden:\n1. De aanval moet gericht zijn tegen eigen of andermans lijf, eerbaarheid of goed.\n2. De aanval moet ogenblikkelijk zijn.\n3. De aanval moet wederrechtelijk zijn.\n4. Tegen de aanval moet verdediging noodzakelijk zijn.\n5. Het gepleegde feit moet ter verdediging geboden zijn.\nNoodweerexces = schulduitsluitingsgrond. Een beroep is alleen mogelijk in een noodweersituatie. Dader kiest een te zwaar middel om zichzelf te verdedigen door de emoties die door de aanval worden opgeroepen."
    },
    {
        id: "sr_42",
        law: "Wetboek van Strafrecht",
        article: "Artikel 42",
        title: "Wettelijk voorschrift",
        inMatrix: true,
        eis: "De student kan in een praktijksituatie bepalen dat iemand niet strafbaar is vanwege handelen volgens een wettelijk voorschrift of bij rechtmatig ambtelijk optreden. (Sr, art 42) (T)",
        text: "Art. 42. Wettelijk voorschrift\nNiet strafbaar is hij die een feit begaat ter uitvoering van een wettelijk voorschrift.\nNiet strafbaar is de ambtenaar die in de rechtmatige uitoefening van zijn taak en in overeenstemming met zijn geweldsinstructie geweld gebruikt.",
        explanation: "Wettelijk voorschrift = rechtvaardigingsgrond. Niet strafbaar is hij/zij die door het naleven van de wet een strafbaar feit pleegt. Wettelijk voorschrift = van bevoegd gezag, noodzakelijkheid, proportionaliteit en subsidiariteit."
    },
    {
        id: "sr_43",
        law: "Wetboek van Strafrecht",
        article: "Artikel 43",
        title: "Ambtelijk bevel",
        inMatrix: true,
        eis: "De student kan in een praktijksituatie bepalen dat iemand niet strafbaar is omdat hij handelde op grond van een bevoegd gegeven ambtelijk bevel en wanneer dit niet geldt. (Sr, artikel 43) (T)",
        text: "Art. 43. Ambtelijk bevel\n1. Niet strafbaar is hij die een feit begaat ter uitvoering van een ambtelijk bevel, gegeven door het daartoe bevoegde gezag.\n2. Een onbevoegd gegeven ambtelijk bevel heft de strafbaarheid niet op, tenzij het door de ondergeschikte te goeder trouw als bevoegd gegeven werd beschouwd en de nakoming daarvan binnen de kring van zijn ondergeschiktheid was gelegen.",
        explanation: "Ambtelijk bevel = rechtvaardigingsgrond. Voorwaarde is dat het bevel bevoegd is gegeven.\nOnbevoegd gegeven ambtelijk bevel = schulduitsluitingsgrond. Heft de strafbaarheid alleen op als de dader er redelijkerwijs vanuit mocht gaan dat het bevel wel bevoegd gegeven was."
    },
    {
        id: "sr_45_46_46b",
        law: "Wetboek van Strafrecht",
        article: "Artikel 45, 46 en 46b",
        title: "Poging, voorbereiding en vrijwillige terugtred",
        inMatrix: true,
        eis: "De student kan in een praktijksituatie bepalen wanneer er sprake is van een strafbare poging of voorbereiding. (Sr, artikel 45, 46 en 46b) (T)",
        text: "Art. 45. Poging tot misdrijf\nPoging tot misdrijf is strafbaar, wanneer het voornemen van de dader zich door een begin van uitvoering heeft geopenbaard...\n\nArt. 46. Voorbereiding ernstig misdrijf\nVoorbereiding van een misdrijf waarop naar de wettelijke omschrijving een gevangenisstraf van acht jaren of meer is gesteld is strafbaar...\n\nArt. 46b. Vrijwillige niet-voltooiing\nVoorbereiding noch poging bestaat indien het misdrijf niet is voltooid ten gevolge van omstandigheden van de wil van de dader afhankelijk.",
        explanation: "Voor een poging tot een misdrijf gelden voorwaarden: Voornemen (opzet), Begin van de uitvoering, Geen vrijwillige terugtred.\nIn art. 46 Sr zijn voor enkele ernstige misdrijven voorbereidingshandelingen strafbaar gesteld.\nArt. 46b Sr (vrijwillige terugtred) is ook voor voorbereidingshandelingen van toepassing."
    },
    {
        id: "sr_47_48",
        law: "Wetboek van Strafrecht",
        article: "Artikel 47 & 48",
        title: "Daderschap en medeplichtigheid",
        inMatrix: true,
        eis: "De student kan in een praktijksituatie bepalen of er sprake is van het plegen van een misdrijf en wie er als daders worden gestraft en of er sprake is van medeplichtigheid aan een misdrijf. (Sr, artikel 47 en 48) (T)",
        text: "Art. 47. Daders\nAls daders van een strafbaar feit worden gestraft: 1° zij die het feit plegen, doen plegen of medeplegen; 2° zij die... het feit opzettelijk uitlokken.\n\nArt. 48. Medeplichtigen\nAls medeplichtigen van een misdrijf worden gestraft: 1° zij die opzettelijk behulpzaam zijn... 2° zij die opzettelijk gelegenheid, middelen of inlichtingen verschaffen...",
        explanation: "Deelnemingsvormen: Pleger, Doen-pleger, Medepleger, Uitlokker, Medeplichtige."
    },
    {
        id: "sr_138",
        law: "Wetboek van Strafrecht",
        article: "Artikel 138",
        title: "Huisvredebreuk",
        inMatrix: true,
        eis: "De student kan in een praktijksituatie beoordelen of sprake is van huisvredebreuk. (Sr, artikel 138) (T)",
        text: "Art. 138. Huisvredebreuk\nHij die in de woning of het besloten lokaal of erf, bij een ander in gebruik, wederrechtelijk binnendringt of, wederrechtelijk aldaar vertoevende, zich niet op de vordering van of vanwege de rechthebbende aanstonds verwijdert, wordt gestraft...",
        explanation: "Huisvredebreuk = recht van bewoner om rustig en zonder ongewenste aanwezigen in eigen huis zijn gang te kunnen gaan. Twee varianten: actieve dader (wederrechtelijk binnendringen) en passieve dader (weigert zich op vordering te verwijderen)."
    },
    {
        id: "sr_139",
        law: "Wetboek van Strafrecht",
        article: "Artikel 139",
        title: "Lokaalvredebreuk",
        inMatrix: true,
        eis: "De student kan in een praktijksituatie bepalen of er sprake is van het onbevoegd binnendringen van een niet-openbaar gebouw en welke strafrechtelijke gevolgen dit heeft. (Sr, artikel 139) (T)",
        text: "Art. 139. Lokaalvredebreuk\nHij die in een voor de openbare dienst bestemd lokaal wederrechtelijk binnendringt...",
        explanation: "Het verschil tussen artikel 138 en 139 is de ruimte die beschermd wordt. In 138 is dat de woning/besloten lokaal/erf, in 139 gaat het om voor de openbare dienst bestemde lokalen (zoals gemeentehuis, bibliotheek)."
    },
    {
        id: "sr_141",
        law: "Wetboek van Strafrecht",
        article: "Artikel 141",
        title: "Openlijke geweldpleging",
        inMatrix: true,
        eis: "De student kan in een praktijksituatie bepalen of er sprake is van openlijke geweldpleging. (Sr, artikel 141) (T)",
        text: "Art. 141. Openlijke geweldpleging\nZij die openlijk in vereniging geweld plegen tegen personen of goederen, worden gestraft...",
        explanation: "Groepsaansprakelijkheid: je hoeft niet zelf fysiek geweld te hebben gepleegd om strafbaar te zijn. Bestanddelen: openlijk, in vereniging, geweld plegen tegen personen of goederen."
    },
    {
        id: "sr_177",
        law: "Wetboek van Strafrecht",
        article: "Artikel 177 lid 1",
        title: "Ambtelijke omkoping (Actief)",
        inMatrix: true,
        eis: "De student kan in een praktijksituatie bepalen of er sprake is van ambtelijke omkoping en welke strafrechtelijke gevolgen dit heeft. (Sr, artikel 177 lid 1) (T)",
        text: "Art. 177. Omkoping ambtenaar\nMet gevangenisstraf... wordt gestraft: 1° hij die een ambtenaar een gift of belofte doet... met het oogmerk om hem te bewegen in zijn bediening iets te doen of na te laten...",
        explanation: "Ambtelijke omkoping art. 177 Sr = Actieve omkoping. Gaat om twee strafbare handelingen: het omkopen van een ambtenaar of het belonen van een ambtenaar."
    },
    {
        id: "sr_180",
        law: "Wetboek van Strafrecht",
        article: "Artikel 180",
        title: "Wederspannigheid",
        inMatrix: true,
        eis: "De student kan in een praktijksituatie bepalen of er sprake is van wederspannigheid en welke strafbare gedragingen hieronder vallen. (Sr, artikel 180) (T)",
        text: "Art. 180. Wederspannigheid\nHij die zich met geweld of bedreiging met geweld verzet tegen een ambtenaar werkzaam in de rechtmatige uitoefening van zijn bediening...",
        explanation: "Wederspannigheid (verzet) = zich met geweld of bedreiging met geweld verzetten tegen een ambtenaar tijdens zijn werk. Passief verzet is niet strafbaar."
    },
    {
        id: "sr_184",
        law: "Wetboek van Strafrecht",
        article: "Artikel 184",
        title: "Niet voldoen aan ambtelijk bevel/vordering",
        inMatrix: true,
        eis: "De student kan in een praktijksituatie bepalen of een persoon zich schuldig maakt aan het niet voldoen aan een ambtelijk bevel en welke gevolgen dit heeft. (Sr, artikel 184) (T)",
        text: "Art. 184. Niet voldoen aan bevel/vordering; beletten, belemmeren, verijdelen\nHij die opzettelijk niet voldoet aan een bevel of een vordering... of enige handeling... belet, belemmert of verijdelen...",
        explanation: "Niet voldoen aan ambtelijk bevel/vordering richt zich tegen de handelingen of bevelen van de ambtenaar, niet tegen de ambtenaar zelf zoals bij wederspannigheid."
    },
    {
        id: "sr_207",
        law: "Wetboek van Strafrecht",
        article: "Artikel 207",
        title: "Meineed",
        inMatrix: true,
        eis: "De student kan in een praktijksituatie bepalen of er sprake is van meineed en welke sancties hierop staan. (Sr, artikel 207) (T)",
        text: "Art. 207. Meineed\nHij die in de gevallen waarin een wettelijk voorschrift een verklaring onder ede vordert... opzettelijk een valse verklaring onder ede aflegt...",
        explanation: "Meineed art. 207 Sr: mondeling of schriftelijk, opzettelijk valse verklaring afleggen onder ede (niet bij politieverhoren, wel in de rechtbank)."
    },
    {
        id: "sr_225",
        law: "Wetboek van Strafrecht",
        article: "Artikel 225",
        title: "Valsheid in geschrifte",
        inMatrix: true,
        eis: "De student kan in een praktijksituatie beoordelen wanneer sprake is van valsheid in geschrifte en welke strafrechtelijke gevolgen dit kan hebben, ook wanneer dit verband houdt met terroristische misdrijven. (Sr, artikel 225) (T)",
        text: "Art. 225. Valsheid in geschrifte\nHij die in een authentieke akte een valse opgave doet opnemen... of opzettelijk gebruik maakt van de akte...",
        explanation: "Onder valsheid in geschrifte vallen verschillende handelingen waarbij een document bewust onjuist wordt opgesteld of gebruikt. Oogmerk terroristisch misdrijf = +1/3 straf."
    },
    {
        id: "sr_251",
        law: "Wetboek van Strafrecht",
        article: "Artikel 251 lid 1 onder c",
        title: "Grooming (Sexchatting)",
        inMatrix: true,
        eis: "De student kan in een praktijksituatie bepalen of er sprake is van grooming (Sr, artikel 251 lid 1 onder c) (T)",
        text: "Art. 251. Sexchatting/seksueel corrumperen/grooming\nDegene die een kind beneden de leeftijd van zestien jaren... een ontmoeting voorstelt voor seksuele doeleinden en enige handeling onderneemt tot het verwezenlijken van die ontmoeting...",
        explanation: "Grooming art. 251 Sr = aangewezen VH-feit. Het via internet of fysiek benaderen van een kind jonger dan 16 jaar met als doel een ontmoeting te arrangeren."
    },
    {
        id: "sr_261",
        law: "Wetboek van Strafrecht",
        article: "Artikel 261",
        title: "Smaad en smaadschrift",
        inMatrix: true,
        eis: "De student kan in een praktijksituatie bepalen of er sprake is van smaad of smaadschrift (Sr, artikel 261) (T)",
        text: "Art. 261. Smaad, smaadschrift\nHij die opzettelijk iemands eer of goede naam aanrandt, door telastlegging van een bepaald feit...",
        explanation: "Smaad art. 261 Sr = opzettelijk iemands eer of goede naam aanranden door beschuldiging van een bepaald feit. Smaad = mondeling, smaadschrift = schriftelijk/afbeelding."
    },
    {
        id: "sr_285",
        law: "Wetboek van Strafrecht",
        article: "Artikel 285",
        title: "Bedreiging",
        inMatrix: true,
        eis: "De student kan in een praktijksituatie bepalen of er sprake is van bedreiging. (Sr, artikel 285) (T)",
        text: "Art. 285. Bedreiging\nBedreiging met openlijk in vereniging geweld plegen tegen personen of goederen...",
        explanation: "Bedreiging art. 285 Sr = aangewezen VH-feit. Het is strafbaar om iemand te bedreigen met een misdrijf door woorden of daden."
    },
    {
        id: "sr_285b",
        law: "Wetboek van Strafrecht",
        article: "Artikel 285b",
        title: "Belaging (Stalking)",
        inMatrix: true,
        eis: "De student kan in een praktijksituatie bepalen of er sprake is van belaging. (Sr, artikel 285b) (T)",
        text: "Art. 285b. Belaging\nHij, die wederrechtelijk stelselmatig opzettelijk inbreuk maakt op eens anders persoonlijke levenssfeer...",
        explanation: "Belaging (stalking) art. 285b Sr = aangewezen VH-feit. Herhaaldelijk lastigvallen waardoor inbreuk wordt gemaakt op de privacy."
    },
    {
        id: "sr_285d",
        law: "Wetboek van Strafrecht",
        article: "Artikel 285d",
        title: "Doxing",
        inMatrix: true,
        eis: "De student kan in een praktijksituatie bepalen of er sprake is van doxing. (Sr, artikel 285d) (T)",
        text: "Art. 285d. Gebruik persoonsgegevens voor intimiderende doeleinden (doxing)\nDegene die zich persoonsgegevens van een ander of een derde verschaft, deze gegevens verspreidt... met het oogmerk om die ander vrees aan te jagen...",
        explanation: "Doxing art. 285d Sr = aangewezen VH-feit. Het delen van privégegevens om iemand te intimideren, angst aan te jagen of overlast te bezorgen."
    },
    {
        id: "sr_287",
        law: "Wetboek van Strafrecht",
        article: "Artikel 287",
        title: "Doodslag",
        inMatrix: true,
        eis: "De student kan benoemen wanneer er sprake is van doodslag. (Sr, artikel 287) (K)",
        text: "Art. 287. Doodslag\nHij die opzettelijk een ander van het leven berooft, wordt, als schuldig aan doodslag, gestraft...",
        explanation: "Doodslag (art. 287 Sr): Dit is de grondvorm van de levensdelicten. Bestanddelen: Opzettelijk, Een ander, Van het leven beroven."
    },
    {
        id: "sr_289",
        law: "Wetboek van Strafrecht",
        article: "Artikel 289",
        title: "Moord",
        inMatrix: true,
        eis: "De student kan benoemen wanneer er sprake is van moord. (Sr, artikel 289) (K)",
        text: "Art. 289. Moord\nHij die opzettelijk en met voorbedachten rade een ander van het leven berooft, wordt, als schuldig aan moord, gestraft...",
        explanation: "Moord 289 Sr bestanddelen: Opzettelijk, Met voorbedachten rade, Een ander, Van het leven beroven. Voorbedachte rade = moment van kalm overleg."
    },
    {
        id: "sr_300",
        law: "Wetboek van Strafrecht",
        article: "Artikel 300",
        title: "Eenvoudige mishandeling",
        inMatrix: true,
        eis: "De student kan in een praktijksituatie bepalen of er sprake is van eenvoudige mishandeling. (Sr, artikel 300) (T)",
        text: "Art. 300. Eenvoudige mishandeling\nMishandeling wordt gestraft... Indien het feit zwaar lichamelijk letsel ten gevolge heeft...",
        explanation: "Eenvoudige mishandeling 300 Sr = aangewezen VH-feit. Opzettelijk toebrengen van lichaamspijn of ander lichamelijk letsel aan een ander."
    },
    {
        id: "sr_302",
        law: "Wetboek van Strafrecht",
        article: "Artikel 302",
        title: "Zware mishandeling",
        inMatrix: true,
        eis: "De student kan in een praktijksituatie inschatten of er sprake is van (poging tot) zware mishandeling (Sr, artikel 45 en 302) (T)",
        text: "Art. 302. Zware mishandeling\nHij die aan een ander opzettelijk zwaar lichamelijk letsel toebrengt...",
        explanation: "Zware mishandeling 302 Sr. De opzet van de dader is gericht op het toebrengen van zwaar lichamelijk letsel. Drie centrale criteria Hoge Raad: aard van het letsel, noodzaak medisch ingrijpen, uitzicht op herstel."
    },
    {
        id: "sr_310_311_312",
        law: "Wetboek van Strafrecht",
        article: "Artikel 310, 311 en 312",
        title: "Diefstal, gekwalificeerde diefstal en diefstal met geweld",
        inMatrix: true,
        eis: "De student kan in een praktijksituatie bepalen wanneer er sprake is van diefstal, gekwalificeerde diefstal en diefstal met geweld. (Sr, artikel 310, 311 en 312) (T)",
        text: "Art. 310. Diefstal... Art. 311. Diefstal onder verzwarende omstandigheden... Art. 312. Diefstal met geweldpleging...",
        explanation: "Diefstal 310 Sr (goed wegnemen met oogmerk van wederrechtelijke toe-eigening). Art 311 (verzwarende omstandigheden/gekwalificeerde diefstal). Art 312 (diefstal voorafgegaan, vergezeld of gevolgd van geweld of bedreiging met geweld)."
    },
    {
        id: "sr_317",
        law: "Wetboek van Strafrecht",
        article: "Artikel 317",
        title: "Afpersing",
        inMatrix: true,
        eis: "De student kan in een praktijksituatie bepalen of er sprake is van afpersing. (Sr, artikel 317) (T)",
        text: "Art. 317. Afpersing\nHij die, met het oogmerk om zich of een ander wederrechtelijk te bevoordelen, door geweld of bedreiging met geweld iemand dwingt...",
        explanation: "Afpersing = het oogmerk om zichzelf of een ander wederrechtelijk te bevoordelen door geweld of bedreiging met geweld iemand te dwingen tot afgifte van enig goed..."
    },
    {
        id: "sr_321_326_350_350a",
        law: "Wetboek van Strafrecht",
        article: "Artikel 321, 326, 350 lid 1 en 350a",
        title: "Verduistering, oplichting, vernieling en computergegevens",
        inMatrix: true,
        eis: "De student kan in een praktijksituatie bepalen wanneer er sprake is van verduistering, oplichting en vernieling van goederen en computergegevens. (SR, artikel 321, 326, 350 lid 1 en 350a) (T)",
        text: "Art. 321. Verduistering... Art. 326. Oplichting... Art. 350. Vernieling... Art. 350a. Vernieling computergegevens...",
        explanation: "Verduistering (goed reeds rechtmatig onder zich en zich toe-eigenen). Oplichting (bedrog zoals valse naam, hoedanigheid, listige kunstgrepen). Vernieling (opzettelijk en wederrechtelijk goed vernielen/beschadigen). Computergegevens vernieling."
    },
    {
        id: "sr_416_417bis",
        law: "Wetboek van Strafrecht",
        article: "Artikel 416 en 417bis",
        title: "Opzetheling en schuldheling",
        inMatrix: true,
        eis: "De student kan beschrijven wanneer er sprake is van opzetheling en schuldheling. (Sr, artikel 416 en 417bis) (K)",
        text: "Art. 416. Opzetheling... Art. 417bis. Schuldheling...",
        explanation: "Opzetheling 416 Sr (wist dat het door misdrijf verkregen goed betrof). Schuldheling 417bis Sr = aangewezen VH-feit (redelijkerwijs moeten vermoeden)."
    },
    {
        id: "sr_370",
        law: "Wetboek van Strafrecht",
        article: "Artikel 370",
        title: "Ambtelijke huisvredebreuk",
        inMatrix: true,
        eis: "De student kan beschrijven wanneer een ambtenaar strafbaar is bij onrechtmatig binnentreden of doorzoeken. (Sr, artikel 370) (K)",
        text: "Art. 370. Binnentreden woning. Overschrijding bevoegdheid, niet inachtneming vormen bij doorzoeking\nDe ambtenaar die, met overschrijding van zijn bevoegdheid... diens ondanks binnentreedt...",
        explanation: "Ambtelijke huisvredebreuk 370 Sr: een politiefunctionaris pleegt ambtelijke huisvredebreuk als hij een woning binnengaat zonder bevoegdheid of zonder de regels na te leven."
    },
    {
        id: "sr_424",
        law: "Wetboek van Strafrecht",
        article: "Artikel 424",
        title: "Baldadigheid / Straatschenderij",
        inMatrix: true,
        eis: "De student kan beschrijven wat wordt verstaan onder baldadigheid. (Sr, artikel 424) (K)",
        text: "Art. 424. Straatschenderij/Baldadigheid\nHij die op of aan de openbare weg... enige baldadigheid pleegt waardoor gevaar of nadeel kan worden teweeggebracht...",
        explanation: "Baldadigheid/straatschenderij 424 Sr = overtreding. Het gaat de dader vooral om het plezier van de daad zelf. Verschil met vernieling zit in opzet."
    },
    {
        id: "sr_435_4",
        law: "Wetboek van Strafrecht",
        article: "Artikel 435 onder 4",
        title: "Opgeven valse identiteitsgegevens",
        inMatrix: true,
        eis: "De student kan in een praktijksituatie bepalen of er sprake is van het opgeven van valse identiteitsgegevens. (Sr, artikel 435 onder 4) (T)",
        text: "Art. 435. Valse identificerende persoonsgegevens, enz.\nMet geldboete van de tweede categorie wordt gestraft: 4° hij die, door het bevoegd gezag naar zijn identificerende persoonsgegevens gevraagd, een valse naam... opgeeft.",
        explanation: "Opgeven van valse identiteitsgegevens 435 Sr = overtreding. Kan alleen als er door het bevoegd gezag om gevraagd is in rechtmatige uitoefening van beroep."
    },
    {
        id: "sr_447e",
        law: "Wetboek van Strafrecht",
        article: "Artikel 447e",
        title: "Niet voldoen aan identificatieplicht / vingerafdrukken",
        inMatrix: true,
        eis: "De student kan in een praktijksituatie bepalen of er sprake is van het niet voldoen aan de verplichting een identiteitsbewijs ter inzage aan te bieden of medewerking verlenen aan het nemen van vingerafdrukken. (Sr, artikel 447e) (T)",
        text: "Art. 447e. Niet voldoen aan identificatieplicht\nHij die niet voldoet aan de verplichting om een identiteitsbewijs ter inzage aan te bieden of medewerking te verlenen aan het nemen van een of meer vingerafdrukken...",
        explanation: "Niet voldoen identificatieplicht 447e Sr = overtreding. Algemene identificatieplicht voor iedereen vanaf 14 jaar."
    },
    {
        id: "sv_1",
        law: "Wetboek van Strafvordering",
        article: "Artikel 1",
        title: "Legaliteitsbeginsel strafvordering",
        inMatrix: true,
        eis: "De student kan beschrijven dat strafvordering alleen mag plaatsvinden op de wijze zoals bij wet is geregeld (legaliteitsbeginsel). (Sv, artikel 1) (K)",
        text: "Art. 1. Legaliteitsbeginsel\nStrafvordering heeft alleen plaats op de wijze bij de wet voorzien.",
        explanation: "Het formele strafrecht (strafprocesrecht) geeft aan wat politie en justitie mogen doen als zij een strafbaar feit op het spoor zijn."
    },
    {
        id: "sv_27",
        law: "Wetboek van Strafvordering",
        article: "Artikel 27",
        title: "Definitie verdachte",
        inMatrix: true,
        eis: "De student kan in een praktijksituatie bepalen of er sprake is van een verdachte. (Sv, artikel 27) (T).",
        text: "Art. 27. Definitie verdachte\n1. Als verdachte wordt vóórdat de vervolging is aangevangen, aangemerkt degene te wiens aanzien uit feiten of omstandigheden een redelijk vermoeden van schuld aan een strafbaar feit voortvloeit.\n2. Daarna wordt als verdachte aangemerkt degene tegen wie de vervolging is gericht.",
        explanation: "De politie mag enkel dwangmiddelen toepassen als er sprake is van een verdachte. Redelijk vermoeden van schuld op basis van concrete feiten of omstandigheden."
    },
    {
        id: "sv_27c_28_29",
        law: "Wetboek van Strafvordering",
        article: "Artikel 27c, 27d, 28, 28a, 28b en 29",
        title: "Rechten van de verdachte (Informatie, Raadsman, Zwijgrecht)",
        inMatrix: true,
        eis: "De student kan beschrijven welke rechten een verdachte heeft. (Sv, artikel 27c, 27d lid 1, 28, 28a, 28b en 29 lid 1 en 2) (K)",
        text: "Art. 27c. Meedelen rechten... Art. 28. Bijstand raadsman... Art. 29. Verhoor verdachte (cautie)...",
        explanation: "Recht op informatie (folder), recht op bijstand van een raadsman (Salduz), tolk/vertaling, afstand rechtsbijstand, zwijgrecht (cautie)."
    },
    {
        id: "sv_27cb",
        law: "Wetboek van Strafvordering",
        article: "Artikel 27cb",
        title: "Plaats van verhoor",
        inMatrix: true,
        eis: "De student kan beschrijven waar het verhoor van een aangehouden verdachte volgens de wet plaatsvindt. (Sv, artikel 27cb) (K)",
        text: "Art. 27cb. Plaats verhoor\nHet verhoor van een aangehouden verdachte vindt zoveel mogelijk plaats op een plaats die is bestemd voor het verhoren van verdachten...",
        explanation: "Zoveel mogelijk op het politiebureau of een andere door de hulpofficier of officier van justitie aangewezen plaats van verhoor."
    },
    {
        id: "sv_52",
        law: "Wetboek van Strafvordering",
        article: "Artikel 52",
        title: "Staande houden",
        inMatrix: true,
        eis: "De student kan benoemen onder welke voorwaarden iemand mag worden staande gehouden. (Sv, artikel 52) (K)",
        text: "Art. 52. Staande houden\nIedere opsporingsambtenaar is bevoegd de identiteit van de verdachte vast te stellen... en hem daartoe staande te houden.",
        explanation: "Staande houden = verdachte kort ophouden om hem/haar naar zijn identiteitsgegevens te vragen. Alleen op verdachten toepasbaar."
    },
    {
        id: "sv_53_54",
        law: "Wetboek van Strafvordering",
        article: "Artikel 53 & 54",
        title: "Aanhouding bij heterdaad en buiten heterdaad",
        inMatrix: true,
        eis: "De student kan benoemen wanneer een verdachte mag worden aangehouden. (Sv, artikel 53 en 54) (K)",
        text: "Art. 53. Aanhouding bij heterdaad... Art. 54. Aanhouding buiten heterdaad...",
        explanation: "Aanhouding op heterdaad (door eenieder). Aanhouding buiten heterdaad (op bevel van de OvJ/HOvJ voor misdrijven waarvoor voorlopige hechtenis is toegelaten)."
    },
    {
        id: "sv_55c",
        law: "Wetboek van Strafvordering",
        article: "Artikel 55c",
        title: "Vaststellen identiteit aangehouden verdachte",
        inMatrix: true,
        eis: "De student kan beschrijven hoe de identiteit van de aangehouden verdachte moet worden vastgesteld. (Sv 55c) (K)",
        text: "Art. 55c. Vaststellen identiteit aangehouden verdachte...\nDe ambtenaren nemen... foto's en vingerafdrukken bij misdrijven als omschreven in artikel 67 lid 1.",
        explanation: "Identiteit vaststellen via art. 27a. Bij VH-feiten worden verplicht foto's en vingerafdrukken genomen."
    },
    {
        id: "sv_55_55a",
        law: "Wetboek van Strafvordering",
        article: "Artikel 55 & 55a",
        title: "Betreden en doorzoeken plaatsen ter aanhouding",
        inMatrix: true,
        eis: "De student kan in een praktijksituatie bepalen of een plaats mag worden betreden en/of doorzoeken ter aanhouding en houdt hierbij rekening met de voorwaarden gesteld in de Awbi. (Sv, artikel 55 en 55a) (T)",
        text: "Art. 55. Aanhouden: plaats of woning betreden... Art. 55a. Doorzoeken ter aanhouding...",
        explanation: "Betreden en doorzoeken van plaatsen ter aanhouding van de verdachte. Voor woning is Awbi vereist."
    },
    {
        id: "sv_55b_56",
        law: "Wetboek van Strafvordering",
        article: "Artikel 55b & 56",
        title: "Identificatiefouillering en opsporingsfouillering",
        inMatrix: true,
        eis: "De student kan in een praktijksituatie bepalen of en hoe onderzoek aan lichaam en kleding mag worden gedaan. (Sv, artikel 55b en 56) (T)",
        text: "Art. 55b. Identificatiefouillering... Art. 56. Onderzoek aan kleding/lichaam...",
        explanation: "Identificatiefouillering (art. 55b) en Opsporingsfouillering (art. 56 door (h)OvJ bij ernstige bezwaren)."
    },
    {
        id: "sv_56a_56b_61a",
        law: "Wetboek van Strafvordering",
        article: "Artikel 56a, 56b & 61a",
        title: "Ophouden voor onderzoek en onderzoeksmaatregelen",
        inMatrix: true,
        eis: "De student kan in een praktijksituatie bepalen hoe lang een aangehouden verdachte mag worden opgehouden voor onderzoek en welke maatregelen in het belang van het onderzoek kunnen worden toegepast. (Sv, artikel 56a, 56b en 61a) (T)",
        text: "Art. 56a. Ophouden voor onderzoek (max 9 uur VH / 6 uur geen VH)... Art. 56b. Ophouden ter identificatie... Art. 61a. Onderzoeksmaatregelen...",
        explanation: "Termijnen voor ophouden voor onderzoek, verlenging voor identificatie en maatregelen in het belang van het onderzoek."
    },
    {
        id: "sv_57_58",
        law: "Wetboek van Strafvordering",
        article: "Artikel 57 & 58",
        title: "Inverzekeringstelling (IVS)",
        inMatrix: true,
        eis: "De student kan beschrijven wanneer en hoe lang een verdachte in verzekering kan worden gesteld. (Sv, artikel 57 en 58) (K)",
        text: "Art. 57. Ivs... Art. 58. Ivs: gevallen/termijnen/invrijheidstelling...",
        explanation: "Inverzekeringstelling door (h)OvJ in het belang van het onderzoek voor misdrijven waarvoor voorlopige hechtenis is toegelaten. Maximaal 3 dagen (verlengbaar met 3 dagen)."
    },
    {
        id: "sv_67",
        law: "Wetboek van Strafvordering",
        article: "Artikel 67 lid 1 & 2",
        title: "Misdrijven waarvoor voorlopige hechtenis is toegelaten",
        inMatrix: true,
        eis: "De student kan beschrijven voor welke strafbare feiten uit deze toetsmatrijs voorlopige hechtenis is toegelaten. (Sv, art. 67 lid 1 en lid 2) (K)",
        text: "Art. 67. Misdrijven waarvoor vh is toegelaten\nEen bevel tot voorlopige hechtenis kan worden gegeven in geval van verdenking van: 1° misdrijf met gevangenisstraf van vier jaren of meer; 2° specifieke benoemde misdrijven...",
        explanation: "Voorlopige hechtenis (voorarrest) omvat inbewaringstelling, gevangenhouding en gevangenneming. Gronden omschreven in art. 67a Sv."
    },
    {
        id: "sv_94_95_96_96a_96b",
        law: "Wetboek van Strafvordering",
        article: "Artikel 94 t/m 96b",
        title: "Inbeslagneming (Ibn), Uitlevering en Vervoermiddel doorzoeken",
        inMatrix: true,
        eis: "De student kan in een praktijksituatie bepalen of een voorwerp vatbaar is voor inbeslagneming en wanneer hij bevoegd is tot inbeslagneming. (Sv, artikelen 94, 95, 96, 96a, 96b) (T)",
        text: "Art. 94. Vatbaarheid... Art. 95. Ibn bij staande en aanhouding... Art. 96. Ibn bij heterdaad... Art. 96a. Bevel uitlevering... Art. 96b. Doorzoeken vervoermiddel...",
        explanation: "Vatbaarheid voor inbeslagneming (waarheid aan dag, verbeurdverklaring, wederrechtelijk verkregen voordeel). Bevoegdheden opsporingsambtenaren."
    },
    {
        id: "sv_96c_97",
        law: "Wetboek van Strafvordering",
        article: "Artikel 96c & 97",
        title: "Doorzoeken plaatsen en woning ter inbeslagneming",
        inMatrix: true,
        eis: "De student kan beschrijven onder welke voorwaarden een plaats of woning mag worden doorzocht ter inbeslagneming. (Sv, artikel 96c en 97) (K)",
        text: "Art. 96c. Doorzoeken ter ibn plaatsen (OvJ)... Art. 97. Doorzoeken ter ibn woning (RC / OvJ bij spoed)...",
        explanation: "Doorzoeken van plaatsen en woningen ter inbeslagneming door OvJ / HOvJ / RC afhankelijk van de situatie en spoed."
    },
    {
        id: "sv_104_110",
        law: "Wetboek van Strafvordering",
        article: "Artikel 104 & 110",
        title: "Beslagbevoegdheid en Doorzoeking door Rechter-commissaris",
        inMatrix: true,
        eis: "De student kan beschrijven in welke gevallen en onder welke voorwaarden de rechter-commissaris bevoegd is tot inbeslagneming en het doorzoeken van plaatsen. (Sv, artikel 104 en 110) (K)",
        text: "Art. 104. Beslagbevoegdheid RC... Art. 110. Doorzoeking RC...",
        explanation: "De rechter-commissaris is bevoegd tot inbeslagneming en het doorzoeken van elke plaats op vordering van de officier van justitie of ambtshalve."
    },
    {
        id: "sv_124",
        law: "Wetboek van Strafvordering",
        article: "Artikel 124",
        title: "Ordehandhaving tijdens ambtsverrichtingen",
        inMatrix: true,
        eis: "De student kan beschrijven wie verantwoordelijk is voor de orde tijdens ambtsverrichtingen en welke maatregelen genomen kunnen worden bij ordeverstoring. (Sv, artikel 124) (K)",
        text: "Art. 124. Ordehandhaving tijdens ambtsverrichtingen\nVoor de handhaving der orde... draagt zorg de voorzitter... of de rechter of ambtenaar...",
        explanation: "Regelt de handhaving van de openbare orde tijdens officiële ambtsverrichtingen (waarschuwen, bevelen te vertrekken, verwijderen/in verzekering houden)."
    },
    {
        id: "sv_126nd_126nda",
        law: "Wetboek van Strafvordering",
        article: "Artikel 126nd & 126nda",
        title: "Vorderen gegevens en camerabeelden",
        inMatrix: true,
        eis: "De student kan benoemen welke voorwaarden gelden bij het vorderen van camerabeelden of andere beelden. (Sv, artikel 126nda en artikel 126nd) (K)",
        text: "Art. 126nd. Vorderen historische, identificerende en andere, niet gevoelige gegevens... Art. 126nda. Vorderen gegevens gemaakt met beveiligingscamera's...",
        explanation: "Vorderen van inhoudsgegevens en camerabeelden in geval van verdenking van een VH-feit door OvJ of opsporingsambtenaar."
    },
    {
        id: "sv_127_141_142",
        law: "Wetboek van Strafvordering",
        article: "Artikel 127, 141 & 142",
        title: "Opsporingsambtenaren (Algemeen en Buitengewoon)",
        inMatrix: true,
        eis: "De student kan beschrijven wie zijn belast met de opsporing van strafbare feiten. (Sv, artikel 127, 141 en 142) (K)",
        text: "Art. 127. Opsporingsambtenaren... Art. 141. Algemeen opsporingsambtenaren... Art. 142. Buitengewoon opsporingsambtenaren...",
        explanation: "Onderscheid tussen algemene opsporingsambtenaren (politie, KMar, OvJ) en buitengewone opsporingsambtenaren (BOA's)."
    },
    {
        id: "sv_128",
        law: "Wetboek van Strafvordering",
        article: "Artikel 128",
        title: "Ontdekking op heterdaad",
        inMatrix: true,
        eis: "De student kan uitleggen wanneer er sprake is van heterdaad. (Sv, artikel 128) (B)",
        text: "Art. 128. Ontdekking op heterdaad\nOntdekking op heterdaad heeft plaats, wanneer het strafbare feit ontdekt wordt, terwijl het begaan wordt of terstond nadat het begaan is.",
        explanation: "Tijdens het plegen of terstond nadat het is begaan (zonder onderbreking van de opsporing)."
    },
    {
        id: "sv_134",
        law: "Wetboek van Strafvordering",
        article: "Artikel 134 lid 1",
        title: "Definitie inbeslagneming",
        inMatrix: true,
        eis: "De student kan beschrijven wat onder in beslagneming wordt verstaan. (Sv, artikel 134 lid 1) (K)",
        text: "Art. 134. Ibn / teruggave\nOnder inbeslagneming van enig voorwerp wordt verstaan het onder zich nemen of gaan houden van dat voorwerp ten behoeve van de strafvordering.",
        explanation: "Veiligstellen voor de waarheidsvinding (art. 94) of voor wederrechtelijk verkregen voordeel (art. 36e Sr / conservatoir beslag)."
    },
    {
        id: "sv_161",
        law: "Wetboek van Strafvordering",
        article: "Artikel 161",
        title: "Bevoegdheid tot aangifte en klacht",
        inMatrix: true,
        eis: "De student kan benoemen wie bevoegd is om aangifte te doen (Sv, artikel 161) (K)",
        text: "Art. 161. Bevoegdheid tot aangifte en klacht\nIeder die kennis draagt van een begaan strafbaar feit is bevoegd daarvan aangifte of klacht te doen.",
        explanation: "Iedereen die kennis draagt van een strafbaar feit is bevoegd aangifte te doen. Onderscheid tussen ambtshalve vervolgbare feiten en klachtdelicten (absoluut en relatief)."
    },
    {
        id: "sv_167",
        law: "Wetboek van Strafvordering",
        article: "Artikel 167",
        title: "Opportuniteitsbeginsel",
        inMatrix: true,
        eis: "De student kan beschrijven welke factoren een officier van justitie in overweging neemt bij de beslissing om een zaak te vervolgen. (Sv, artikel 167) (K)",
        text: "Art. 167. Opportuniteitsbeginsel\nIndien naar aanleiding van het ingestelde opsporingsonderzoek het openbaar ministerie van oordeel is dat vervolging moet plaats hebben... Van vervolging kan worden afgezien op gronden aan het algemeen belang ontleend.",
        explanation: "Drie beslissingen van de OvJ: Vervolgen, Seponeren (technisch sepot, beleidssepot, voorwaardelijk sepot) of Strafbeschikking."
    },
    {
        id: "sv_338",
        law: "Wetboek van Strafvordering",
        article: "Artikel 338",
        title: "Bewijsregel",
        inMatrix: true,
        eis: "De student kan benoemen waarop de rechter zich moet baseren om te besluiten dat de verdachte het strafbare feit heeft begaan. (Sv, artikel 338) (K)",
        text: "Art. 338. Bewijsregel\nHet bewijs dat de verdachte het tenlastegelegde feit heeft begaan, kan door den rechter slechts worden aangenomen, indien hij daarvan uit het onderzoek op de terechtzitting door den inhoud van wettige bewijsmiddelen de overtuiging heeft bekomen.",
        explanation: "Onmiddellijkheidsbeginsel: uitsluitend baseren op wettige bewijsmiddelen die tijdens de zitting naar voren zijn gebracht."
    },
    {
        id: "sv_339",
        law: "Wetboek van Strafvordering",
        article: "Artikel 339",
        title: "Wettige bewijsmiddelen",
        inMatrix: true,
        eis: "De student kan in een praktijksituatie bepalen wat wettige bewijsmiddelen zijn. (Sv, artikel 339) (T)",
        text: "Art. 339. Bewijsmiddelen\nAls wettige bewijsmiddelen worden alleen erkend: 1° eigen waarneming van den rechter; 2° verklaringen van den verdachte; 3° verklaringen van een getuige; 4° verklaringen van een deskundige; 5° schriftelijke bescheiden.",
        explanation: "Limitatieve opsomming van wettige bewijsmiddelen in het strafproces."
    },
    {
        id: "sv_341",
        law: "Wetboek van Strafvordering",
        article: "Artikel 341",
        title: "Verklaring van de verdachte",
        inMatrix: true,
        eis: "De student kan beschrijven hoe getuigenverklaringen bijdragen aan het bewijs in een strafzaak. (Sv, artikel 341) (K)",
        text: "Art. 341. Verklaring verdachte\nOnder verklaring van den verdachte wordt verstaan zijne bij het onderzoek op de terechtzitting gedane opgave... (Bewijsminimum: niet uitsluitend op opgaven van de verdachte).",
        explanation: "Verklaring verdachte is een wettig bewijsmiddel. Mag alleen tegen de verdachte worden gebruikt. Bewijsminimum (bekentenis alleen is onvoldoende)."
    },
    {
        id: "sv_342",
        law: "Wetboek van Strafvordering",
        article: "Artikel 342",
        title: "Verklaring getuige (Unus testis rule)",
        inMatrix: true,
        eis: "De student kan beschrijven wat onder een getuigenverklaring wordt verstaan en dat een rechter een schuld niet uitsluitend mag baseren op de verklaring van één getuige. (Sv, artikel 342) (K)",
        text: "Art. 342. Verklaring getuige\nOnder verklaring van een getuige wordt verstaan zijne bij het onderzoek op de terechtzitting gedane mededeling... Het bewijs... kan door den rechter niet uitsluitend worden aangenomen op de verklaring van één getuige.",
        explanation: "Getuige verklaart over wat hij zelf heeft waargenomen. Unus testis, nullus testis regel: één getuige is geen getuige (steunbewijs vereist)."
    },
    {
        id: "sv_344",
        law: "Wetboek van Strafvordering",
        article: "Artikel 344",
        title: "Schriftelijke bescheiden als bewijs",
        inMatrix: true,
        eis: "De student kan benoemen welke schriftelijke stukken als bewijsmiddelen kunnen dienen in een strafzaak. (Sv, artikel 344) (K)",
        text: "Art. 344. Schriftelijke bescheiden\nOnder schriftelijke bescheiden worden verstaan: 1° rechterlijke beslissingen; 2° processen-verbaal... 3° ambtelijke geschriften... 4° verslagen van deskundigen; 5° alle andere geschriften...",
        explanation: "Vijf categorieën schriftelijke bescheiden. Proces-verbaal van een opsporingsambtenaar kan als wettig bewijsmiddel dienen."
    },
    {
        id: "wid_1",
        law: "Wet op de identificatieplicht",
        article: "Artikel 1",
        title: "Aanwijzing van documenten",
        inMatrix: true,
        eis: "De student kan beschrijven welke documenten in de wet zijn aangewezen voor het vaststellen van de identiteit van personen. (Wet op de identificatieplicht, artikel 1) (K)",
        text: "Art. 1. Aanwijzing van documenten\nAls documenten waarmee... de identiteit van personen kan worden vastgesteld, worden aangewezen: 1° geldig reisdocument / ID-kaart; 2° vreemdelingendocument; 3° geldig nationaal/diplomatiek paspoort EU/EER; 4° geldig rijbewijs...",
        explanation: "Opsomming van officiële documenten die kunnen worden gebruikt voor het vaststellen van de identiteit."
    },
    {
        id: "wid_2",
        law: "Wet op de identificatieplicht",
        article: "Artikel 2",
        title: "Toonplicht (Leeftijd 14 jaar)",
        inMatrix: true,
        eis: "De student kan beschrijven vanaf welke leeftijd personen verplicht zijn om een identiteitsbewijs te tonen als dit wordt gevorderd. (Wet op de identificatieplicht, artikel 2) (K)",
        text: "Art. 2. Toonplicht\nEenieder die de leeftijd van veertien jaar heeft bereikt, is verplicht op de eerste vordering van een ambtenaar... een identiteitsbewijs... ter inzage aan te bieden.",
        explanation: "Iedereen vanaf 14 jaar is verplicht op eerste vordering een geldig ID-bewijs te tonen aan een bevoegde ambtenaar."
    },
    {
        id: "awbi_1",
        law: "Algemene wet op het binnentreden",
        article: "Artikel 1",
        title: "Legitimatie, doelmededeling en toestemming",
        inMatrix: true,
        eis: "De student kan de voorwaarden en uitzonderingen benoemen die gelden voor het binnentreden van een woning. (Awbi, artikel 1) (K)",
        text: "Art. 1. Legitimatie, doelmededeling en toestemming\n
