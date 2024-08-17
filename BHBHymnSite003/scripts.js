document.addEventListener("DOMContentLoaded", () => {
    const hymns = [
    {
        "number": "001",
        "title": "Abba, Father! we approach Thee",
        "author": "James George Deck (1841)",
        "meter": "8.7.8.7.D.",
        "tuneName": "Deerhurst Lux Eoi Abbot's Leigh",
        "lyrics": "\nAbba, Father! we approach Thee\nIn our Saviour's precious name;\nWe, Thy children, here assembling,\nAccess to Thy presence claim;\nFrom our sin His blood hath washed us:\n'Tis through Him our souls draw near,\nAnd Thy Spirit, too, hath taught us,\nAbba, Father! name so dear.\n\nOnce as prodigals we wandered\nIn our folly, far from Thee;\nBut Thy grace, o'er sin abounding,\nRescued us from misery:\nThou Thy prodigals hast pardoned,\nLoved us with a Father's love;\nWelcomed us with joy o'erflowing,\nE'en to dwell with Thee above.\n\nClothed in garments of salvation,\nAt Thy table is our place;\nWe rejoice, and Thou rejoicest,\nIn the riches of Thy grace:\nIt is meet, we hear Thee saying,\nWe should merry be and glad;\nI have found My once lost children,\nNow they live who once were dead.\n\nAbba, Father! all adore Thee,\nAll rejoice in heaven above;\nWhile in us they learn the wonders\nOf Thy wisdom, power and love;\nSoon, before Thy throne assembled,\nAll Thy children shall proclaim,\nGlory, everlasting glory,\nBe to God and to the Lamb.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "002",
        "title": "Abba, Father! we adore Thee",
        "author": "Robert Stephen Hawker / James Deck",
        "meter": "8.7.8.7.D.",
        "tuneName": "Deehurst Lux Eoi Abbot's Leigh",
        "lyrics": "\nAbba, Father! we adore Thee,\nHumbly now our homage pay:\n'Tis Thy children's bliss to know Thee,\nWelcomed through the living way:\nThis high honour we inherit,\nThy free gift through Jesus' blood;\nGod the Spirit, with our spirit,\nWitnesseth we're sons of God.\n\nThine own purpose gave us being,\nWhen, in Christ, in that vast plan\nThou in Christ didst choose Thy people\nE'en before the world began:\nO what love the Father bore us!\nO how precious in Thy sight!\nWhen Thou gav'st Thy Church to Jesus,\nJesus, Son of Thy delight.\n\nThough our nature's fall in Adam\nShut us wholly out from God,\nThine eternal counsel brought us\nNearer still, through Jesus' blood;\nFor in Him we found redemption,\nGrace and glory in Thy Son;\nOh, the height and depth of mercy!\nChrist and His redeemed are one.\n\nHence, through all the changing seasons,\nTrouble, sickness, sorrow, woe,\nNothing changeth God's affections,\nLove divine shall bring us through;\nSoon shall all Thy blood-bought children\nRound the throne their anthems raise,\nAnd, in songs of rich salvation,\nShout to God's eternal praise.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "003",
        "title": "A mind at perfect peace with God",
        "author": "Catesby Paget",
        "meter": "C.M.",
        "tuneName": "Richmond",
        "lyrics": "\nA mind at perfect peace with God,\nOh! what a word is this!\nA sinner reconciled through blood;\nThis! this indeed is peace.\n\nBy nature and by practice far,\nHow very far from God!\nYet now by grace brought nigh to Him.\nThrough faith in Jesus' blood.\n\nSo near, so very near to God,\nI cannot nearer be;\nFor in the person of His Son\nI am as near as He.\n\nSo dear, so very dear to God,\nMore dear I cannot be;\nThe love wherewith He loves the Son.\nSuch is His love to me.\n\nWhy should I ever careful be\nSince such a God is mine?\nHe watches o'er me night and day,\nAnd tells me \"Mine is thine.\"\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "004",
        "title": "Around Thy table, Holy Lord",
        "author": "Mary Bowly Peters",
        "meter": "C.M.",
        "tuneName": "Moravia",
        "lyrics": "\nAround Thy table, Holy Lord,\nIn fellowship we meet,\nObedient to Thy gracious Word,\nThis feast of love to eat.\n\nHere every one that loves Thy name\nOur willing hearts embrace;\nOur source of life and hope the same,\nAll debtors to Thy grace.\n\nCommune with each at this blest hour,\nThy peace, Thy joy impart;\nThy thoughts of love, of truth, of power,\nImpress upon each heart.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "005",
        "title": "According to Thy gracious Word",
        "author": "James Montgomery (1825)",
        "meter": "C.M.",
        "tuneName": "St. Agnes, Durham",
        "lyrics": "\nAccording to Thy gracious Word,\nIn meek humility\nThis would I do, O Christ my Lord,\nI would remember Thee.\n\nThy body, broken for my sake.\nMy bread from heaven shall be;\nThy testamental cup I take,\nAnd thus remember Thee.\n\nGethsemane can I forget?\nOr there Thy conflict see,\nThine agony and blood-like sweat,\nAnd not remember Thee?\n\nWhen to the Cross I turn mine eyes\nAnd rest on Calvary,\nO Lamb of God, my sacrifice,\nI must remember Thee.\n\nRemember Thee, and all Thy pains,\nAnd all Thy love to me;\nYea, while a breath, a pulse remains,\nWould I remember Thee.\n\nAnd when, O Lord, Thou com'st again\nAnd I Thy glory see,\nFor ever, as the Lamb once slain,\nI will remember Thee.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "006",
        "title": "Alas! and did my Saviour bleed?",
        "author": "Isaac Watts (1707)",
        "meter": "C.M.",
        "tuneName": "Eden Sacra",
        "lyrics": "\nAlas! and did my Saviour bleed?\nAnd did my Sovereign die?\nWould He devote that sacred head\nFor such a worm as I?\n\nWas it for crimes that I have done\nHe groaned upon the tree?\nAmazing pity! Grace unknown!\nAnd love beyond degree.\n\nWell might the sun in darkness hide\nAnd shut his glories in,\nWhen the incarnate Maker died\nFor man, His creature's sin.\n\nThus might I hide my blushing face,\nWhile His dear Cross appears;\nDissolve my heart in thankfullness,\nAnd melt my eyes to tears.\n",
        "Chorus": "",
        "addedChorus": "\nAt the Cross! at the Cross! where I first saw the light,\nAnd the burden of my heart rolled away.\nIt was there by faith I received my sight,\nAnd now I am happy all the day.\n"
    },
    {
        "number": "007",
        "title": "A Debtor to mercy alone",
        "author": "Augustus Montague Toplady (1771)",
        "meter": "8.8.8.8.D.",
        "tuneName": "Whitchurch",
        "lyrics": "\nA Debtor to mercy alone,\nOf covenant mercy I sing,\nNor fear, with God's righteousness on,\nMy person and offerings to bring.\nThe terrors of law and of God\nWith me can have nothing to do;\nMy Saviour's obedience and blood\nHide all my transgressions from view.\n\nThe work which His goodness began\nThe arm of His strength will complete;\nHis promise is Yea and Amen,\nAnd never was forfeited yet.\nThings future, nor things that are now,\nNot all things below or above,\nCan make Him His purpose forego,\nOr sever my soul from His love.\n\nMy name from the palms of His hands\nEternity will not erase;\nImprest on His heart, it remains\nIn marks of indelible grace.\nYes! I to the end shall endure,\nAs sure as the earnest is given;\nMore happy, but not more secure,\nThe souls of the blessed in heaven.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "008",
        "title": "All that I was\u2014my sin, my guilt",
        "author": "Horatius Bonar (1845)",
        "meter": "C.M.",
        "tuneName": "Evan",
        "lyrics": "\nAll that I was\u2014my sin, my guilt,\nMy death, was all my own;\nAll that I am I owe to Thee,\nMy gracious God, alone.\n\nThe darkness of my former state,\nThe bondage, all was mine;\nThe light of life in which I walk,\nThe liberty is Thine.\n\nThy grace first made me feel my sin,\nAnd taught me to believe;\nThen, in believing, peace I found,\nAnd now in Christ I live.\n\nAll that I am e'en here on earth,\nAll that I hope to be,\nWhen Jesus comes and glory dawns,\nI owe, my God, to Thee\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "009",
        "title": "A Rock that stands for ever",
        "author": "Paul Gerhardt",
        "meter": "7.6.7.6.D.",
        "tuneName": "St. Theodulph",
        "lyrics": "\nA Rock that stands for ever\nIs Christ my righteousness,\nAnd there I stand unfearing\nIn everlasting bliss;\nNo earthly thing is needful\nTo this my life from heaven,\nAnd nought of love is worthy\nSave that which Christ has given.\n\nThere is no condemnation,\nThere is no hell for me,\nThe torment and the fire\nMine eyes shall never see;\nFor me there is no sentence,\nFor me death has no sting,\nBecause the Lord who loves me\nShall shield me with his wing.\n\nNo angel and no devil,\nNo throne, nor power, nor might:\nNo love, no tribulation,\nNo danger, fear, nor fight,\nNo height, no depth, no creature\nThat has been, or can be,\nCan drive me from Thy bosom\nCan sever me from Thee.\n\nMy soul with joy upleapeth,\nGrief cannot linger there,\nShe singeth high in glory\nAmid the sunshine fair;\nThe Sun that shines upon me\nIs Jesus and His love;\nThe fountain of my singing\nIs deep in heaven above.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "010",
        "title": "Awake, my soul, in joyful lays",
        "author": "Samuel Medley",
        "meter": "L.M.",
        "tuneName": "Newcastleton",
        "lyrics": "\nAwake, my soul, in joyful lays,\nAnd sing thy great Redeemer's praise;\nHe justly claims a song from thee;\nHis loving-kindness\u2014O how free!\n\nHe saw me ruined in the fall\nYet loved me notwithstanding all;\nHe saved me from my lost estate;\nHis loving-kindness\u2014O how great!\n\nWhen trouble, like a gloomy cloud,\nHas gathered thick and thundered loud,\nHe near my soul has ever stood;\nHis loving-kindness\u2014O how good!\n\nSoon shall we mount and soar away\nTo the bright realms of endless day,\nAnd sing, with rapture and surprise,\nHis loving-kindness, in the skies.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "011",
        "title": "A Pilgrim through this lonely world",
        "author": "Sir Edward Denny & Horatius Bonar (1839)",
        "meter": "C.M.",
        "tuneName": "Lynton",
        "lyrics": "\nA Pilgrim through this lonely world\nThe blessed Saviour passed;\nA mourner all His life was He,\nA dying Lamb at last.\n\nThat tender heart that felt for all,\nFor all its life-blood gave;\nIt found on earth no resting-place,\nSave only in the grave.\n\nSuch was our Lord, and shall we fear\nThe cross with all its scorn?\nOr love a faithless, evil world,\nThat wreathed His brow with thorn?\n\nDead to the world with Him who died\nTo win our hearts, our love,\nWe, risen with our risen Head,\nIn spirit dwell above.\n\nBy faith His boundless glories there\nOur wond'ring eyes behold;\nThe glories which eternal years\nShall never all unfold.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "012",
        "title": "As sinners saved we gladly praise",
        "author": "James H. Evans",
        "meter": "L.M.",
        "tuneName": "Duke Street",
        "lyrics": "\nAs sinners saved we gladly praise\nThe Author of redeeming grace;\nFather, 'tis Thine almighty power\nSecures us when the tempests lower.\n\nThy love's a refuge ever nigh,\nThy watchfulness a mountain high,\nThy name a rock which winds above\nAnd waves below can never move.\n\nThy faithfulness, for ever sure,\nThrough endless ages shall endure;\nThy perfect work shall ever prove\nThe depth of Thine unceasing love.\n\nWhile all things change, Thou changest not,\nForgetting ne'er, though oft forgot;\nThy love, immutably the same,\nDisplays the glory of Thy name.\n\nLord, we would then rejoice and praise\nThe Source of all this wondrous grace;\nFather, Thine everlasting power\nWill keep us safe in danger's hour.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "013",
        "title": "Around Thy grave, Lord Jesus",
        "author": "James George Deck (1841)",
        "meter": "7.6.7.6.D.",
        "tuneName": "Missionary",
        "lyrics": "\nAround Thy grave, Lord Jesus,\nThine empty grave, we stand,\nWith hearts all full of praises\nTo keep Thy blest command:\nBy faith, our soul's rejoicing,\nTo trace Thy path of love\nThrough death's dark, angry billows\nUp to the throne above.\n\nLord Jesus, we remember\nThe travail of Thy soul,\nWhen, in Thy love's deep pity,\nThe waves did o'er Thee roll;\nBaptized in death's cold waters,\nFor us Thy blood was shed:\nFor us Thou, Lord of Glory,\nWast numbered with the dead.\n\nOh, Lord, Thou now art risen,\nThy travail all is o'er!\nFor sin Thou once hast suffered,\nThou liv'st to die no more;\nSin, death, and hell are vanquished\nBy Thee, the Church's Head;\nAnd lo! We share Thy triumphs,\nThou First-born from the dead.\n\nInto Thy death baptized\nWe own with Thee we died;\nWith Thee, our life, we're risen,\nAnd in Thee glorified:\nFrom sin, the world, and Satan,\nWe're ransomed by Thy blood,\nAnd now would walk as strangers,\nAlive with Thee to God.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "014",
        "title": "\"A little while!\" Our Lord shall come.",
        "author": "James George Deck",
        "meter": "8.8.8.8.8.8.",
        "tuneName": "Giessen",
        "lyrics": "\n\"A little while!\" Our Lord shall come.\nAnd we shall wander here no more;\nHe'll take us to our Father's home,\nWhere He for us has gone before,\nTo dwell with Him, to see His face,\nAnd sing the glories of His grace.\n\n\"A little while!\" He'll come again:\nLet us the precious hours redeem;\nOur only grief to give Him pain,\nOur joy to serve and follow Him:\nWatching and ready may we be,\nAs those who long their Lord to see.\n\n\"A little while!\" 'Twill soon be past:\nWhy should we shun the shame and cross?\nO let us in His footsteps haste,\nCounting for Him all else but loss;\nOh, how will recompense His smile\nThe suffering of this little while!\n\n\"A little while!\" Come, Saviour, come!\nFor Thee Thy Bride has waited long:\nOh, take Thy wearied pilgrims home\nTo sing the new, eternal song,\nTo see Thy glory, and to be\nIn everything conformed to Thee.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "015",
        "title": "Before the throne of God above",
        "author": "Charatie de Cheney Lees Smith Bancroft (1863)",
        "meter": "L.M.",
        "tuneName": "Mainzer",
        "lyrics": "\nBefore the throne of God above\nI have a strong, a perfect plea,\nA great High Priest, whose name is Love,\nWho ever lives and pleads for me.\n\nWhen Satan tempts me to despair,\nTelling of evil yet within,\nUpward I look, and see Him there\nWho made an end of all my sin.\n\nBecause the sinless Saviour died\nMy sinful soul is counted free;\nFor God, the Just, is satisfied\nTo look on Him and pardon me.\n\nBehold him there! the once slain Lamb!\nMy perfect, spotless Righteousness,\nThe great unchangeable I AM,\nThe King of glory and of grace.\n\nOne with Himself, I cannot die;\nMy soul is purchased by His blood;\nMy life is hid with Christ on high,\nWith Christ, my Saviour and my God.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "016",
        "title": "Behold! a spotless Victim dies",
        "author": "Anonymous",
        "meter": "C.M.",
        "tuneName": "Eden",
        "lyrics": "\nBehold! a spotless Victim dies,\nMy surety on the tree;\nThe Lamb of God, the Sacrifice,\nHe gave Himself for me.\n\nWhatever curse was mine He bore;\nThe wormwood and the gall,\nThere, in that lone mysterious hour,\nMy cup\u2014He drained it all.\n\nLord Jesus! Thou, and none beside,\nIts bitterness could know,\nNor other tell Thy joy's full tide\nThat from that cup shall flow.\n\nThine is the joy, but yet 'tis mine.\n'Tis ours as one with Thee;\nMy joy flows from that grief of Thine;\nThy death brings life to me!\n\nAnd while the ages roll along,\nThis shall my glory be;\nAnd this the new and endless song,\nThy love to us\u2014to me.\n",
        "Chorus": "",
        "addedChorus": "\nAlone, alone, He bore it all alone,\nHe gave Himself to save his own\nHe suffered bled and died\nAlone, alone.\n"
    },
    {
        "number": "017",
        "title": "Behold the Lamb with glory crowned!",
        "author": "Thomas Kelly",
        "meter": "C.M.",
        "tuneName": "St. Magnus",
        "lyrics": "\nBehold the Lamb with glory crowned!\nTo Him all power is given;\nNo place too high for Him is found,\nNo place too high in heaven.\n\nHe fills the throne\u2014the throne above,\nHe fills it without wrong;\nThe object of His Father's love,\nThe theme of angels' song.\n\nThough high, yet He accepts the praise\nHis people offer here;\nThe faintest, feeblest lay they raise\nWill reach the Saviour's ear.\n\nThis song be ours, and this alone,\nThat celebrates the Name\nOf Him that sits upon the throne,\nAnd that exalts the Lamb.\n\nTo Him whom men despise and slight,\nTo Him be glory given;\nThe crown is His, and His by right\nThe highest place in heaven.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "018",
        "title": "Behold the throne of grace!",
        "author": "John Newton (1779)",
        "meter": "S.M.",
        "tuneName": "St. Michaels",
        "lyrics": "\nBehold the throne of grace!\nThe promise calls us near\nTo seek our God and Father's face.\nWho loves to answer prayer.\n\nThat rich atoning blood,\nWhich sprinkled round we see,\nProvides for all who come to God\nAn all-prevailing plea.\n\nBeyond our utmost wants\nHis love and power can bless;\nTo praying souls He always grants\nMore than they can express.\n\nSince 'tis the Lord's command,\nOur mouth we'll open wide:\nLord, open Thou Thy bounteous hand\nThat we may be supplied.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "019",
        "title": "Blessed Lord, our souls are longing",
        "author": "Mary Bowly Peters",
        "meter": "8.7.8.7.4.7.",
        "tuneName": "Regents Square",
        "lyrics": "\nBlessed Lord, our souls are longing\nThee, our risen Head, to see;\nAnd the cloudless morning's dawning,\nWhen Thy saints shall gathered be\nGrace and glory,\nAll our well-springs are in Thee.\n\nAll the sorrow we are tasting\nIs but as the dream of night:\nTo the day of God we're hasting,\nLooking for it with delight;\nThou art coming,\nThis will satisfy our sight.\n\nTrue, the silent grave is keeping\nMany a seed in weakness sown:\nBut the saints, in Thee now sleeping,\nRaised in power shall share Thy throne,\nResurrection!\nLord of Glory! 'Tis Thine own.\n\nAs we sing, our hearts grow lighter;\nWe are children of the day;\nSorrow makes our hope the brighter;\nFaith regards not the delay;\nSure the promise!\nWe shall meet Thee on the way.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "020",
        "title": "Brethren, let us join to bless",
        "author": "John Cennick",
        "meter": "7.7.7.7.",
        "tuneName": "Innocents",
        "lyrics": "\nBrethren, let us join to bless\nJesus Christ our joy and peace;\nHim, who bowed His head so low\nUnderneath our load of woe.\n\nHis the curse, the wounds, the gall,\nHis the stripes\u2014He bore them all;\nHis the dying cry of pain\nWhen our sins He did sustain.\n\nHe, the accepted Sacrifice,\nFrom the vanquished grave did rise;\nFree Himself, He set us free\nIn His perfect liberty.\n\nRansomed now, accepted, free,\nSafe from judgment, Lord, in Thee.\nWe rejoice that God can bless\nAll who do Thy name confess.\n\nPraise our God who willed it thus;\nPraise the Lamb who died for us;\nPraise the Father, through the Son,\nWho so vast a work hath done.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "021",
        "title": "Buried in the grave of Jesus",
        "author": "J. A. Trench",
        "meter": "8.7.8.7.",
        "tuneName": "Gotha",
        "lyrics": "\nBuried in the grave of Jesus,\nWe believe what God has said;\nFaith, His judgment acquiescing,\nReckons now that we are dead.\n\nDeath and judgment are behind us,\nGrace and glory are before;\nAll the billows rolled o'er Jesus,\nThere exhausted all their power.\n\nFirst-fruits of the resurrection,\nHe is risen from the tomb;\nNow we stand in new creation,\nFree, because beyond our doom.\n\nJesus died, and we died with Him,\nBuried in His grave we lie,\nOne with Christ in resurrection,\nSeated now in Him on high.\n\nWe await the full redemption\nWhen the Risen One shall come;\nAnd our mortal body changed,\nShall be fashioned like His own.\n\nLord, we share in Thy rejection,\nThy reproach, O may we love;\nHere we stand in Thine acceptance\nIn the Father's sight above.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "022",
        "title": "Bright, bright home! Beyond the skies",
        "author": "Hannah Kilham Burlingham",
        "meter": "7.9.8.9.3.",
        "tuneName": "Celandine",
        "lyrics": "\nBright, bright home! Beyond the skies,\nWhere Jesus is enthroned in glory;\nThy beauty gleams before mine eyes,\nThy portals glisten now before me,\nBright, bright home.\n\nDark, dark world! I would not stay\nAmid thy painted scenes of splendour;\nI hasten toward the golden day,\nThy tinsel treasure I surrender,\nDark, dark world.\n\nSweet, sweet dawn! So fair and near.\nBefore the eastern skies are glowing;\nI see the morning star appear,\nThe mountain-tops like silver showing\nSweet, sweet dawn.\n\nCome, Lord, come! We wait for Thee,\nWe listen still for Thy returning;\nThy loveliness we long to see,\nFor Thee the lamp of hope is burning,\nCome, Lord, come!\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "023",
        "title": "Beneath the Cross of Jesus",
        "author": "Elizabeth Cecilia Douglas Clephane (1868)",
        "meter": "P.M.",
        "tuneName": "Refuge",
        "lyrics": "\nBeneath the Cross of Jesus\nI fain would take my stand,\nThe shadow of a mighty Rock\nWithin a weary land;\nA home within the wilderness,\nA rest upon the way\nFrom the burning of the noontide heat\nAnd the burden of the day.\n\nO safe and happy shelter!\nO refuge tried and sweet!\nO trysting-place, where Heaven's love\nAnd Heaven's justice meet!\nAs to the pilgrim patriarch\nThat wondrous dream was given,\nSo seems my Saviour's Cross to me\nA ladder up to heaven.\n\nUpon the Cross of Jesus,\nMine eye at times can see\nThe very dying form of One\nWho suffered there for me;\nAnd from my smitten heart with tears\nTwo wonders I confess,\nThe wonder of His glorious love,\nAnd my own worthlessness.\n\nI take the Cross of Jesus\nFor my abiding place;\nI ask no other sunshine than\nThe sunshine of His face;\nContent to let the world go by,\nTo know no gain nor loss:\nMy sinful self my only shame,\nMy glory all the Cross.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "024",
        "title": "Blessed be God, our God!",
        "author": "Horatius Bonar (1845)",
        "meter": "6.10.10.6.",
        "tuneName": "Hereford New",
        "lyrics": "\nBlessed be God, our God!\nWho gave for us His well-beloved Son,\nThe gift of gifts, all other gifts in one;\nBlessed be God, our God!\n\nWhat will He not bestow?\nWho freely gave this mighty gift, unbought,\nUnmerited, unheeded, and unsought;\nWhat will He not bestow?\n\nHe spared not His Son!\n'Tis this that silences each rising fear,\n'Tis this that bids the hard thought disappear;\nHe spared not His Son!\n\nWho shall condemn us now?\nSince Christ has died, and risen, and gone above\nFor us to plead at the right hand of Love;\nWho shall condemn us now?\n\n'Tis God that justifies!\nWho shall recall His pardon or His grace?\nOr who the broken chain of guilt replace?\n'Tis God that justifies!\n\nThe victory is ours!\nFor us in might came forth the Mighty One,\nFor us He fought the fight, the triumph won;\nThe victory is ours!\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "025",
        "title": "Blest be the dear uniting love",
        "author": "Charles Wesley (1745)",
        "meter": "C.M.",
        "tuneName": "Dublin",
        "lyrics": "\nBlest be the dear uniting love\nThat will not let us part;\nOur bodies may far off remove,\nBut we are joined in heart.\n\nJoined in one Spirit to our Head,\nWe wait His will to know,\nThat we in all His steps may tread,\nAnd do His work below.\n\nO may we ever walk in Him,\nAnd nothing know beside!\nNothing desire, nor ought esteem,\nBut Jesus crucified.\n\nTo Him still closer let us cleave,\nAnd all His ways embrace;\nExpect His fullness to receive,\nAnd grace to answer grace.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "026",
        "title": "Behold, what love, what boundless love",
        "author": "Robert Boswell",
        "meter": "P.M.",
        "tuneName": "Behold what Love",
        "lyrics": "\nBehold, what love, what boundless love\nThe Father hath bestowed\nOn sinners lost, that we should be\nNow called the sons of God.\n\nNo longer far from Him, but now\nBy precious blood made nigh;\nAccepted in the Well-beloved\nNear to God's heart we lie.\n\nWhat we in glory soon shall be\nIt doth not yet appear;\nBut when our precious Lord we see.\nWe shall His image bear.\n\nWith such a blessed hope in view\nWe would more holy be,\nMore like our risen, glorious Lord.\nWhose face we soon shall see.\n",
        "Chorus": "\nBehold . . . what manner of love . . . what\nmanner of love the Father hath bestowed upon\nus, that we . . . . that we should be called . . .\nshould be called the sons of God.\n",
        "addedChorus": ""
    },
    {
        "number": "027",
        "title": "Be gone, unbelief! my Saviour is near.",
        "author": "John Newton (1779)",
        "meter": "10.10.11.11.",
        "tuneName": "Hanover",
        "lyrics": "\nBe gone, unbelief! my Saviour is near.\nAnd for my relief will surely appear;\nBy prayer let me wrestle, and He will perform;\nWith Christ in the vessel, I smile at the storm.\n\nThough dark be my way, since He is my guide,\n'Tis mine to obey, 'tis His to provide:\nThough cisterns be broken and creatures all fail,\nThe word He hath spoken will surely prevail.\n\nHis love in time past forbids me to think\nHe'll leave me at last in trouble to sink:\nEach sweet Ebenezer I have in review\nConfirms His good pleasure to help me quite through.\n\nWhy should I complain of want or distress,\nTemptation or pain? He told me no less:\nThe heirs of salvation, I know from His Word,\nThrough much tribulation must follow their Lord.\n\nHow bitter that cup no heart can conceive,\nWhich Jesus drank up that sinners might live!\nHis way was much rougher and darker than mine:\nDid Jesus thus suffer, and shall I repine?\n\nSince all that I meet shall work for my good.\nThe bitter is sweet, the med'cine is food;\nThough painful at present, 'twill cease before long,\nAnd then, oh, how pleasant the conqueror's song!\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "028",
        "title": "Blessed hope that in Jesus is given",
        "author": "Daniel Webster Whittle (1877)",
        "meter": "P.M.",
        "tuneName": "Blessed Hope",
        "lyrics": "\nBlessed hope that in Jesus is given\nIn our sorrow to cheer and sustain,\nThat soon with our Saviour in heaven\nWe shall meet with our loved ones again.\n\nBlessed hope in the Word God has spoken,\nAll our peace by that Word we obtain;\nAnd as sure as God's Word was ne'er broken\nWe shall meet with our loved ones again.\n\nBlessed hope! how it shines in our sorrow\nLike the star over Bethlehem's plain,\nThat it may be, with Him, ere the morrow\nWe shall meet with our loved ones again.\n\nBlessed hope! the bright star of the morning\nThat shall herald His coming to reign;\nO the glory that waits its fair dawning\nWhen we meet with our loved ones again.\n",
        "Chorus": "\nBlessed hope!...Blessed hope!...\nWe shall meet with our loved ones again.\n",
        "addedChorus": ""
    },
    {
        "number": "029",
        "title": "Bride of the Lamb, there is for thee",
        "author": "Boethia Thompson",
        "meter": "C.M.",
        "tuneName": "Emmanuel",
        "lyrics": "\nBride of the Lamb, there is for thee\nOne only safe retreat;\nWhere Jesus is thy heart should be,\nThy home at His dear feet.\n\nWhen Satan tracks thy lonely way.\nThere his temptations meet;\nIn Jesus' presence watch and pray,\nYea, conquer at His feet.\n\nSince thou has much to learn, e'en though\nThou art in Christ complete,\nIn grace and knowledge seek to grow\nBy sitting at His feet.\n\nThrough tribulation hasten on,\nWith Christ the cross is sweet;\nThe little while will soon be gone,\nKeep only at His feet.\n\nBride of the Lamb, forget the past,\nPrepare the Lord to greet;\n'Tis thine to share His throne, and cast\nThy wreath before His feet.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "030",
        "title": "Behold! Behold the Lamb of God",
        "author": "Joseph Hoskins (BHB Companion) / Richard Jukes (Primitive Methodist Magazine)",
        "meter": "P.M.",
        "tuneName": "Calvary",
        "lyrics": "\nBehold! Behold the Lamb of God\nOn the Cross!\nFor us He shed His precious blood\nOn the Cross.\nO hear His all-important cry,\nEli, lama sabachthani?\nDraw near and see the Saviour die\nOn the Cross!\n\nBehold His arms extended wide\nOn the Cross!\nBehold His bleeding hands and side\nOn the Cross!\nThe sun withholds its rays of light,\nThe heav'ns are clothed in shades of night,\nWhile Jesus wins the glorious fight\nOn the Cross!\n\nBy faith we see Him lifted up\nOn the Cross.\nHe drinks for us the bitter cup\nOn the Cross.\nThe rocks do rend, the mountains quake.\nWhile Jesus doth atonement make,\nWhile Jesus suffers for our sake\nOn the Cross.\n\nAnd now the mighty deed is done\nOn the Cross!\nThe battle fought, the vict'ry won\nOn the Cross!\nTo heav'n He turns His languid eyes,\n'Tis finished now, the Conqueror cries,\nThen bows His sacred head and dies\nOn the Cross.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "031",
        "title": "Bright with all His crowns of glory",
        "author": "Sir Edward Denny",
        "meter": "8.7.8.7.4.7.",
        "tuneName": "Regent Square",
        "lyrics": "\nBright with all His crowns of glory,\nSee the Royal Victor's brow;\nOnce for sinners marr'd and gory,\nSee the Lamb exalted now,\nWhile before Him\nAll His ransomed brethren bow.\n\nBlessed morning! long expected,\nLo! they fill the people air,\nMourners once, by man rejected,\nThey, with Him, exalted there,\nSing His praises,\nAnd His throne of glory share.\n\nKing of kings! let earth adore Him,\nHigh on His exalted throne;\nFall, ye nations, fall before Him,\nAnd His righteous sceptre own;\nAll the glory\nBe to Him, and Him alone.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "032",
        "title": "Christ's grave is vacant now",
        "author": "W. Noel Tomkins",
        "meter": "S.M.",
        "tuneName": "Swabia",
        "lyrics": "\nChrist's grave is vacant now,\nLeft for the throne above;\nHis Cross asserts God's right to bless\nIn His own boundless love.\n\n'Twas there the blood was shed;\n'Twas there the life was poured;\nThere Mercy gained her diadem,\nWhile Justice sheathed her sword.\n\nAnd thence the child of faith\nSees judgment all gone by,\nPerceives the sentence fully met:\nThe soul that sins shall die!\n\nLearns how that God in love\nGave Christ the sins to bear\nOf all who own His lordship now,\nThat they His place might share;\n\nAnd cries with wondering joy,\nAs He is so am I,\nPure, holy, love as Christ Himself;\nWho shall my peace destroy?\n\nReach my blest Saviour first;\nTake Him from God's esteem;\nProve Jesus bears one spot of sin;\nThen tell me I'm unclean!\n\nNay! for He purged my guilt\nBy His own precious blood,\nAnd such its virtue not a stain\nE'er meets the eye of God.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "033",
        "title": "Christ has done the mighty work;",
        "author": "Horatius Bonar (1845)",
        "meter": "7.7.7.7.",
        "tuneName": "Nottingham",
        "lyrics": "\nChrist has done the mighty work;\nNothing left for us to do\nBut to enter on His toil,\nEnter on His triumph too.\n\nHis the pardon, ours the sin,\nGreat the sin, the pardon great;\nHis the good, and ours the ill;\nHis the love, and ours the hate.\n\nHis the labour, ours the rest;\nHis the death, and ours the life;\nOurs the fruits of victory,\nHis the agony and strife.\n\nHe has sowed the precious seed,\nNothing left for us unsown;\nOurs it is to reap the field,\nMake the harvest joy our own.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "034",
        "title": "Come, all ye saints of God!",
        "author": "James Boden",
        "meter": "6.6.4.6.6.6.4.",
        "tuneName": "Olivet",
        "lyrics": "\nCome, all ye saints of God!\nPublish through earth abroad\nJesus' great fame:\nTell what His love has done;\nTrust in His name alone;\nShout to His lofty throne,\nWorthy the Lamb.\n\nHence! Gloomy doubts and fears;\nDry up your mournful tears;\nSwell the glad throng:\nTo Christ, the heavenly King,\nStrike each melodious string,\nFrom heart and voice to sing,\nWorthy's the Lamb.\n\nHark, how the choirs above,\nFilled with the Saviour's love,\nDwell on His name!\nThere, too, shall we be found,\nWith light and glory crowned,\nWhile all the heavens resound\nWorthy's the Lamb!\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "035",
        "title": "Christians, go and tell of Jesus",
        "author": "Edward Payson Hammond",
        "meter": "P.M.",
        "tuneName": "Tell of Jesus",
        "lyrics": "\nChristians, go and tell of Jesus,\nHow He died to save our souls;\nHow that He, from sin might free us,\nSuffered agonies untold.\n\nTell the guilty of their danger\nWhile they wander far from God;\nWhile they live to Christ a stranger,\nAnd reject\nHis precious Word.\n\nTell them of the joys of heaven,\nPurchased by the Saviour's blood,\nHow, that\nthey might be forgiven,\nJesus left His home above.\n\nTell them how He hath ascended\nTo prepare a home on high,\nWhere all sorrows shall be ended,\nWhere the saved shall never die.\n",
        "Chorus": "\nYes, we'll go and tell of Jesus,\nThe pure and holy, meek and lowly Jesus;\nYes, we'll go and tell of Jesus,\nWho died our souls to save.\n",
        "addedChorus": ""
    },
    {
        "number": "036",
        "title": "Cling to the Mighty One",
        "author": "Henry Bennett",
        "meter": "6.4.6.4.D.",
        "tuneName": "Veronica",
        "lyrics": "\nCling to the Mighty One,\nCling in thy grief;\nCling to the HOLY One,\nHe gives relief;\nCling to the GRACIOUS One,\nCling in thy pain;\nCling to the FAITHFUL One,\nHe will sustain.\n\nCling to the LIVING One,\nCling in thy woe;\nCling to the LOVING One\nThrough all below;\nCling to the PARD'NING One,\nHe speaketh peace;\nCling to the HEALING One,\nAnguish shall cease.\n\nCling to the BLEEDING One,\nCling to His side;\nCling to the RISEN One,\nIn Him abide;\nCling to the COMING One,\nHope shall arise;\nCling to the REIGNING One\nJoys lights thine eyes.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "037",
        "title": "Christ the Lord is risen on high!",
        "author": "Anonymous",
        "meter": "7.7.7.7.",
        "tuneName": "Harts",
        "lyrics": "\nChrist the Lord is risen on high!\nSing, ye heavens, and earth reply;\nHe endured the Cross, the grave,\nSinners to redeem and save.\n\nLove's redeeming work is done,\nFought the fight, the battle won!\nHe Himself our ransom paid,\nPeace with God forever made.\n\nVain the stone, the watch, the seal,\nChrist has burst the gates of hell;\nVain their efforts to enthrall,\nHe has triumphed over all.\n\nChrist our Lord is risen indeed,\nChrist is now the Church's Head;\nLoud the song of triumph raise,\nCelebrate the Victor's praise.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "038",
        "title": "Come, let us join our cheerful songs",
        "author": "Isaac Watts (1707)",
        "meter": "C.M.",
        "tuneName": "Emmanuel",
        "lyrics": "\nCome, let us join our cheerful songs\nAnd thus approach the throne:\nHad we ten thousand, thousand tongues,\nOur theme of joy's but one.\n\nWorthy the Lamb enthroned on high\nTo be exalted thus!\nWorthy the Lamb who died, we cry,\nFor He was slain for us.\n\nJesus is worthy to receive\nHonour and power divine:\nAnd blessings more than we can give\nBe, Lord, forever Thine.\n\nSoon shall the saints, exalted high,\nA glorious anthem raise;\nAnd all that dwell beneath the sky\nSpeak forth Thine endless praise.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "039",
        "title": "Come, let us all unite to sing",
        "author": "Howard Kingbury (?)",
        "meter": "P.M.",
        "tuneName": "Better World",
        "lyrics": "\nCome, let us all unite to sing,\nGod is love.\nLet heaven and earth their praises bring;\nGod is love.\nLet every soul from sin awake,\nEach in his heart sweet music make,\nAnd sing with us, for Jesus' sake,\nGod is love.\n\nO tell to earth's remotest bound,\nGod is love.\nIn Christ we have redemption found:\nGod is love.\nHis blood has washed our sins away,\nHis Spirit turned our night to day;\nAnd now we can rejoice to say,\nGod is love.\n\nHow happy is our portion here!\nGod is love.\nHis promises our spirits cheer;\nGod is love.\nHe is our sun and shield by day,\nOur help, our hope, our strength, and stay,\nHe will be with us all the way:\nGod is love.\n\nIn glory we shall sing again,\nGod is love.\nYes, this shall be our lofty strain,\nGod is love.\nWhilst endless ages roll along,\nIn concert with the heavenly throng,\nThis shall be still our sweetest song,\nGod is love.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "040",
        "title": "Come, let us sing the matchless worth",
        "author": "Samuel Medley",
        "meter": "8.8.6.8.8.6.",
        "tuneName": "Piety",
        "lyrics": "\nCome, let us sing the matchless worth,\nAnd sweetly sound the glories forth\nWhich in the Saviour shine:\nTo God and Christ our praises bring;\nThe song, with which the heavens ring,\nNow let us gladly join.\n\nHow rich the precious blood He spilt,\nOur ransom from the dreadful guilt\nOf sin against our God.\nHow perfect is His righteousness,\nIn which unspotted beauteous dress\nHis saints have always stood.\n\nGreat are the offices He bears,\nAnd bright His character appears,\nExalted on the throne;\nIn songs of sweet untiring praise,\nWe would, to everlasting days,\nMake all His glories known.\n\nAnd soon the happy day shall come\nWhen we shall reach our destined home\nAnd see Him face to face;\nThen with our Saviour, Master, Friend,\nThe glad eternity we'll spend,\nAnd celebrate His grace.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "041",
        "title": "Come, ye that know the Saviour's above",
        "author": "George Burder",
        "meter": "C.M.",
        "tuneName": "Colchester",
        "lyrics": "\nCome, ye that know the Saviour's name,\nAnd raise your thoughts above;\nLet every heart and voice unite\nTo sing\u2014that God is love.\n\nHis Word this precious truth reveals,\nAnd all His mercies prove;\nCreation and redemption join\nTo show\u2014that God is love.\n\nHis patience, bearing much and long\nWith those who from Him rove,\nHis kindness, while He leads them home,\nAttest\u2014that God is love!\n\nThe work begun is carried on\nBy power from heaven above;\nAnd every step, from first to last,\nDeclares\u2014that God is love!\n\nO may we all, while here below,\nHis perfect will approve,\nTill nobler songs, in brighter worlds\nProclaim\u2014that God is love.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "042",
        "title": "Crowned with thorns upon the tree",
        "author": "H. Grattan Guinness",
        "meter": "7.7.7.7.",
        "tuneName": "Dunstan",
        "lyrics": "\nCrowned with thorns upon the tree,\nSilent in Thine agony;\nDying, crushed beneath the load\nOf the wrath and curse of God.\n\nOn thy pale and suff'ring brow,\nMystery of love and woe;\nOn Thy grief and sore amaze,\nSaviour, I would fix my gaze!\n\nOn Thy pierced and bleeding breast\nThou dost bid the weary rest;\nRest there from the world's false ways,\nRest there from its vanities.\n\nRest in pardon and relief\nFrom the load of guilt and grief;\nRest in Thy redeeming blood,\nRest in perfect peace with God.\n\nSin-atoning Sacrifice,\nThou art precious in mine eyes;\nThou alone my rest shall be,\nNow and through eternity.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "043",
        "title": "Come, Thou Fount of every blessing",
        "author": "Robert Robinson (1758)",
        "meter": "8.7.8.7.",
        "tuneName": "Sharon",
        "lyrics": "\nCome, Thou Fount of every blessing,\nTune my heart to sing Thy grace;\nStreams of mercy, never ceasing\nCall for songs of loudest praise.\n\nJesus sought me when a stranger\nWandering from the fold of God;\nHe, to save my soul from danger,\nInterposed His precious blood.\n\nO to grace how great a debtor\nDaily I'm constrained to be!\nLet that grace, Lord, like a fetter,\nBind my wandering heart to Thee.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "044",
        "title": "Crowns of glory ever bright",
        "author": "Thomas Kelly",
        "meter": "7.7.7.7.D.",
        "tuneName": "Thanksgiving",
        "lyrics": "\nCrowns of glory ever bright\nRest upon the Victor's head;\nCrowns of glory are His right,\nHis, who liveth, and was dead.\nJesus fought and won the day,\nSuch a day was never fought;\nWell His people now may say,\nSee what God, our God, has wrought.\n\nHe subdued the powers of hell;\nIn the fight He stood alone;\nAll His foes before Him fell,\nBy His single arm o'erthrown.\nThey have fall'n to rise no more;\nFinal is the foe's defeat;\nJesus triumphed by His power,\nAnd His triumph is complete.\n\nHis the fight, the arduous toil,\nHis the honours of the day,\nHis the glory and the spoil,\nJesus bears them all away.\nNow proclaim His deeds afar,\nFill the world with His renown;\nHis alone the Victor's car,\nHis the everlasting crown.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "045",
        "title": "Done is the work that saves",
        "author": "Horatius Bonar (1845)",
        "meter": "6.6.6.6.8.8.",
        "tuneName": "St. John's",
        "lyrics": "\nDone is the work that saves,\nOnce and for ever done;\nFinished the righteousness\nThat clothes the unrighteous one.\nThe love that blesses us below\nIs flowing freely to us now.\n\nThe sacrifice is o'er,\nThe veil is rent in twain,\nThe mercy-seat is red\nWith blood of Victim slain.\nWhy stand we then without, in fear?\nThe blood of Christ invites us near.\n\nThe gate is open wide;\nThe new and living way\nIs clear, and free, and bright\nWith love, and peace, and day.\nInto the holiest now we come,\nOur present and our endless home.\n\nEnthroned in majesty\nThe High Priest sits within;\nHis precious blood, once shed,\nHas made and keeps us clean;\nWith boldness let us now draw near;\nThat blood has banished every fear.\n\nThen to the Lamb once slain\nBe glory, praise, and power,\nWho died, and lives again,\nWho liveth evermore;\nWho loved us, cleansed us by His blood,\nAnd made us kings and priests to God.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "046",
        "title": "Father! we, Thy children, bless Thee",
        "author": "Samuel Prideaux Tregelles",
        "meter": "8.7.8.7.D.",
        "tuneName": "Sydney",
        "lyrics": "\nFather! we, Thy children, bless Thee\nFor Thy love on us bestowed:\nAs our Father we address Thee,\nCalled to be the sons of God.\nWondrous was Thy love in giving\nJesus for our sins to die;\nWondrous was His grace in leaving,\nFor our sakes, His home on high.\n\nNow the sprinkled blood has freed us\nOn we go toward our rest;\nThrough the desert Thou dost lead us,\nWith Thy constant favour blest.\nBy Thy truth and Spirit guiding,\nEarnest He of joys to come,\nAnd with daily food providing\nThou dost lead Thy children home.\n\nThough our pilgrimage be dreary\nThis is not our resting-place;\nShall we of the way be weary\nWhen we see our Master's face?\nNow, by faith anticipating,\nIn this hope our souls rejoice;\nWe, His promised advent waiting,\nSoon shall hear His welcome voice.\n\nFather, O how rich the blessing\nWhen Thy Son returns again!\nThen Thy saints, their rest possessing,\nO'er the earth with Him shall reign.\nFor their father's sakes beloved,\nIsrael, in Thy grace restored,\nShall on earth, the curse removed,\nBe the people of the Lord.\n\nThen shall countless myriads wearing\nRobes made white in Jesus' blood,\nPalms (like rested pilgrims) bearing,\nStand around the throne of God.\nThese, redeemed from every nation,\nShall in triumph bless Thy name;\nEvery voice shall cry, Salvation\nTo our God, and to the Lamb.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "047",
        "title": "Faint not, Christian! though the road",
        "author": "James H. Evans",
        "meter": "7.7.7.7.",
        "tuneName": "Thanksgiving 7.7.7.7.D.",
        "lyrics": "\nFaint not, Christian! though the road\nLeading to Thy blest abode\nDarksome be, and dang'rous too,\nChrist, thy Guide, will bring thee through.\n\nFaint not, Christian! though in rage\nSatan doth thy soul engage;\nTake thee faith's anointed shield,\nBear it to the battle-field.\n\nFaint not, Christian! though the world\nHath its hostile flag unfurled;\nHold the Cross of Jesus fast,\nThou shalt overcome at last.\n\nFaint not, Christian! though within\nThere's a heart so prone to sin;\nChrist, thy Lord, is over all,\nHe'll not suffer thee to fall.\n\nFaint not, Christian! though thy God\nSmite thee with the chast'ning rod;\nSmite He must with Father's care,\nThat He may His love declare.\n\nFaint not, Christian! Christ is near;\nSoon in glory He'll appear;\nThen shall end thy toil and strife,\nDeath be swallowed up of life.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "048",
        "title": "For ever with the Lord!",
        "author": "James Montgomery",
        "meter": "S.M.D",
        "tuneName": "Nearer Home",
        "lyrics": "\nFor ever with the Lord!\nAmen, so let it be;\nLife from the dead is in that word,\n'Tis immortality.\n\nMy Father's house on high,\nHome of my soul, how near\nAt times to Faith's foreseeing eye\nThy golden gates appear.\n\nMy thirsty spirit faints\nTo reach the land I love,\nThe bright inheritance of saints,\nJerusalem above.\n\nFor ever with the Lord!\nFather, if 'tis Thy will,\nThe promise of that faithful word\nE'en here to me fulfill.\n\nKnowing as I am known\nHow shall I love that word,\nAnd oft repeat before the throne\nFor ever with the Lord!\n",
        "Chorus": "\nHere in the body pent,\nAbsent from Him I roam,\nYet nightly pitch my moving tent\nA day's march nearer home.\n",
        "addedChorus": ""
    },
    {
        "number": "049",
        "title": "For the bread and for the wine",
        "author": "Horatius Bonar (1845)",
        "meter": "7.7.7.6.",
        "tuneName": "Evelyn",
        "lyrics": "\nFor the bread and for the wine,\nFor the pledge that seals Him mine,\nFor the words of love divine,\nWe give Thee thanks, O Lord.\n\nOnly bread and only wine,\nYet to faith the solemn sign\nOf the heavenly and divine!\nWe give Thee thanks, O Lord.\n\nFor the words that turn our eye\nTo the Cross of Calvary,\nBidding us in faith draw nigh,\nWe give Thee thanks, O Lord.\n\nFor the words that fragrance breathe,\nThese plain symbols underneath,\nWords that His own peace bequeath,\nWe give Thee thanks, O Lord.\n\nFor the words that tell of home,\nPointing us beyond the tomb,\nDo ye this, until I come!\nWe give Thee thanks, O Lord.\n\nTill He come we take the bread,\nType of Him on whom we feed,\nHim who liveth and was dead!\nWe give Thee thanks, O Lord.\n\nTill He come we take the cup;\nAs we at His table sup\nEye and heart are lifted up!\nWe give Thee thanks, O Lord.\n\nFor that coming here foreshown,\nFor that day to man unknown,\nFor the glory and the throne,\nWe give Thee thanks, O Lord.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "050",
        "title": "From every stormy wind that blows",
        "author": "Hugh Stowell (1828)",
        "meter": "L.M.",
        "tuneName": "Retreat",
        "lyrics": "\nFrom every stormy wind that blows,\nFrom every swelling tide of woes,\nThere is a calm, a safe retreat;\n'Tis found beneath the Mercy-seat.\n\nThere is a place where Jesus sheds\nThe oil of gladness on our heads,\nA place than all beside more sweet;\nIt is the blood-stained Mercy-seat.\n\nThere is a spot where spirits blend,\nWhere friend holds fellowship with friend;\nThough sundered far, by faith we meet\nAround one common Mercy-seat.\n\nAh! Whither could we flee for aid,\nWhen tempted, desolate, dismayed,\nOr how the hosts of hell defeat,\nHad suff'ring saints no Mercy-seat?\n\nThere, there on eagle-wing we soar,\nAnd time and sense appear no more;\nThere heav'nly joys our spirits greet,\nAnd glory crowns the Mercy-seat.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "051",
        "title": "From whence this fear and unbelief",
        "author": "Augustus Montague Toplady",
        "meter": "8.8.6.8.8.6.",
        "tuneName": "Meribah",
        "lyrics": "\nFrom whence this fear and unbelief,\nIf God, my Father, put to grief\nHis spotless Son for me?\nCan He, the righteous Judge of men,\nCondemn me for that debt of sin\nWhich, Lord, was charged to Thee?\n\nComplete atonement Thou hast made,\nAnd to the utmost farthing paid\nWhate'er Thy people owed;\nHow, then, can wrath on me take place,\nIf sheltered in God's righteousness,\nAnd sprinkled by Thy blood?\n\nIf Thou hast my discharge procured,\nAnd freely in my place endured\nThe whole of wrath divine;\nPayment God will not twice demand,\nFirst at my bleeding Surety's hand,\nAnd then again at mine.\n\nTurn then, my soul, unto thy rest;\nThe merits of thy great High Priest\nSpeak peace and liberty;\nTrust in His efficacious blood,\nNor fear thy banishment from God,\nSince Jesus died for thee.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "052",
        "title": "Glory, glory everlasting",
        "author": "Thomas Kelly",
        "meter": "8.7.8.7.4.7.",
        "tuneName": "Regent Square",
        "lyrics": "\nGlory, glory everlasting,\nBe to Him who bore the Cross,\nWho redeemed our souls by tasting\nDeath, the death deserved by us!\nSpread His glory,\nWho redeemed His people thus.\n\nHis is love, 'tis love unbounded,\nWithout measure, without end;\nHuman thought is here confounded,\n'Tis too vast to comprehend!\nPraise the Saviour!\nMagnify the sinner's Friend.\n\nWhile we hear the wondrous story\nOf the Saviour's Cross and shame,\nSing we, Everlasting glory\nBe to God and to the Lamb!\nHallelujah!\nGive ye glory to His name.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "053",
        "title": "God moves in a mysterious way",
        "author": "William Cowper (1774)",
        "meter": "C.M.",
        "tuneName": "St. Anne",
        "lyrics": "\nGod moves in a mysterious way\nHis wonders to perform;\nHe plants His footsteps in the sea,\nAnd rides upon the storm.\n\nDeep in unfathomable mines\nOf never-failing skill\nHe treasures up His bright designs,\nAnd works His sovereign will.\n\nYe fearful saints fresh courage take;\nThe clouds ye so much dread\nAre big with mercy, and shall break\nIn blessings on your head.\n\nJudge not the Lord by feeble sense,\nBut trust Him for His grace;\nBehind a frowning providence\nHe hides a smiling face.\n\nHis purposes will ripen fast,\nUnfolding every hour;\nThe bud may have a bitter taste,\nBut sweet will be the flower.\n\nBlind unbelief is sure to err\nAnd scan His work in vain;\nGod is His own interpreter,\nAnd He will make it plain.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "054",
        "title": "Glory unto Jesus be!",
        "author": "Archibald Rutherford",
        "meter": "7.7.7.7.",
        "tuneName": "Harts",
        "lyrics": "\nGlory unto Jesus be!\nThou from wrath didst set us free;\nAll our guilt on Thee was laid,\nThou our ransom-price hast paid.\n\nAll the blessed work is done;\nGod's well pleased in His Son,\nFor He raised Thee from the dead,\nSet Thee over all as Head.\n\nAll should sing Thy work and worth,\nAll above, and all on earth;\nWe shall sit around the throne,\nThou art worthy, Thou alone.\n\nKnowing this, we cease to mourn,\nPatient wait Thy sure return,\nFor Thy saints with Thee shall reign;\nCome, Lord Jesus, come again!\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "055",
        "title": "Grace! 'tis a charming sound",
        "author": "Philip Doddridge & Augustus Montague Toplady (1755)",
        "meter": "S.M.",
        "tuneName": "Silchester",
        "lyrics": "\nGrace! 'tis a charming sound,\nHarmonious to the ear;\nHeaven with the echo shall resound,\nAnd all the earth shall hear.\n\nGrace taught my wandering feet\nTo tread the heavenly road;\nAnd new supplies each hour I meet,\nWhile pressing on to God.\n\n'Twas grace that wrote my name\nIn life's eternal book;\n'Twas grace that gave me to the Lamb\nWho all my sorrows took.\n\nGrace taught my soul to pray,\nAnd, made my eyes o'erflow;\n'Tis grace has kept me to this day,\nAnd will not let me go.\n\nO let that grace inspire\nMy soul with strength divine;\nMay all my powers to Thee aspire,\nAnd all my days be Thine.\n\nGrace all the work shall crown\nThrough everlasting days;\nIt lays in heaven the topmost stone,\nAnd well deserves the praise.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "056",
        "title": "Glory to God on high!",
        "author": "Thomas Kelly",
        "meter": "6.6.4.6.6.6.4.",
        "tuneName": "Olivet Moscow",
        "lyrics": "\nGlory to God on high!\nPeace upon earth and joy!\nGood will to man!\nWe, who God's blessings prove\nHis name all names above,\nSing now the Saviour's love,\nToo vast to scan.\n\nMercy and truth unite;\nO 'tis a wondrous sight,\nAll sights above!\nJesus the curse sustains,\nGuilt's bitter cup He drains,\nNothing for us remains,\nNothing but love.\n\nLove that no tongue can teach,\nLove that no thought can reach,\nNo love like His!\nGod is its blessed source,\nDeath ne'er can stop its course,\nNothing can stay its force,\nMatchless it is.\n\nBlest in this love we sing,\nTo God our praises bring;\nAll sins forgiven!\nJesus, our Lord, to Thee\nHonour and majesty\nNow and for ever be,\nHere, and in heaven.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "057",
        "title": "God's almighty arms are round me",
        "author": "James McGranahan & Joseph Denham Smith",
        "meter": "P.M.",
        "tuneName": "Evensong",
        "lyrics": "\nGod's almighty arms are round me,\nPeace, peace, is mine!\nJudgment scenes need not confound me,\nPeace, peace, is mine!\nJesus came Himself and sought me;\nSold to death, He found and bought me;\nThen my blessed freedom taught me\nPeace, peace, is mine.\n\nWhile I hear life's surging billows,\nPeace, peace, is mine!\nWhy suspend my harp on willows?\nPeace, peace, is mine!\nI may sing with Christ beside me,\nThough a thousand ills betide me,\nSafely He hath sworn to guide me,\nPeace, peace, is mine!\n\nEvery trial draws Him nearer,\nPeace, peace, is mine!\nAll His strokes but make Him dearer,\nPeace, peace, is mine!\nBless I then the hand that smiteth\nGently, and to heal delighteth,\n'Tis against my sins He fighteth,\nPeace, peace, is mine!\n\nWelcome! Every rising sunlight,\nPeace, peace, is mine!\nNearer home each rolling midnight,\nPeace, peace, is mine!\nDeath and hell cannot appall me,\nSafe in Christ whate'er befall me,\nCalmly wait I, till He call me,\nPeace, peace, is mine!\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "058",
        "title": "Great God of wonders! All Thy ways",
        "author": "Samuel Davies (1769)",
        "meter": "8.8.8.8.8.8.",
        "tuneName": "Linden",
        "lyrics": "\nGreat God of wonders! All Thy ways\nDisplay Thine attributes divine;\nBut the bright glories of Thy grace\nAbove Thine other wonders shine:\nWho is a pardoning God like Thee?\nOr who has grace so rich and free?\n\nSuch deep transgressions to forgive!\nSuch guilty, daring worms to spare!\nThis is Thy grand prerogative,\nAnd in this honour none shall share:\nWho is a pardoning God like Thee?\nOr who has grace so rich and free?\n\nPardon, from an offended God!\nPardon, for sins of deepest dye!\nPardon, bestowed through Jesus' blood!\nPardon, that brings the rebel nigh!\nWho is a pardoning God like Thee?\nOr who has grace so rich and free?\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "059",
        "title": "Great Shepherd of Thy chosen flock",
        "author": "John Newton (1779)",
        "meter": "L.M.",
        "tuneName": "Mainzer",
        "lyrics": "\nGreat Shepherd of Thy chosen flock,\nThy people's shield, Their shadowing rock,\nOnce more we meet to hear Thy voice,\nOnce more before Thee to rejoice.\n\nNow may Thy Spirit, by the Word,\nRefresh each wearied heart, O Lord,\nWearied of earth's vain strife and woe,\nAnd longing more Thyself to know.\n\nThine is the heart our griefs to feel,\nAnd Thine the love each wound to heal;\nHome Thou are gone for us to care,\nReturning soon to take us there.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "060",
        "title": "Guide us, O Thou great Jehovah",
        "author": "William Williams Pantycelyn tr/ad by Peter Williams (1745)",
        "meter": "8.7.8.7.4.7.",
        "tuneName": "Mannheim Cwm Rhondda",
        "lyrics": "\nGuide us, O Thou great Jehovah,\nPilgrims through this barren land;\nWe are weak, but Thou art mighty;\nHold us by Thy Powerful hand:\nBread of heaven\nFeed us now and evermore.\n\nOpen wide the living fountain\nWhence the healing waters flow;\nBe Thyself our cloudy pillar\nAll the dreary desert through:\nStrong deliv'rer\nBe Thou still our strength and shield.\n\nWhile we tread this vale of sorrow\nMay we in Thy love abide;\nKeep us, O our gracious Saviour!\nCleaving closely to Thy side:\nStill relying\nOn our Father's changeless love.\n\nSaviour, come! We long to see Thee,\nLong to dwell with Thee above;\nAnd to know, in full communion,\nAll the sweetness of Thy love:\nCome, Lord Jesus!\nTake Thy waiting people home.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "061",
        "title": "Hail, Thou once despised Jesus!",
        "author": "John Bakewell & Martin Madan (1757)",
        "meter": "8.7.8.7.D.",
        "tuneName": "Sydney",
        "lyrics": "\nHail, Thou once despised Jesus!\nHail, Thou still rejected King!\nThou didst suffer to release us,\nThou didst free salvation bring;\nThrough Thy death and resurrection,\nBearer of our sin and shame!\nWe enjoy divine protection,\nLife and glory through Thy name.\n\nPaschal Lamb, by God appointed,\nAll our sins on Thee were laid;\nBy our Father's love anointed\nThou hast full atonement made:\nAll who trust Thee are forgiven\nThrough the virtue of Thy blood;\nRent in Thee the veil of heaven,\nGrace shines forth to man from God.\n\nSaviour, hail! Amid the glory,\nWhere for us Thou dost abide;\nWe, by faith, do now adore Thee,\nSeated at Thy Father's side.\nThere, for us Thou now art pleading,\nWhile Thou dost our place prepare;\nFor Thy saints still interceding\nTill in glory we appear.\n\nWorship, honour, praise, and blessing,\nThou shalt then from all receive;\nLoudest praises, without ceasing,\nAll that earth or heaven can give:\nIn that day Thy saints will meet Thee,\nWelcome Thee with grateful song;\nJoyful hearts will ever greet Thee,\nSource of joy to all the throng.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "062",
        "title": "Happy they who trust in Jesus!",
        "author": "Thomas Kelly",
        "meter": "8.7.8.7.4.7.",
        "tuneName": "Corinth",
        "lyrics": "\nHappy they who trust in Jesus!\nSweet their portion is, and sure;\nWhen the foe on others seizes,\nHe will keep His own secure:\nHappy people!\nHappy, though despised and poor.\n\nSince His love and mercy found us\nWe are precious in His sight;\nThousands now may fall around us,\nThousands more be put to flight;\nBut His presence\nKeeps us safe by day and night.\n\nLo! our Saviour never slumbers;\nEver watchful is His care:\nThough we cannot boast of numbers,\nIn His strength secure we are:\nSweet their portion\nWho the Saviour's kindness share.\n\nAs the bird, beneath her feathers,\nGuards the objects of her care,\nSo the Lord His children gathers,\nSpreads His wings and hides them there:\nThus protected\nAll their foes they boldly dare.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "063",
        "title": "Hark! my soul, it is the Lord;",
        "author": "William Cowper (1768)",
        "meter": "7.7.7.7.",
        "tuneName": "Ravenna",
        "lyrics": "\nHark! my soul, it is the Lord;\n'Tis thy Saviour! hear His word;\nJesus speaks, and speaks to thee:\nSay, poor sinner, lov'st thou Me?\n\nI delivered thee when bound,\nAnd when wounded healed thy wound;\nSought thee wand'ring, set thee right,\nTurned thy darkness into light.\n\nCan a woman's tender care\nCease towards the child she bare?\nYes, she may forgetful be,\nYet will I remember thee.\n\nMine is an unchanging love,\nHigher than the heights above,\nDeeper than the depths beneath,\nFree and faithful, strong as death.\n\nThou shalt see My glory soon\nWhen the work of grace is done;\nPartner of My throne shalt be:\nSay, poor sinner, lov'st thou Me?\n\nLord, it is my chief complaint\nThat my love is cold and faint;\nYet I love Thee, and adore;\nO for grace to love Thee more.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "064",
        "title": "Hark! 'tis the watchman's cry",
        "author": "Anonymous & The Revival (1859)",
        "meter": "6.4.6.4.6.7.6.4.",
        "tuneName": "Happy Land Clarion",
        "lyrics": "\nHark! 'tis the watchman's cry,\nWake, brethren, wake!\nJesus, our Lord, is nigh;\nWake, brethren, wake!\nSleep is for sons of night;\nYe are children of the light,\nYours is the glory bright;\nWake, brethren, wake!\n\nCall to each waking band,\nWatch, brethren, watch!\nClear is our Lord's command;\nWatch, brethren, watch!\nBe ye as men that wait\nAlways at their Master's gate\nE'en though the hour seem late;\nWatch, brethren, watch!\n\nHeed we the Steward's call,\nWork, brethren, work!\nThere's room enough for all\nWork, brethren, work!\nThis vineyard of the Lord\nConstant labour doth afford;\nYours is a sure reward;\nWork, brethren, work!\n\nHear we the Shepherd's voice,\nPray, brethren, pray!\nWould ye His heart rejoice?\nPray, brethren, pray.\nSin calls for constant fear,\nWeakness needs the strong One near,\nLong as ye struggle here;\nPray, brethren, pray!\n\nNow sound the final chord,\nPraise, brethren, praise!\nThrice holy is our Lord;\nPraise, brethren, praise!\nWhat more befits the tongues\nSoon to lead the eternal songs,\nWhile heaven the note prolongs?\nPraise, brethren, praise!\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "065",
        "title": "Hark! ten thousand voices crying",
        "author": "John Nelson Darby (1837)",
        "meter": "8.7.8.7.",
        "tuneName": "Stuttgart",
        "lyrics": "\nHark! ten thousand voices crying,\nLamb of God! with one accord;\nThousand, thousand saints replying,\nWake at once the echoing chord.\n\nPraise the Lamb, the chorus waking,\nAll in heaven together throng,\nLoud and far, each tongue partaking,\nRolls along the endless song.\n\nGrateful incense this, ascending\nEver to the Father's throne;\nEvery knee to Jesus bending,\nAll the mind in heaven is one.\n\nAll the Father's counsels claiming\nEqual honours to the Son;\nAll the Son's effulgence beaming\nMakes the Father's glory known.\n\nBy the Spirit all pervading,\nHosts unnumbered round the Lamb,\nCrowned with light and joy unfading,\nHail Him as the great I AM.\n\nJoyful now the new creation\nRests in undisturbed repose;\nBlest in Jesus' full salvation,\nSorrow now, nor thraldom knows.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "066",
        "title": "Have ye counted the cost?",
        "author": "Jane Eliza Leeson",
        "meter": "P.M.",
        "tuneName": "Resolution",
        "lyrics": "\nHave ye counted the cost,\nHave ye counted the cost,\nYe warriors of the Cross?\nAre ye fixed in heart for your Master's sake\nTo suffer all earthly loss?\nCan ye bear the scoff of the worldly-wise,\nAs ye pass by pleasure's bower,\nTo watch with your Lord on the mountain-top\nThrough the dreary midnight hour?\n\nYe may drink of His cup,\nYe may drink of His cup,\nAnd in His baptism share!\nYe shall not fail, if ye tread in His steps\nHis blood-stained Cross to bear.\nBut count ye the cost; O count ye the cost!\nThat ye be not unprepared!\nAnd know ye the strength that alone can stand\nIn the conflict ye have dared.\n\nIn the power of His might,\nIn the power of His might,\nWho was made through weakness strong,\nYe shall overcome in the fearful fight\nAnd sing His vict'ry song!\nBy the blood of the Lamb, by the blood of the Lamb,\nBy the faithful witness Word,\nNot loving your lives unto death for Him,\nYe shall triumph with your Lord.\n\nO the banner of love!\nO the banner of love!\nIt will cost you a pang to hold!\nBut 'twill float in triumph the field above\nThough your heart's blood stain its fold.\nYe may count the cost, ye may count the cost\nOf all Egyptia's treasure!\nBut the riches of Christ ye cannot count;\nHis love ye cannot measure.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "067",
        "title": "Head of the Church triumphant",
        "author": "Charles Wesley (1745)",
        "meter": "7.7.8.7.D.",
        "tuneName": "Zoan II",
        "lyrics": "\nHead of the Church triumphant\nWe joyfully adore Thee;\nTill Thou appear\nThy members here\nWould sing of Thee in glory.\nWe lift our hearts and voices\nIn blest anticipation,\nAnd sing aloud,\nAnd give to God\nThe praise of our salvation.\n\nWhile in affliction's furnace,\nAnd passing through the fire,\nThy love we praise,\nWhich tries our ways,\nAnd ever brings us higher;\nWe lift our hands, exulting\nIn Thine almighty favor:\nThe love divine,\nWhich made us Thine,\nShall keep us Thine for ever.\n\nThou dost conduct Thy people\nThrough torrents of temptation;\nNor need we fear,\nWhile Thou art near,\nThe fire of tribulation:\nThe world, with sin and Satan,\nIn vain our march opposes;\nBy Thee we shall\nBreak through them all;\nThy triumph ours discloses.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "068",
        "title": "He comes! Emmanuel comes!",
        "author": "James George Deck (1841)",
        "meter": "6.6.6.6.8.8.",
        "tuneName": "St. John",
        "lyrics": "\nHe comes! Emmanuel comes!\nJesus, the crucified:\nThe man of Sorrows\u2014He\nWho bowed His head and died;\nWho hath redeemed us by His blood;\nHe comes to take\nus home to God.\n\nHe comes! our Advocate\nWho bears us on His breast,\nHimself to take us home\nTo His eternal rest:\nO let this hope dispel each fear,\nOur great High Priest will soon appear.\n\nHe comes! our Shepherd comes,\nWhose eyelids never sleep,\nTo gather in the skies\nThe thousands of His sheep;\nWhere the eternal fountains spring\nOf love divine, His flock He'll bring.\n\nHe comes! the Heir of all,\nAll shall His power obey:\nThe Bridegroom to His Church\nHis glories shall display:\nBut O His love, what tongue can tell?\nEternal! vast! unsearchable!\n\nBehold, I quickly come!\nResponsive to Thy word\nThe Spirit and the Bride\nCry, Even so, O Lord!\nNaught else can satisfy her heart\nBut to be with Thee where Thou art.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "069",
        "title": "Heirs of salvation, chosen of God!",
        "author": "Hannah Kilham Burlingham",
        "meter": "P.M.",
        "tuneName": "Manna",
        "lyrics": "\nHeirs of salvation, chosen of God!\nPast condemnation, sheltered by blood!\nEven in Egypt feed we on the Lamb,\nKeeping the statutes of God, the I AM.\nIn the world around, 'tis night,\nWhere the feast is spread, 'tis bright;\nIsrael's Lord is Israel's light.\n'Tis Jesus, 'tis Jesus, our Saviour from above.\n'Tis Jesus, 'tis Jesus, 'tis Jesus whom we love.\n\nPilgrims and strangers, captives no more;\nWilderness rangers, sing we on the shore.\nGod in His power parted hath the sea,\nFoes have all perished, His people are free.\nBy the pillar safely led,\nBy the manna daily fed,\nNow the homeward way we tread.\n'Tis Jesus, 'tis Jesus, our Shepherd here below,\n'Tis Jesus, 'tis Jesus, 'tis Jesus whom we know.\n\nCanaan-possessors, safe in the land;\nVictors, confessors, banner in hand;\nJordan's deep river evermore behind;\nCares of the desert no longer in mind.\nEgypt's stigma rolled away,\nCanaan's corn our strength and stay,\nTriumph we the live-long day.\n'Tis Jesus, 'tis Jesus, the Christ of God alone,\n'Tis Jesus, 'tis Jesus, 'tis Jesus whom we own.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "070",
        "title": "He leadeth me, O blessed thought!",
        "author": "Joseph Henry Gilmore (1862)",
        "meter": "L.M.D.",
        "tuneName": "Leadeth",
        "lyrics": "\nHe leadeth me, O blessed thought!\nO words with heavenly comfort fraught!\nWhate'er I do, where'er I be,\nStill 'tis God's hand that leadeth me.\n\nSometimes 'mid scenes of deepest gloom,\nSometimes where Eden's bowers bloom,\nBy waters still, o'er troubled sea,\nStill 'tis His hand that leadeth me.\nHe leadeth me!\n\nLord, I would clasp Thy hand in mine,\nAnd never murmur or repine;\nContent, whatever lot I see,\nSince 'tis my God that leadeth me.\nHe leadeth me!\n\nAnd when my task on earth is done,\nWhen, by Thy grace, the vict'ry's won\nE'en death's cold wave I will not flee\nIf God through Jordan leadeth me.\nHe leadeth me!\n",
        "Chorus": "\nHe leadeth me! He leadeth me!\nBy His own hand He leadeth me.\n",
        "addedChorus": ""
    },
    {
        "number": "071",
        "title": "He lives\u2014the great Redeemer lives;",
        "author": "Anne Steele (1760)",
        "meter": "L.M.",
        "tuneName": "Mainzer Kent",
        "lyrics": "\nHe lives\u2014the great Redeemer lives;\nWhat joy the blest assurance gives!\nAnd now before His Father, God,\nPleads the full merit of His blood.\n\nGreat Advocate, Almighty Friend!\nOn Thee do all our hopes depend:\nOur cause can never, never fail,\nFor Thou dost plead, and must prevail.\n\nIn every dark, distressing hour,\nWhen sin and Satan join their power,\nLet this blest truth repel each dart,\nThat Thou dost bear us on Thy heart.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "072",
        "title": "Here o'er the earth as a stranger I roam",
        "author": "Anonymous",
        "meter": "P.M.",
        "tuneName": "There is Rest",
        "lyrics": "\nHere o'er the earth as a stranger I roam,\nHere is no rest\u2014is no rest;\nHere as a pilgrim I wander alone,\nYet I am blest\u2014I am blest.\nFor I look forward to that glorious day\nWhen sin and sorrow shall vanish away;\nMy heart doth leap while I hear Jesus say,\nThere, there is rest\u2014there is rest.\n\nHere are afflictions and trials severe,\nHere is no rest\u2014is no rest;\nHere I must part with the friends I hold dear,\nYet I am blest\u2014I am blest.\nSweet is the promise I read in Thy Word;\nBlessed are they who have died in the Lord;\nThey have been called to receive their reward;\nThere, there is rest\u2014there is rest.\n\nThis world of care is a wilderness state,\nHere is no rest\u2014is no rest;\nBut I must bear from the world all its hate,\nYet I am blest\u2014I am blest.\nSoon shall I be from the wicked released;\nSoon shall the weary for ever be blest;\nSoon shall I lean upon Jesus' breast;\nThere, there is rest\u2014there is rest.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "073",
        "title": "He sitteth o'er the waterfloods",
        "author": "Richard Whateley",
        "meter": "C.M.",
        "tuneName": "Tallis",
        "lyrics": "\nHe sitteth o'er the waterfloods,\nAnd He is strong to save;\nHe sitteth o'er the waterfloods\nAnd guides each drifting wave.\n\nThough loud around the vessel's prow\nThe waves may toss and break;\nYet at His word they sink to rest\nAs on a tranquil lake.\n\nHe sitteth o'er the waterfloods,\nAs in the days of old,\nWhen o'er the Saviour's sinless head\nThe waves and billows rolled.\n\nYea, all the billows passed o'er Him;\nOur sins\u2014they bore Him down;\nFor us He met th' o'erwhelming storm,\nHe met th' Almighty's frown.\n\nHe sitteth o'er the waterfloods;\nThen doubt and fear no more,\nFor He who passed through all the storms\nHas reached the heavenly shore.\n\nAnd every tempest-driven barque\nWith Jesus for its Guide,\nWill soon be moored in harbour calm,\nIn glory to abide.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "074",
        "title": "Holy Saviour! We adore Thee",
        "author": "Samuel Prideaux Tregelles (1838)",
        "meter": "8.7.8.7.4.7.",
        "tuneName": "Regent Square 8.7.8.7.8.7.",
        "lyrics": "\nHoly Saviour! We adore Thee\nSeated on the throne of God;\nWhile the heavenly hosts before Thee\nGladly sing Thy praise aloud,\nThou art worthy!\nWe are ransomed by Thy blood.\n\nSaviour! Though the world despised Thee,\nThough Thou here wast crucified,\nYet the Father's glory raised Thee,\nLord of all creation wide;\nThou art worthy!\nWe shall live, for Thou hast died.\n\nAnd though here on earth rejected,\n'Tis but fellowship with Thee;\nWhat besides could be expected\nThan like Thee our Lord to be?\nThou art worthy!\nThou from earth hast set us free.\n\nHaste the day of Thy returning\nWith Thy ransomed Church to reign;\nThen shall end our days of mourning,\nWe shall sing with rapture then:\nThou art worthy!\nCome, Lord Jesus, come! Amen.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "075",
        "title": "Hope of our hearts, O Lord, appear!",
        "author": "Sir Edward Denny",
        "meter": "C.M.",
        "tuneName": "Dunfermline",
        "lyrics": "\nHope of our hearts, O Lord, appear!\nThou glorious Star of day,\nShine forth, and chase the dreary night!\nWith all our tears, away.\n\nNo resting-place we seek on earth,\nNo loveliness we see;\nOur eye is on the royal crown,\nPrepared for us and Thee.\n\nBut, Jesus, Lord! However bright\nThat crown of joy above,\nWhat is it to the brighter hope\nOf dwelling in Thy love?\n\nWhat to the joy, the deeper joy,\nUnmingled, pure, and free,\nOf union with our living Head,\nOf fellowship with Thee?\n\nThis joy e'en now on earth is ours'\nBut only, Lord, above,\nOur hearts, without a pang, shall know\nThe fullness of Thy love.\n\nThere, near Thy heart, upon the throne,\nThy ransomed Church shall see\nWhat grace was in the bleeding Lamb,\nWho died to make us free.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "076",
        "title": "How bright that blessed hope!",
        "author": "Anonymous",
        "meter": "6.4.6.4.6.6.6.4.",
        "tuneName": "Worship",
        "lyrics": "\nHow bright that blessed hope!\nJesus will come!\nLet us our heads lift up,\nJesus will come!\nMorning so bright and clear,\nMansions of God appear,\nSin shall not enter there,\nJesus will come.\n\nHim every eye shall see\nWhen He appears;\nBright will the glory be\nWhen He appears;\nSoon shall the trumpet speak,\nEach sleeping saint awake,\nAnd that glad morning break\nWhen He appears.\n\nRaised unto glory then\nAt His return;\nJoyous our song shall be\nAt His return;\nGathered around to Him\nAll learn the heav'nly hymn;\nJesus our joyful theme\nAt His return.\n\nFull of this blessed hope\nTill He shall come;\nLet us the cross take up\nTill He shall come;\nHappy reproach to bear,\nShame, for His sake, to share,\nSince we the crown shall wear\nWhen He shall come.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "077",
        "title": "How firm a foundation, ye saints of the Lord",
        "author": "Rippon's Selection & Richard Keen (1787) (1787)",
        "meter": "11.11.11.11.",
        "tuneName": "Hanover Montgomery",
        "lyrics": "\nHow firm a foundation, ye saints of the Lord,\nIs laid for your faith in His excellent Word!\nWhat more can He say than to you He hath said,\nYou who to the Saviour for refuge have fled?\n\nFear not, He is with thee; oh, be not dismayed!\nHe\u2014He is thy God, and will still give thee aid;\nHe'll strengthen thee, help thee, and cause thee to stand,\nUpheld by His righteous, omnipotent hand.\n\nThe soul that on Jesus has leaned for repose,\nHe will not, He cannot desert to its foes;\nThat soul, though all hell should endeavor to shake,\nHe'll never\u2014no, never\u2014no, never forsake!\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "078",
        "title": "How good is the God we adore",
        "author": "Joseph Hart (1759)",
        "meter": "8.8.8.8.",
        "tuneName": "Celeste",
        "lyrics": "\nHow good is the God we adore,\nOur faithful, unchangeable Friend,\nWhose love is as great as His power,\nAnd knows neither measure nor end.\n\n'Tis Jesus, the First and the Last,\nWhose Spirit shall guide us safe home;\nWe'll praise Him for all that is past,\nAnd trust Him for all that's to come.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "079",
        "title": "How sweet the Name of Jesus sounds",
        "author": "John Newton (1779)",
        "meter": "C.M.",
        "tuneName": "St. Peter Lloyd",
        "lyrics": "\nHow sweet the Name of Jesus sounds\nIn a believer's ear!\nIt soothes his sorrows, heals his wounds,\nAnd drives away his fear.\n\nIt makes the wounded spirit whole,\nAnd calms the troubled breast;\n'Tis manna to the hungry soul,\nAnd to the weary rest.\n\nDear Name! The Rock on which we build;\nOur shield and hiding-place;\nOur never-failing treasury, filled\nWith boundless stores of grace.\n\nJesus, our Saviour, Shepherd, Friend,\nProphet, and Priest, and King;\nOur Lord, our Life, our Way, our End,\nAccept the praise we bring.\n\nWeak is the effort of our heart,\nAnd cold our warmest thought;\nBut when we see Thee as Thou art\nWe'll praise Thee as we ought.\n\nTill then we would Thy love proclaim\nWith ev'ry fleeting breath;\nAnd triumph in that blessed Name\nWhich quells the power of death.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "080",
        "title": "I'm but a stranger here;",
        "author": "Thomas Rawson Taylor (1836)",
        "meter": "P.M.",
        "tuneName": "Pilgrim Song",
        "lyrics": "\nI'm but a stranger here;\nHeaven is my home!\nEarth is a desert drear;\nHeaven is my home!\nDanger and sorrow stand\nRound me on ev'ry hand;\nHeav'n is my fatherland,\nHeaven is my home.\n\nWhat though the tempest rage?\nHeaven is my home!\nShort is my pilgrimage;\nHeaven is my home!\nAnd time's wild wintry blast\nSoon will be overpast;\nI shall reach home at last;\nHeaven is my home.\n\nThere at my Saviour's side;\nHeaven is my home!\nI shall be glorified;\nHeaven is my home!\nThere with the good and blest,\nThose I've loved most and best,\nI shall for ever rest;\nHeaven is my home.\n\nTherefore I'll murmur not:\nHeaven is my home!\nWhate'er my earthly lot;\nHeaven is my home!\nFor I shall surely stand\nThere at my Lord's right hand;\nHeav'n is my fatherland:\nHeaven is my home.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "081",
        "title": "I am waiting for the dawning",
        "author": "Samuel Trevor Francis",
        "meter": "8.7.8.7.D.",
        "tuneName": "Austrian Hymn",
        "lyrics": "\nI am waiting for the dawning\nOf the bright and blessed day,\nWhen the darksome night of sorrow\nShall have vanished far away;\nWhen for ever with the Saviour,\nFar beyond this vale of tears,\nI shall swell the song of worship\nThrough the everlasting years.\n\nI am looking at the brightness,\nSee, it shineth from afar,\nOf the clear and joyous beaming\nOf the Bright and Morning Star.\nThrough the dark grey mist of morning\nDo I see its glorious light;\nThen away with ev'ry shadow\nOf this sad and weary night.\n\nI am waiting for the coming\nOf the Lord who died for me;\nO His words have thrilled my spirit,\nI will come again for thee,\nI can almost hear His footfall\nOn the threshold of the door,\nAnd my heart, my heart is longing\nTo be with Him evermore.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "082",
        "title": "I am a stranger here",
        "author": "Anonymous",
        "meter": "6.6.6.6.4.",
        "tuneName": "Homeward",
        "lyrics": "\nI am a stranger here,\nNo home, no rest I see;\nNot all men count most dear\nShould win a sigh from me:\nI'm going home.\n\nSaviour, Thy home is mine,\nAnd I, Thy Father's child;\nWith hopes and joys divine\nThe world's a weary wild:\nI'm going home\n\nHome, O how soft and sweet,\nIt thrills upon the heart!\nHome, where the brethren meet\nAnd never, never part:\nI'm going home.\n\nHome, where the Bridegroom takes\nThe purchase of His love;\nHome, where the Father waits\nTo welcome her above:\nI'm going home.\n\nAnd when the world looks cold,\nWhich did my Lord revile,\nA lamb within the fold\nI can look up and smile:\nI'm going home.\n\nWhen earth's delusive charms\nWould snare my pilgrim feet,\nI'll fly to Jesus' arms\nAnd yet again repeat,\nI'm going home.\n\nAh! Gently, gently lead,\nAlong the painful way,\nBid every word and deed\nAnd every look to say,\nI'm going home!\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "083",
        "title": "I'm a pilgrim and stranger",
        "author": "Mary Dana",
        "meter": "P.M.",
        "tuneName": "Knowledge",
        "lyrics": "\nI'm a pilgrim and stranger,\nRough and thorny is the road,\nOften in the midst of danger,\nBut it leads to God.\nClouds and darkness oft distress me,\nGreat and many are my foes;\nAnxious cares and thoughts oppress me:\nBut my Father knows.\n\nO how sweet is this assurance\n'Midst the conflict and the strife!\nAlthough sorrows past endurance\nFollow me through life.\nHome in prospect still can cheer me;\nYes, and give me sweet repose,\nWhile I feel His presence near me:\nFor my Father knows.\n\nYes, He sees and knows me daily;\nWatches over me in love;\nSends me help when foes assail me,\nBids me look above.\nSoon my journey will be ended,\nLife is drawing to a close;\nI shall then be well attended:\nThis my Father knows.\n\nI shall then with joy behold Him,\nFace to face my Saviour see;\nFall with rapture and adore Him\nFor His love to me.\nNothing more shall then distress me\nIn the land of sweet repose;\nJesus stands engaged to bless me:\nThis my Father knows.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "084",
        "title": "I'm waiting for Thee, Lord",
        "author": "Hannah Kilham Burlingham",
        "meter": "P.M.",
        "tuneName": "Jewels",
        "lyrics": "\nI'm waiting for Thee, Lord,\nThy beauty to see, Lord,\nI'm waiting for Thee, for Thy coming again.\nThou'rt gone over there, Lord,\nA place to prepare, Lord,\nThy home I shall share at Thy coming again.\n\n'Mid danger and fear, Lord,\nI'm oft weary here, Lord;\nThe day must be near of Thy coming again\n'Tis all sunshine there, Lord,\nNo sighing or care, Lord,\nBut glory so fair at thy coming again.\n\nWhilst Thou art away, Lord,\nI stumble and stray, Lord;\nO hasten the day of Thy coming again!\nThis is not my rest, Lord;\nA pilgrim confest, Lord,\nI wait to be blest at Thy coming again.\n\nOur loved ones before, Lord,\nTheir troubles are o'er, Lord,\nI'll meet them once more at Thy coming again.\nThe blood was the sign, Lord,\nThat marked them as Thine, Lord,\nAnd brightly they'll shine at Thy coming again.\n\nE'en now let my ways, Lord,\nBe bright with Thy praise, Lord,\nFor brief are the days ere Thy coming again.\nI'm waiting for Thee, Lord,\nThy beauty to see, Lord;\nNo triumph for me like Thy coming again.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "085",
        "title": "I am watching for the morning",
        "author": "Boethia Thompson",
        "meter": "P.M.",
        "tuneName": "Watching",
        "lyrics": "\nI am watching for the morning,\nI am looking for the dawning\nI am watching for the morning\nOf that day\u2014that day.\nI am waiting for the meeting,\nI am longing for the greeting;\nI am waiting for the meeting\nWith my Lord, that day.\n\nI am gazing up for Thee, Lord,\nUntil Thy face I see, Lord;\nI am gazing up for Thee, Lord,\nTill that day\u2014that day.\nI would haste the consummation\nOf that great and full salvation;\nI would haste the consummation\nOf our joys, that day.\n\nHow I long to see Thy smile, Lord,\nWhen has passed the little while, Lord;\nHow I long to see Thy smile, Lord,\nOn that day\u2014that day.\nO to see the beam of gladness\nOn that face once marred with sadness;\nO to see the beam of gladness\nOn Thy face, that day.\n\nO to see the morning breaking,\nO the joy of such awaking;\nO to see the morning breaking\nOn that day\u2014that day.\nTo be caught up, Lord, for ever,\nTo be parted, Lord, no never;\nTo be with Thee, Lord, for ever\nFrom that rapturous day.\n",
        "Chorus": "\nWith the Lord to be for ever,\nWith the saints to be together;\nWith the Lord to be for ever\nFrom that day\u2014that day.\n",
        "addedChorus": ""
    },
    {
        "number": "086",
        "title": "I bless the Christ of God;",
        "author": "Horatius Bonar (1861)",
        "meter": "S.M.",
        "tuneName": "Silchester",
        "lyrics": "\nI bless the Christ of God;\nI rest on love divine;\nAnd with unfalt'ring lip and heart\nI call this Saviour mine.\n\nHis Cross dispels each doubt;\nI bury in His tomb\nEach thought of unbelief and fear,\nEach ling'ring shade of gloom.\n\nI praise the God of grace,\nI trust His truth and might;\nHe calls me His, I call Him mine,\nMy God, my joy, my light.\n\nIn Him is only good,\nIn me is only ill; My ill\nbut draws His goodness forth,\nAnd me He loveth still.\n\n'Tis He who saveth me,\nAnd freely pardon gives;\nI love because He loveth me,\nI live because He lives.\n\nMy life with Him is hid,\nMy death has passed away,\nMy clouds have melted into light,\nMy midnight into day.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "087",
        "title": "I bow me to Thy will, O God",
        "author": "Frederick William Faber",
        "meter": "C.M.",
        "tuneName": "Dunfermline",
        "lyrics": "\nI bow me to Thy will, O God,\nAnd all Thy ways adore,\nAnd every day I live I'd seek\nTo please Thee more and more.\n\nWhy should I care, O blessed Lord?\nSince all my cares are Thine;\nWhy not in triumph live, since Thou\nHast made Thy triumphs mine?\n\nLead on, lead on triumphantly,\nO blessed Lord! Lead on;\nFaith's pilgrim sons behind Thee seek\nThe road that Thou hast gone.\n\nHe always wins who sides with God,\nTo him no chance is lost;\nGod's will is sweetest to him when\nIt triumphs at his cost.\n\nIll that God blesses is our good,\nAnd unblest good is ill;\nAnd all is right that seems most wrong,\nIf it be His sweet will.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "088",
        "title": "I have been at the altar and witnessed the Lamb",
        "author": "Amelia Matilda Hull",
        "meter": "P.M.",
        "tuneName": "It is Well",
        "lyrics": "\nI have been at the altar and witnessed the Lamb\nBurnt wholly to ashes for me;\nAnd watched its sweet savour ascending on high,\nAccepted, O Father, by Thee.\n\nAnd lo, while I gazed at the glorious sight,\nA voice from above reached mine ears:\nBy this thine iniquity's taken away,\nAnd no trace of it on thee appears.\n\nAn end of thy sin has been made for thee here\nBy Him who its penalty bore;\nWith blood it is blotted eternally out,\nAnd I will not remember it more.\n\nO Lord, I believe it with wonder and joy;\nConfirm, Thou, this precious belief;\nWhile daily I learn that I am in myself\nOf sinners the vilest and chief.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "089",
        "title": "I have a home above",
        "author": "Henry Bennett",
        "meter": "S.M.",
        "tuneName": "Franconia",
        "lyrics": "\nI have a home above\nFrom sin and sorrow free;\nA mansion which eternal love\nDesigned and formed for me.\n\nMy Father's gracious hand\nHas built this blest abode;\nFrom everlasting it was planned\nMy dwelling-place with God.\n\nMy Saviour's precious blood\nHas made my title sure:\nHe passed through death's dark raging flood\nTo make my rest secure.\n\nThe Comforter is come,\nThe earnest has been given;\nHe leads me onward to the home\nReserved for me in heaven.\n\nLoved ones are gone before\nWhose pilgrim days are done;\nI soon shall greet them on that shore\nWhere partings are unknown.\n\nBut more than all, I long\nHis glories to behold,\nWhose smile fills all the radiant throng\nWith ecstasy untold.\n\nThat bright, yet tender smile,\nMy sweetest welcome there,\nShall cheer me through the little while\nI tarry for Him here.\n\nThy love, most gracious Lord,\nMy joy and strength shall be,\nTill Thou shalt speak the gladd'ning word\nThat bids me rise to Thee.\n\nAnd then, through endless days\nWhere all Thy glories shine,\nIn happier, holier strains I'll praise\nThe grace that made me Thine.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "090",
        "title": "I heard the voice of Jesus say",
        "author": "Horatius Bonar (1846)",
        "meter": "C.M.",
        "tuneName": "Vox Dilecti Kingsfold",
        "lyrics": "\nI heard the voice of Jesus say,\nCome unto Me and rest;\nLay down, thou weary one, lay down\nThy head upon My breast.\n\nI came to Jesus as I was,\nWeary, and worn, and sad;\nI found in Him a resting-place,\nAnd He has made me glad.\n\nI heard the voice of Jesus say.\nBehold, I freely give\nThe living water: Thirsty one\nStoop down, and drink, and live.\n\nI came to Jesus, and I drank\nOf that life-giving stream;\nMy thirst was quenched, my soul revived,\nAnd now I live in Him.\n\nI heard the voice of Jesus say,\nI am this dark world's Light:\nLook unto Me, thy morn shall rise,\nAnd all thy day be bright.\n\nI looked to Jesus, and I found\nIn Him my Star, my Sun;\nAnd in that light of life I'll walk\nTill trav'lling days are done.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "091",
        "title": "I hear the words of love",
        "author": "Horatius Bonar (1846)",
        "meter": "S.M.",
        "tuneName": "Hampton Ripon",
        "lyrics": "\nI hear the words of love,\nI gaze upon the blood,\nI see the mighty sacrifice,\nAnd I have peace with God.\n\n'Tis everlasting peace!\nSure as Jehovah's Name,\n'Tis stable as His steadfast throne,\nFor evermore the same.\n\nThe clouds may go and come,\nAnd storms may sweep my sky;\nThis blood-sealed friendship changes not,\nThe Cross is ever nigh.\n\nMy love is ofttimes low,\nMy joy still ebbs and flows,\nBut peace with Him remains the same,\nNo change Jehovah knows.\n\nI change, He changes not;\nThe Christ can never die:\nHis love, not mine, the resting-place,\nHis truth, not mine, the tie.\n\nThe Cross still stands unchanged,\nThough heaven is now His home;\nThe mighty stone is rolled away,\nBut yonder is His tomb!\n\nAnd yonder is my peace,\nThe grave of all my woes!\nI know the Son of God has come,\nI know He died and rose.\n\nI know He liveth now\nAt God's right hand above;\nI know the throne on which He sits,\nI know His truth and love.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "092",
        "title": "I journey through a desert drear and wild",
        "author": "Mary Jane Deck Walker",
        "meter": "10.10.10.10.",
        "tuneName": "Navarre",
        "lyrics": "\nI journey through a desert drear and wild,\nYet is my heart by such sweet thoughts beguiled\nOf Him on whom I lean, my Strength, my Stay.\nI can forget the sorrows of the way.\n\nThoughts of His love\u2014the root of ev'ry grace\nWhich finds in this poor heart a dwelling-place;\nThe sunshine of my soul, than day more bright,\nAnd my calm pillow of repose by night.\n\nThoughts of His sojourn in this vale of tears;\nThe tale of love unfolded in those years\nOf sinless suffering and patient grace,\nI love again and yet again to trace.\n\nThoughts of His glory\u2014on the Cross I gaze,\nAnd there behold its sad yet healing rays;\nBeacon of hope which, lifted up on high,\nIllumes with heavenly light the tear-dimmed eye.\n\nThoughts of His coming; for that joyful day\nIn patient hope I watch, and wait, and pray;\nThe dawn draws nigh, the midnight shadows flee,\nO what a sunrise will that advent be!\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "093",
        "title": "I hear the accuser roar",
        "author": "Samuel Whitlock Gandy",
        "meter": "S.M.",
        "tuneName": "Silchester",
        "lyrics": "\nI hear the accuser roar\nOf ills that I have done;\nI know them well, and thousands more;\nJehovah findeth none.\n\nSin, Satan, Death, press near\nTo harass and appal;\nLet but my risen Lord appear,\nBackward they go and fall.\n\nBefore, behind, around,\nThey set their fierce array\nTo fight and force me from my ground\nAlong Immanuel's way.\n\nI meet them face to face\nThrough Jesus' conquest blest;\nMarch in the triumph of His grace\nRight onward to my rest.\n\nThere, in His book I bear\nA more than conq'ror's name,\nA soldier, son, and fellow-heir,\nWho fought and overcame.\n\nHis be the Victor's name\nWho fought our fight alone:\nTriumphant saints no honour claim,\nTheir conquest was His own.\n\nBy weakness and defeat\nHe won the meed and crown;\nTrod all our foes beneath His feet\nBy being trodden down.\n\nHe hell in hell laid low;\nMade sin, He sin o'erthrew;\nBowed to the grave, destroyed it so,\nAnd death, by dying, slew.\n\nBless, bless the Conq'ror slain!\nSlain in His victory!\nWho lived, who died, who lives again,\nFor thee, His Church, for thee.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "094",
        "title": "I left it all with Jesus long ago;",
        "author": "Ellen H. Willis (1876)",
        "meter": "P.M.",
        "tuneName": "English Air",
        "lyrics": "\nI left it all with Jesus long ago;\nAll my sins I brought Him, and my woe:\nWhen by faith I saw Him on the tree,\nHeard His still, small whisper, Tis for thee,\nFrom my heart the burden rolled away:\nHappy day!\nFrom my heart the burden rolled away:\nHappy day!\n\nI leave it all with Jesus, for He knows\nHow to steal the bitter from life's woes;\nHow to gild the tear-drop with His smile,\nMake the desert garden bloom awhile:\nWhen my weakness leaneth on His might\nAll seems light.\nWhen my weakness leaneth on His might\nAll seems light.\n\nI leave it all with Jesus day by day;\nFaith can firmly trust Him, come what may:\nHope has dropped her anchor, found her rest\nIn the calm, sure haven of His breast;\nLove esteems it heaven to abide\nAt His side.\nLove esteems it heaven to abide\nAt His side.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "095",
        "title": "I need Thee, precious Saviour!",
        "author": "Frederick Whitfield",
        "meter": "7.6.7.6.D.",
        "tuneName": "Munich",
        "lyrics": "\nI need Thee, precious Saviour!\nO Thou art all to me;\nBefore the throne for ever\nI stand complete in Thee.\nThough Satan loud accuses,\nYet I can ever see\nThe blood of Christ most precious,\nThe sinner's perfect plea.\n\nI need Thee, precious Saviour!\nFor I am very poor;\nA stranger and a pilgrim,\nI have no earthly store.\nI need Thy love, Lord Jesus!\nTo cheer me on my way,\nTo guide my doubting footsteps.\nTo be my strength and stay.\n\nI need Thee, precious Saviour!\nI need a friend like Thee;\nA friend to soothe and comfort,\nA friend to care for me.\nI need Thy heart, Lord Jesus!\nTo feel each anxious care,\nTo bear my ev'ry burden,\nAnd all my sorrow share.\n\nI need Thee, precious Saviour!\nFor I am very blind,\nA weak and foolish wand'rer,\nWith dark and evil mind.\nI need Thy light, Lord Jesus!\nTo tread the thorny road!\nTo guide me safe to glory\nWhere I shall see my God.\n\nI need Thee, precious Saviour!\nI need Thee day by day\nTo fill me with Thy fullness,\nTo lead me on my way.\nI need Thy Holy Spirit\nTo teach me what I am,\nTo show me more of Jesus,\nTo point me to the Lamb.\n\nI need Thee, precious Saviour!\nAnd hope to see Thee soon,\nEncircled with the rainbow\nAnd seated on Thy throne;\nThere, with Thy blood-bought people,\nMy joy shall ever be\nTo sing Thy praise, Lord Jesus,\nAnd ever gaze on Thee.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "096",
        "title": "I once was a stranger to grace and to God;",
        "author": "Robert Murray McCheyne (1837)",
        "meter": "11's",
        "tuneName": "Consolation",
        "lyrics": "\nI once was a stranger to grace and to God;\nI knew not my danger, I felt not my load;\nThough friends spoke in rapture of Christ on the tree,\nJEHOVAH TSIDKENU was nothing to me.\n\nLike tears from the daughters of Zion that roll,\nI wept when the waters went over His soul;\nYet thought not that my sins had nailed to the tree\nJEHOVAH TSIDKENU\u2014'twas nothing to me.\n\nWhen free grace awoke me by light from on high,\nThen legal fears shook me, I trembled to die;\nNo refuge, no safety in self could I see,\nJEHOVAH TSIDKENU my Saviour must be.\n\nMy terrors all vanished before the sweet Name;\nMy guilty fears banished, with boldness I came\nTo drink at the fountain, life-giving and free;\nJEHOVAH TSIDKENU is all things to me.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "097",
        "title": "I saw the Cross of Jesus",
        "author": "George M\u00fcller & Frederick Whitfield (1875)",
        "meter": "7.6.7.6.D.",
        "tuneName": "Holmbridge Missionary",
        "lyrics": "\nI saw the Cross of Jesus\nWhen burdened with my sin,\nI sought the Cross of Jesus\nTo give me peace within;\nI brought my sins to Jesus,\nHe cleansed them in His blood;\nAnd in the Cross of Jesus\nI found my peace with God.\n\nI love the Cross of Jesus;\nIt tells me what I am:\nA vile and guilty creature,\nSaved only through the Lamb.\nNo righteousness, no merit,\nNo beauty can I plead;\nYet in the Cross I glory,\nMy title there I read.\n\nSweet is the Cross of Jesus;\nThere let my weary heart\nStill rest in peace unshaken\nTill with Him\u2014ne'er to part;\nAnd then in strains of glory\nI'll sing His wondrous power,\nWhere sin can never enter,\nAnd death is known no more.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "098",
        "title": "I thirst, but not as once I did",
        "author": "William Cowper",
        "meter": "L.M.",
        "tuneName": "Melcombe",
        "lyrics": "\nI thirst, but not as once I did,\nThe vain delights of earth to share;\nThy wounds, Emmanuel, all forbid\nThat I should seek my pleasure there.\n\nIt was the sight of Thy dear Cross\nFirst weaned my soul from earthly things,\nAnd taught me to esteem as dross\nThe mirth of fools and pomp of kings.\n\nGreat Fountain of delight unknown!\nNo longer sink below the brim;\nBut overflow, and pour me down\nA living and life-giving stream.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "099",
        "title": "In seasons of grief to my God I'll repair",
        "author": "John Price",
        "meter": "P.M.",
        "tuneName": "Hiding in Thee",
        "lyrics": "\nIn seasons of grief to my God I'll repair\nWhen my heart is o'erwhelmed with sorrow and care;\nFrom the ends of the earth to Thee will I cry,\nLead me to the Rock that is higher than I.\n\nWhen Satan, my foe, shall come in like a flood\nTo drive my poor soul from the Fountain of good,\nI'll pray to the Saviour who meekly did die;\nLead me to the Rock that is higher than I.\n\nAnd while as a stranger I sojourn below,\nThy covenant blessing, Lord, freely bestow;\nIn affliction's dark night to Thy throne let me fly,\nLead me to the Rock that is higher than I.\n\nAnd when the last trumpet shall sound through the skies,\nAnd the dead in Christ Jesus immortal shall rise,\nWith the ransomed I'll praise Him above yonder sky,\nBuilt firm on the Rock that is higher than I.\n",
        "Chorus": "\nHigher than I, higher than I,\nLead me to the Rock that is higher than I.\n",
        "addedChorus": ""
    },
    {
        "number": "100",
        "title": "I would commune with Thee, my God;",
        "author": "Goerge Burden Bubier",
        "meter": "C.M.",
        "tuneName": "St. Anne St. Etheldreda",
        "lyrics": "\nI would commune with Thee, my God;\nE'en to Thy seat I come;\nI leave my joys, I leave my sins,\nAnd seek in Thee my home.\n\nI stand upon the mount of God\nWith sunlight in my soul;\nI hear the storms in vales beneath;\nI hear the thunders roll.\n\nBut I am calm with Thee, my God,\nBeneath these glorious skies;\nAnd to the height on which I stand\nNor storms nor clouds can rise.\n\nO this is life! O this is joy!\nMy God, to find Thee so;\nThy face to see, Thy voice to hear,\nAnd all Thy love to know.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "101",
        "title": "It passeth knowledge, that dear love of Thine",
        "author": "Mary Shekleton (1863)",
        "meter": "10.10.10.10.",
        "tuneName": "Surpassing",
        "lyrics": "\nIt passeth knowledge, that dear love of Thine,\nLord Jesus, Saviour; yet this soul of mine\nWould of Thy love, in all its breadth and length,\nIts height and depth, its everlasting strength\nKnow more and more.\n\nIt passeth telling, that dear love of Thine,\nLord Jesus Saviour; yet these lips of mine\nWould fain proclaim to sinners, far and near,\nA love which can remove all guilt and fear,\nAnd love beget.\n\nIt passeth praises, that dear love of Thine,\nLord Jesus, Saviour; yet this heart of mine\nWould sing that love, so full, so rich, so free,\nWhich brings a rebel sinner, even me,\nNigh unto God.\n\nBut though I cannot sing, or tell, or know\nThe fullness of Thy love while here below,\nMy empty vessel I may freely bring;\nO Thou, who art of love the living spring,\nMy vessel fill.\n\nThen fill me, O my Saviour, with Thy love!\nLead, lead me to the living fount above;\nThither may I in simple faith draw nigh,\nAnd never to another fountain fly,\nBut unto Thee.\n\nAnd when, Lord Jesus, Thine own face I see,\nWhen at Thy lofty throne I bow the knee,\nThen of Thy love, in all its breadth and length,\nIts height and depth, its everlasting strength,\nMy soul shall sing.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "102",
        "title": "I will sing of my Redeemer",
        "author": "Philip Paul Bliss (1876)",
        "meter": "P.M.",
        "tuneName": "My Redeemer",
        "lyrics": "\nI will sing of my Redeemer,\nAnd His wondrous love to me;\nOn the cruel Cross He suffered,\nFrom the curse to set me free.\n\nI will tell the wondrous story,\nHow my lost estate to save,\nIn His boundless love and mercy\nHe the ransom freely gave.\n\nI will praise my dear Redeemer,\nHis triumphant power I'll tell;\nHow the victory He giveth\nOver sin, and death, and Hell.\n\nI will sing of my Redeemer,\nAnd His heav'nly love to me;\nHe from death to life hath brought me,\nSon of God, with him to be.\n",
        "Chorus": "\nSing, O sing of my Redeemer!\nWith His blood He purchased me!\nOn the Cross He sealed my pardon,\nPaid the debt and made me free.\n",
        "addedChorus": ""
    },
    {
        "number": "103",
        "title": "I've found a Friend; O such a Friend!",
        "author": "James Grindlay Small (1863)",
        "meter": "8.7.8.7.D.",
        "tuneName": "Friendship",
        "lyrics": "\nI've found a Friend; O such a Friend!\nHe loved me ere I knew Him;\nHe drew me with the cords of love,\nAnd thus He bound me to Him.\nAnd round my heart still closely twine\nThose ties which nought can sever,\nFor I am Christ's and He is mine,\nFor ever and for ever.\n\nI've found a Friend; O such a Friend!\nHe bled, He died to save me;\nAnd not alone the gift of life,\nBut His own self He gave me.\nNought that I have, mine own I'll call,\nI'll hold it for the Giver:\nMy heart, my strength, my life, my all,\nAre His, and His for ever.\n\nI've found a Friend; O such a Friend!\nAll power to Him is given\nTo guard me on my onward course\nAnd bring me safe to heaven.\nTh' eternal glories gleam afar\nTo nerve my faint endeavour;\nSo now to watch! To work! To war!\nAnd then to rest for ever.\n\nI've found a Friend; O such a Friend!\nSo kind, and true, and tender,\nSo wise a Counsellor and Guide,\nSo mighty a Defender.\nFrom Him, who loves me now so well,\nWhat power my soul can sever?\nShall life? Or death? shall earth? or hell?\nNo! I am His for ever.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "104",
        "title": "I've found a joy in sorrow",
        "author": "Jane Fox Crewdson (1864)",
        "meter": "7.6.7.6.D.",
        "tuneName": "Satisfied",
        "lyrics": "\nI've found a joy in sorrow,\nA secret balm for pain,\nA beautiful to-morrow\nOf sunshine after rain.\nI've found a branch of healing\nNear ev'ry bitter spring,\nA whispered promise stealing\nO'er ev'ry broken string.\n\nI've found a glad hosanna\nFor every woe and wail;\nA handful of sweet manna\nWhen grapes of Eshcol fail;\nI've found the Rock of Ages\nWhen desert wells are dry;\nAnd, after weary stages,\nI've found an Elim nigh.\n\nAn Elim with its coolness,\nIts fountains, and its shade;\nA blessing in its fullness,\nWhen buds of promise fade.\nO'er tears of soft contrition\nI've seen a rainbow light,\nA glory and fruition,\nSo near! yet out of sight.\n\nMy Saviour, Thee possessing,\nI have the joy, the balm,\nThe healing and the blessing,\nThe sunshine and the psalm;\nThe promise for the fearful,\nThe Elim for the faint,\nThe rainbow for the tearful,\nThe glory for the saint.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "105",
        "title": "I was a wand'ring sheep",
        "author": "Horatius Bonar (1843)",
        "meter": "S.M.D",
        "tuneName": "Nearer Home",
        "lyrics": "\nI was a wand'ring sheep,\nI did not love the fold;\nI did not love my Shepherd's voice,\nI would not be controlled.\nI was a wayward child,\nI did not love my home;\nI did not love my Father's voice\nI loved afar to roam.\n\nThe Shepherd sought His sheep,\nThe Father sought His child,\nAnd followed me o'er vale and hill,\nO'er desert waste and wild.\nYea, found me nigh to death,\nFamished, and faint, and lone.\nAnd bound me with the bands of love,\nAnd saved the wand'ring one.\n\nJesus my Shepherd is,\n'Twas He that loved my soul,\n'Twas He that cleansed me by His blood,\n'Twas He that made me whole.\n'Twas He that sought the lost,\nThat found the wand'ring sheep;\n'Twas He that brought me to the fold,\n'Tis He that still doth keep.\n\nNo more a wand'ring sheep\nI love to be controlled.\nI love my tender Shepherd's voice,\nI love the peaceful fold.\nNo more a wayward child\nI seek no more to roam;\nI love my heav'nly Father's voice,\nI love, I love His home.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "106",
        "title": "It may be at morn",
        "author": "H.L. Turner (1878)",
        "meter": "P.M.",
        "tuneName": "It may be at morn",
        "lyrics": "\nIt may be at morn,\nWhen the day is awaking,\nWhen sunlight through darkness\nAnd shadow is breaking,\nThat Jesus will come\nIn the fullness of glory\nTo receive from the world His own.\n\nIt may be at midday,\nIt may be at twilight,\nIt may be, perchance,\nThat the blackness of midnight\nWill burst into light\nIn the blaze of His glory\nWhen Jesus receives His own.\n\nWhile host cry Hosanna,\nFrom heaven descending,\nWith glorified saints\nAnd the angels attending,\nWith grace on His brow,\nLike a halo of glory\nWill Jesus receive His own.\n\nO joy! O delight!\nShould we go without dying;\nNo sickness, no sadness,\nNo dread, and no crying;\nCaught up through the clouds\nWith our Lord into glory\nWhen Jesus receives His own.\n",
        "Chorus": "\nO Lord Jesus, how long?\nHow long\u2014ere we shout the glad song?\nChrist returneth! Hallelujah!\nHallelujah! Amen!\nHallelujah! Amen!\n",
        "addedChorus": ""
    },
    {
        "number": "107",
        "title": "I've found the precious Christ of God",
        "author": "John Mason",
        "meter": "C.M.",
        "tuneName": "University Belgrave",
        "lyrics": "\nI've found the precious Christ of God,\nMy heart doth sing for joy;\nAnd sing I must, for Christ I have,\nA precious Christ have I.\n\nChrist Jesus is the Lord of lords,\nHe is the King of kings;\nHe is the Sun of Righteousness\nWith healing in His wings.\n\nChrist is my meat, Christ is my drink,\nMy med'cine and my health;\nMy peace, my strength, my joy, my crown,\nMy glory and my wealth.\n\nChrist is my Shepherd and my Friend,\nMy Saviour whom I love,\nMy Head, my Hope, my Counsellor,\nMy Advocate above.\n\nChrist Jesus is the heaven of heaven;\nMy Christ what shall I call?\nChrist is the First, Christ is the Last,\nAnd Christ is all in all.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "108",
        "title": "Jehovah is our strength",
        "author": "Samuel Bernard",
        "meter": "6.6.6.6.8.8.",
        "tuneName": "Lennox",
        "lyrics": "\nJehovah is our strength,\nAnd He shall be our song;\nWe shall o'ercome at length,\nAlthough our foes be strong:\nIn vain then Satan doth oppose,\nFor God is stronger than His foes.\n\nThe Lord our refuge is,\nAnd ever will remain;\nSince He hath made us His\nHe will our cause maintain:\nIn vain our enemies oppose,\nFor God is stronger than His foes.\n\nThe Lord our portion is;\nWhat can we wish for more?\nAs long as we are His\nWe never can be poor:\nIn vain do earth and hell oppose,\nFor God is stronger than His foes.\n\nThe Lord our Shepherd is;\nHe knows our ev'ry need;\nAnd since we now are His,\nHis care our souls will feed:\nIn vain do sin and death oppose\nFor God is stronger than His foes.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "109",
        "title": "Jesus is our Shepherd, wiping ev'ry tear",
        "author": "Hugh Stowell",
        "meter": "11.11.11.11.",
        "tuneName": "Goshen Kirkbradden",
        "lyrics": "\nJesus is our Shepherd, wiping ev'ry tear,\nFolded in His bosom what have we to fear?\nOnly let us follow whither He doth lead,\nTo the thirsty desert, or the dewy mead.\n\nJesus is our Shepherd, well we know His voice!\nHow its gentlest whisper makes our hearts rejoice:\nEven when He chideth, tender is his tone;\nNone but He shall guide us; we are His alone.\n\nJesus is our Shepherd; for the sheep He bled;\nEv'ry lamb is sprinkled with the blood He shed;\nThen on each He setteth His own secret sign.\nThey that have My Spirit, these, saith He, are Mine.\n\nJesus is our Shepherd; guarded by His arm,\nThough the wolves may ravin none can do us harm;\nIf we tread death's valley, dark with fearful gloom,\nWe shall fear no evil, victors o'er the tomb.\n\nJesus is our Shepherd; with His goodness now,\nAnd His tender mercy, He doth us endow.\nLet us sing His praises with a gladsome heart\nTill in heaven we meet Him, nevermore to part.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "110",
        "title": "Jesus Christ, Thou King of Glory",
        "author": "Hannah Kilham Burlingham",
        "meter": "8.7.8.4.8.4.",
        "tuneName": "Star of Peace",
        "lyrics": "\nJesus Christ, Thou King of Glory,\nBorn a Saviour-Prince to be,\nWhile the angel-hosts adore Thee,\nWe joy in Thee,\nSinging of Thy grace the story,\nPraise, praise to Thee.\n\nThou the bands of death didst sever,\nConflict Thine and victory;\nGod is for us now and ever;\nWe joy in Thee. We are Thine,\nThine own for ever,\nPraise, praise to Thee.\n\nThou the ransom price hast given,\nSetting thus the captive free;\nThou art Lord of earth and heaven;\nWe joy in Thee.\nThrough Thy blood we stand forgiven,\nPraise, praise to Thee.\n\nRisen Lord! At Thy returning\nSweet and full our song shall be;\nHasting to that blissful morning\nWe joy in Thee.\nThou hast read our spirits' yearning,\nPraise, praise to Thee.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "111",
        "title": "Jesus, in His heav'nly temple",
        "author": "Robert Cleaver Chapman",
        "meter": "8.7.8.7.",
        "tuneName": "Stuttgart",
        "lyrics": "\nJesus, in His heav'nly temple,\nSits with God upon the throne;\nNow no more to be forsaken,\nHis humiliation gone.\n\nNever more shall God, Jehovah,\nSmite the Shepherd with the sword;\nNe'er again shall cruel sinners\nSet at nought our glorious Lord.\n\nDwelling in eternal sunshine\nOf the countenance of God,\nJesus fills all heav'n with incense\nOf His reconciling blood.\n\nOn His heart our names are graven;\nOn His shoulders we are borne;\nOf our God beloved in Jesus\nWe can love Him in return.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "112",
        "title": "Jesus is coming! Sing the glad word!",
        "author": "Edwin Hutch & Daniel Webster Whittle",
        "meter": "P.M.",
        "tuneName": "Jesus is Coming",
        "lyrics": "\nJesus is coming! Sing the glad word!\nComing for those He redeemed by His blood,\nComing to reign as the glorified Lord!\nJesus is coming again!\n\nJesus is coming! The dead shall arise,\nLoved ones shall meet in a joyful surprise,\nCaught up together to Him in the skies:\nJesus is coming again!\n\nJesus is coming! His saints to release;\nComing to give to the warring earth peace;\nSinning, and sighing, and sorrow, shall cease:\nJesus is coming again!\n\nJesus is coming! The promise is true;\nWho are the chosen, the faithful, the few\nWaiting and watching, prepared for review?\nJesus is coming again!\n",
        "Chorus": "\nJesus is coming, is coming again!\nJesus is coming again!\nShout the glad tidings o'er mountain and plain,\nJesus is coming again!\n",
        "addedChorus": ""
    },
    {
        "number": "113",
        "title": "Jesus, Lord, I'm never weary",
        "author": "Boethia Thompson",
        "meter": "8.7.8.7.4.7.",
        "tuneName": "Balm",
        "lyrics": "\nJesus, Lord, I'm never weary\nLooking on Thy Cross and shame;\nGazing there I seem so near Thee,\nDear to me each throb of pain.\nEver near Thee,\nLing'ring here I would remain.\n\nLittle cared I for the anguish\nOf Thy bitter, bitter cry;\nLeft alone, Lord, there to languish,\nNone to share Thy parting sigh.\nAll forsaken!\nLeft alone, O Lord, to die.\n\nJesus, Saviour, I have found Thee\nAll my utmost need required;\nIn Thyself, Lord, Thou hast found me\nAll Thy loving heart desired.\nI would praise Thee\nFrom my soul by love inspired.\n\nAll my sins were laid upon Thee,\nAll my guilt was on Thee laid,\nAnd the blood of Thine atonement\nAll my utmost debt has paid.\nGracious Saviour,\nI believe, for Thou hast said.\n\nThine almighty arms are round me,\nAnd my head is on Thy breast,\nFor my weary soul has found Thee\nSuch a perfect, perfect rest.\nGracious Saviour,\nNow I know that I am blest.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "114",
        "title": "Jesus, Lord, we know Thee present",
        "author": "Boethia Thompson",
        "meter": "8.7.8.7.D.",
        "tuneName": "Deerhurst",
        "lyrics": "\nJesus, Lord, we know Thee present\nAt Thy table freshly spread,\nSeated at Thy priceless banquet\nWith Thy banner overhead.\nPrecious moments at Thy table\nFrom all fear and doubt set free;\nHere to rest, so sweetly able,\nOccupied alone with Thee.\n\nHere rejoicing in Thy nearness,\nGladly by Thy Spirit led;\nCalmly in the blest remembrance\nOf Thy precious blood once shed.\nLord, we take each simple token\nIn fond memory of Thee;\nMuse upon Thy body broken,\nAnd Thy blood shed on the tree.\n\nO what joy it is to see Thee\nIn these emblems gathered here!\nIn the bread and wine of blessing,\nBread to strengthen, wine to cheer.\nLord, behold us met together,\nMembers of our risen Head,\nThus to take the cup of blessing,\nThus to share the broken bread.\n\nLord, we know how true Thy promise\nTo be with us where we meet,\nWhen in Thy loved Name we gather\nTo enjoy communion sweet.\nDearer still that looked-for promise\nTo each waiting, yearning heart,\nThat we soon will be with Thee, Lord\nAnd for ever where Thou art.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "115",
        "title": "Jesus! Source of life eternal",
        "author": "Ernst Christoph Homburg tr/ad by Hannah Kilham Burlingham",
        "meter": "P.M.",
        "tuneName": "Altenburg",
        "lyrics": "\nJesus! Source of life eternal,\nJesus! Author of our breath\nVictor o'er the hosts infernal\nBy defeat and shame and death.\nThou through deepest tribulation\nDeigned to pass for our salvation:\nThousand, thousand praises be,\nLord of Glory, unto Thee.\n\nThou, O Son of God, wert bearing\nCruel mockings, hatred, scorn;\nThou, the King of Glory, wearing,\nFor our sake, the crown of thorn;\nDying, Thou didst us deliver\nFrom the chains of sin for ever:\nThousand, thousand praises be,\nPrecious Saviour, unto Thee.\n\nAll the shame men heaped upon Thee,\nThou didst patiently endure;\nNot the pains of death too bitter\nOur redemption to procure.\nWondrous Thy humiliation\nTo accomplish our salvation:\nThousand, thousand praises be,\nPrecious Saviour, unto Thee.\n\nHeartfelt, praise and adoration,\nSaviour, thus to Thee we give;\nFor Thy life humiliation,\nFor Thy death, whereby we live.\nAll the grief Thou wert enduring,\nAll the bliss Thou wert securing:\nEvermore the theme shall be\nOf thanksgivings, Lord, to Thee.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "116",
        "title": "Jesus! O Name of power divine",
        "author": "Frederick Whitfield",
        "meter": "C.M.",
        "tuneName": "St. Bernard",
        "lyrics": "\nJesus! O Name of power divine\nTo all of heav'nly birth!\nJesus! the never-failing mine\nOf richest, sweetest worth.\n\nEach bitter grief, each anxious care,\nO Lord, Thy goodness knows;\nMy wounded spirit only there\n'Mid conflict finds repose.\n\nHere, love may meet a kindred heart,\nBut not a heart like Thine;\nLord, from Thy love I cannot part,\nNor canst Thou part with mine.\n\nWith Thee I cannot feel alone,\nI cannot be forgot;\nThough friends are changing one by one,\nThou, Saviour, changest not!\n\nMy future path, I know, may be\nA path of anxious care;\nBut love has planned that path for me,\nThat love in which I share.\n\nAnd is it not, O Lord, enough\nThy perfect love to share,\nTill Thou shalt call Thy Bride above,\nTo meet Thee in the air?\n\nIt is enough; Thy tender smile,\nTill I behold Thee there,\nShall cheer me through the little while\nI'm waiting for Thee here.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "117",
        "title": "Joy! joy! joy! there is joy in heav'n with angels",
        "author": "Anonymous",
        "meter": "P.M.",
        "tuneName": "Joy",
        "lyrics": "\nJoy! joy! joy! there is joy in heav'n with angels,\nJoy! joy! joy! for the prodigal's return;\nHe has come, he has come\nTo his Father's house at last;\nHe was lost, he is found,\nAnd the night of gloom is past.\nBlessed hour of joy and communion sweet,\nFor his heart is full and his love complete;\nHis Father sees him and hastes to meet,\nAnd bids him welcome home.\n\nJoy! joy! joy! in the courts of heav'n resounding;\nJoy! joy! joy! o'er the prodigal's return;\nHark, the song! hark, the song!\n'Tis a joyful, joyful strain,\nWelcome home, welcome home\nTo thy Father's house again.\nWhile his eye is dim with the falling tears\nOf repented grief, over wasted years\nThe pard'ning voice of his Father cheers,\nAnd bids him welcome home.\n\nJoy! joy! joy! in the radiant fields of glory,\nJoy! joy! joy! when wand'ring soul returns;\nLet us haste, let us haste\nWhile the morning sun is bright;\nJesus calls, Jesus calls,\nTo a land of love and light:\nWe will journey on till our pilgrim feet\nShall be found at last in the golden street:\nOur glorious Saviour will smile to greet,\nAnd bid us welcome home.\n",
        "Chorus": "\nJoy! joy! joy! there is joy in heaven with the angels;\nJoy! joy! joy! for the prodigal's return.\n",
        "addedChorus": ""
    },
    {
        "number": "118",
        "title": "Just as Thou art, how wondrous fair",
        "author": "Joseph Denham Smith",
        "meter": "L.M.",
        "tuneName": "Ernan L.M.D.",
        "lyrics": "\nJust as Thou art, how wondrous fair,\nLord Jesus, all Thy members are:\nA life divine to them is given,\nA long inheritance in heaven.\n\nJust as I was I came to Thee,\nAn heir of wrath and misery;\nJust as Thou art before the throne,\nI stand in righteousness Thine own.\n\nJust as Thou art, how wondrous free:\nLoosed by the sorrows of the tree:\nSaviour! the curse, the wrath were Thine,\nTo give Thy saints this life divine.\n\nJust as Thou art, nor doubt, nor fear\nCan with Thy spotlessness appear;\nO timeless love! as Thee, I'm seen\nThe righteousness of God in Him.\n\nJust as Thou art, Thou Lamb divine!\nLife, light, and holiness are Thine:\nThyself their endless source I see,\nAnd they, the life of God, in me.\n\nJust as Thou art, O blissful ray\nThat turned my darkness into day!\nThat woke me from my death in sin\nTo know my perfectness in Him.\n\nO teach me, Lord, this grace to own,\nThat self and sin no more are known:\nThat love, Thy love, in wondrous right,\nHath placed me in its spotless light.\n\nSoon, soon, 'mid joys on joys untold,\nThou wilt this grace and love unfold,\nTill worlds on worlds and adoring see\nThe part Thy members have in Thee.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "119",
        "title": "Jesus, Lover of my soul",
        "author": "Charles Wesley (1740)",
        "meter": "7.7.7.7.D.",
        "tuneName": "Hollingside Aberystwyth",
        "lyrics": "\nJesus, Lover of my soul,\nLet me to Thy bosom fly\nWhile the billows near me roll,\nWhile the tempest still is high:\nHide me, O my Saviour, hide\nTill the storm of life is past;\nSafe into the haven guide,\nO receive my soul at last.\n\nOther refuge have I none;\nHangs my helpless soul on Thee;\nLeave, ah! leave me not alone,\nStill support and comfort me.\nAll my hope on Thee is stayed,\nAll my help from Thee I bring;\nCover my defenceless head\nWith the shadow of Thy wing.\n\nPlenteous grace with Thee is found,\nGrace to pardon all my sin;\nLet the healing streams abound;\nMake and keep me pure within.\nThou of life the fountain art;\nFreely let me take of Thee;\nSpring Thou up within my heart\nNow and to eternity.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "120",
        "title": "Jesus, the Lord our Righteousness!",
        "author": "Nikolaus Ludwig von ZinzendorfTranslated by John WesleyAlternate first line: God's Christ, who is my righteousness",
        "meter": "L.M.",
        "tuneName": "Old Hundred Whitburn",
        "lyrics": "\nJesus, the Lord our Righteousness!\nOur beauty Thou, our glorious dress;\n'Midst flaming worlds, whilst thus arrayed,\nWith joy shall we lift up our head.\n\nBold shall we stand in that great day,\nFor who aught to our charge shall lay?\nWhile by Thy blood absolved we are\nFrom sin's tremendous curse and fear.\n\nThus Abraham, the friend of God,\nThus all the saints redeemed by blood,\nSaviour of sinners Thee proclaim,\nAnd all their boast is in Thy Name.\n\nTill we behold Thee on Thy throne,\nIn Thee we boast, in Thee alone;\nOur beauty this, our glorious dress,\nJesus, the Lord our Righteousness.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "121",
        "title": "Kept, safely kept;",
        "author": "William Blane",
        "meter": "4.6.8.8.4.",
        "tuneName": "Patience",
        "lyrics": "\nKept, safely kept;\nMy fears away are swept;\nIn weakness to my God I cling,\nThough foes be strong I calmly sing,\nKept, safely kept.\n\nKept by His power,\nWhatever dangers lower\nThe strength of God's almighty arm\nDoth shield my soul from every harm,\nKept by His power.\n\nThrough simple faith,\nBelieving what He saith,\nUnshaken on my God I lean,\nAnd realise His power unseen,\nBut known to faith.\n\nKept all the way,\nE'en to salvation's day,\nHis mighty love ne'er cold shall wax,\nNor shall His pow'rful grasp relax,\nThrough all the way.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "122",
        "title": "Lamb of God! our souls adore Thee",
        "author": "James George Deck (1841)",
        "meter": "8.7.8.7.D.",
        "tuneName": "Deerhurst",
        "lyrics": "\nLamb of God! our souls adore Thee\nWhile upon Thy face we gaze;\nThere the Father's love and glory\nShine in all their brightest rays.\nThine almighty power and wisdom\nAll creation's works proclaim;\nHeaven and earth alike confess Thee\nAs the ever great I AM.\n\nLamb of God! Thy Father's bosom\nEver was Thy dwelling-place;\nHis delight, in Him rejoicing,\nOne with Him in power and grace:\nO what wondrous love and mercy!\nThou didst lay Thy glory by\nAnd for us didst come from heaven,\nAs the Lamb of God, to die.\n\nLamb of God! when we behold Thee\nLowly in the manger laid;\nWand'ring as a homeless stranger\nIn the world Thy hands had made;\nWhen we see Thee in the garden\nIn Thine agony of blood;\nAt Thy grace we are confounded,\nHoly, spotless Lamb of God.\n\nWhen we see Thee, as the Victim,\nBound to the accursed tree,\nFor our guilt and folly stricken,\nAll our judgment borne by Thee.\nLord, we own, with hearts adoring,\nThou hast loved us unto blood;\nGlory, glory everlasting\nBe to Thee, Thou Lamb of God!\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "123",
        "title": "Lamb of God! Thou now art seated",
        "author": "James George Deck (1841)",
        "meter": "8.7.8.7.D.",
        "tuneName": "Sydney",
        "lyrics": "\nLamb of God! Thou now art seated\nHigh upon Thy Father's throne;\nAll Thy gracious work completed,\nAll Thy mighty vict'ry won.\nEvery knee in heaven is bending\nTo the Lamb for sinners slain;\nEvery voice and harp is swelling,\n\"Worthy is the Lamb to reign.\"\n\nLord, in all Thy pow'r and glory,\nStill Thy thoughts and eyes are here,\nWatching o'er Thy ransomed people\nTo Thy gracious heart so dear.\nThou for us art interceding,\nEverlasting is Thy love;\nAnd a blessed rest preparing\nIn the Father's house above.\n\nLamb of God! Thou soon in glory\nWilt to this sad earth return;\nAll Thy foes shall quake before Thee,\nAll that now despise Thee mourn;\nThen Thy saints all gathered to Thee\nWith Thee in Thy kingdom reign;\nThine the praise, and Thine the glory\nLamb of God, for sinners slain.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "124",
        "title": "Let us love and sing and wonder!",
        "author": "John Newton (1774)",
        "meter": "8.7.8.7.7.7.",
        "tuneName": "Oberlin",
        "lyrics": "\nLet us love and sing and wonder!\nLet us praise the Saviour's Name!\nHe has hushed the law's loud thunder,\nHe has quenched mount Sinai's flame;\nHe has washed us in His blood,\nHe has brought us nigh to God.\n\nLet us love the Lord that bought us,\nPitied us when wand'ring far;\nCalled us by His grace, and taught us\nWhere our joys and blessings are;\nHe has washed us in His blood,\nHe presents our souls to God.\n\nLet us sing, though fierce temptation\nThreaten hard to bear us down;\nFor the Lord, our strong salvation,\nHolds in view the conq'ror's crown;\nHe who washed us in His blood,\nHas secured our way to God.\n\nLet us wonder; grace and justice\nJoin, and point to mercy's store;\nWhen through grace in Christ our trust is\nJustice smiles, and asks no more;\nHe who washed us in His blood\nSoon will bring us home to God.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "125",
        "title": "Let us rejoice in Christ the Lord",
        "author": "John Newton (1774)",
        "meter": "C.M.",
        "tuneName": "Jackson",
        "lyrics": "\nLet us rejoice in Christ the Lord\nWho claims us for His own;\nThe hope established on His Word\nCan ne'er be overthrown.\n\nThough many foes beset us round,\nAnd feeble is our arm,\nOur life is hid with Christ in God\nBeyond the reach of harm.\n\nWeak as we are, we shall not faint\nOr fainting, cannot fail;\nJesus, the strength of every saint,\nFor ever must prevail.\n\nThough now He's unperceived by sense\nFaith sees Him always near;\nOur guide, our glory, our defence.\nTo save from every fear.\n\nAs surely as He overcame\nAnd conquered death and sin,\nSo surely those that trust His Name\nWill all His triumph win.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "126",
        "title": "Lord, accept our feeble song;",
        "author": "Thomas Kelly",
        "meter": "7.7.7.7.",
        "tuneName": "Innocents",
        "lyrics": "\nLord, accept our feeble song;\nPower and praise to Thee belong;\nWe would all Thy grace record,\nHoly, holy, holy Lord.\n\nRich in glory, Thou didst stoop,\nThence is all Thy people's hope;\nThou wast poor, that we might be\nRich in glory, Lord, with Thee.\n\nWhen we think of love like this,\nJoy and shame our hearts possess;\nJoy, that Thou couldst pity thus;\nShame for such returns from us.\n\nYet we soon the day shall see\nWhen we shall from sin be free;\nWhen, to Thee in glory brought,\nWe shall serve Thee as we ought.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "127",
        "title": "Look, ye saints, the sight is glorious;",
        "author": "Thomas Kelly",
        "meter": "8.7.8.7.4.7.",
        "tuneName": "Regent Square",
        "lyrics": "\nLook, ye saints, the sight is glorious;\nSee the Man of Sorrows now;\nFrom the fight returned victorious,\nEvery knee to Him shall bow:\nCrown Him! crown Him!\nCrowns become the Victor's brow.\n\nCrown the Saviour, angels crown Him;\nRich the trophies Jesus brings;\nIn the seat of power enthrone Him,\nWhile the vault of heaven rings;\nCrown Him! crown Him!\nCrown the Saviour, King of kings.\n\nSinners in derision crowned Him,\nMocking thus the Saviour's claim:\nSaints and angels crowd around Him,\nOwn His title, praise His Name:\nCrown Him! crown Him!\nSpread abroad the Victor's fame.\n\nHark, those bursts of acclamation!\nHark! those loud triumphant chords.\nJesus takes the highest station;\nO what joy the sight affords!\nCrown Him! crown Him!\nKing of kings, and Lord of lords.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "128",
        "title": "Lord Jesus, are we one with Thee?",
        "author": "James George Deck (1837)",
        "meter": "C.M.",
        "tuneName": "St. Magnus",
        "lyrics": "\nLord Jesus, are we one with Thee?\nO height, O depth of love!\nOnce slain for us upon the tree,\nWe're one with Thee above.\n\nOur sins, our guilt, in love divine,\nConfessed and borne by Thee;\nThe gall, the curse, the wrath were Thine,\nTo set Thy members free.\n\nAscended now in glory bright,\nStill one with us Thou art;\nNor life, nor death, nor depth, nor height\nThy saints and Thee can part!\n\nO teach us, Lord, to know and own\nThis wondrous mystery,\nThat Thou with us art truly one,\nAnd we are one with Thee.\n\nSoon, soon shall come that glorious day,\nWhen, seated on Thy throne,\nThou shalt to wond'ring worlds display\nThat Thou with us art one.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "129",
        "title": "Lord Jesus Christ we seek Thy face",
        "author": "Alexander Stewart",
        "meter": "L.M.",
        "tuneName": "Retreat",
        "lyrics": "\nLord Jesus Christ we seek Thy face,\nWithin the veil we bow the knee;\nO let Thy glory fill the place,\nAnd bless us while we wait on Thee.\n\nWe thank Thee for the precious blood\nThat purged our sins and brought us nigh,\nAll cleansed and sanctified, to God,\nThy holy Name to magnify.\n\nShut in with Thee, far, far above\nThe restless world that wars below,\nWe seek to learn and prove Thy love,\nThy wisdom and Thy grace to know.\n\nThe brow that once with thorns was bound,\nThy hands, Thy side, we fain would see;\nDraw near, Lord Jesus, glory-crowned,\nAnd bless us while we wait on Thee.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "130",
        "title": "Lord Jesus, come!",
        "author": "George Jekell (1856)",
        "meter": "4.6.8.8.4.",
        "tuneName": "Patience 4.6.8.8.8.",
        "lyrics": "\nLord Jesus, come!\nNor let us longer roam\nAfar from Thee, and that bright place\nWhere we shall see Thee face to face.\nLord Jesus, come!\n\nLord Jesus, come!\nThine absence here we mourn;\nNo joy we know apart from Thee,\nNo sorrow in Thy presence see.\nCome, Saviour, come!\n\nLord Jesus, come!\nAnd claim us as Thine own;\nOur weary feet would wander o'er\nThis dark and sinful world no more.\nCome, Saviour, come!\n\nLord Jesus, come!\nAnd take Thy people home;\nThat all Thy flock, so scattered here,\nWith Thee in glory may appear.\nLord Jesus, come!\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "131",
        "title": "Lord Jesus, Friend unfailing!",
        "author": "Samuel G. Kuster",
        "meter": "7.6.7.6.D.",
        "tuneName": "Munich",
        "lyrics": "\nLord Jesus, Friend unfailing!\nHow dear Thou art to me!\nAre cares or fears assailing?\nI find my strength in Thee:\nWhy should my feet grow weary\nOf this my pilgrim way?\nRough though the path and dreary,\nIt ends in perfect day.\n\nNought, nought I count as pleasure,\nCompared, O Christ, with Thee;\nThy sorrow without measure\nEarned peace and joy for me.\nI love to own, Lord Jesus,\nThy claims o'er me divine;\nBought with Thy blood most precious\nWhose can I be but Thine?\n\nWhat fills my heart with gladness?\n'Tis Thy abounding grace!\nWhere can I look in sadness,\nBut, Saviour, on Thy face?\nMy all is Thy providing,\nThy love can ne'er grow cold;\nIn Thee, my refuge, hiding,\nNo good wilt Thou withhold.\n\nWhy should I droop in sorrow?\nThou'rt ever by my side!\nWhy, trembling, dread the morrow?\nWhat ill can e'er betide?\nIf I my cross have taken,\n'Tis but to follow Thee;\nIf scorned, despised, forsaken,\nNought severs Thee from me.\n\nO worldly pomp and glory,\nYour charms are spread in vain;\nI've heard a sweeter story,\nI've found a truer gain.\nWhere Christ a place prepareth\nThere is my loved abode,\nThere shall I gaze on Jesus,\nThere shall I dwell with God.\n\nFrom every tribulation,\nFrom every sore distress,\nIn Christ I've full salvation,\nSure help and quiet rest:\nNo fear of foes prevailing,\nI triumph, Lord, in Thee!\nLord Jesus, Friend unfailing!\nHow dear Thou art to me.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "132",
        "title": "Lord, dismiss us with Thy blessing",
        "author": "John Fawcett & Godfrey Thring & William Walter Shirley (1773)",
        "meter": "8.7.8.7.4.7.",
        "tuneName": "Dismission",
        "lyrics": "\nLord, dismiss us with Thy blessing\nFill our hearts with joy and peace;\nLet us each, Thy love possessing,\nTriumph in redeeming grace;\nO refresh us, O refresh us\nTrav'lling through this wilderness.\n\nThanks we give and adoration\nFor Thy gospel's joyful sound;\nMay the fruits of Thy salvation\nIn our hearts and lives abound;\nEver faithful, Ever faithful\nTo the truth may we be found.\n\nSo, when'er the signal's given\nUs from earth to call away,\nUpward borne by Thee to heaven,\nGlad the summons to obey,\nWe shall ever, We shall ever\nReign with Thee in endless day.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "133",
        "title": "Lord Jesus, my Saviour!",
        "author": "Anonymous",
        "meter": "P.M.",
        "tuneName": "Appin",
        "lyrics": "\nLord Jesus, my Saviour!\nHow vast Thy love to me!\nI'll bathe in its full ocean\nTo all eternity;\nAnd wending on to glory\nThis all my song shall be,\nI am a feeble sinner,\nBut Jesus died for me.\n\nO Calvary! O Calvary!\nThe thorn-crown and the spear,\n'Tis here Thy love, Lord Jesus,\nThy flowing wounds appear.\nO depths of grace and mercy!\nTo those dear wounds I flee;\nI am a feeble sinner,\nBut Jesus died for me.\n\nAdore Him! Adore Him!\nThe glorious work is done;\nThe Father will not punish me,\n'Twas laid upon His Son.\n'Tis finished, cried His suff'ring soul,\nAnd I my title see;\nI am a feeble sinner,\nBut Jesus died for me.\n\nIn glory, in glory,\nFor ever with the Lord,\nI'll tune my harp, and with the saints\nI'll sing with sweet accord;\nAnd as I strike the golden strings\nThis all my song shall be,\nI was a feeble sinner,\nBut Jesus died for me.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "134",
        "title": "Lord Jesus, I love Thee, I know Thou art mine",
        "author": "William Ralph Featherstone & Adoniram J Gordon",
        "meter": "11's",
        "tuneName": "Jesus, I love Thee",
        "lyrics": "\nLord Jesus, I love Thee, I know Thou art mine,\nMy rock and my fortress, my Surety divine;\nMy gracious Redeemer, my song shall be now,\n'Tis Thou who art worthy, Lord Jesus, 'tis Thou!\n\nI love Thee because Thou hast first loved me,\nAnd purchased my pardon on Calvary's tree;\nI love Thee for wearing the thorns on Thy brow;\n'Tis Thou who art worthy, Lord Jesus, 'tis Thou!\n\nI would love Thee in life, I would love Thee in death,\nAnd praise Thee as long as Thou lendest me breath,\nAnd sing, should the death-dew lie cold on my brow,\n'Tis Thou who art worthy, Lord Jesus, 'tis Thou!\n\nAnd when the bright morn of Thy glory shall come,\nAnd the children ascend to the Father's glad home,\nI'll shout, with Thy likeness impressed on my brow,\n'Tis Thou who art worthy, Lord Jesus, 'tis Thou!\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "135",
        "title": "Lord Jesus, in Thy Name alone",
        "author": "Mary Bowly Peters",
        "meter": "8.8.8.8.8.8.",
        "tuneName": "Eaton",
        "lyrics": "\nLord Jesus, in Thy Name alone\nWe soon shall meet around the throne;\nWith this sole claim, on this sole ground,\nThy table here we now surround;\nWhat can we mention to our God\nExcept Thine own most precious blood?\n\nO Jesus, Lord! there is, indeed\nEnough in Thee to meet our need,\nEnough in Thee to make us glad!\nWhy should Thy ransomed ones be sad?\nThis hope have we before our God,\nSalvation through Thy precious blood.\n\nWhat joy it is to walk with Thee!\nBut O what joy Thy face to see!\nAnd when our bliss is all complete,\nWe still shall worship at Thy feet,\nAnd mention nothing to our God\nBut that same ever precious blood.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "136",
        "title": "Lord Jesus, let Thy favour rest",
        "author": "John Withy",
        "meter": "C.M.",
        "tuneName": "Farrant Holy Trinity",
        "lyrics": "\nLord Jesus, let Thy favour rest\nUpon this bond of love;\nMay it be bound in heaven, and blest\nWith blessing from above.\n\nThy ways, Thou heavenly Bridegroom, be\nThe pattern for this pair;\nTheir constant springs be found in Thee,\nTheir life Thy love declare.\n\nAs fellow-heirs of life in Thee,\nMay they together dwell;\nTheir mutual faith and love still be\nA sweet refreshing well.\n\nAnd when the day of light shall shine,\nTheir work approv\u00e8d be;\nThou then with joy wilt own as Thine,\nWhate'er was done to Thee.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "137",
        "title": "Lord Jesus Christ, the thought of Thee",
        "author": "Bernard of Clairvaux",
        "meter": "C.M.",
        "tuneName": "St. Agnes, Durham",
        "lyrics": "\nLord Jesus Christ, the thought of Thee\nWith sweetness fills my breast;\nBut sweeter far Thy face to see,\nAnd in Thy presence rest.\n\nNor voice can sing, nor heart can frame,\nNor can the mem'ry find\nA sweeter sound than Thy blest Name,\nO Saviour of mankind.\n\nO hope of every contrite heart,\nO joy of all the meek,\nTo those who fall, how kind Thou art;\nHow good to those who seek.\n\nBut what to those who find? Ah, this\nNor tongue, nor pen can show;\nThe love of Jesus! what it is\nNone but His loved ones know.\n\nSaviour, our only joy be Thou\nAs Thou our crown wilt be;\nBe Thou, O Lord, our glory now.\nAnd through eternity.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "138",
        "title": "Lord Jesus, Thine;",
        "author": "Albert Midlane",
        "meter": "4.6.8.8.4.",
        "tuneName": "Patience",
        "lyrics": "\nLord Jesus, Thine;\nNo more this heart of mine\nShall seek its joy apart from Thee;\nThe world is crucified to me,\nAnd I am Thine.\n\nThine, Thine alone,\nMy joy, my hope, my crown;\nNow earthly things may fade and die,\nThey charm my soul no more for I\nAm Thine alone.\n\nThine, ever Thine,\nFor ever to recline\nOn love eternal, fixed and sure;\nYes, I am Thine for evermore,\nLord Jesus, Thine.\n\nThen let me live,\nContinual praise to give\nTo Thy dear Name, my precious Lord;\nHenceforth alone, beloved, adored,\nTo Thee I'd live.\n\nTill Thou shalt come\nAnd bear me to Thy home,\nFor ever freed from earthly care,\nEternally Thy love to share:\nLord Jesus, come!\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "139",
        "title": "Lord! to Thee my heart ascending",
        "author": "Elizabeth Harris Codner",
        "meter": "8.7.8.7.3.",
        "tuneName": "Sychar",
        "lyrics": "\nLord! to Thee my heart ascending\nFor Thy mercy full and free,\nThankful sings for grace transcending,\nGrace vouchsafed to sinful me,\nEven me.\nEven me. Grace vouchsafed to sinful me.\n\nHoly Father! who with yearning\nOf eternal love didst see\nHatred in my bosom burning,\nThou didst give Thy Son for me,\nEven me.\nEven me. Thou didst give Thy Son for me.\n\nPrecious Saviour! great Redeemer!\nPraise, eternal praise to Thee;\nThough so long a wand'ring sinner\nThou hast kindly welcomed me,\nEven me.\nEven me. Thou hast kindly welcomed me.\n\nBut I'm lost in joyful wond'ring,\nAnd I say, O can it be\nThat there will be no more sund'ring\n'Twixt my blessed Lord and me?\nEven me.\nEven me. 'Twixt my blessed Lord and me.\n\nCan it be that I, an alien,\nNow a child shall ever be?\nCan it be that, all forgiven,\nGlory is prepared for me?\nEven me.\nEven me. Glory is prepared for me.\n\nYes! for Jesus liveth ever,\nAnd His blood hath made me free;\nFrom His love no foe can sever,\nFor He gave Himself for me,\nEven me.\nEven me. For He gave Himself for me.\n\nLord! I thank Thee for salvation,\nGrace so mighty and so free;\nTake my all in consecration,\nGlorify Thyself in me,\nEven me.\nEven me. Glorify Thyself in me.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "140",
        "title": "Lord Jesus, Thou who only art",
        "author": "Anonymous",
        "meter": "8.8.8.8.8.8.",
        "tuneName": "Giessen",
        "lyrics": "\nLord Jesus, Thou who only art\nThe endless source of purest joy,\nO come and fill this longing heart;\nMay nought but Thee my thoughts employ\nTeach me on Thee to fix my eye,\nFor none but Thee can satisfy.\n\nThe joys of earth can never fill\nThe heart that's tasted of Thy love;\nNo portion would I seek until\nI reign with Thee, my Lord above,\nWhen I shall gaze upon Thy face,\nAnd know more fully all Thy grace.\n\nWhen from Thy radiant throne on high\nThou didst my fall and ruin see,\nThou cam'st on earth for me to die\nThat I might share that throne with Thee.\nLoved with an everlasting love,\nMy hopes, my joys are all above.\n\nO what is all that earth can give?\nI'm called to share in God's own joy;\nDead to the world, in Thee I live,\nIn Thee I've bliss without alloy:\nWell may I earthly joys resign;\nAll things are mine, and I am Thine!\n\nTill Thou shalt come to take me home\nBe this my one ambition, Lord,\nSelf, sin, the world, to overcome,\nFast clinging to Thy faithful Word;\nMore of Thyself each day to know,\nAnd more into Thine image grow.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "141",
        "title": "Lord Jesus, Thy great love to me",
        "author": "John Wesley",
        "meter": "8.8.8.8.8.8.",
        "tuneName": "Giessen",
        "lyrics": "\nLord Jesus, Thy great love to me\nNo thought can reach, no tongue declare:\nO bend my wayward heart to Thee\nAnd reign without a rival there;\nThine, wholly Thine, alone I'd live,\nMyself to Thee entirely give.\n\nO Lord, how gracious is Thy way,\nAll fear before Thy presence flies;\nCare, anguish, sorrow pass away\nWhere'er Thy healing beams arise;\nLord Jesus, nothing may I see,\nNothing desire apart from Thee.\n\nIn suff'ring be Thy love my peace,\nIn weakness be Thine arm my strength;\nAnd when the storms of life shall cease\nAnd Thou from heaven wilt come at length,\nLord Jesus, then this heart shall be\nFor ever satisfied with Thee.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "142",
        "title": "Lord Jesus, to tell of Thy love",
        "author": "Thomas Haweis",
        "meter": "8.8.8.8.",
        "tuneName": "David",
        "lyrics": "\nLord Jesus, to tell of Thy love\nOur souls shall for ever delight,\nAnd join with the blessed above\nIn praises by day and by night.\n\nWherever we follow Thee, Lord,\nAdmiring, adoring, we see\nThat love which was stronger than death\nFlow out without limit, and free.\n\nDescending from glory on high,\nWith men Thy delight was to dwell;\nContented, our Surety to die,\nBy dying to save us from hell.\n\nEnduring the grief and the shame,\nAnd bearing our sins on the Cross,\nO who would not boast of Thy love,\nAnd count the world's glory but dross.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "143",
        "title": "Lord, we are Thine: our God Thou art",
        "author": "James George Deck (1841)",
        "meter": "L.M.D.",
        "tuneName": "Hour of Prayer",
        "lyrics": "\nLord, we are Thine: our God Thou art,\nFashioned and made we are by Thee;\nThese curious frames! in every part\nThy wisdom, power, and love we see;\nEach breath we draw, each pulse that beats,\nEach organ formed by skill divine,\nEach precious sense aloud repeats\nGreat God, that we are only Thine.\n\nLord, we are Thine: in Thee we live,\nSupported by Thy tender care;\nThou dost each hourly mercy give;\nThine earth we tread, we breathe Thine air;\nRaiment and food Thou dost supply;\nThy sun's bright rays around us shine:\nGuarded by Thine all-seeing eye,\nWe own that we are only Thine.\n\nLord, we are Thine: bought by Thy blood:\nOnce the poor guilty slaves of sin;\nThou didst redeem us to our God,\nAnd made Thy Spirit dwell within.\nThou hast our sinful wand'rings borne\nWith love and patience all divine:\nAs brands, then, from the burning torn\nWe own that we are only Thine.\n\nLord, we are Thine: Thy claims we own,\nOurselves to Thee we humbly give;\nReign Thou within our hearts alone,\nAnd make us to Thy glory live.\nHere let us each Thy mind display,\nIn all Thy brilliant virtues shine;\nAnd haste that long-expected day\nWhen Thou shalt own that we are Thine.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "144",
        "title": "Lord Jesus we believing",
        "author": "Samuel Prideaux Tregelles",
        "meter": "7.6.7.6.D.",
        "tuneName": "Aurelia",
        "lyrics": "\nLord Jesus we believing\nIn Thee have peace with God,\nEternal life receiving,\nThe purchase of Thy blood.\nOur curse and condemnation\nThou bearest in our stead;\nSecure is our salvation\nIn Thee, our risen Head.\n\nThe Holy Ghost revealing\nThy grace hath given us rest;\nThy stripes have given us healing,\nThy love doth make us blest.\nIn Thee the Father sees us\nAccepted and complete;\nThy blood, from sin which frees us,\nFor glory makes us meet.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "145",
        "title": "May the grace of Christ our Saviour",
        "author": "John Newton (1779)",
        "meter": "8.7.8.7.",
        "tuneName": "Sharon",
        "lyrics": "\nMay the grace of Christ our Saviour,\nAnd the Father's boundless love,\nWith the Holy Spirit's favour,\nRest upon us from above.\n\nThus may we abide in union\nWith each other and the Lord,\nAnd possess, in sweet communion,\nJoys which earth can ne'er afford.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "146",
        "title": "Lord Jesus, who didst once appear",
        "author": "John Berridge",
        "meter": "C.M.",
        "tuneName": "St. Bernard",
        "lyrics": "\nLord Jesus, who didst once appear\nTo grace a marriage feast,\nWe now beseech Thy presence here\nTo make this wedding blest.\n\nWith grace the bride and bridegroom speed;\nThy love their pattern be;\nMay heart with heart be true indeed,\nAs knit, O Lord, in Thee.\n\nWith gifts of grace their hearts endow\nof all rich dowries best;\nTheir substance bless, and peace bestow,\nTo sweeten all the rest.\n\nIn purest love their souls unite\nThat they with Christ-like care\nMay make each other's burdens light\nBy taking mutual share.\n\nAnd looking to their heavenly home\nO may they dwell each day\nAs heirs of life till Thou shalt come\nTo take Thy bride away.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "147",
        "title": "Man of Sorrows! what a name",
        "author": "Philip Paul Bliss (1875)",
        "meter": "7.7.7.8.",
        "tuneName": "Marah",
        "lyrics": "\nMan of Sorrows! what a name\nFor the Son of God, who came\nRuined sinners to reclaim!\nHallelujah! what a Saviour!\n\nBearing shame and scoffing rude\nIn my place condemned He stood;\nSealed my pardon with His blood:\nHallelujah! what a Saviour!\n\nGuilty, vile, and helpless, we;\nSpotless Lamb of God was He:\nFull atonement, can it be?\nHallelujah! what a Saviour!\n\nLifted up was He to die,\nIt is finished, was His cry;\nNow in heaven exalted high:\nHallelujah! what a Saviour!\n\nWhen He comes, our glorious King,\nAll His ransomed home to bring,\nThen anew this song we'll sing:\nHallelujah! what a Saviour!\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "148",
        "title": "Lord, we would ne'er forget Thy love",
        "author": "James George Deck (1841)",
        "meter": "L.M.",
        "tuneName": "Soldau",
        "lyrics": "\nLord, we would ne'er forget Thy love,\nWho hast redeemed us by Thy blood;\nAnd now, as our High Priest above.\nDost intercede for us with God.\n\nLord, we would not forget the pain,\nThe blood-like sweat, the shameful tree,\nThe wrath Thy soul did once sustain\nFrom sin and death to set us free.\n\nWe would remember we are one\nWith every saint that loves Thy Name;\nUnited to Thee on the throne,\nOur life, our hope, our Lord the same.\n\nHere, in the broken bread and wine,\nWe hear Thee say, Remember Me!\nI gave My life to ransom thine,\nI bore the wrath to set thee free.\n\nLord, we are Thine, we praise Thy love,\nOne with Thy saints, all one in Thee;\nWe would, until we meet above,\nIn all our ways remember Thee.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "149",
        "title": "Meeting in the Saviour's Name",
        "author": "Thomas Kelly",
        "meter": "7.7.7.7.7.7.",
        "tuneName": "Huss 7.7.7.7.D.",
        "lyrics": "\nMeeting in the Saviour's Name,\nBreaking bread by His command,\nTo the world we thus proclaim\nOn what ground we hope to stand,\nWhen the Lord shall come with clouds,\nJoined by heaven's exulting crowds.\n\nFrom the Cross our hope we draw\n'Tis the sinner's sure resource;\nJesus magnified the law,\nJesus bore its awful curse;\nWhat a joyful truth is this!\nO how full of hope it is!\n\nJesus died, and then arose;\nYes, He rose, He lives to reign;\nHe will vanquish all His foes\nWhen to earth He comes again;\nHis the triumph and the crown,\nHis the glory and renown.\n\nSing we, then, of Him who died,\nSing of Him who rose again;\nBy His blood we're justified,\nAnd with Him we hope to reign:\nYes, we look to see our Lord,\nAnd to share His bright reward.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "150",
        "title": "Mid the splendours of the glory",
        "author": "William Watkins Reid (1863)",
        "meter": "8.7.8.7.4.7.",
        "tuneName": "Splendours",
        "lyrics": "\nMid the splendours of the glory\nWhich we hope ere long to share,\nChrist, our Head, and we, His members,\nShall appear divinely fair;\nO how glorious!\nWhen we meet Him in the air.\n\nFrom the dateless, timeless periods,\nHe has loved us without cause;\nAnd for all His blood-bought myriads,\nHis is love that knows no pause;\nMatchless Lover!\nChangeless as th' eternal laws.\n\nO what gifts shall yet be granted,\nPalms and crowns, and robes of white,\nWhen the hope for which we panted\nBursts upon our gladdened sight,\nAnd our Saviour\nMakes us glorious through His might.\n\nBright the prospect soon that greets us\nOf that longed-for nuptial day,\nWhen our heavenly Bridegroom meets us\nOn His kingly, conquering way;\nIn the glory,\nBride and Bridegroom reign for aye.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "151",
        "title": "My days are gliding swiftly by",
        "author": "David Nelson (1835)",
        "meter": "8.7.8.7.D.",
        "tuneName": "I've Found a Friend",
        "lyrics": "\nMy days are gliding swiftly by,\nAnd I, a pilgrim stranger,\nWould not detain them as they fly,\nThese hours of toil and danger.\n\nWe'll gird our loins, my brethren dear,\nOur distant home discerning;\nOur absent Lord has left us word,\nLet every lamp be burning.\n\nShould coming days be cold and dark,\nWe need not cease our singing;\nThat perfect rest nought can molest,\nWhere golden harps are ringing.\n\nLet sorrow's rudest tempest blow,\nEach cord on earth to sever;\nOur Lord says, Come, and there's our home\nFor ever and for ever!\n",
        "Chorus": "\nFor O we stand on Jordan's strand,\nOur friends are passing over,\nAnd just before, the shining shore\nWe may almost discover.\n",
        "addedChorus": ""
    },
    {
        "number": "152",
        "title": "My chains are snapt, the bonds of sin are broken",
        "author": "Margaret L. Carson",
        "meter": "11.4.11.4.",
        "tuneName": "Palm",
        "lyrics": "\nMy chains are snapt, the bonds of sin are broken,\nAnd I am free;\nO let the triumphs of His grace be spoken,\nWho died for me.\n\nO death! O grave! I do not dread your power,\nThe ransom's paid;\nOn Jesus, in that dark and dreadful hour,\nMy guilt was laid.\n\nYes, Jesus bore it, bore, in love unbounded,\nWhat none can know;\nHe passed through death and gloriously confounded\nOur every foe.\n\nAnd now He's risen, proclaim the joyful story,\nThe Lord's on high;\nAnd we in Him are raised to endless glory,\nAnd ne'er can die.\n\nWe wait to see the Morning Star appearing\nIn glory bright;\nThis blessed hope illumes, with beams most cheering,\nThe hours of night.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "153",
        "title": "My God, I am Thine;",
        "author": "Charles Wesley",
        "meter": "P.M.",
        "tuneName": "Thine the Glory",
        "lyrics": "\nMy God, I am Thine;\nWhat a comfort divine!\nWhat a blessing to know\nThat Jesus is mine!\n\nIn the heavenly Lamb\nThrice happy I am,\nAnd my heart doth rejoice\nAt the sound of His Name.\n\nMy Saviour to know,\nAnd feel His love flow,\n'Tis life everlasting,\n'Tis heaven below.\n\nYet onward I haste\nTo the heavenly feast;\nThat, that is the fullness,\nBut this is the taste.\n\nAnd this I shall prove,\nTill with joy I remove\nTo the heaven of heavens,\nIn Jesus' own love.\n",
        "Chorus": "\nHallelujah! Thine the glory.\nHallelujah! Amen.\nHallelujah! Thine the glory.\nRevive us again.\n",
        "addedChorus": ""
    },
    {
        "number": "154",
        "title": "My God! what cords of love are Thine",
        "author": "Philip Doddridge",
        "meter": "C.M.",
        "tuneName": "Belmont",
        "lyrics": "\nMy God! what cords of love are Thine,\nHow gentle, yet how strong!\nThy truth and grace their power combine\nTo draw our souls along.\n\nThe guilt of twice ten thousand sins\nOne moment takes away;\nAnd when the fight of faith begins\nOur strength is as our day.\n\nComfort, through all this vale of tears,\nIn blest profusion flows;\nAnd glory of unnumbered years\nEternity bestows.\n\nDrawn by such cords we'll onward move\nTill round the throne we meet,\nAnd, captives in the chain of love,\nEmbrace our Saviour's feet.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "155",
        "title": "Midst the darkness, storm and sorrow",
        "author": "Paul Gerhardt tr/ad by Emma Frances Shuttleworth Bevan (1898)",
        "meter": "8.5.8.5.D",
        "tuneName": "Hold the Fort",
        "lyrics": "\nMidst the darkness, storm and sorrow,\nOne bright gleam I see;\nWell I know the blessed morrow\nChrist will come for me.\n'Midst the light, and peace, and glory\nOf the Father's home\nChrist for me is waiting, watching,\nWaiting till I come.\n\nLong the blessed Guide has led me\nBy the desert road;\nNow I see the golden towers,\nCity of my God.\nThere, amidst the love and glory,\nHe is waiting yet;\nOn His hand a name is graven\nHe can ne'er forget.\n\nThere, amidst the songs of heaven,\nSweeter to His ear\nIs the footfall through the desert\nEver drawing near.\nThere, made ready are the mansions\nGlorious, bright and fair;\nBut the Bride the Father gave Him\nStill is wanting there.\n\nWho is this who comes to meet me\nOn the desert way,\nAs the Morning Star foretelling\nGod's unclouded day?\nHe it is who came to win me\nOn the Cross of shame;\nIn His glory well I know Him\nEvermore the same.\n\nO the blessed joy of meeting\nAll the desert past!\nO the wondrous words of greeting\nHe shall speak at last!\nHe and I together ent'ring\nThose bright courts above;\nHe and I together sharing\nAll the Father's love.\n\nWhere no shade nor stain can enter,\nNor the gold be dim;\nIn that holiness unsullied\nI shall walk with Him.\nMeet companion, then, for Jesus,\nFrom Him, for Him made;\nGlory of God's grace for ever\nThere in me displayed.\n\nHe, who in the hour of sorrow\nBore the curse alone;\nI, who through the lonely desert\nTrod where He had gone.\nHe and I in that bright glory\nOne deep joy shall share;\nMine to be forever with Him,\nHis, that I am there.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "156",
        "title": "My Shepherd is the Lamb",
        "author": "John Beaumont's Psalms",
        "meter": "S.M.",
        "tuneName": "Zurich",
        "lyrics": "\nMy Shepherd is the Lamb,\nThe living Lord who died;\nWith all things good I ever am\nBy Him in love supplied.\n\nHe richly feeds my soul\nWith blessings from above,\nAnd leads me where the rivers roll\nOf everlasting love.\n\nHis love so full, so free!\nAnoints my head with oil;\nGoodness and mercy follow me,\nFruit of His grief and toil.\n\nWhen faith and hope shall cease,\nAnd love abides alone,\nI then shall see Him face to face,\nAnd know as I am known.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "157",
        "title": "My God, I have found",
        "author": "Joseph Denham Smith & John Gambold",
        "meter": "P.M.",
        "tuneName": "Thine the Glory",
        "lyrics": "\nMy God, I have found\nThe thrice blessed ground,\nWhere life, and where joy,\nAnd true comfort abound.\n\n'Tis found in the blood\nOf Him who once stood\nMy refuge and safety,\nMy surety with God.\n\nHe bore on the tree\nThe sentence for me,\nAnd now both the surety\nAnd sinner are free.\n\nAccepted I am\nIn the once-offered Lamb;\nIt was God who Himself\nHad devised the plan.\n\nAnd though here below,\n'Mid sorrow and woe,\nMy place is in heaven\nWith Jesus, I know.\n\nAnd this I shall find,\nFor such is His mind,\n\"He'll not be in glory\nAnd leave me behind\"\n",
        "Chorus": "\nHallelujah! Thine the glory.\nHallelujah! Amen.\nHallelujah! soon the glory.\nCome, Saviour, again!\n",
        "addedChorus": ""
    },
    {
        "number": "158",
        "title": "The Solid Rock",
        "author": "Edward Mote (c.18)",
        "meter": "8.8.8.8.8.8.",
        "tuneName": "Eaton",
        "lyrics": "\nMy hope is built on nothing less\nThan Jesus' blood and righteousness;\nI dare not trust the sweetest frame,\nBut wholly lean on Jesus' Name.\nOn Christ, the solid Rock, I stand;\nAll other ground is sinking sand.\n\nWhen darkness seems to veil His face\nI rest on His unchanging grace;\nIn every high and stormy gale\nMy anchor holds within the veil.\nOn Christ, the solid Rock, I stand;\nAll other ground is sinking sand.\n\nHis oath, His covenant and blood,\nSupport me in the whelming flood;\nWhen all around my soul gives way\nHe then is all my hope and stay.\nOn Christ, the solid Rock, I stand;\nAll other ground is sinking sand.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "159",
        "title": "My Redeemer! O what beauties",
        "author": "Anonymous",
        "meter": "8.7.8.7.4.7.",
        "tuneName": "Regent Square",
        "lyrics": "\nMy Redeemer! O what beauties\nIn that lovely Name appear;\nNone but Jesus, in His glories,\nShall the honoured title wear.\nMy Redeemer!\nThou hast my salvation wrought.\n\nSunk in ruin, sin, and misery,\nBound by Satan's captive chain,\nGuided by his artful treachery,\nHurrying on to endless pain;\nMy Redeemer\nPlucked me as a brand from hell.\n\nMine by covenant, mine for ever,\nMine by oath, and mine by blood,\nMine\u2014nor time the bond shall sever,\nMine as an unchanging God.\nMy Redeemer!\nOh how sweet to call Thee mine!\n\nWhen in heaven I see Thy glory,\nWhen before Thy throne I bow,\nPerfected I shall be like Thee,\nFully Thy redemption know.\nMy Redeemer\nThen shall hear me shout His praise.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "160",
        "title": "My rest is in heaven, my rest is not here",
        "author": "Henry Francis Lyte",
        "meter": "11.11.11.11.",
        "tuneName": "Judah",
        "lyrics": "\nMy rest is in heaven, my rest is not here,\nThen why should I murmur when trials are near?\nBe hushed my sad spirit, the worst that can come\nBut shortens the journey and hastens me home.\n\nIt is not for me to be seeking my bliss,\nAnd building my hopes in a region like this;\nI look for a city which hands have not piled;\nI pant for a country by sin undefiled.\n\nThe winds of affliction around me may blow,\nAnd dash my lone barque as I'm sailing below;\nI smile at the storm as I lean on His breast,\nAnd soon I shall land in the haven of rest.\n\nLet trial and danger my progress oppose,\nThey only make heaven more sweet at the close;\nCome joy or come sorrow, whate'er may befall,\nA home with my God will make up for it all.\n\nWith Christ in my heart, and His Word in my hand,\nI travel in haste through an enemy's land;\nThe road may be rough, but it cannot be long,\nSo I journey on singing the conqueror's song.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "161",
        "title": "My Saviour, whom absent, I love",
        "author": "William Cowper",
        "meter": "8.8.8.8.",
        "tuneName": "David",
        "lyrics": "\nMy Saviour, whom absent, I love,\nWhom, not having seen, I adore;\nWhose Name is exalted above\nAll glory, dominion, and power.\n\nDissolve Thou the bonds that detain\nMy soul from her portion in Thee;\nAh! strike off the adamant chain\nAnd make me eternally free.\n\nWhen that happy era begins,\nWhen arrayed in Thy glories I shine,\nNor grieve any more by my sins\nThe bosom on which I recline.\n\nO then shall the veil be removed\nAnd round me Thy brightness be poured!\nI shall meet Him whom absent I loved,\nI shall see whom unseen I adored.\n\nAnd then, nevermore shall the fears,\nThe trials, temptations, and foes,\nWhich darken the valley of tears,\nIntrude on my blissful repose.\n\nOr, if yet remembered above,\nRemembrance no sadness shall raise;\nThey'll be but new signs of Thy love,\nNew themes for my wonder and praise.\n\nThus the stroke which from sin and from pain\nShall eternally set me free,\nWill but strengthen and rivet the chain\nWhich binds me, my Saviour, to Thee.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "162",
        "title": "\"No condemnation!\" O my soul",
        "author": "Robert Cleaver Chapman",
        "meter": "C.M.",
        "tuneName": "Farrant",
        "lyrics": "\n\"No condemnation!\" O my soul\n'Tis God that speaks the word;\nPerfect in comeliness art thou\nIn Christ thy glorious Lord.\n\nIn heaven His blood for ever speaks\nIn God the Father's ear;\nHis saints as jewels on His heart\nJesus doth ever bear.\n\n\"No condemnation!\" precious word!\nConsider it, my soul;\nThy sins were all on Jesus laid,\nHis stripes have made thee whole.\n\nTeach us, O God, to fix our eyes\nOn Christ, the spotless Lamb;\nSo shall we love Thy gracious will\nAnd glorify Thy Name.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "163",
        "title": "My tongue shall spread the Saviour's fame",
        "author": "Anonymous",
        "meter": "C.M.",
        "tuneName": "Emmanuel",
        "lyrics": "\nMy tongue shall spread the Saviour's fame\nWhose grace I daily prove;\nFor since my soul has known His Name\nHis banner has been\u2014Love.\n\nWhen walking in the paths of sin.\nI far from Him would rove,\nBy sweet constraint He drew me in,\nAnd waved His banner\u2014Love.\n\nHe spread the banquet, made me eat,\nBade all my fears remove;\nYea, o'er my guilty, rebel head\nHe placed His banner\u2014Love.\n\nWhen, weary of His rich repast\nI've sought, alas! to rove,\nHe has recalled His faithless guest\nAnd showed His banner\u2014Love.\n\nIn every conflict I sustain\nMy enemies shall prove\nThrough Him the vict'ry I obtain,\nBeneath His banner\u2014Love.\n\nAnd when He calls me home ere long\nTo feast with Him above,\nThrough all eternity my song\nShall be\u2014His changeless Love.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "164",
        "title": "My soul amid this stormy world",
        "author": "Robert Cleaver Chapman",
        "meter": "C.M.",
        "tuneName": "Farrant",
        "lyrics": "\nMy soul amid this stormy world,\nIs like some fluttered dove,\nAnd fain would be as swift of wing\nAnd flee to Him I love.\n\nThe cords that bound my heart to earth\nAre loosed by Jesus' hand;\nBefore His Cross I now am left\nA stranger in the land.\n\nThat visage marred, those sorrows deep,\nThe thorns, the scourge, the gall,\nThese were the golden chains of love\nHis captive to enthral.\n\nFain would I, Saviour, know Thy love,\nWhich yet no measure knows!\nWould search the depths of all Thy wounds\nThe secret of Thy woes.\n\nFain would I strike the golden harp\nAnd wear the promised crown;\nAnd at Thy feet, while bending low,\nWould sing what grace has done.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "165",
        "title": "My God, my Father, while I stray",
        "author": "Charlotte Elliott (1834)",
        "meter": "8.8.8.4.",
        "tuneName": "Troyte's Chant",
        "lyrics": "\nMy God, my Father, while I stray\nFar from my home in life's rough way,\nO teach me from my heart to say,\nThy will be done.\n\nIf dark my path and hard my lot,\nMay I be still and murmur not;\nBut breathe the prayer divinely taught\nThy will be done.\n\nIf Thou shouldst call me to resign\nWhat most I prize\u2014it ne'er was mine,\nI only yield Thee what is Thine:\nThy will be done.\n\nShould pining sickness waste away\nMy life in premature decay,\nMy Father! help me still to say,\nThy will be done.\n\nControl my will from day to day,\nBlend it with Thine, and take away\nAll that now makes it hard to say,\nThy will be done.\n\nAnd when on earth I breathe no more\nThe prayer oft mixed with tears before,\nI'll sing on heaven's blissful shore,\nThy will be done.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "166",
        "title": "My sins were laid on Jesus",
        "author": "Horatius Bonar (1845)",
        "meter": "7.6.7.6.D.",
        "tuneName": "Golden City Missionary",
        "lyrics": "\nMy sins were laid on Jesus\nThe spotless Lamb of God;\nHe bore them all and freed me\nFrom the accurs\u00e9d load.\nMy guilt was borne by Jesus;\nHe cleansed the crimson stains\nIn his own blood most precious,\nAnd not a spot remains.\n\nI tell my wants to Jesus,\nAll fullness dwells in Him;\nHe healeth my diseases,\nHe doth my soul redeem.\nI lay my griefs on Jesus,\nMy burdens and my cares;\nHe from them all releases,\nHe all my sorrows shares.\n\nI rest my soul on Jesus,\nThis weary soul of mine;\nHis right hand me embraces,\nI on His breast recline.\nI love the Name of Jesus,\nImmanuel, Christ the Lord!\nLike fragrance on the breezes\nHis Name is spread abroad.\n\nI long to be like Jesus,\nMeek, lowly, loving, mild;\nI long to be like Jesus,\nThe Father's holy child.\nI long to be with Jesus\nAmid the heavenly throng,\nTo sing with saints His praises,\nThe everlasting song.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "167",
        "title": "No bone of Thee was broken",
        "author": "Robert Cleaver Chapman",
        "meter": "7.6.7.6.D.",
        "tuneName": "Munich",
        "lyrics": "\nNo bone of Thee was broken\nThou spotless, paschal Lamb!\nOf life and peace a token\nTo us who know Thy Name;\nThe Head, for all the members,\nThe curse, the vengeance bore,\nAnd God, our God, remembers\nHis people's sins no more.\n\nWe, Thy redeemed, are reaping\nWhat Thou didst sow in tears;\nThis feast which we are keeping\nThy Name to us endears;\nIt tells of justice hiding\nThe face of God from Thee;\nProud men around deriding\nThy sorrows on the tree.\n\nThy death of shame and sorrow\nWas like unto Thy birth,\nWhich would no glory borrow,\nNo majesty from earth.\nThy pilgrims, we are hasting\nTo our eternal home,\nIts joy already tasting\nOf vict'ry o'er the tomb.\n\nThy life and death reviewing,\nWe tread the narrow way;\nOur homeward path pursuing,\nWe watch the dawn of day.\nWe eat and drink with gladness\nThe symbol bread and wine,\nAnd sing with sweetest sadness\nOur song of love divine.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "168",
        "title": "Now I have found a Friend",
        "author": "Henry J. M. Hope (1852)",
        "meter": "6.4.6.4.6.6.6.4.",
        "tuneName": "Worship",
        "lyrics": "\nNow I have found a Friend,\nJesus is mine;\nHis love shall never end,\nJesus is mine;\nThough earthly joys decrease,\nThough human friendships cease,\nNow I have lasting peace,\nJesus is mine.\n\nThough I grow poor and old,\nJesus is mine;\nHe will my faith uphold,\nJesus is mine;\nHe will my wants supply,\nHis precious blood is nigh,\nNought can my hope destroy,\nJesus is mine.\n\nFarewell, mortality!\nJesus is mine;\nWelcome, eternity!\nJesus is mine.\nHe my redemption is,\nWisdom and righteousness,\nLife, light, and holiness,\nJesus is mine.\n\nFather! Thy Name I bless,\nJesus is mine;\nThine was the sovereign grace,\nPraise shall be Thine;\nSpirit of holiness,\nSealing the Father's grace,\nHe made my soul embrace\nJesus as mine.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "169",
        "title": "Now, in a song of grateful praise",
        "author": "Samuel Medley (1776)",
        "meter": "L.M.",
        "tuneName": "Ernan",
        "lyrics": "\nNow, in a song of grateful praise,\nTo Christ my Lord my voice I'll raise;\nWith all His saints I'll join to tell,\nMy Jesus has done all things well.\n\nAll worlds His glorious power confess\nHis wisdom all His works express;\nBut O, His love what tongue can tell?\nMy Jesus has done all things well.\n\nHow sovereign, wonderful and free\nHas been His love to sinful me!\nHe plucked me from the jaws of hell;\nMy Jesus has done all things well.\n\nI spurned His grace, I broke His laws,\nAnd yet He undertook my cause,\nTo save me, though I did rebel;\nMy Jesus has done all things well.\n\nThough many a fiery, flaming dart\nThe tempter levels at my heart,\nWith this I all his rage repel;\nMy Jesus has done all things well.\n\nAnd when to that bright world I rise,\nAnd join the anthems in the skies,\nAbove the rest this note shall swell,\nMy Jesus has done all things well.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "170",
        "title": "Not all the blood of beasts",
        "author": "Isaac Watts (1709)",
        "meter": "S.M.",
        "tuneName": "Boylston",
        "lyrics": "\nNot all the blood of beasts\nOn Jewish altars slain,\nCould give the guilty conscience peace,\nOr wash away one stain.\n\nBut Christ, the heavenly Lamb,\nTook all our sins away,\nA sacrifice of nobler name\nAnd richer blood than they.\n\nBy faith we lay our hand\nOn that dear head of Thine;\nWith broken, contrite hearts we stand,\nAnd there confess our sin.\n\nWe now look back to see\nThe burden Thou didst bear,\nWhen hanging on the accursed tree,\nAnd know our guilt was there.\n\nBelieving, we rejoice\nTo see the curse remove;\nWe bless the Lamb with cheerful voice,\nAnd sing His endless love.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "171",
        "title": "No blood, no altar now",
        "author": "Horatius Bonar (1845)",
        "meter": "P.M.",
        "tuneName": "Kelso",
        "lyrics": "\nNo blood, no altar now,\nThe sacrifice is o'er;\nNo flame, no smoke ascends on high,\nThe lamb is slain no more;\nBut richer blood has flowed from nobler veins\nTo purge the soul from guilt, and cleanse the reddest stains.\n\nWe thank Thee for the blood,\nThe blood of Christ, Thy Son,\nThe blood by which our peace is made,\nOur victory is won:\nGreat victory o'er hell and sin and woe,\nThat needs no second fight and leaves no second foe.\n\nWe thank Thee for the grace\nDescending from above,\nThat overflows our widest guilt,\nTh' eternal Father's love,\nLove of the Father's everlasting Son,\nLove of the Holy Ghost, Jehovah, Three in One.\n\nWe thank Thee for the hope,\nSo glad and sure and clear;\nIt holds the drooping spirit up\nTill the long dawn appear;\nFair hope! with what a sunshine does it cheer\nOur roughest path on earth, our dreariest desert here.\n\nWe thank Thee for the crown\nOf glory and of life;\n'Tis no poor with'ring wreath of earth,\nMan's prize in mortal strife;\n'Tis incorruptible as is the throne,\nThe kingdom of our God and His incarnate Son.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "172",
        "title": "O blessed Saviour! is Thy love",
        "author": "Joseph Stennett",
        "meter": "C.M.",
        "tuneName": "Dublin",
        "lyrics": "\nO blessed Saviour! is Thy love\nSo great, so full, so free?\nFain would we give our hearts, our minds,\nOur lives, our all, to Thee.\n\nWe love Thee for the glorious worth\nWhich in Thyself we see;\nWe love Thee for the shameful Cross\nEndured so patiently.\n\nNo man of greater love can boast\nThan for his friend to die;\nThou for Thine enemies wast slain!\nWhat love with Thine can vie?\n\nThough in the very form of God,\nWith heavenly glory crowned,\nThou didst partake of human flesh,\nBeset with sorrows round.\n\nThou wouldst like sinful man be made\nIn everything but sin,\nThat we as like Thee might become,\nAs we unlike have been.\n\nLike Thee in faith, in meekness, love,\nIn every heavenly grace,\nMore of Thine image daily gain\nTill we behold Thy face.\n\nO Lord! we treasure in our souls\nThe memory of Thy love;\nAnd ever may Thy Name to us\nA grateful odour prove.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "173",
        "title": "O blessed Lord, what hast Thou done!",
        "author": "Mary Bowly Peters",
        "meter": "C.M.",
        "tuneName": "St. Bernard",
        "lyrics": "\nO blessed Lord, what hast Thou done!\nHow vast a ransom paid!\nGod's only well-beloved Son\nUpon the altar laid.\n\nThe Father, in His willing love,\nCould spare Thee from His side;\nAnd Thou couldst stoop, to bear above,\nAt such a cost, Thy Bride.\n\nWhile our full hearts in faith repose\nUpon Thy precious blood,\nPeace in a steady current flows,\nFilled from Thy mercy's flood.\n\nWhat boundless joy will fill each heart,\nOur every grief efface,\nWhen we behold Thee as Thou art,\nAnd all Thy love retrace.\n\nUnseen we love Thee, dear Thy Name!\nBut when our eyes behold,\nWith joyful wonder we'll proclaim\nThe half hath not been told.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "174",
        "title": "O blessed Saviour! Who but Thou",
        "author": "Sir Edward Denny",
        "meter": "C.M.",
        "tuneName": "St. Bernard",
        "lyrics": "\nO blessed Saviour! Who but Thou,\nOn earth, in heaven above,\nMay claim from all our willing hearts\nThe full response of love?\n\nWe love the brethren, Lord, 'tis true,\nBecause in them we see\nSweet traces of Thy blessed self,\nFor they are one with Thee.\n\nAnd one with us, but O, 'twas Thine,\nThine only, Lord, to part\nWith life and all that love could give,\nTo win the wand'ring heart.\n\nThus, heirs of endless bliss with Thee,\nWe love Thee\u2014we adore,\nAnd ask Thee still for greater grace,\nTo love Thee more and more.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "175",
        "title": "O Christ! we rest in Thee",
        "author": "James George Deck (1841)",
        "meter": "6.6.8.6.8.8.",
        "tuneName": "Manoah",
        "lyrics": "\nO Christ! we rest in Thee,\nIn Thee ourselves we hide;\nLaden with guilt and misery,\nWhere could we rest beside?\n'Tis on Thy meek and lowly breast\nOur weary souls alone can rest.\n\nThou Holy One of God!\nThe Father rests in Thee,\nAnd in the savour of that blood\nOnce shed on Calvary.\nThe curse is gone\u2014through Thee we're blest;\nGod rests in Thee\u2014in Thee we rest.\n\nSoon the bright, glorious day,\nThe rest of God, shall come;\nSorrow and sin shall pass away,\nAnd we shall reach our home;\nThen, of the promised land possessed,\nOur souls shall know eternal rest.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "176",
        "title": "O Christ, what burdens bowed Thy head!",
        "author": "Anne Ross Cundell Cousin",
        "meter": "8.6.8.6.8.6",
        "tuneName": "Substitution",
        "lyrics": "\nO Christ, what burdens bowed Thy head!\nOur load was laid on Thee;\nThou stoodest in the sinner's stead,\nBear'st all my ill for me.\nA victim led, Thy blood was shed;\nNow there's no load for me.\n\nDeath and the curse were in our cup,\nO Christ, 'twas full for Thee!\nBut Thou has drained the last dark drop,\n'Tis empty now for me.\nThat bitter cup, love drank it up;\nNow blessings' draught for me.\n\nThe tempest's awful voice was heard;\nO Christ, it broke on Thee!\nThy open bosom was my ward;\nIt braved the storm for me.\nThy form was scarred, Thy visage marred;\nNow cloudless peace for me.\n\nJehovah bade His sword awake;\nO Christ, it woke' gainst Thee!\nThy blood the flaming blade must slake,\nThy heart its sheath must be;\nAll for my sake my peace to make,\nNow sleeps that sword for me.\n\nThe Holy One did hide His face;\nO Christ, 'twas hid from Thee!\nDumb darkness wrapt Thy soul a space,\nThe darkness due to me.\nBut now that face of radiant grace\nShines forth in light on me.\n\nFor me, Lord Jesus, Thou hast died,\nAnd I have died in Thee;\nThou'rt risen; my bands are all untied,\nAnd now Thou liv'st in me.\nWhen Thou dost come to take Thy Bride,\nThy glory then for me.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "177",
        "title": "O Christian, awake! for the strife is at hand",
        "author": "Anonymous",
        "meter": "P.M.",
        "tuneName": "Watchword",
        "lyrics": "\nO Christian, awake! for the strife is at hand,\nWith helmet and shield and a sword in thy hand,\nTo meet the bold tempter, go, fearlessly go!\nAnd stand, like the brave, with thy face to the foe.\n\nWhatever thy danger, take heed and beware,\nBut turn not thy back, for no armour is there;\nThe legions of darkness if thou wouldst o'erthrow,\nThen stand, like the brave, with thy face to the foe.\n\nThe cause of thy Master with vigour defend;\nBe watchful, be zealous, and fight to the end;\nWherever He leads thee, go, valiantly go,\nAnd stand, like the brave, with thy face to the foe.\n\nPress on, never doubting, thy Captain is near,\nWith grace to supply, and with comfort to cheer;\nHis love like a stream in the desert will flow;\nThen stand, like the brave, with thy face to the foe\n",
        "Chorus": "\nStand like the brave, stand like the brave,\nStand like the brave, with thy face to the foe.\n",
        "addedChorus": ""
    },
    {
        "number": "178",
        "title": "O Christ! in Thee my soul hath found",
        "author": "Unknown tr/ad by Emma Frances Bevan",
        "meter": "C.M.D.",
        "tuneName": "Satisfaction",
        "lyrics": "\nO Christ! in Thee my soul hath found,\nAnd found in Thee alone,\nThe peace, the joy I sought so long,\nThe bliss till now unknown.\n\nI sighed for rest and happiness,\nI yearned for them, not Thee;\nBut while I passed my Saviour by\nHis love laid hold on me.\n\nI tried the broken cisterns, Lord,\nBut, ah! the waters failed;\nE'en as I stooped to drink they fled,\nAnd mocked me as I wailed.\n\nThe pleasures lost I sadly mourned,\nBut never wept for Thee,\nTill grace the sightless eyes received\nThy loveliness to see.\n",
        "Chorus": "\nNow none but Christ can satisfy,\nNone other Name for me;\nThere's love, and life, and lasting joy,\nLord Jesus, found in Thee.\n",
        "addedChorus": ""
    },
    {
        "number": "179",
        "title": "O Christ, Thou heavenly Lamb!",
        "author": "Charles Russell Hurditch",
        "meter": "S.M.",
        "tuneName": "Swabia",
        "lyrics": "\nO Christ, Thou heavenly Lamb!\nJoy of the Father's heart;\nNow let Thy love my soul inflame,\nFresh power to me impart.\n\nPower to know the loss\nSuffered, O Lord, by Thee;\nPower to glory in the Cross\nThou didst endure for me.\n\nPower to feel Thy love,\nAnd all its depths to know;\nPower to fix the heart above,\nAnd die to all below.\n\nPower to keep the eye\nFor ever fixed on Thee;\nPower to lift the warning cry\nTo souls from wrath to flee.\n\nPower lost souls to win\nFrom Satan's mighty hold;\nPower the wanderers to bring\nBack to the heavenly fold.\n\nPower to watch and pray,\n\"Lord Jesus, quickly come!\"\nPower to hail the happy day\nDestined to bear me home.\n\nLord Jesus, then to me\nPower divine impart,\nTo swell redemption's song to Thee,\nFor worthy, Lord, Thou art.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "180",
        "title": "O Come, Thou stricken Lamb of God!",
        "author": "Wolfgang Christopher Deszler tr/ad by John Wesley (note: some sources attribute authorship to Nikolaus Ludwig von Zinzendorf, another to Hursley)",
        "meter": "L.M.",
        "tuneName": "Wareham",
        "lyrics": "\nO Come, Thou stricken Lamb of God!\nWho shed'st for us Thine own life-blood,\nAnd teach us all Thy love: then pain\nWere sweet, and life or death were gain.\n\nTake Thou our hearts, and let them be\nFor ever closed to all but Thee;\nThy willing servants, let us wear\nThe seal of love for ever there.\n\nHow blest are they who still abide\nClose sheltered by Thy watchful side;\nWho life and strength from Thee receive,\nAnd with Thee move, and in Thee live.\n\nAh, Lord! enlarge our scanty thought\nTo know the wonders Thou hast wrought;\nUnloose our stamm'ring tongues to tell\nThy love, immense, unsearchable.\n\nFirst-born of many brethren, Thou!\nTo whom both heaven and earth must bow!\nHeirs of Thy shame and of Thy throne\nWe bear the cross, and seek the crown.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "181",
        "title": "O blessed God! How kind",
        "author": "John Kent",
        "meter": "6.6.6.6.8.8.",
        "tuneName": "Lennox",
        "lyrics": "\nO blessed God! How kind\nAre all Thy ways to me,\nWhose dark benighted mind\nWas enmity with Thee.\nYet now, subdued by sovereign grace,\nMy spirit longs for Thine embrace.\n\nHow precious are Thy thoughts\nThat o'er my spirit roll!\nThey swell beyond my faults,\nAnd captivate my soul:\nHow great their sum, how high they rise,\nCan ne'er be known beneath the skies.\n\nPreserved by Jesus, when\nMy feet made haste to hell!\nAnd there should I have gone,\nBut Thou dost all things well:\nThy love was great, Thy mercy free,\nWhich from the pit delivered me.\n\nBefore Thy hands had made\nThe sun to rule the day,\nOr earth's foundation laid,\nOr fashioned Adam's clay,\nWhat thoughts of peace and mercy flowed\nIn Thy great heart of love, O God.\n\nA monument of grace,\nA sinner saved by blood,\nThe streams of love I trace\nUp to the fountain, God,\nAnd in His sovereign counsels see\nEternal thoughts of love to me.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "182",
        "title": "O eyes that are weary, and hearts that are sore",
        "author": "John Nelson Darby & Anna Bartlett Warner",
        "meter": "11's",
        "tuneName": "Consolation",
        "lyrics": "\nO eyes that are weary, and hearts that are sore,\nLook off unto Jesus and sorrow no more;\nThe light of His countenance shineth so bright,\nThat on earth, as in heaven, there need be no night.\n\nLooking off unto Jesus, my eyes cannot see\nThe troubles and dangers that throng around me;\nThey cannot be blinded with sorrowful tears,\nThey cannot be shadowed with unbelief fears.\n\nLooking off unto Jesus my spirit is blest;\nIn the world I have turmoil, in Him I have rest;\nThe sea of my life all about me may roar;\nWhen I look unto Jesus I hear it no more.\n\nLooking off unto Jesus I go not astray;\nMy eyes are on Him and He shows me the way;\nThe path may seem dark as He leads me along,\nBut following Jesus, I cannot go wrong.\n\nLooking off unto Jesus my heart cannot fear,\nIts trembling is still when I see Jesus near;\nI know that His power my safeguard will be,\nFor, \"Why are you troubled?\" He saith unto me.\n\nSoon, soon shall I know the full beauty and grace\nOf Jesus, my Lord, when I stand face to face;\nI shall know how His love went before me each day,\nAnd wonder that ever my eyes turned away.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "183",
        "title": "O Gracious Lord, be with us now",
        "author": "Sir Edward Denny",
        "meter": "C.M.",
        "tuneName": "Courtallam",
        "lyrics": "\nO Gracious Lord, be with us now,\nSupply Thy children's need;\nOn Christ, the Bread of Life, may we\nIn sweet communion feed.\n\nWith water from the smitten Rock\nOur thirsty spirits cheer;\nAnd make us all rejoice to feel\nThy blessed presence here.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "184",
        "title": "Of Thee, Lord, we would never tire;",
        "author": "Mary Bowly Peters",
        "meter": "C.M.",
        "tuneName": "Evan",
        "lyrics": "\nOf Thee, Lord, we would never tire;\nThis new and living food\nCan satisfy our hearts' desire,\nFor life is in Thy blood.\n\nIf through the night a happy song\nOur wearied spirits raise,\nWhat greater joys shall cause ere long\nEternal bursts of praise!\n\nTo look within and see no stain,\nAbroad no guilt to trace;\nTo shed no tears, to feel no pain,\nTo see Thee face to face.\n\nTo find each hope of glory gained,\nFulfilled each precious word,\nAnd fully all to have attained\nThe image of our Lord.\n\nFor this we're pressing onward still!\nAnd in this hope would be\nMore subject to the Father's will,\nLord Jesus, more like Thee.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "185",
        "title": "O God of matchless grace",
        "author": "Hannah Kilham Burlingham",
        "meter": "6.6.8.6.8.8.",
        "tuneName": "Pisgah",
        "lyrics": "\nO God of matchless grace,\nWe sing unto Thy Name!\nWe stand accepted in the place\nThat none but Christ could claim.\nOur willing hearts have heard Thy voice,\nAnd in Thy mercy we rejoice.\n\n'Tis meet that Thy delight\nShould centre in Thy Son;\nThat Thou shouldst place us in Thy sight,\nIn Him, Thy Holy One.\nThy perfect love has cast out fear;\nThy favour shines upon us here.\n\nEternal is our rest,\nO Christ of God, in Thee!\nNow of Thy peace, Thy joy possessed,\nWe wait Thy face to see.\nNow to the Father's heart received,\nWe know in whom we have believed.\n\nA sacrifice to God\nIn life or death are we;\nThen keep us ever, blessed Lord,\nThus set apart to Thee.\nBought with a price, we're not our own;\nWe died, we live to God alone.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "186",
        "title": "O joy of the justified, joy of the free!",
        "author": "Francis (Frank) Bottome",
        "meter": "P.M.",
        "tuneName": "Mighty Love",
        "lyrics": "\nO joy of the justified, joy of the free!\nI'm washed in that crimson tide opened for me;\nIn Christ, my Redeemer, rejoicing I stand,\nAnd point to the print of the nail in His hand.\n\nLord Jesus, the crucified, now Thou art mine;\nThough once a lost sinner, yet now I am Thine;\nIn conscious salvation I sing of His grace\nWho lifts now upon me the smile of His face.\n\nLord Jesus, my Saviour, I'll still sing of Thee,\nYes, sing of Thy precious blood poured out for me;\nAnd when in the mansions of glory above,\nI'll praise and adore Thine unchangeable love.\n",
        "Chorus": "\nO sing of His mighty love,\nSing of His mighty love,\nSing of His mighty love,\nMighty to save.\n",
        "addedChorus": ""
    },
    {
        "number": "187",
        "title": "O head, once filled with bruises",
        "author": "Paul Gerhardt",
        "meter": "7.6.7.6.D.",
        "tuneName": "Aurelia",
        "lyrics": "\nO head, once filled with bruises,\nOppressed with pain and scorn,\nO'erwhelmed with sore abuses,\nMocked with a crown of thorn!\nO Head, to death once wounded\nIn shame upon the tree,\nIn glory now surrounded\nWith brightest majesty.\n\nThou Lord of all transcendent,\nThou life-creating Sun\nTo worlds on Thee dependent,\nYet bruised and spit upon!\nO Lord! what Thee tormented\nWas our sin's heavy load;\nWe had the debt augmented\nWhich Thou didst pay in blood.\n\nWe give Thee thanks unfeigned\nLord Jesus, Friend in need!\nFor what Thy soul sustained\nWhen Thou for us didst bleed;\nGrant us to lean unshaken\nUpon Thy faithfulness,\nUntil, to glory taken,\nWe see Thee face to face.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "188",
        "title": "O happy day, that fixed my choice",
        "author": "Philip Doddridge (c. 1755)",
        "meter": "P.M.",
        "tuneName": "Happy Day",
        "lyrics": "\nO happy day, that fixed my choice\nOn Thee, my Saviour and my God!\nWell may this glowing heart rejoice\nAnd tell its raptures all abroad.\n\n'Tis done\u2014the great transaction's done!\nI am my Lord's and He is mine;\nHe drew me, and I followed on,\nCharmed to confess the voice divine.\n\nNow rest, my long-divided heart,\nFixed on this blissful centre, rest;\nNor ever from Thy Lord depart,\nWith Him of every good possessed.\n",
        "Chorus": "\nHappy day! Happy day!\nWhen Jesus washed my sins away.\nHe taught me how to watch and pray,\nAnd live rejoicing every day.\n",
        "addedChorus": ""
    },
    {
        "number": "189",
        "title": "O happy day! when first we felt",
        "author": "James George Deck (1841)",
        "meter": "L.M.",
        "tuneName": "Ernan",
        "lyrics": "\nO happy day! when first we felt\nOur souls with deep contrition melt,\nAnd saw our sins of crimson guilt\nAll cleansed by blood on Calvary spilt.\n\nO happy day! when first Thy love\nBegan our grateful hearts to move;\nAnd gazing on Thy wondrous Cross,\nWe saw all else as worthless dross.\n\nO happy day! when we no more\nShall grieve Thee whom our souls adore,\nWhen sorrows, conflicts, fears shall cease,\nAnd all our trials end in peace.\n\nO happy day! when we shall see\nAnd fix our longing eyes on Thee,\nOn Thee, our Light, our Life, our Love,\nOur All below, our Heaven above.\n\nO happy day of cloudless light!\nEternal day without a night;\nLord, when shall we its dawning see,\nAnd spend it all in praising Thee?\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "190",
        "title": "O Christ! He is the fountain",
        "author": "Anne Ross Cundell Cousin",
        "meter": "7.6.7.6.D.",
        "tuneName": "Rutherford",
        "lyrics": "\nO Christ! He is the fountain,\nThe deep, sweet well of love;\nThe streams on earth I've tasted,\nMore deep I'll drink above;\nThere, to an ocean's fullness,\nHis mercy doth expand,\nAnd glory, glory dwelleth\nIn Immanuel's land.\n\nWith mercy and with judgment\nMy web of time He wove,\nAnd aye the dews of sorrow\nWere lustred with His love.\nI'll bless the hand that guided,\nI'll bless the heart that planned,\nWhen throned where glory dwelleth\nIn Immanuel's land.\n\nO I am my Beloved's\nAnd my Belov'd is mine;\nHe brings a poor vile sinner\nInto His \"house of wine.\"\nI stand upon His merit;\nI know no other stand,\nNot e'en where glory dwelleth\nIn Immanuel's land.\n\nThe Bride eyes not her garment,\nBut her dear Bridegroom's face;\nI will not gaze at glory,\nBut on the King of grace.\nNot at the crown He giveth,\nBut on His pierced hand;\nThe Lamb is all the glory\nOf Immanuel's land.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "191",
        "title": "O for a thousand tongues to sing",
        "author": "Charles Wesley (1739)",
        "meter": "P.M.",
        "tuneName": "Old Winchester",
        "lyrics": "\nO for a thousand tongues to sing\nMy dear Redeemer's praise,\nThe glories of my God and King,\nThe triumphs of His grace.\n\nJesus! the Name that charms our fears,\nThat bids our sorrows cease;\n'Tis music in the sinner's ears,\n'Tis life, and health, and peace.\n\nHe breaks the power of cancelled sin,\nHe sets the prisoner free;\nHis blood can make the foulest clean,\nHis blood availed for me.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "192",
        "title": "O for the peace that floweth as a river!",
        "author": "Jane Fox Crewdson (1864)",
        "meter": "11.10.11.10.",
        "tuneName": "Shemah",
        "lyrics": "\nO for the peace that floweth as a river!\nMaking life's desert places bloom and smile;\nO for the faith to grasp heaven's bright \"for ever\"!\nAmid the shadows of earth's \"little while.\"\n\n\"A little while\" for patient vigil keeping,\nTo face the storm and wrestle with the strong;\n\"A little while\" to sow the seed with weeping,\nThen bind the sheaves and sing the harvest song.\n\n\"A little while\" the earthen pitcher taking\nTo wayside brooks, from far-off fountains fed;\nThen the parched lip its thirst for ever slaking\nBeside the fullness of the Fountain-head.\n\n\"A little while\" to keep the oil from failing,\n\"A little while\" faith's flick'ring lamp to trim;\nAnd then the Bridegroom's coming footsteps hailing,\nWe'll haste to meet Him with the bridal hymn.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "193",
        "title": "O for robes of whiteness",
        "author": "Charatie de Cheney Lees Smith Bancroft",
        "meter": "7.6.7.6.D.",
        "tuneName": "Robes of Whiteness",
        "lyrics": "\nO for robes of whiteness,\nO for the tearless eyes;\nO for the glorious brightness\nOf the unclouded skies!\nO for the no more weeping\nWithin the land of love;\nThe endless joy of keeping\nThe bridal feast above.\n\nO for the bliss of flying,\nMy risen Lord to meet;\nO for the rest of lying\nFor ever at His feet!\nO for the hour of seeing\nMy Saviour face to face;\nThe hope of ever being\nIn that sweet meeting-place.\n\nO Christ! Thou King of Glory,\nI soon shall dwell with Thee!\nI soon shall sing the story\nOf Thy great love to me!\nMeanwhile my soul would enter\nE'en now before Thy throne,\nThat all my love might centre\nOn Thee, and Thee alone.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "194",
        "title": "O Holy Saviour! Friend unseen!",
        "author": "Charlotte Elliott (1834)",
        "meter": "8.8.8.6.",
        "tuneName": "Palestrina",
        "lyrics": "\nO Holy Saviour! Friend unseen!\nSince on Thine arm Thou bidst us lean,\nHelp us throughout life's changing scene\nBy faith to cling to Thee.\n\nFar from our home, fatigued, opprest,\nIn Thee we've found our place of rest;\nAs strangers still, yet not unblest,\nWhile we can cling to Thee.\n\nWithout a murmur we dismiss\nOur former dreams of earthly bliss,\nOur joy, our consolation this,\nEach hour to cling to Thee.\n\nThough faith and hope may oft be tried,\nWe ask not, need not aught beside;\nSo safe, so calm, so satisfied,\nThe souls that cling to Thee.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "195",
        "title": "O teach us more of Thy blest ways",
        "author": "James Hutton",
        "meter": "C.M.",
        "tuneName": "Eden Abridge",
        "lyrics": "\nO teach us more of Thy blest ways,\nThou holy Lamb of God!\nAnd fix and root us in Thy grace,\nAs those redeemed by blood.\n\nO tell us often of Thy love,\nOf all Thy grief and pain!\nAnd let our hearts with joy confess\nThat thence comes all our gain.\n\nFor this, O may we freely count\nWhate'er we have but loss!\nThe dearest object of our love\nCompared with Thee but dross.\n\nEngrave this deeply on our heart,\nConform our ways to Thine,\nThat so we may, in some degree,\nReflect the light divine.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "196",
        "title": "O Lamb of God! 'tis joy to know",
        "author": "James George Deck (1841)",
        "meter": "8.8.6.8.8.6.",
        "tuneName": "Piety",
        "lyrics": "\nO Lamb of God! 'tis joy to know\nThat path is o'er of shame and woe,\nFor us so meekly trod.\nAll finished is Thy work of toil;\nThou reapest now the fruit and spoil,\nExalted by our God.\n\nThy holy head, once bound with thorns,\nThe crown of glory now adorns;\nThy seat, the Father's throne.\nTen thousand thousands sing Thy praise,\nTheir harps the eternal anthem raise,\nWorthy the Lamb alone.\n\nAnd, Lord, for us Thou sittest there;\nThy members here Thy fullness share,\nFor us Thou dost receive.\nThy wisdom, riches, honours, powers,\nThy boundless love has made all ours,\nWho in Thy love believe.\n\nWe triumph in Thy triumphs, Lord;\nThy joys our deepest joys afford,\nAnd make our faces shine.\nWhile sorrowing, suffering, toiling here,\nHow does the thought our spirits cheer,\nThe throne of glory's Thine.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "197",
        "title": "O Lamb of God! still keep me",
        "author": "James George Deck (1841)",
        "meter": "7.6.7.6.D.",
        "tuneName": "Aurelia Kilmorey",
        "lyrics": "\nO Lamb of God! still keep me\nNear to Thy wounded side;\n'Tis only there in safety\nAnd peace I can abide.\nWhat foes and snares surround me!\nWhat lusts and fears within!\nThe grace that sought and found me\nAlone can keep me clean.\n\n'Tis only in Thee hiding\nI know my life secure;\nOnly in Thee abiding\nI steadfast shall endure.\nThine arm the victory gaineth\nO'er every hurtful foe;\nThy love my heart sustaineth\nIn all its cares and woe.\n\nSoon shall my eyes behold Thee\nWith rapture face to face;\nThe half hath not been told me\nOf all Thy power and grace.\nThy beauty, Lord, and glory,\nThe wonders of Thy love,\nShall be the endless story\nOf all Thy saints above.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "198",
        "title": "O Lord, who art Thy people's light",
        "author": "Sir Edward Denny",
        "meter": "C.M.",
        "tuneName": "Salzburg",
        "lyrics": "\nO Lord, who art Thy people's light,\nWhen shall Thy face be seen?\nWhen wilt Thou meet our longing sight,\nWithout a cloud between?\n\nWe know, Lord Jesus, that Thy heart\nStill for Thy saints doth care;\nBut we would see Thee as Thou art,\nAnd Thy full image bear.\n\nThy love sustains us on our way\nWhile pilgrims here below;\nAnd grace to help us day by day\nThou dost, O Lord, bestow.\n\nBut O the more we learn of Thee,\nAnd Thy rich mercy prove,\nThe more we long Thyself to see,\nAnd fully know Thy love.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "199",
        "title": "O Lord! 'tis joy to look above",
        "author": "James George Deck (1841)",
        "meter": "C.M.",
        "tuneName": "Farrant",
        "lyrics": "\nO Lord! 'tis joy to look above\nAnd see Thee on the throne;\nTo search the heights and depths of love\nWhich Thou to us hast shown\n\nTo look beyond the dark, long night\nAnd hail the coming day,\nWhen Thou, to all the saints in light,\nThy glories wilt display.\n\nAnd O 'tis joy the path to trace\nBy Thee so meekly trod;\nLearning of Thee to walk in grace\nAnd fellowship with God.\n\nJoy to confess Thy blessed Name,\nThe virtues of Thy blood,\nAnd to the wearied heart proclaim,\nBehold the Lamb of God!\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "200",
        "title": "O Lord, I would delight in Thee",
        "author": "John Ryland (1777)",
        "meter": "C.M.",
        "tuneName": "Evan",
        "lyrics": "\nO Lord, I would delight in Thee,\nAnd on Thy care depend;\nTo Thee in every trouble flee,\nMy best, my only Friend.\n\nWhen all created streams are dried\nThy fullness is the same;\nMay I with this be satisfied,\nAnd glory in Thy Name.\n\nO that I had a stronger faith\nTo look within the veil!\nTo credit what my Saviour saith,\nWhose word can never fail.\n\nThou who hast made my heaven secure\nWilt here all good provide;\nWhile Christ is rich, can I be poor,\nChrist, who for me has died?\n\nO Lord, I cast my care on Thee;\nI triumph and adore;\nHenceforth my great concern shall be\nTo love and praise Thee more.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "201",
        "title": "O Lord, how much Thy Name unfolds",
        "author": "Mary Bowly Peters",
        "meter": "C.M.",
        "tuneName": "St. Agnes, Durham",
        "lyrics": "\nO Lord, how much Thy Name unfolds\nTo every opened ear;\nThe pardoned sinner's memory holds\nNone other half so dear.\n\nJesus! It speaks a life of love,\nAnd sorrows meekly borne;\nIt tells of sympathy above,\nWhatever griefs we mourn.\n\nIt tells us of Thy sinless walk\nIn fellowship with God;\nAnd to our ears no tale so sweet\nAs Thine atoning blood.\n\nThis Name encircles every grace\nThat God, as man, could show;\nThere only can the Spirit trace\nA perfect life below.\n\nThe mention of Thy Name shall bow\nOur hearts to worship Thee;\nThe chiefest of ten thousand Thou!\nThe chief of sinners we.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "202",
        "title": "O Lord, when we the path retrace",
        "author": "James George Deck (1841)",
        "meter": "C.M.",
        "tuneName": "St. Kilda",
        "lyrics": "\nO Lord, when we the path retrace\nWhich Thou on earth hast trod,\nTo man Thy wondrous love and grace,\nThy faithfullness to God.\n\nThy love to man, so sorely tried,\nProved stronger than the grave;\nThe very spear that pierced Thy side\nDrew forth the blood to save.\n\nFaithful amidst unfaithfullness,\nMidst darkness only light,\nThou didst Thy Father's Name confess,\nAnd in His will delight.\n\nUnmoved by Satan's subtle wiles,\nBy suffering, shame, and loss;\nThy path, uncheered by earthly smiles,\nLed only to the Cross.\n\nO Lord, with sorrow and with shame,\nWe meekly would confess,\nHow little we, who bear Thy Name,\nThy mind, Thy ways express.\n\nGive us Thy meek, Thy lowly mind;\nWe would obedient be;\nAnd all our rest and pleasure find\nIn fellowship with Thee.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "203",
        "title": "O love divine, how sweet Thou art!",
        "author": "Charles Wesley (1749)",
        "meter": "8.8.6.8.8.6.",
        "tuneName": "Marienberg",
        "lyrics": "\nO love divine, how sweet Thou art!\nWhen shall I find my longing heart\nAll taken up by Thee?\nO may I pant and thirst to prove\nThe greatness of redeeming love!\nThe love of Christ to me.\n\nGod only knows the love of God:\nO that it more were shed abroad\nIn this poor longing heart!\nFor love I sigh, for love I pine;\nThis only portion, Lord, be mine,\nBe mine this better part.\n\nO that I may for ever sit,\nLike Mary, at the Master's feet!\nBe this my happy choice;\nMy only care, my only bliss,\nMy joy, my heaven on earth be this,To hear the Bridegroom's voice.\n\nO that I may like favoured John\nRecline my wearied head upon\nMy Saviour's loving breast!\nFrom care, and sin, and sorrow free,\nGive me, O Lord, to find in Thee\nMy everlasting rest.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "204",
        "title": "O Lord, where'er Thy people meet",
        "author": "William Cowper",
        "meter": "L.M.",
        "tuneName": "Berkshire Norfolk",
        "lyrics": "\nO Lord, where'er Thy people meet\nThere they behold Thy mercy-seat:\nWhere'er they see Thee, Thou art found,\nAnd every place is hallowed ground.\n\nGreat Shepherd of Thy chosen few\nThy former mercies here renew;\nHere to our waiting hearts proclaim\nThe sweetness of Thy saving Name.\n\nNow may we prove the power of prayer\nTo strengthen faith and banish care;\nTo teach our faint desires to rise,\nAnd bring all heaven before our eyes.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "205",
        "title": "O Lord, who now art seated",
        "author": "James George Deck (1841)",
        "meter": "7.6.7.6.D.",
        "tuneName": "Morning Light",
        "lyrics": "\nO Lord, who now art seated\nAbove the heavens on high.\nThe gracious work completed,\nFor which Thou cam'st to die.\nTo Thee our hearts are lifted\nWhile pilgrims wand'ring here,\nFor Thou art truly gifted\nOur every weight to bear.\n\nWe know that Thou has bought us\nAnd cleansed us by Thy blood;\nWe know Thy grace has brought us\nAs kings and priests to God.\nWe know that soon the morning,\nLong looked for, hast'neth near,\nWhen we, at Thy returning,\nIn glory shall appear.\n\nO Lord, Thy love's unbounded!\nSo full, so vast, so free!\nOur thoughts are all confounded\nWhene'er we think on Thee.\nFor us Thou cam'st from heaven,\nFor us to bleed and die;\nThat, purchased and forgiven,\nWe might ascend on high.\n\nO let this love constrain us\nTo give our hearts to Thee;\nLet nothing henceforth pain us\nBut that which paineth Thee.\nOur joy, our one endeavour,\nThrough suff'ring, conflict, shame,\nTo serve Thee, gracious Saviour,\nAnd magnify Thy Name.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "206",
        "title": "O Lord, Thy love's unbounded!",
        "author": "John Nelson Darby",
        "meter": "7.6.7.6.D.",
        "tuneName": "Ewing",
        "lyrics": "\nO Lord, Thy love's unbounded!\nSo sweet, so full, so free!\nMy soul is all transported\nWhene'er I think of Thee.\nYet, Lord, alas! what weakness\nWithin myself I find;\nNo infant's changing pleasure\nIs like my wandering mind.\n\nAnd yet Thy love's unchanging,\nAnd doth recall my heart\nTo joy in all its brightness\nThe peace its beams impart!\nYet sure, if in Thy presence\nMy soul still constant were,\nMine eye would, more familiar,\nIts brighter glories bear.\n\nAnd thus Thy deep perfections\nMuch better should I know,\nAnd, with adoring fervour\nShould in Thy likeness grow.\nStill, sweet 'tis to discover,\nIf clouds have dimmed my sight,\nWhen passed, eternal Lover,\nTowards me, as e'er, Thou'rt bright.\n\nO guard my soul, Lord Jesus,\nAbiding still with Thee;\nAnd if I wander, teach me\nSoon back to Thee to flee,\nThat all Thy gracious favour\nMay to my soul be known;\nAnd versed in this Thy goodness,\nMy hopes Thyself shalt crown.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "207",
        "title": "O God, our help in ages past",
        "author": "Isaac Watts (1719)",
        "meter": "C.M.",
        "tuneName": "St. Anne St. Magnus",
        "lyrics": "\nO God, our help in ages past,\nOur hope for years to come,\nOur shelter from the stormy blast,\nAnd our eternal home.\n\nBefore the hills in order stood,\nOr earth received her frame,\nFrom everlasting Thou art God,\nTo endless years the same.\n\nUnder the shadow of Thy throne\nThy saints have dwelt secure;\nSufficient is Thine arm alone,\nAnd our defence is sure.\n\nO God, our help in ages past,\nOur hope for years to come,\nBe Thou our guard while life shall last,\nAnd our eternal home.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "208",
        "title": "O what a lonely path were ours",
        "author": "Sir Edward Denny",
        "meter": "C.M.",
        "tuneName": "Lynnwood",
        "lyrics": "\nO what a lonely path were ours\nCould we, O Father, see\nNo home or rest beyond it all,\nNo guide or help in Thee.\n\nBut Thou art near and with us still\nTo keep us on the way,\nThat leads along the vale of tears\nTo yon bright world of day.\n\nThere shall Thy glory, O our God!\nBreak fully on our view;\nAnd we, Thy saints, rejoice to prove\nThat all Thy Word was true.\n\nThere Jesus, on His heavenly throne,\nOur wondering eyes shall see;\nWhile we the blest associates there\nOf all His joy shall be.\n\nSweet hope! we leave without a sigh\nA blighted world like this;\nTo bear the cross, despise the shame,\nFor all that weight of bliss.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "209",
        "title": "O what a Saviour that He died for me!",
        "author": "James McGranahan (1878)",
        "meter": "P.M.",
        "tuneName": "Verily, Verily",
        "lyrics": "\nO what a Saviour that He died for me!\nFrom condemnation He hath made me free;\nHe that believeth on the Son saith He,\nHath everlasting life.\n\nAll my iniquities on Him were laid,\nAll my indebtedness by Him was paid;\nAll who believe on Him, the Lord hath said,\nHave everlasting life.\n\nThough poor and needy I can trust my Lord;\nThough weak and sinful I believe His Word;\nO glad message! every child of God\nHath everlasting life.\n\nThough all unworthy, yet I will not doubt;\nFor him that cometh He will not cast out;\nHe that believeth, O the good news shout!\nHATH everlasting life.\n",
        "Chorus": "\nVerily, verily, I say unto you;\nVerily, verily, message ever new!\nHe that believeth on the Son, 'tis true.\nHath everlasting life.\n",
        "addedChorus": ""
    },
    {
        "number": "210",
        "title": "O Our Saviour, crucified!",
        "author": "Robert Cleaver Chapman",
        "meter": "7.7.7.7.",
        "tuneName": "Battishill",
        "lyrics": "\nO Our Saviour, crucified!\nNear Thy Cross would we abide,\nThere to look with steadfast eye\nOn Thy dying agony.\n\nJesus bruised and put to shame\nTells us all Jehovah's Name;\nGod is love, we surely know\nBy the Saviour's depths of woe.\n\nIn His spotless soul's distress\nWe perceive our guiltiness;\nO how vile our low estate\nSince our ransom was so great.\n\nDwelling on Mount Calvary\nContrite shall our spirits be;\nRest and holiness shall find,\nFashioned like our Saviour's mind.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "211",
        "title": "Once more before we part",
        "author": "Joseph Hart & Robert Stephen Hawker",
        "meter": "6.6.6.6.D.",
        "tuneName": "Broadlands",
        "lyrics": "\nOnce more before we part,\nBless the Redeemer's Name;\nLet every tongue and heart\nPraise and adore the Lamb.\n\nLord, in Thy grace we came;\nThat blessing still impart;\nWe met in Jesus' Name;\nIn Jesus' Name we part.\n\nStill on Thy holy Word\nWe'd live, and feed, and grow;\nGo on to know the Lord,\nAnd practice what we know.\n",
        "Chorus": "\nJesus, the sinner's Friend,\nHim whom our souls adore,\nHis praises have no end;\nPraise Him for evermore.\n",
        "addedChorus": ""
    },
    {
        "number": "212",
        "title": "On Christ salvation rests secure;",
        "author": "Samuel Medley",
        "meter": "L.M.",
        "tuneName": "Duke Street",
        "lyrics": "\nOn Christ salvation rests secure;\nThe Rock of Ages must endure;\nNor can that faith be overthrown\nWhich rests upon the \"Living Stone.\"\n\nNo other hope shall intervene;\nTo Him we look, on Him we lean;\nOther foundations we disown,\nAnd build on Christ, the \"Living Stone.\"\n\nIn Him it is ordained to raise\nA temple to Jehovah's praise,\nComposed of all His saints, who own\nNo Saviour but the \"Living Stone.\"\n\nView the vast building, see it rise;\nThe work, how great! the plan, how wise!\nO wondrous fabric! power unknown,\nThat rests it on the \"Living Stone.\"\n\nBut most adore His precious Name;\nHis glory and His grace proclaim;\nFor us, the lost, condemned, undone,\nHe gave Himself, the \"Living Stone.\"\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "213",
        "title": "One there is above all others;",
        "author": "Marianne Nunn",
        "meter": "P.M.",
        "tuneName": "Tenderness",
        "lyrics": "\nOne there is above all others;\nO how He loves!\nHis is love beyond a brother's;\nO how He loves!\nEarthly friends may fail or leave us,\nOne day soothe, the next day grieve us,\nBut this Friend will ne'er deceive us;\nO how He loves!\n\n'Tis eternal life to know Him;\nO how He loves!\nThink, O think how much we owe Him;\nO how He loves!\nWith His precious blood He bought us,\nIn the wilderness He sought us,\nTo His fold He safely brought us;\nO how He loves!\n\nWe have found a friend in Jesus;\nO how He loves!\n'Tis His great delight to bless us;\nO how He loves!\nHow our hearts delight to hear Him\nBid us dwell in safety near Him!\nWhy should we distrust or fear Him?\nO how He loves!\n\nThrough His Name we are forgiven;\nO how He loves!\nBackward shall our foes be driven;\nO how He loves!\nBest of blessings He'll provide us;\nNought but good shall e'er betide us;\nSafe to glory He will guide us;\nO how He loves!\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "214",
        "title": "On Thy broken body feeding",
        "author": "Mary Carter",
        "meter": "8.7.8.7.D.",
        "tuneName": "Snowdon Deerhurst",
        "lyrics": "\nOn Thy broken body feeding,\nLord, our hearts in one unite;\nHere our souls behold Thee bleeding,\nPut to grief in sinners' sight.\nO that Jesus thus should love us,\nLove us unto death and shame!\nLet the dear remembrance move us\nWhile we meet in His blest Name.\n\nHere the pledge of Thy returning\nTells of all the joys of home,\nAnd our hearts within us burning,\nCry \"Amen, Lord Jesus, come!\"\nSoon, full soon, we thus together\nIn the Father's house shall meet;\nAnd the heavenly courts forever\nTread with undefiled feet.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "215",
        "title": "O Patient, spotless One!",
        "author": "Christian Andreas Bernstein",
        "meter": "S.M.",
        "tuneName": "Selma",
        "lyrics": "\nO Patient, spotless One!\nOur hearts in meekness train\nTo bear Thy yoke and learn of Thee,\nThat we may rest obtain.\n\nSaviour! Thou art enough\nThe mind and heart to fill;\nThy life, to calm the anxious soul,\nThy love, its fear dispel.\n\nO fix our earnest gaze\nSo wholly, Lord, on Thee,\nThat with Thy beauty occupied\nWe elsewhere none may see.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "216",
        "title": "O precious blood, O glorious death",
        "author": "Augustus Montague Toplady",
        "meter": "C.M.",
        "tuneName": "Emmanuel",
        "lyrics": "\nO precious blood, O glorious death,\nBy which the sinner lives!\nWhen stung by sin this blood we view,\nAnd all our joy revives.\n\nThe blood that purchased our release,\nAnd purged our crimson stains,\nWe challenge earth and hell to show\nA sin it cannot cleanse.\n\nOur scarlet crimes are made as wool,\nAnd we brought nigh to God;\nThanks to that wrath-appeasing death,\nThat heaven-procuring blood.\n\nThe blood that makes His glorious Church\nFrom every blemish free;\nAnd O the riches of His love!\nHe poured it out for me.\n\nThe Father's everlasting love,\nAnd Jesus' precious blood,\nShall be our endless themes of praise\nIn yonder blest abode.\n\nIn patience let us then possess\nOur souls till He appear;\nOur Head already is in heaven,\nAnd we shall soon be there\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "217",
        "title": "O Spotless Lamb of God, in Thee",
        "author": "Mary Jane Deck Walker",
        "meter": "L.M.",
        "tuneName": "Rockingham",
        "lyrics": "\nO Spotless Lamb of God, in Thee\nThe Father's holiness we see;\nAnd with delight Thy children trace,\nIn Thee, His wondrous love and grace.\n\nFor Thou didst leave Thy throne above\nTo teach us that our God is Love;\nAnd now we see His glory shine\nIn every word and deed of Thine.\n\nWhen we behold Thee, Lamb of God,\nBeneath our sin's tremendous load,\nExpiring on the accursed tree,\nHow great our guilt with grief we see.\n\nThere we with joy Thy grace behold;\nIts height and depth can ne'er be told!\nIt bursts our chains and sets us free,\nAnd sweetly draws our souls to Thee.\n\nThe cross reveals Thy love below;\nBut better soon our hearts shall know,\nWhen we behold Thy face above,\nThe fullness of our Father's love.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "218",
        "title": "O Thou spotless Lamb of God",
        "author": "James George Deck (1841)",
        "meter": "7.7.7.7.",
        "tuneName": "Zacher",
        "lyrics": "\nO Thou spotless Lamb of God\nThou hast bought us with Thy blood;\nWe would value nought beside\nJesus, Jesus crucified.\n\nWe are Thine, and Thine alone;\nThis we gladly, fully own,\nAnd in all our works and ways\nNow would only seek Thy praise.\n\nHelp us to confess Thy Name,\nBear with joy the cross and shame;\nOnly seek to follow Thee,\nThough reproach our portion be.\n\nWhen Thou shalt in glory come,\nAnd we reach our heavenly home,\nLouder still our lips shall own\nWe are Thine, and Thine alone!\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "219",
        "title": "Our Father! O what gracious ways",
        "author": "Anonymous",
        "meter": "L.M.",
        "tuneName": "Melcombe",
        "lyrics": "\nOur Father! O what gracious ways\nAnd thoughts of love that Name conveys!\nIt tells us of the tender care\nBeloved children ever share.\n\nOur Father! by Thy mercies past,\nWe learn on Thee our cares to cast;\nAnd while our wants are known to Thee,\nWe need not fear whate'er they be.\n\nHow oft when wand'ring far away\nThy care has hedged up all our way;\nSo bidding us return and live,\nAnd learn how much Thou canst forgive.\n\nHow precious are Thy thoughts to us!\nHow dear Thy Name revealed thus!\nO make us followers of Thee,\nAs Thy dear children ought to be.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "220",
        "title": "Our Father! we would worship",
        "author": "Anonymous",
        "meter": "7.6.7.6.D.",
        "tuneName": "Munich",
        "lyrics": "\nOur Father! we would worship\nIn Jesus' holy Name;\nFor He, whate'er our changes,\nFor ever is the same.\nThrough Him Thy children's praises\nAs incense sweet will be;\nAnd songs Thy Spirit raises\nCan want no melody.\n\nThe fire Thy love hath kindled\nShall never be put out;\nThe Spirit keeps it burning\nThough dimmed by sin and doubt:\nO make it burn more brightly\nWith purifying powers!\nThat we may value rightly\nThe grace that made Thee ours.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "221",
        "title": "Our souls are in God's mighty hand",
        "author": "Charles Wesley",
        "meter": "C.M.D.",
        "tuneName": "Haven of Rest",
        "lyrics": "\nOur souls are in God's mighty hand,\nWe're precious in His sight;\nAnd you and I shall surely stand\nWith Him in glory bright.\n\nHim eye to eye we then shall see,\nOur face like His shall shine;\nO what a glorious company\nWhere saints and angels join!\n\nO what a joyful meeting there!\nIn robes of white arrayed;\nWe all shall join in praising Him\nWhose glories never fade.\n\nWhen we've been there ten thousand years,\nBright shining as the sun,\nWe'll have no less to sing His praise\nThan when we first begun.\n",
        "Chorus": "\nWe'll stem the storm, it won't be long,\nWe'll anchor by and by\nIn the haven of eternal rest,\nWith Jesus ever nigh.\n",
        "addedChorus": ""
    },
    {
        "number": "222",
        "title": "Our times are in Thy hand;",
        "author": "William Freeman Lloyd",
        "meter": "S.M.",
        "tuneName": "Boylston",
        "lyrics": "\nOur times are in Thy hand;\nFather, we wish them there!\nOur life, our souls, our all we leave\nEntirely to Thy care.\n\nOur times are in Thy hand,\nWhatever they may be;\nPleasing or painful, dark or bright,\nAs best may seem to Thee.\n\nOur times are in Thy hand;\nWhy should we doubt or fear?\nOur Father's hand will never cause\nHis child a needless tear.\n\nOur times are in Thy hand,\nJesus the crucified!\nThe hand our many sins have pierced\nIs now our guard and guide.\n\nOur times are in Thy hand,\nO Lord, our Advocate!\nNor is that hand outstretched in vain\nFor us to supplicate.\n\nOur times are in Thy hand;\nWe'll always trust in Thee,\nTill we have left this weary land\nAnd all Thy glory see.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "223",
        "title": "Our Lord is now rejected",
        "author": "Daniel Webster Whittle (1881)",
        "meter": "P.M.",
        "tuneName": "Crowning Day",
        "lyrics": "\nOur Lord is now rejected\nAnd by the world disowned,\nBy the many still neglected\nAnd by the few enthroned;\nBut soon He'll come in glory!\nThe hour is drawing nigh,\nFor the crowning day is coming\nBy and by.\n\nThe heavens shall glow with splendour;\nBut brighter far than they\nThe saints shall shine in glory\nAs Christ shall them array:\nThe beauty of the Saviour\nShall dazzle every eye\nIn the crowning day that's coming\nBy and by.\n\nOur pain shall then be over,\nWe'll sin and sigh no more;\nBehind us all our sorrow,\nAnd nought but joy before.\nA joy in our Redeemer\nAs we to Him are nigh,\nIn the crowning day that's coming\nBy and by.\n\nLet all who look for \"hasten\"\nThe coming joyful day\nBy earnest consecration\nTo walk the narrow way;\nBy gathering in the lost ones\nFor whom our Lord did die,\nFor the crowning day that's coming\nBy and by.\n",
        "Chorus": "\nO the crowning day is coming!\nIs coming by and by!\nWhen our Lord shall come in power\nAnd glory from on high!\nO the glorious sight will gladden\nEach waiting, watchful eye,\nIn the crowning day that's coming\nBy and by.\n",
        "addedChorus": ""
    },
    {
        "number": "224",
        "title": "Ours are peace and joy divine",
        "author": "William Watkins Reid",
        "meter": "P.M.",
        "tuneName": "Love of Christ",
        "lyrics": "\nOurs are peace and joy divine,\nWho are one with Christ,\nWhen, like branches in the vine,\nWe abide in Christ.\nAs a living grafted shoot,\nNourished from a hidden root,\nWe may bear all holy fruit\nThrough \"the love of Christ\"\nLove of Christ, love of Christ,\nClusters grow on every branch\nThrough \"the love of Christ\"\n\nChristian pity moves our heart\nThrough \"the love of Christ;\"\nOther's woes pierce like a dart\nWhen there's love to Christ.\nGospel tidings we must tell,\nSinners warn to flee from hell,\nLure and win, alarm, compel,\nBy \"the love of Christ.\"\nLove of Christ, love of Christ,\nHeaven's ranks we'll seek to swell\nFor \"the love of Christ.\"\n\nWe will love with tender care,\nKnowing love to Christ,\nBrethren who His image bear,\nFor \"the love of Christ.\"\nJesus only shall we know,\nAnd our love to all shall flow\nIn His blood-bought Church below,\nFor \"the love of Christ.\"\nLove of Christ, love of Christ,\nWe now love all Christ-like ones\nFor \"the love of Christ.\"\n\nNow we live and walk by faith\nThrough \"the love of Christ:\"\nWe can triumph over death,\nOne in life with Christ.\nRooted, settled, knowing more,\nDepths and heights of love explore,\nTill we gain the heavenly shore\nThrough \"the love of Christ.\"\nLove of Christ, love of Christ,\nWhen He comes we then shall know\nAll \"the love of Christ.\"\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "225",
        "title": "O what shall we feel in Thy presence when first",
        "author": "Emily Grimley",
        "meter": "11.11.11.11.",
        "tuneName": "Hiding in Thee",
        "lyrics": "\nO what shall we feel in Thy presence when first\nThe visions of glory upon us shall burst!\nSince now our soul longeth and seeketh for Thee;\nO when, blessed Saviour, Thy face shall we see?\n\nThat face, once so marred, we shall gaze on at length,\nAnd fearless behold, as the sun in his strength;\nThose eyes, flames of fire, that so searching we prove,\nShall beam on us then inexpressible love.\n\nThy voice, like great waters, how calmly our soul\nShall hear in the glory its deep waters roll;\nThough now it rebukes us and humbles our pride,\nIt shall speak only love to Thy glorified Bride.\n\nO Thou who this world as a lone pilgrim trod,\nThy Father our Father, Thy God is our God;\nTo Thee we behold the bright seraphim bow;\nLord Jesus, what glory doth rest on Thee now!\n\nThy Spirit has shown God's deep purpose to be\nTo empty, then fill us with glory like Thee;\nAnd now Thou dost wait\u2014Thy full joy to impart,\nFor that day of espousals\u2014the joy of Thy heart.\n\nNow moment by moment, to answer our needs,\nThy blood, holy Saviour, in righteousness pleads;\nAnd sheltered by that, how serene and how calm\nOur souls on Thy bosom are shielded from harm.\n\nWe see Thee, Lord Jesus, with glory now crowned,\nAnd waiting Thy coming, in peace would be found;\nThe visions of glory have turned all to dross;\nFor Thee give us grace to count all things but loss.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "226",
        "title": "Praise Him! praise Him! Jesus, our blessed Redeemer!",
        "author": "Frances (Fanny) Jane Crosby",
        "meter": "12.10.12.10.D.",
        "tuneName": "Praise Him",
        "lyrics": "\nPraise Him! praise Him! Jesus, our blessed Redeemer!\nSing, ye saints! His wonderful love proclaim;\nHail Him! hail Him! mightiest angels in glory,\nStrength and honour give to His holy Name.\nLike a shepherd Jesus will feed His people,\nIn His arms He carries them all day long;\nO ye saints that dwell in the light of His presence\nPraise Him! praise Him! ever in joyful song.\n\nPraise Him! praise Him! Jesus, our blessed Redeemer!\nFor our sins He suffered, and bled, and died;\nHe's our Rock, our hope of eternal salvation,\nHail Him! hail Him! Jesus, the crucified.\nLoving Saviour, meekly enduring sorrow,\nCrowned with thorns that cruelly pierced His brow;\nOnce for us rejected, despised, and forsaken,\nPrince of Glory! He is triumphant now.\n\nPraise Him! praise Him! Jesus, our blessed Redeemer!\nHeavenly portals loud with hosannahs ring!\nJesus, Saviour, reigneth for ever and ever;\nCrown Him! crown Him! prophet, and priest, and king.\nDeath is vanquished! tell it with joy, ye faithful,\nWhere is now thy victory, boasting grave?\nJesus lives! no longer thy portals are cheerless;\nJesus lives! the mighty and strong to save.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "227",
        "title": "Peace! What a precious sound!",
        "author": "John F. Elwin",
        "meter": "6.6.4.6.6.6.4.",
        "tuneName": "Olivet",
        "lyrics": "\nPeace! What a precious sound!\nTell it the world around;\nChrist hath made peace!\nOur souls are brought to God\nBy His atoning blood,\nAnd crowned with every good;\nChrist hath made peace.\n\nLove was the spring of all,\nLove triumphed o'er our fall,\nThe love of God!\nMy soul, this love adore\nAnd praise for evermore;\nYea, sound from shore to shore\nThe love of God.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "228",
        "title": "Praise, praise ye the Name of Jehovah, our God;",
        "author": "Horatius Bonar (1845)",
        "meter": "P.M.",
        "tuneName": "Salvation",
        "lyrics": "\nPraise, praise ye the Name of Jehovah, our God;\nDeclare, O declare ye His glories abroad;\nProclaim ye His mercy from nation to nation\nTill the uttermost islands have heard His salvation.\n\nPraise, praise ye the Lamb who for sinners was slain,\nWho went down to the grave and ascended again;\nAnd who soon shall return, when these dark days are o'er,\nTo set up His kingdom in glory and power.\n\nThen the heavens, the earth, and the sea shall rejoice;\nThe fields and the forests shall lift the glad voice;\nThe sands of the desert shall flourish in green,\nAnd Lebanon's glory be shed o'er the scene.\n\nHer bridal attire and her festal array\nAll Nature shall wear on that glorious day;\nFor her King cometh down with His people to reign,\nAnd His presence shall bless her with Eden again.\n",
        "Chorus": "\nFor His love floweth on free and full as a river,\nAnd His mercy endureth for ever and ever.\n",
        "addedChorus": ""
    },
    {
        "number": "229",
        "title": "Praise the Lord, and leave to-morrow",
        "author": "William Sloan",
        "meter": "8.7.8.7.4.7.",
        "tuneName": "Corinth",
        "lyrics": "\nPraise the Lord, and leave to-morrow\nIn thy loving Father's hands;\nBurden not thyself with sorrow\nFor secure the promise stands.\nHe is faithful!\nLeave thy troubles in His hands.\n\nTrust to-day and leave to-morrow,\nEach day has enough of care;\nTherefore, whatsoe'er thy burden,\nGod will give thee strength to bear.\nHe is faithful!\nCast on Him thine every care.\n\nPray to-day and let to-morrow\nBring with it whate'er it may;\nHear thy loving Father promise\nStrength according to thy day.\nHe is faithful!\nTrust Him, therefore, come what may.\n\nWatch to-day, and leave to-morrow,\nFor to-morrow may not come;\nFor to-day thy loving Saviour\nMay appear to take thee home.\nHe is faithful!\nLook for Him, the coming One.\n\nWork to-day, and leave to-morrow;\nAll around there's urgent need;\nAll around there's sin and sorrow;\nBroadcast, daily sow thy seed.\nGod is faithful!\nHe shall bless thy work indeed.\n\nThus by trusting, watching, praying\nEach day, as our time rolls on,\nWe shall find the promised blessing,\nDaily strength till Jesus come.\nHe is faithful!\nHe will come to take us home.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "230",
        "title": "Praise thy Saviour, O my soul!",
        "author": "Anonymous",
        "meter": "7.7.7.7.",
        "tuneName": "Innocents",
        "lyrics": "\nPraise thy Saviour, O my soul!\nHe has drunk the bitter gall,\nPaid thy ransom, set thee free;\nPraise Him, praise Him cheerfully.\n\nO the wonders of His love!\nSee Him coming from above\nTo atone and die for thee;\nPraise Him, praise Him cheerfully.\n\nSee the waves and billows roll\nO'er His sinless, spotless soul;\nO my soul, it was for thee!\nPraise Him, praise Him cheerfully.\n\nYes, with joy we'll praise Him now\nTill with saints above we bow,\nAnd to all eternity\nPraise Him, praise Him cheerfully.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "231",
        "title": "Precious is the blood of Jesus",
        "author": "Gordon Furlong",
        "meter": "8.7.8.7.4.7.",
        "tuneName": "Anticipation",
        "lyrics": "\nPrecious is the blood of Jesus\nUnto sinners who believe;\nFrom the wrath of God it frees us,\nAnd salvation we receive:\nIt is finished!\nSounds with joy through earth and heaven.\n\nJesus now in heaven is seated,\nAnd by faith on Him we rest;\nSoon the Church will be completed,\nAnd the saints with Him be blest:\nGrace and glory\nIn our Saviour we receive.\n\nSoon will pass the night of sorrow,\nAnd the Lord in glory come;\nWe shall see Him on the morrow,\nAnd the Bride be welcomed home: Hallelujah!\nGlory, glory to the Lamb!\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "232",
        "title": "Praise the Lord, who died to save us",
        "author": "Thomas Kelly (1806)",
        "meter": "8.7.8.7.4.7.",
        "tuneName": "Neander",
        "lyrics": "\nPraise the Lord, who died to save us,\nPraise His ever gracious Name;\nPraise Him that He lives to bless us,\nNow and evermore the same:\nBlessed Saviour!\nWe would all Thy love proclaim.\n\nGrace it was, yea, grace abounding,\nBrought Thee down to save the lost;\nYe above, His throne surrounding,\nPraise Him, praise Him all His host:\nSaints! Adore Him!\nYe are they who owe Him most.\n\nWe, of all His hand created,\nObjects of such grace alone,\nBy eternal love elected,\nDestined now to share His throne,\nSing with wonder,\nSing of what our Lord hath done.\n\nPraise His Name, who died to save us;\n'Tis by Him His people live;\nAnd in Him the Father gave us\nAll that boundless love could give:\nLife eternal\nIn our Saviour we receive.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "233",
        "title": "Praise the Saviour, ye who know Him!",
        "author": "Thomas Kelly (1806)",
        "meter": "8.8.8.5.",
        "tuneName": "Orphrah",
        "lyrics": "\nPraise the Saviour, ye who know Him!\nWho can tell how much we owe Him?\nGladly let us render to Him\nAll we are and have.\n\nJesus is the Name that charms us,\nHe for conflict fits and arms us;\nNothing moves, and nothing harms us\nWhen we trust in Him.\n\nTrust in Him, ye saints, for ever;\nHe is faithful, changing never;\nNeither force nor guile can sever\nThose He loves from Him.\n\nKeep us, Lord, O keep us cleaving\nTo Thyself, and still believing,\nTill the hour of our receiving\nPromised joys in heaven.\n\nThen we shall be where we would be,\nThen we shall be what we should be,\nThat which is not now, nor could be,\nThen shall be our own.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "234",
        "title": "Prayer is the soul's sincere desire",
        "author": "James Montgomery (1818)",
        "meter": "C.M.",
        "tuneName": "Naomi",
        "lyrics": "\nPrayer is the soul's sincere desire,\nUttered or unexpressed,\nThe motion of a hidden fire\nThat trembles in the breast.\n\nPrayer is the burden of a sigh,\nThe falling of a tear,\nThe upward glancing of an eye\nWhen none but God is near.\n\nPrayer is the simplest form of speech\nThat infant lips can try;\nPrayer, the sublimest strains that reach\nThe Majesty on high.\n\nPrayer is the Christian's vital breath,\nThe Christian's native air;\nHis watchword at the gates of death:\nHe enters heaven with prayer.\n\nThe saints, in prayer, appear as one\nIn word and deed and mind,\nWhile with the Father and the Son\nSweet fellowship they find.\n\nO Thou by whom we come to God,\nThe Life, the Truth, the Way!\nThe path of prayer Thyself hast trod:\nLord, teach us how to pray!\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "235",
        "title": "Press forward and fear not!",
        "author": "Edward Wakefield",
        "meter": "11's",
        "tuneName": "Hanover",
        "lyrics": "\nPress forward and fear not!\nThe billows may roll,\nBut the power of Jesus\nTheir rage can control:\nThough waves rise in anger\nTheir tumult shall cease;\nOne word of His bidding\nShall hush them to peace.\n\nPress forward and fear not\nThough trial be near;\nThe Lord is our refuge,\nWhom, then, shall we fear?\nHis staff is our comfort,\nOur safeguard His rod;\nThen let us be steadfast\nAnd trust in our God.\n\nPress forward and fear not!\nBe strong in the Lord,\nIn the power of His promise,\nThe truth of His word;\nThrough the sea and the desert\nOur pathway may tend,\nBut He who hath saved us\nWill save to the end.\n\nPress forward and fear not!\nWe'll speed on our way;\nWhy should we e'er shrink\nFrom our path in dismay?\nWe tread but the way\nWhich our Leader has trod;\nThen let us press forward\nAnd trust in our God.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "236",
        "title": "\"Praise ye the Lord!\" again, again",
        "author": "Mary Bowly Peters",
        "meter": "C.M.",
        "tuneName": "Old Winchester",
        "lyrics": "\n\"Praise ye the Lord!\" again, again,\nThe Spirit strikes the chord;\nNor toucheth He our hearts in vain;\nWe praise, we praise the Lord.\n\n\"Rejoice in Him!\" again, again,\nThe Spirit speaks the word;\nAnd faith takes up the happy strain\nOur joy is in the Lord.\n\n\"Stand fast in Christ!\" ah! yet again\nHe teaches all the band;\nOur best endeavours are in vain,\nIn Christ alone we stand.\n\n\"Clean every whit!\" Thou saidst it, Lord;\nShall one suspicion lurk?\nThine, surely, is a faithful word,\nAnd Thine a finished work.\n\nFor ever be the glory given\nTo Thee, O Lamb of God!\nNo joy for us, in earth or heaven,\nWe owe not to Thy blood.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "237",
        "title": "Rejoice! rejoice! ye saints, rejoice!",
        "author": "Charles Russell Hurditch",
        "meter": "C.M.",
        "tuneName": "Old Winchester",
        "lyrics": "\nRejoice! rejoice! ye saints, rejoice!\nRejoice with one accord;\nRejoice with all your heart and voice,\nIn Christ the exalted Lord.\n\nRejoice! rejoice! lift up your head\nAnd praise the living God,\nThat for your souls the Saviour shed\nHis own most precious blood.\n\nRejoice! rejoice! in His sweet Name\nWith all the saints above;\nOur Jesus still abides the same,\nAnd changeless is His love.\n\nRejoice! rejoice! let praise abound\nBefore Jehovah's throne,\nFor dead ones raised, and lost ones found,\nAnd prodigals brought home.\n\nRejoice! rejoice! ye happy band\nOf pilgrims bound for heaven;\nFor mercies countless as the sand\nHave to your souls been given.\n\nRejoice! rejoice! the Lord shall come\nAccording to His word,\nAnd gather all His ransomed home,\n\"For ever with the Lord.\"\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "238",
        "title": "Rise, my soul! behold 'tis Jesus",
        "author": "Joseph Denham Smith",
        "meter": "8.7.8.7.",
        "tuneName": "Gotha (Albert)",
        "lyrics": "\nRise, my soul! behold 'tis Jesus,\nJesus fills Thy wond'ring eyes;\nSee Him now in glory seated,\nWhere thy sins no more can rise.\n\nThere, in righteousness transcendent,\nLo! He doth in heaven appear,\nShows the blood of His atonement\nAs thy title to be there.\n\nAll thy sins were laid upon Him,\nJesus bore them on the tree;\nGod who knew them, laid them on Him,\nAnd, believing, thou art free.\n\nGod now brings thee to His dwelling,\nSpreads for thee His feast divine,\nBids thee welcome, ever telling\nWhat a portion there is thine.\n\nIn that circle of God's favour,\nCircle of the Father's love,\nAll is rest, and rest for ever,\nAll is perfectness above.\n\nBlessed, glorious word \"forever!\"\nYea, \"forever!\" is the word;\nNothing can the ransomed sever,\nNought divide them from the Lord.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "239",
        "title": "Rise, my soul! thy God directs thee;",
        "author": "John Nelson Darby",
        "meter": "8.7.8.7.",
        "tuneName": "Old 42nd",
        "lyrics": "\nRise, my soul! thy God directs thee;\nStranger hands no more impede;\nPass thou on; His hand protects thee,\nStrength that has the captive freed.\n\nIs the wilderness before thee?\nDesert lands where drought abides?\nHeavenly springs shall there restore thee\nFresh from God's exhaustless tides.\n\nLight divine surrounds thy going;\nGod Himself shall mark thy way;\nSecret blessings, richly flowing,\nLead to everlasting day.\n\nIn the desert God will teach thee\nWhat the God that thou hast found;\nPatient, gracious, powerful, holy,\nAll His grace shall there abound.\n\nThough thy way be long and dreary,\nEagle strength He'll still renew;\nGarments fresh and foot unweary\nTell how God hath brought thee through.\n\nThere no stranger God shall meet thee;\nStranger thou in courts above!\nHe who to His rest shall greet thee\nGreets thee with a well-known love.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "240",
        "title": "Rejoice, ye saints, the time draws near",
        "author": "Anonymous (c.19)",
        "meter": "P.M.",
        "tuneName": "Rapture",
        "lyrics": "\nRejoice, ye saints, the time draws near\nWhen Christ will in the clouds appear\nAnd for His people call\n\nThe trumpet sounds! through earth and sky\nResounds the solemn midnight cry,\n\"Behold! The Bridegroom comes.\"\n\nThe Lord will come to claim His own,\nAnd on each faithful one a crown\nOf life He will bestow.\n\nAnd then with rapture infinite\nWe'll cast our crowns down at His feet,\nAnd crown Him King of kings,\n",
        "Chorus": "\nTrim your lamps and be ready,\nTrim you lamps and be ready,\nTrim your lamps and be ready\n--(Tune \"Trim your Lamps\" Chorus cont.)--\nFor the midnight cry.\nFor the midnight cry,\nFor the midnight cry,\nTrim your lamps and be ready,\nFor the midnight cry.\n",
        "addedChorus": ""
    },
    {
        "number": "241",
        "title": "Rise up and hasten!",
        "author": "Joseph Denham Smith",
        "meter": "P.M.",
        "tuneName": "Hasten",
        "lyrics": "\nRise up and hasten!\nMy soul, haste along!\nAnd speed on thy journey\nWith hope and with song;\nHome, home is nearing,\n'Tis coming into view;\nA little more of toiling,\nAnd then to earth adieu.\n\nCome then, come\nAnd raise a joyful song,\nYe children of the wilderness,\nOur time cannot be long;\nHome, home, home!\nO why should you delay?\nThe morn of heaven is dawning;\nWe're near the break of day.\n\nWhy should we linger\nWhen heaven lies before?\nEarth's fast receding\nAnd soon will be no more;\nIts joys and its treasures,\nWhich once here we knew,\nNow never more can charm us\nWith such a goal in view.\n\nLoved ones in Jesus,\nThey've passed on before;\nResting in glory\nThey weary are no more;\nDesert toils are ended,\nNothing now but joy,\nAnd praises loud ascending\nThere ever glad employ.\n\nNo condemnation!\nBlessed is the word;\nNo separation!\nFor ever with the Lord:\nBy His blood He bought them,\nCleansed their every stain;\nWith rapture now they praise Him,\nThe Lamb that once was slain.\n\nSoon we shall join them,\nSee Him with these eyes;\nSing hallelujahs\nTriumphant in the skies:\nHe will be with us,\nWho loved us long before,\nAnd Jesus, blessed Saviour,\nIs ours for evermore.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "242",
        "title": "\"Revive Thy work, O Lord!\"",
        "author": "Albert Midlane (1858)",
        "meter": "S.M.",
        "tuneName": "Silchester",
        "lyrics": "\n\"Revive Thy work, O Lord!\"\nThy mighty arm make bare;\nSpeak with the voice which wakes the dead,\nAnd make Thy people hear.\n\n\"Revive Thy work, O Lord!\"\nDisturb this sleep of death;\nQuicken the smould'ring embers, Lord,\nBy Thine almighty breath.\n\n\"Revive Thy work, O Lord!\"\nCreate soul-thirst for Thee;\nAnd hung'ring for the Bread of Life\nO may our spirits be!\n\n\"Revive Thy work, O Lord!\"\nGive power unto Thy Word;\nGrant that Thy blessed Gospel may\nIn living faith be heard.\n\n\"Revive Thy work, O Lord!\"\nAnd give refreshing showers;\nThe glory shall be all Thine own,\nThe blessing, Lord, be ours!\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "243",
        "title": "Safe in the arms of Jesus",
        "author": "Frances (Fanny) Jane Crosby (1868)",
        "meter": "7.6.7.6.D.",
        "tuneName": "Faith",
        "lyrics": "\nSafe in the arms of Jesus,\nSafe on His gentle breast,\nThere, by His love o'ershadowed,\nSweetly my soul shall rest.\nHark! 'tis the voice of angels\nBorne in a song to me,\nOver the fields of glory,\nOver the jasper sea.\n\nSafe in the arms of Jesus,\nSafe from corroding care,\nSafe from the world's temptations,\nSin cannot harm me there.\nFree from the blight of sorrow,\nFree from my doubts and fears;\nOnly a few more trials,\nOnly a few more tears.\n\nJesus, my heart's dear refuge!\nJesus has died for me;\nFirm on the Rock of Ages\nEver my trust shall be.\nHere let me wait with patience,\nWait till the night is o'er,\nWait till I see the morning\nBreak on the golden shore.\n",
        "Chorus": "\nSafe in the arms of Jesus,\nSafe on His gentle breast,\nThere, by His love o'ershadowed,\nSweetly my soul shall rest.\n",
        "addedChorus": ""
    },
    {
        "number": "244",
        "title": "Saviour, more than life to me",
        "author": "Frances (Fanny) Jane Crosby (1868)",
        "meter": "P.M.",
        "tuneName": "Myrrh",
        "lyrics": "\nSaviour, more than life to me\nI am clinging, clinging close to Thee;\nLet Thy precious blood applied,\nKeep me ever, ever near Thy side.\n\nThrough this changing world below,\nLead me gently, gently as I go;\nTrusting Thee I cannot stray,\nI can never, never lose my way.\n\nLet me love Thee more and more,\nTill this fleeting, fleeting life is o'er;\nTill my soul is lost in love\nIn a brighter, brighter world above.\n",
        "Chorus": "\nEvery day, every hour,\nLet me feel Thy cleansing power;\nMay Thy tender love to me\nBind me closer, closer, Lord, to Thee.\n",
        "addedChorus": ""
    },
    {
        "number": "245",
        "title": "Saviour, Thy Name I love!",
        "author": "James George Deck (1841)",
        "meter": "6.4.6.4.6.6.6.4.",
        "tuneName": "Worship",
        "lyrics": "\nSaviour, Thy Name I love!\nJesus, my Lord!\nAll other names above\nJesus, my Lord!\nO Thou art all to me!\nNothing to please I see,\nNothing apart from Thee,\nJesus, my Lord.\n\nThou blessed Son of God,\nJesus, my Lord!\nHast bought me with Thy blood,\nJesus, my Lord!\nO how great is Thy love,\nAll other loves above,\nLove that I daily prove,\nJesus, my Lord.\n\nWhen unto Thee I flee,\nJesus, my Lord!\nThou wilt my refuge be,\nJesus, my Lord!\nWhat need I now to fear?\nWhat earthly grief or care?\nSince Thou art ever near,\nJesus, my Lord.\n\nSoon Thou wilt come again,\nJesus, my Lord!\nI shall be happy then,\nJesus, my Lord!\nThen, Thine own face I'll see;\nThen I shall like Thee be;\nThen evermore with Thee\nJesus, my Lord.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "246",
        "title": "Salvation to our God!",
        "author": "Mary Bowly Peters",
        "meter": "6.6.8.4.D.",
        "tuneName": "Abraham",
        "lyrics": "\nSalvation to our God!\nSalvation to the Lamb!\nThe shedding of His precious blood\nOur only claim.\nOur God salvation gives,\nAnd through the Lamb it flows;\nOnce slain for us\u2014for us He lives,\nOur sole repose.\n\nThe Lamb once slain is seen\nOn God's eternal throne;\nAnd His redeemed are white and clean\nThrough Him alone.\nSalvation's joyful sound\nBursts from the blood-bought throng,\nAnd holy angels all around\nTake up the song.\n\nOur hearts are tuned for this,\nTheir songs our tongues employ;\nThe Lamb, the spring of all our bliss,\nAnd God our joy.\nSalvation to our God,\nThanksgiving, power, and might!\nAnd to the Lamb who shed His blood.\nOur life and light!\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "247",
        "title": "Sound the high praises of Jesus, the King!",
        "author": "John Charles Ryle",
        "meter": "P.M.",
        "tuneName": "Victory",
        "lyrics": "\nSound the high praises of Jesus, the King!\nHe came and He conquered\u2014His victory sing;\nSing, for the power of the tyrant is broken;\nThe triumph complete over death and the grave.\nVain is their boasting; Jehovah hath spoken,\nAnd Jesus proclaimed Himself mighty to save.\nSound the high praises of Jesus, the King!\nHe came and He conquered\u2014His victory sing.\n\nPraise to the Conqueror! Praise to the Lord!\nThe enemy quailed at the might of His word;\nTo heaven He ascends and unfolds the glad story,\nThe host of the blessed exult in His fame.\nIn love He looks down from the throne of His glory,\nAnd rescues the ruined who trust in His Name.\nSound the high praises of Jesus, the King!\nHe came and He conquered\u2014His victory sing.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "248",
        "title": "Simply trusting every day",
        "author": "Edgar Page Stites (1876)",
        "meter": "7.7.7.7.D.",
        "tuneName": "Trust",
        "lyrics": "\nSimply trusting every day,\nTrusting through a stormy way;\nEven when my faith is small,\nTrusting Jesus, that is all.\n\nBrightly doth His Spirit shine\nInto this poor heart of mine;\nWhile He leads I cannot fall,\nTrusting Jesus, that is all.\n\nSinging, if my way is clear,\nPraying, if the path is drear;\nIf in danger, for Him call;\nTrusting Jesus, that is all.\n\nTrusting as the moments fly,\nTrusting as the days go by;\nTrusting Him whate'er befall,\nTrusting Jesus, that is all.\n",
        "Chorus": "\nTrusting Him while life shall last,\nTrusting Him till earth is past,\nTill within the jasper wall;\nTrusting Jesus, that is all.\n",
        "addedChorus": ""
    },
    {
        "number": "249",
        "title": "Sovereign grace! o'er sin abounding",
        "author": "John Kent",
        "meter": "8.7.8.7.4.7.",
        "tuneName": "Neander",
        "lyrics": "\nSovereign grace! o'er sin abounding,\nRansomed souls, the tidings swell;\n'Tis a deep that knows no sounding;\nWho its breadth or length can tell?\nOn its glories\nLet my soul for ever dwell.\n\nWhat from Christ the soul can sever,\nBound by everlasting bands?\nOnce in Him, in Him for ever,\nThus the eternal covenant stands;\nNone shall pluck thee\nFrom the Strength of Israel's hands.\n\nHeirs of God, joint-heirs with Jesus\nLong ere time its race began;\nTo His Name eternal praises,\nO what wonders love hath done!\nOne with Jesus;\nBy eternal union one.\n\nOn such love, my soul, still ponder,\nLove so great, so rich, so free!\nSay, while lost in holy wonder,\nWhy, O Lord, such love to me?\nHallelujah!\nGrace shall reign eternally.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "250",
        "title": "Son of God, 'twas love that made Thee",
        "author": "Anonymous",
        "meter": "8.7.8.7.D.",
        "tuneName": "Saphir",
        "lyrics": "\nSon of God, 'twas love that made Thee\nDie, our ruined souls to save;\n'Twas our sins' vast load that laid Thee,\nLord of Life, within the grave;\nBut Thy glorious resurrection\nShowed Thee conqueror o'er the tomb;\nSo the saints by Thy protection\nThrough Thy work shall overcome.\n\nThou to heaven hast now ascended,\nEnt'ring there by Thine own blood;\nAll Thy work of suff'ring ended,\nFully wrought the will of God.\nFor Thy Church Thou still art caring,\nFor us pleading in Thy love;\nAnd our place of rest preparing\nIn the Father's house above.\n\nNow the Holy Ghost doth gather\nUnto God Thy people here;\nWe, as sons, cry, \"Abba, Father!\"\nHis great love excluding fear:\nWhat a debt of love we owe Thee,\nLove that we can ne'er express,\nSince we, through the Spirit, know Thee,\nChrist the Lord, our righteousness.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "251",
        "title": "Saviour, we remember Thee!",
        "author": "Samuel Trevor Francis",
        "meter": "7.7.7.6.",
        "tuneName": "Zacher",
        "lyrics": "\nSaviour, we remember Thee!\nThy deep woe and agony,\nAll Thy suffering on the tree:\nSaviour, we adore Thee.\n\nCalvary! O Calvary!\nMercy's vast unfathomed sea,\nLove, eternal love to me: Saviour, we adore Thee.\n\nDarkness hung around Thy head,\nWhen for sin Thy blood was shed,\nVictim in the sinner's stead:\nSaviour, we adore Thee.\n\nJesus, Lord, Thou now art risen!\nThou hast all our sins forgiven;\nHaste we to our home in heaven:\nSaviour, we adore Thee.\n\nSoon, with joyful, glad surprise,\nWe shall hear Thy word\u2014Arise!\nMounting upward to the skies:\nGlory, glory, glory!\n\nSaviour, we Thy love adore;\nWe will praise Thee more and more;\nSpread Thy Name from shore to shore\nSaviour, we adore Thee.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "252",
        "title": "Sweet feast of love divine!",
        "author": "Edward Denny (1839)",
        "meter": "S.M.",
        "tuneName": "Zurich",
        "lyrics": "\nSweet feast of love divine!\n'Tis grace that makes us free\nTo feed upon this bread and wine,\nIn memory, Lord of Thee.\n\nHere every welcome guest\nWaits, Lord, from Thee to learn\nThe secrets of Thy Father's breast,\nAnd all Thy grace discern.\n\nHere conscience ends its strife,\nAnd faith delights to prove\nThe sweetness of the Bread of Life,\nThe fullness of Thy love.\n\nThat blood that flowed for sin\nIn symbol here we see,\nAnd feel the blessed pledge within\nThat we are loved of Thee.\n\nO if this glimpse of love\nIs so divinely sweet,\nWhat will it be, O Lord, above,\nThy gladdening smile to meet!\n\nTo see Thee face to face,\nThy perfect likeness wear,\nAnd all Thy ways of wondrous grace\nThrough endless years declare.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "253",
        "title": "Sweet are the seasons when we wait",
        "author": "Thomas Kelly",
        "meter": "L.M.",
        "tuneName": "Melcombe",
        "lyrics": "\nSweet are the seasons when we wait\nTo hear what God our Lord will say,\nFor they who watch at Wisdom's gate\nAre never empty sent away.\n\nBehold us, Lord, a few of Thine\nWho hither come to seek Thy face;\nIn mercy on Thy people shine\nAnd let Thy presence fill the place.\n\nHow sweet, how blessed is the thought\nThat Thou dost hear Thy people's cries!\nAnd whether Thou dost give, or not,\n'Tis love that grants, and love denies.\n\nO teach us, Lord, to wait Thy will,\nTo be content with all Thou dost;\nFor us, Thy grace sufficient still,\nWith most supplied when needing most.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "254",
        "title": "Saviour, through the desert lead us!",
        "author": "Thomas Kelly",
        "meter": "8.7.8.7.4.7.",
        "tuneName": "Mannheim",
        "lyrics": "\nSaviour, through the desert lead us!\nWithout Thee we cannot go;\nThou from cruel chains hast freed us,\nThou hast laid the tyrant low;\nLet Thy presence\nCheer us all our journey through.\n\nWhat a price Thy love has bought us;\nSaviour, what a love is Thine!\nHitherto Thy power has brought us,\nPower and love in Thee combine:\nLord of Glory,\nEver on Thy household shine.\n\nThrough a desert, waste and cheerless,\nThough our destined journey lie,\nRendered by Thy presence fearless\nWe may every foe defy:\nNought shall move us\nWhile we see Thee, Saviour, nigh.\n\nWhen we halt, no track discovering,\nFearful lest we go astray,\nO'er our path Thy pillar hovering,\nFire by night, and cloud by day,\nShall direct us\nThat we may not miss our way.\n\nWhen we hunger Thou wilt feed us;\nManna shall our camp surround;\nFaint and thirsty, Thou wilt head us,\nStreams shall from the rock abound:\nHappy people!\nWhat a Saviour we have found!\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "255",
        "title": "Sun and Shield, O Lord, art Thou",
        "author": "Horatius Bonar (1845)",
        "meter": "7.6.7.6.7.7.",
        "tuneName": "Dix",
        "lyrics": "\nSun and Shield, O Lord, art Thou,\nSun and Shield for ever!\nNever wilt Thou cease to shine,\nCease to guard us, never:\nCheer our steps as on we go,\nCome between us and the foe.\n\nBread and Wine, O Lord, art Thou,\nWine and Bread for ever!\nNever wilt Thou cease to feed\nOr refresh us, never:\nFeed we still on bread divine,\nDrink we still this heavenly wine.\n\nLove and Life, O Lord, art Thou,\nLife and Love for ever!\nNe'er to quicken shalt Thou cease,\nOr to love us, never:\nAll of life and love we need\nIs in Thee, in Thee indeed.\n\nPeace and Joy, O Lord, art Thou,\nJoy and Peace for ever!\nJoy that fades not, changes not,\nPeace that leaves us never;\nJoy and peace we have in Thee,\nNow and through eternity.\n\nSong and Strength, O Lord, art Thou,\nStrength and Song for ever!\nStrength that never can decay,\nSong that ceaseth never:\nStill to us this strength and song\nThrough eternal days prolong.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "256",
        "title": "Sweet is the savour of His Name",
        "author": "Thomas Kelly",
        "meter": "L.M.",
        "tuneName": "Mainzer",
        "lyrics": "\nSweet is the savour of His Name\nWho suffered in His people's stead;\nHis portion here, reproach and shame:\nHe liveth now; He once was dead.\n\nHe once was dead; the very same\nWho sits on yonder throne above;\nWho bears in heaven the greatest Name,\nWhom angels serve, whom angels love.\n\nHe once was dead; the very same\nWho made the worlds\u2014a work of power,\nWho now upholds the mighty frame,\nAnd keeps it till the final hour.\n\nHe once was dead; but now He lives,\nHis glory fills all heaven above;\nIts blessedness to heaven He gives.\nThe fountain He of joy and love.\n\nHis people shall His triumph share,\nWith Him shall live, and with Him reign;\nIn heaven their joy is full, for there\nThey see the Lamb for sinners slain.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "257",
        "title": "Sweeter sounds than music knows",
        "author": "John Newton (1779)",
        "meter": "7.7.7.7.",
        "tuneName": "Innocents",
        "lyrics": "\nSweeter sounds than music knows\nCharm me in Immanuel's Name;\nAll her hopes my spirit owes\nTo His birth, His Cross, His shame.\n\nWhen He came, the angels sang,\n\"Glory be to God on high!\"\nLord, unloose my stammering tongue;\nWho should louder sing than I?\n\nDid the Lord a man become\nThat He might the law fulfil,\nBleed and suffer in my room;\nAnd canst thou, my tongue, be still?\n\nNo! I must my praises bring,\nThough they worthless are and weak,\nFor should I refuse to sing\nSure the very stones would speak.\n\nO my Saviour, Shield, and Sun,\nShepherd, Counsellor, and Friend!\nEvery precious name in one;\nI will love Thee without end.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "258",
        "title": "Sweet the moments, rich in blessing",
        "author": "James Allen tr/ad by William Walter Shirley (1761)",
        "meter": "8.7.8.7.",
        "tuneName": "Sharon",
        "lyrics": "\nSweet the moments, rich in blessing,\nWhich before the Cross we spend,\nLife, and health, and peace possessing\nFrom the sinner's dying Friend.\n\nHere we rest, in wonder viewing\nAll our sins on Jesus laid,\nAnd a full redemption flowing\nFrom the sacrifice He made.\n\nHere we find the dawn of heaven,\nWhile upon the Cross we gaze,\nSee our trespasses forgiven,\nAnd our songs of triumph raise.\n\nO that near the Cross abiding,\nWe may to the Saviour cleave!\nNought with Him our hearts dividing,\nAll for Him content to leave.\n\nMay we still, the Cross discerning,\nThere for peace and comfort go;\nThere new wonders daily learning,\nAll the depths of mercy know.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "259",
        "title": "Take the world, but give me Jesus",
        "author": "Frances (Fanny) Jane Crosby (1879)",
        "meter": "8.7.8.7.D.",
        "tuneName": "Nain",
        "lyrics": "\nTake the world, but give me Jesus,\nAll its joys are but a name;\nBut His love abideth ever,\nThrough eternal years the same.\n\nTake the world, but give me Jesus,\nSweetest comfort of my soul;\nWith my Saviour watching o,er me\nI can sing, though billows roll.\n\nTake the world, but give me Jesus,\nLet me see His constant smile;\nThen throughout my pilgrim journey\nLight will cheer me all the while.\n\nTake the world, but give me Jesus,\nIn His Cross my trust shall be,\nTill, with clearer, brighter vision,\nFace to face my Lord I see.\n",
        "Chorus": "\nO the height and depth of mercy!\nO the length and breadth of love!\nO the fullness of redemption,\nPledge of endless life above.\n",
        "addedChorus": ""
    },
    {
        "number": "260",
        "title": "The atoning work is done",
        "author": "Thomas Kelly (1806)",
        "meter": "6.6.6.6.8.8.",
        "tuneName": "St. John",
        "lyrics": "\nThe atoning work is done,\nThe Victim's blood is shed;\nAnd Jesus now has gone\nHis people's cause to plead.\nHe stands in heaven, their great High Priest,\nAnd bears their names upon His breast.\n\nHe sprinkled with His blood\nThe mercy-seat above;\nFor justice had withstood\nThe purposes of love:\nBut justice now withstands no more,\nAnd mercy yields its boundless store.\n\nNo temple made with hands\nHis place of service is;\nIn heaven itself He stands,\nA heavenly priesthood His:\nIn Him the shadows of the law\nAre all fulfilled, and now withdraw.\n\nAnd though awhile He be\nHid from the eyes of men,\nHis people look to see\nTheir great High Priest again:\nIn brightest glory He will come\nAnd take His waiting people home.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "261",
        "title": "The Cross! the Cross! the blood-stained Cross!",
        "author": "John Hart Stockton",
        "meter": "C.M.",
        "tuneName": "Joshua",
        "lyrics": "\nThe Cross! the Cross! the blood-stained Cross!\nThe Cross of Christ I see,\nIt tells me of that precious blood\nThat once was shed for me.\n\nThe wrath! the wrath! the awful wrath\nThat Jesus felt for me!\nWhen bearing my sin's heavy load\nHe died on Calvary.\n\nBut Jesus lives! the Saviour lives!\nIn heaven He pleads for me;\nAnd boldly I approach to God,\nHis blood my only plea.\n\nThe crown! the crown! the glorious crown!\nThe crown of victory!\nThe crown of life! it shall be mine\nWhen I the Saviour see.\n\nHe comes! He comes! the Saviour comes!\nWho bled and died for me;\nThen will I sing, with rapture sing,\nWhen gazing, Lord, on Thee.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "262",
        "title": "The cloudless day is nearing",
        "author": "C. A. H.",
        "meter": "7.6.7.6.D.",
        "tuneName": "Morning Light",
        "lyrics": "\nThe cloudless day is nearing\nWhen Thou, O Lord, wilt come,\nThy radiant beauty wearing,\nTo take Thy people home!\nBright hosts on hosts around Thee\nShall catch Thy living rays,\nAnd all who once have found Thee\nBreathe out new songs of praise.\n\nBut how shall I then know Thee\nAmid those hosts above?\nWhat tokens true will show me\nThe object of my love?\nThy glories, all excelling,\nIn pure effulgence shine;\nBut GLORY in Thee dwelling\nWill ne'er proclaim Thee mine.\n\nThy wounds, Thy wounds, Lord Jesus,\nThose deep, deep wounds will tell\nThe sacrifice that frees us\nFrom self, and death, and hell!\nThese link Thee once for ever\nWith all who own Thy grace;\nNo hand these bonds can sever,\nNo hand these scars efface,\n\nO Jesus! Lord most blessed,\nThou Lamb of God divine,\nThou standest forth confessed,\nI wondering, claim Thee mine.\nI worship and adore Thee,\nTransported with Thy love;\nProstrate myself before Thee\nAnd dwell in light above.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "263",
        "title": "The glory shines before me",
        "author": "Hannah Kilham Burlingham",
        "meter": "7.6.7.6.D.",
        "tuneName": "Ewing",
        "lyrics": "\nThe glory shines before me,\nI cannot linger here;\nThough clouds may darken o'er me\nMy Father's house is near:\nIf through this barren desert\nA little while I roam,\nThe glory shines before me,\nI am not far from home.\n\nBeyond the storms I'm going,\nBeyond this vale of tears,\nBeyond the floods o'erflowing,\nBeyond the changing years:\nI'm going to the better land.\nBy faith long since possessed:\nThe glory shines before me,\nFor this is not my rest.\n\nThe Lamb is there the glory!\nThe Lamb is there the light!\nAffliction's grasp but tore me\nFrom phantoms of the night:\nThe voice of Jesus calls me,\nMy race will soon be run;\nThe glory shines before me,\nThe prize will soon be won.\n\nThe glory shines before me,\nI know that all is well;\nMy Father's care is o'er me,\nHis praises I would tell:\nThe love of Christ constrains me,\nHis blood hath washed me white;\nWhere Jesus is in glory,\n'Tis home, and love, and light.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "264",
        "title": "The Cross! the Cross!",
        "author": "E. M. Miln",
        "meter": "P.M.",
        "tuneName": "Standard",
        "lyrics": "\nThe Cross! the Cross!\nThe Christian's only glory;\nI see the standard rise: (2x for Yarmouth)\nMarch on, march on,\nThe Cross of Christ before thee;\nThat Cross all hell defies.\n\nThe Cross! the Cross!\nRedemption's standard raising;\nI see the banner wave: (2x for Yarmouth)\nSing on, sing on,\nSalvation's Captain praising;\n'Tis Christ alone can save.\n\nThe Crown! the Crown!\nAh, who at last shall gain it?\nThat Cross a crown affords. (2x for Yarmouth)\nPress on, press on,\nWith courage to obtain it:\nThe battle is the Lord's.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "265",
        "title": "The countless multitude on high",
        "author": "Archibald Rutherford & R. Sandeman (1775)",
        "meter": "L.M.D.",
        "tuneName": "Redemption Ground",
        "lyrics": "\nThe countless multitude on high\nThat tune their songs to Jesus' Name,\nAll merit of their own deny,\nAnd Jesus' worth alone proclaim.\nFirm on the ground of sovereign grace,\nThey stand before Jehovah's throne;\nThe only song in that blest place\nIs \"Thou art worthy! Thou alone!\"\n\nWith spotless robes of purest white,\nAnd branches of triumphal palm,\nThey shout, with transports of delight,\nHeaven's ceaseless, universal psalm:\n\"Salvation's glory all be paid\nTo Him who sits upon the throne,\nAnd to the Lamb whose blood was shed;\nThou! Thou art worthy! Thou alone.\n\n\"For Thou wast slain, and in Thy blood\nThese robes were washed so spotless pure;\nThou mad'st us kings and priests to God,\nFor ever let Thy praise endure.\nLet us with joy adopt the strain\nWe soon shall sing for ever there:\n\"Worthy's the Lamb for sinners slain,\nWorthy alone the crown to wear!\"\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "266",
        "title": "The day of glory bearing",
        "author": "James George Deck (1841)",
        "meter": "7.6.7.6.D.",
        "tuneName": "Endsleiqh",
        "lyrics": "\nThe day of glory bearing\nIts brightness from afar;\nThe day of Thine appearing,\nOur \"Bright and Morning Star;\"\nWe hail, in hope to meet Thee,\nTriumphant in the sky,\nWhen every heart shall greet Thee\nWith songs of Victory.\n\nThou once our spotless Surety,\nDidst on Mount Calv'ry bleed,\nJehovah did afflict Thee\nAnd bruise Thee in our stead.\nTo Thee by grace united,\nWe joy in Thee alone;\nAnd now, by faith, delighted,\nBehold Thee on the throne.\n\nThere Thou art interceding\nFor all who on Thee rest,\nAnd weary hearts are learning\nTo lean upon Thy breast,\nTill Thou shalt come in glory\nThy ransomed Church to raise,\nTo Chant her joyful story\nIn songs of loudest praise.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "267",
        "title": "The Gospel of Thy grace",
        "author": "James George Deck (1841)",
        "meter": "P.M.",
        "tuneName": "Gospel of Thy Grace",
        "lyrics": "\nThe Gospel of Thy grace\nMy stubborn heart has won;\nFor God so loved the world\nHe gave His only Son,\n\nThe serpent \"lifted up\"\nCould life and healing give,\nSo Jesus on the Cross\nBids me to look and live.\n\n\"The soul that sinneth dies;\"\nMy awful doom I heard;\nI was for ever lost,\nBut for Thy gracious word.\n\n\"Not to condemn the world\"\nThe \"Man of Sorrows\" came,\nBut that the world might have\nSalvation through His Name.\n\n\"Lord, help my unbelief!\"\nGive me the peace of faith\nTo rest with child-like trust\nOn what Thy gospel saith.\n",
        "Chorus": "\nThat \"Whosoever will believe,\nShall everlasting life receive!\"\nShall everlasting life receive!\n",
        "addedChorus": ""
    },
    {
        "number": "268",
        "title": "The happy morn is come;",
        "author": "Thomas Haweis (1792)",
        "meter": "6.6.6.6.8.8.",
        "tuneName": "Darwall",
        "lyrics": "\nThe happy morn is come;\nTriumphant from the grave\nThe Saviour leaves the tomb,\nAlmighty now to save.\n\nWho now accuseth them\nFor whom the Surety died?\nOr who shall those condemn\nWhom God hath justified?\n\nChrist hath the ransom paid;\nThe glorious work is done;\nOn Him our help is laid,\nThe victory is won.\n\nHail! The triumphant Lord!\nThe Resurrection, Thou;\nHail! The incarnate Word!\nBefore the throne we bow.\n",
        "Chorus": "\nCaptivity is captive led\nSince Jesus liveth that was dead.\n",
        "addedChorus": ""
    },
    {
        "number": "269",
        "title": "The Head that once was crowned with thorns",
        "author": "Thomas Kelly (1820)",
        "meter": "C.M.",
        "tuneName": "St. Magnus",
        "lyrics": "\nThe Head that once was crowned with thorns\nIs crowned with glory now!\nA royal diadem adorns\nThe mighty Victor's brow.\n\nDelight of all who dwell above,\nThe joy of saints below;\nTo us still manifest Thy love\nThat we its depths may know.\n\nTo us Thy Cross, with all its shame,\nWith all its grace be given!\nThough earth disowns Thy lowly Name,\nAll worship it in heaven.\n\nWho suffer with Thee, Lord, below,\nShall reign with Thee above;\nThen let it be our joy to know\nThy way of peace and love.\n\nTo us Thy Cross is life and health,\nThough shame and death to Thee;\nOur present glory, joy and wealth,\nOur everlasting stay.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "270",
        "title": "The holiest now we enter",
        "author": "Mary Bowly Peters",
        "meter": "7.6.7.6.D.",
        "tuneName": "Missionary",
        "lyrics": "\nThe holiest now we enter\nIn perfect peace with God;\nRegaining our lost centre\nThrough Christ's atoning blood:\nThough great may be our dulness\nIn thought, and word, and deed,\nWe glory in the fullness\nOf Him who meets our need.\n\nMuch incense is ascending\nBefore the eternal throne;\nGod graciously is bending\nTo hear each feeble groan.\nTo all our prayers and praises\nChrist adds His sweet perfume,\nAnd love the censer raises\nTheir odours to consume.\n\nO God, we come with singing,\nBecause the great High Priest\nOur names to Thee is bringing,\nNor e'er forgets the least:\nFor us He wears the mitre\nWhere holiness shines bright;\nFor us His robes are whiter\nThan heaven's unsullied light.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "271",
        "title": "The Lamb of God to slaughter led",
        "author": "Robert Cleaver Chapman",
        "meter": "C.M.",
        "tuneName": "Evan",
        "lyrics": "\nThe Lamb of God to slaughter led,\nThe King of Glory see!\nThe crown of thorns upon His head,\nThey nail Him to the tree!\n\nThe Father gives His only Son;\nThe Lord of Glory dies\nFor us, the guilty and undone,\nA spotless Sacrifice.\n\nThy Name is holy, O our God!\nBefore Thy throne we bow;\nThy bosom is Thy saints' abode,\nWe call Thee Father now.\n\nEnthroned with Thee now sits the Lord,\nAnd in Thy bosom dwells;\nJustice, that smote Him with the sword,\nOur perfect pardon seals.\n\nEternal death was once our doom;\nNow death has lost its sting;\nWe rose with Jesus from the tomb\nJehovah's love to sing.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "272",
        "title": "The Lord Himself shall come",
        "author": "James Montgomery & John Russell Darbyshire",
        "meter": "S.M.D",
        "tuneName": "Nearer Home",
        "lyrics": "\nThe Lord Himself shall come\nAnd shout the quickening word;\nThousands shall answer from the tomb,\n\"For ever with the Lord.\"\n\nThat resurrection word,\nThat shout of victory,\nResound, \"For ever with the Lord!\"\nAmen, so let it be!\n\nThen upward as we fly,\nThat resurrection word\nShall be our shout of victory,\n\"For ever with the Lord.\"\n\nHow shall I meet those eyes?\nMine on Himself I cast,\nAnd own myself the Saviour's prize;\nMercy from first to last.\n",
        "Chorus": "\n\"Knowing as I am known!\"\nHow shall I love that word?\nHow oft repeat before the throne,\n\"For ever with the Lord.\"\n",
        "addedChorus": ""
    },
    {
        "number": "273",
        "title": "The God of Abraham praise",
        "author": "Daniel ben Judah tr/ad by Thomas Olivers (c.14)",
        "meter": "6.6.8.4.D.",
        "tuneName": "Leoni",
        "lyrics": "\nThe God of Abraham praise,\nWho reigns enthroned above,\nAncient of everlasting days,\nAnd God of love.\nJehovah, great I AM!\nBy earth and heaven confessed,\nI bow and bless the sacred Name,\nFor ever blessed.\n\nThe God of Heaven praise,\nAt whose supreme command\nFrom earth I rise, and seek my joys\nAt His right hand.\nHe calls me to forsake\nEarth's wisdom, fame, and power,\nAnd Him my only portion make,\nMy shield and tower.\n\nThe God of Abram praise,\nWhose all-sufficient grace\nShall guide me all my pilgrim days,\nIn all my ways.\nHe calls a worm His friend,\nHe calls Himself my God;\nAnd He shall save me to the end\nThrough Jesus' blood.\n\nHe by Himself hath sworn,\nI on His oath depend,\nI shall, on eagle-wings upborne,\nTo heaven ascend:\nI shall behold His face,\nI shall His power adore,\nAnd sing the wonders of His grace\nFor evermore.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "274",
        "title": "There is a fountain filled with blood",
        "author": "William Cowper & Unknown (1771)",
        "meter": "C.M.",
        "tuneName": "Evan",
        "lyrics": "\nThere is a fountain filled with blood\nDrawn from Immanuel's veins,\nAnd sinners plunged beneath that flood\nLose all their guilty stains.\n\nThe dying thief rejoiced to see\nThat fountain in his day;\nAnd there have I, as vile as he,\nWashed all my sins away.\n\nDear dying Lamb! Thy precious blood\nShall never lose its power\nTill all the ransomed Church of God\nBe saved, to sin no more.\n\nE'er since, by faith, I saw the stream\nThy wounds supplied for me,\nRedeeming love has been my theme,\nAnd shall for ever be.\n\nSoon, in a nobler, sweeter song,\nI'll sing Thy power to save,\nAnd with the heavenly, blood-bought throng\nMy palm of victory wave.\n\nLord, I believe Thou hast prepared,\nUnworthy though I be,\nFor me a blood-bought, free reward,\nA golden harp for me.\n\n'Tis strung and tuned for endless years,\nAnd formed by power divine,\nTo sound in God the Father's ears\nNo other Name than Thine.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "275",
        "title": "The Lord is risen indeed!",
        "author": "Thomas Kelly (1802)",
        "meter": "S.M.",
        "tuneName": "Silchester",
        "lyrics": "\nThe Lord is risen indeed!\nThen justice asks no more;\nMercy and truth are now agreed,\nWhich stood opposed before.\n\nThe Lord is risen indeed!\nThen all His works performed;\nThe captive Surety now is freed,\nAnd death, our foe, disarmed.\n\nThe Lord is risen indeed!\nHe lives to die no more;\nHe lives, His people's cause to plead,\nWhose curse and shame He bore.\n\nThe Lord is risen indeed!\nAnd hell has lost its prey;\nAnd with Him all the ransomed seed\nShall reign in endless day.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "276",
        "title": "The Lord of Glory! Who is He?",
        "author": "Robert Cleaver Chapman",
        "meter": "8.7.8.8.7.",
        "tuneName": "Luther's Hymn",
        "lyrics": "\nThe Lord of Glory! Who is He?\nWho is the King of Glory?\nOnly the Son of God can be\nThe Christ, the King of Glory:\nConsider all His wounds, and see\nHow Jesus' death upon the tree\nProclaims Him King of Glory.\n\nAbove all heavens, at God's right hand,\nNow sits the King of Glory;\nThe angels, by His favour, stand\nBefore the throne of Glory;\nSwiftly they fly at His command\nTo guard His own of every land,\nTo keep the heirs of glory.\n\nDeath and the grave confess the Lamb\nTo be the King of Glory;\nThe powers of darkness dread His Name,\nCreation shows His glory.\nHe said: \"E'er Abram was, I am;\"\nJesus is evermore the same,\nThe Almighty King of Glory.\n\nThrice happy who in Him believe,\nThey soon will share His glory;\nBorn of His Spirit, they receive;\nHis Sacred pledge of glory;\nTaught by His Cross, for sin they grieve,\nHe calls them brethren, and they cleave\nTo Him, their hope of glory.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "277",
        "title": "The Lord is risen: now death's dark judgment flood",
        "author": "William Paton MacKay",
        "meter": "10.10.10.10.",
        "tuneName": "Troyte's Chant",
        "lyrics": "\nThe Lord is risen: now death's dark judgment flood\nIs passed in Him who bought us with His blood.\nThe Lord is risen: we stand beyond the doom\nOf all our sin, through Jesus' empty tomb.\n\nThe Lord is risen: with Him we also rose,\nAnd in His grave see all our vanquished foes.\nThe Lord is risen: beyond the judgment land\nIn Him, in resurrection-life, we stand.\n\nThe Lord is risen: we're now redeemed to God\nAnd tread the desert which His feet have trod.\nThe Lord is risen: the sanctuary's our place\nWhere now we dwell before the Father's face.\n\nThe Lord is risen: the Lord is gone before;\nWe long to see Him and to sin no more!\nThe Lord is risen: our trumpet shout shall be,\n\"Thou hast prevailed! Thy people, Lord, are free!\"\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "278",
        "title": "The night is wearing fast away",
        "author": "Mary Jane Hoare",
        "meter": "8.7.8.7.D.",
        "tuneName": "I've Found a Friend",
        "lyrics": "\nThe night is wearing fast away,\nThe glorious day is dawning,\nWhen Christ shall all His grace display\nThe fair millennial morning.\nGloomy and dark the night hath been,\nAnd long the way, and dreary;\nAnd sad the weeping saints are seen,\nAnd faint, and worn, and weary.\n\nYe mourning pilgrims, dry your tears,\nAnd hush each sigh of sorrow;\nThe light of that bright morn appears,\nThe long Sabbatic morrow.\nLift up your heads! Behold from far\nA flood of splendour streaming!\nIt is the bright and Morning Star\nIn living lustre beaming.\n\nAnd see that star-like host around\nOf angel bands attending;\nHark! hark! the trumpet's gladdening sound,\n'Mid shouts triumphant blending.\nHe comes! The Bridegroom promised long;\nGo forth with joy to meet Him,\nAnd raise the new and nuptial song,\nIn cheering strains to greet Him.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "279",
        "title": "There is a fold whence none can stray",
        "author": "John East",
        "meter": "C.M.",
        "tuneName": "Lynnwood",
        "lyrics": "\nThere is a fold whence none can stray,\nAnd pastures ever green,\nWhere sultry sun, or stormy day,\nOr night is never seen.\n\nThere is a Shepherd living there,\nThe Firstborn from the dead,\nWho tends with sweet, unwearied\ncare The flock for which He bled.\n\nThere congregate the sons of light,\nFair as the morning sky,\nAnd taste of infinite delight\nBeneath their Saviour's eye.\n\nTheir joy bursts forth in strains of love\nIn one harmonious song,\nAnd through the heavenly courts above\nThe echoes roll along.\n\nO may our faith take up that sound\nThough toiling here below!\n'Midst trials may our joys abound,\nAnd songs amidst our woe.\n\nUntil we reach that happy shore\nAnd join to swell their strain,\nAnd from our God go out no more\nAnd never weep again.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "280",
        "title": "The Saviour lives, no more to die;",
        "author": "Samuel Medley",
        "meter": "L.M.",
        "tuneName": "Mainzer",
        "lyrics": "\nThe Saviour lives, no more to die;\nHe lives our Head, enthroned on high;\nHe lives triumphant o'er the grave;\nHe lives eternally to save.\n\nHe lives to still His people's fears;\nHe lives to wipe away their tears;\nHe lives their mansions to prepare;\nHe lives to bring them safely there.\n\nThe chief of sinners He receives;\nHis saints He loves, and never leaves;\nHe'll guard us safe from every ill,\nAnd all His promises fulfil.\n\nThen let our souls in Him rejoice\nAnd sing His praise with cheerful voice;\nOur doubts and fears for ever gone,\nFor Christ is on the Father's throne.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "281",
        "title": "The sorrows of the daily life",
        "author": "Anonymous",
        "meter": "L.M.",
        "tuneName": "Mason",
        "lyrics": "\nThe sorrows of the daily life,\nThe shadows o'er my path which fall,\nToo oft obscure the glory's light\nUntil I rise above them all.\n\nUntil upon the mountain height\nI stand, my God, with Thee alone,\nBathed in the fullest, clearest light,\nThe glory that surrounds the throne.\n\nCalm in Thy secret presence, Lord,\nI rest this weary soul of mine;\nFeed on the fullness of Thy word,\nAnd die to all the things of time.\n\nAlone with Thee, O Master, where\nThe light of earthly glory dies,\nMisunderstood by all, I dare\nTo do what Thine own heart will prize.\n\nSuch be my path through life down here,\nOne long, close, lonely walk with Thee,\nUntil past every doubt and fear,\nThy face in light above I see.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "282",
        "title": "The love that Jesus had for me",
        "author": "Jane (Jonathan? --hymntime.com) E. Hall",
        "meter": "P.M.",
        "tuneName": "Love",
        "lyrics": "\nThe love that Jesus had for me,\nTo suffer on the cruel tree\nThat I a ransomed soul might be,\nIs more than tongue can tell!\n\nThe many sorrows that He bore,\nAnd O the crown of thorns He wore,\nThat I might live for evermore,\nIs more than tongue can tell!\n\nThe peace I have in Him, my Lord,\nWho pleads before the throne of God\nThe merit of His precious blood,\nIs more than tongue can tell!\n\nThe joy that comes when He is near,\nThe rest He gives, so free from fear,\nThe Hope in Him, so bright and clear,\nIs more than tongue can tell.\n",
        "Chorus": "\nHis love is more than tongue can tell!\nHis love is more than tongue can tell!\nThe love that Jesus had for me\nIs more than tongue can tell!\n",
        "addedChorus": ""
    },
    {
        "number": "283",
        "title": "The veil is rent: Lo! Jesus stands",
        "author": "James George Deck (1841)",
        "meter": "C.M.",
        "tuneName": "St. Peter",
        "lyrics": "\nThe veil is rent: Lo! Jesus stands\nBefore the throne of grace;\nAnd clouds of incense from His hands\nFill all that glorious place.\n\nHis precious blood is sprinkled there,\nBefore and on the throne;\nAnd His own wounds in heaven declare\nHis work on earth is done.\n\n\"'Tis finished!\" on the Cross He said,\nIn agonies and blood;\n'Tis finished! Now He lives to plead\nBefore the face of God.\n\n'Tis finished! Here our souls can rest,\nHis work can never fail;\nBy Him, our Sacrifice and Priest,\nWe enter through the veil.\n\nWithin the holiest of all,\nCleansed by His precious blood,\nBefore Thy throne Thy children fall,\nAnd worship Thee, our God.\n\nBoldly our heart and voice we raise,\nHis Name, His blood, our plea;\nAssured our prayers and songs of praise\nAscend by Him to Thee.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "284",
        "title": "The night is far spent, the day is at hand;",
        "author": "Thomas Kelly (1836)",
        "meter": "P.M.",
        "tuneName": "Hanover",
        "lyrics": "\nThe night is far spent, the day is at hand;\nAlready the dawn may be seen in the sky;\nRejoice then, ye saints, 'tis your Lord's own command;\nRejoice, for the coming of Jesus draws nigh.\n\nWhat a day will that be when the Saviour appears!\nHow welcome to Those who have shared in His Cross!\nA crown incorruptible then will be theirs,\nA rich compensation for suff'ring and loss.\n\nWhat is loss in this world when compared to that day,\nTo the glory that then will from heaven be revealed;\n\"The Saviour is coming,\" His people may say,\n\"The Lord whom we look for, our Sun and our Shield.\"\n\nO pardon us, Lord! that our love to Thy Name\nIs so faint, with so much our affections to move;\nOur deadness should fill us with grief and with shame!\nSo much to be loved, and so little to love.\n\nO kindle within us a holy desire\nLike that which was found in Thy people of old!\nWho felt all Thy love, and whose hearts were on fire\nWhile they waited impatient Thy face to behold.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "285",
        "title": "There is a Name I love to hear",
        "author": "Frederick Whitfield (\u00a91855)",
        "meter": "C.M.",
        "tuneName": "Belmont",
        "lyrics": "\nThere is a Name I love to hear,\nI love to speak its worth;\nIt sounds like music in mine ear,\nThe sweetest Name on earth.\n\nIt tells me of a Saviour's love\nWho died to set me free;\nIt tells me of His precious blood,\nThe sinner's perfect plea.\n\nIt tells me of a Father's smile\nBeaming upon His child;\nIt cheers me through this \"little while,\"\nThrough desert, waste, and wild.\n\nIt bids my trembling soul rejoice,\nIt dries each rising tear;\nIt tells me, in a \"still, small voice\"\nTo trust and never fear.\n\nJesus! The Name I love so well,\nThe Name I love to hear;\nNo saint on earth its worth can tell,\nNo heart conceive how dear.\n\nThis Name shall shed its fragrance still\nAlong life's thorny road,\nShall sweetly smooth the rugged hill\nThat leads me up to God.\n\nAnd there, with all the blood-bought throng,\nFrom sin and sorrow free,\nI'll sing the new, eternal song\nOf Jesus love to me.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "286",
        "title": "The wanderer no more will roam",
        "author": "Mary Jane Deck Walker",
        "meter": "8.8.8.6.",
        "tuneName": "Content",
        "lyrics": "\nThe wanderer no more will roam,\nThe lost one to the fold hath come,\nThe prodigal is welcomed home,\nO Lamb of God, in Thee.\n\nThough clad in rags, by sin defiled,\nThe Father hath embraced His child;\nAnd I am pardoned, reconciled,\nO Lamb of God, in Thee.\n\nIt is the Father's joy to bless,\nHis love provides for me a dress,\nA robe of spotless righteousness,\nO Lamb of God in Thee.\n\nNow shall my famished soul be fed,\nA feast of love for me is spread,\nI feed upon the children's bread,\nO Lamb of God, in Thee.\n\nYea, in the fullness of His grace\nHe puts me in the children's place,\nWhere I may gaze upon His face,\nO Lamb of God, in Thee.\n\nI cannot half His love express,\nYet, Lord, with joy my lips confess,\nThis blessed portion I possess,\nO Lamb of God, in Thee.\n\nAnd when I in Thy likeness shine,\nThe glory and the praise be Thine,\nThat everlasting joy is mine,\nO Lamb of God, in Thee.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "287",
        "title": "Thy Name we bless, Lord Jesus!",
        "author": "Samuel Prideaux Tregelles",
        "meter": "7.7.8.7.D.",
        "tuneName": "Zoan II",
        "lyrics": "\nThy Name we bless, Lord Jesus!\nThat Name all names excelling:\nHow great Thy love, all praise above,\nShould every tongue be telling.\nThe Father's loving-kindness\nIn giving Thee was shown us;\nNow by Thy blood-redeemed to God,\nAs children He doth own us.\n\nFrom that eternal glory\nThou hadst with God the Father,\nHe gave His Son, that He in one\nHis children all might gather.\nOur sins were all laid on Thee,\nGod's wrath Thou hast endured;\nIt was for us Thou suffer'dst thus,\nAnd hast our peace secured.\n\nThou from the dead wast raised,\nAnd from all condemnation\nThe Church is free, as risen in Thee,\nHead of the new creation!\nOn high Thou hast ascended\nTo God's right hand in heaven;\nThe Lamb once slain, alive again,\nTo Thee all power is given.\n\nThou hast bestowed the earnest\nOf that we shall inherit;\nTill Thou shalt come to take us home\nWe're sealed by God the Spirit.\nWe wait for Thine appearing,\nWhen we shall know more fully\nThe grace divine that made us Thine,\nThou Lamb of God most holy.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "288",
        "title": "Thou art coming, O our Saviour!",
        "author": "Frances Ridley Havergal",
        "meter": "8.7.8.7.D.",
        "tuneName": "Thou art Coming",
        "lyrics": "\nThou art coming, O our Saviour!\nComing, God's anointed King!\nEvery tongue Thy Name confessing,\nWell may we rejoice and sing.\nThou art coming! Rays of glory,\nThrough the veil Thy death has rent,\nGladden now our pilgrim pathway,\nGlory from Thy presence sent.\n\nThou art coming! Not a shadow,\nNot a mist, and not a tear,\nNot a sin, and not a sorrow\nOn that sunrise grand and clear:\nThou art coming! Blessed Saviour,\nNothing else seems worth a thought;\nO how marvelous the glory,\nAnd the bliss Thy pain hath bought.\n\nThou art coming! We are waiting\nWith a \"hope\" that cannot fail,\nAsking not the day or hour,\nAnchored safe within the veil:\nThou are coming! At Thy table\nWe are witnesses for this,\nAs we meet Thee in communion,\nEarnest of our coming bliss.\n",
        "Chorus": "\nThou art coming! Thou art coming!\nWe shall meet Thee on Thy way;\nThou art coming! We shall see Thee,\nAnd be like Thee on that day:\nThou art coming! Thou art coming!\nJesus, our beloved Lord!\nO the joy to see Thee reigning,\nWorshipped, glorified, adored.\n",
        "addedChorus": ""
    },
    {
        "number": "289",
        "title": "Through Thy precious body broken",
        "author": "Elizabeth Dark",
        "meter": "8.4.8.8.8.4.",
        "tuneName": "Tenderness",
        "lyrics": "\nThrough Thy precious body broken\nInside the veil;\nO what words to sinners spoken\nInside the veil!\nPrecious as the blood that bought us,\nPerfect as the love that sought us,\nHoly as the Lamb that brought us\nInside the veil.\n\nWhen we see Thy love unshaken\nOutside the camp;\nScorned by man, by God forsaken\nOutside the camp;\nThy loved Cross alone can charm us,\nShame need now no more alarm us,\nGlad we follow, nought can harm us\nOutside the camp.\n\nLamb of God, through Thee we enter\nInside the veil;\nCleansed by Thee, we boldly venture\nInside the veil:\nNot a stain; a new creation;\nOurs is such a full salvation;\nLow we bow in adoration\nInside the veil.\n\nUnto Thee, the homeless stranger\nOutside the camp,\nForth we hasten, fear no danger\nOutside the camp.\nThy reproach far richer treasure\nThan all Egypt's boasted pleasure:\nDrawn by love that knows no measure,\nOutside the camp.\n\nSoon Thy saints shall all be gathered\nInside the veil:\nAll at home, no more be scattered,\nInside the veil.\nNought from Thee our hearts shall sever;\nWe shall see Thee, grieve Thee never;\nPraise the Lamb! shall sound for ever\nInside the veil.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "290",
        "title": "Thou hidden love of God, Whose height",
        "author": "Gerhard Tersteegen tr/ad by John Wesley (1729)",
        "meter": "8.8.8.8.8.8.",
        "tuneName": "Giessen",
        "lyrics": "\nThou hidden love of God, Whose height,\nWhose depth unfathomed no man knows,\nI see from far Thy beauteous light,\nAnd inly sigh for Thy repose:\nMy heart is pained, nor can it be\nAt rest till it finds rest in Thee.\n\nIs there a thing beneath the sun\nThat strives with Thee my heart to share?\nO tear it thence, and reign alone\nThe Lord of every motion there!\nThen shall my heart from earth be free,\nWhen it has found repose in Thee.\n\nO hide this self from me that I\nNo more, but Christ in me may live!\nMy vile affections mortify,\nNor let one darling sin survive:\nIn all things nothing may I see,\nNothing desire, or seek, but Thee.\n\nEach moment calls from earth away\nMy heart which lowly waits Thy call;\nSpeak to my inmost soul and say,\n\"I am thy Life, thy God, thy All!\"\nTo know Thy power, to hear Thy voice,\nTo feel Thy love, be all my choice.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "291",
        "title": "Thy broken body, gracious Lord",
        "author": "Samuel Prideaux Tregelles",
        "meter": "L.M.",
        "tuneName": "Rockingham",
        "lyrics": "\nThy broken body, gracious Lord,\nIs shadowed by this broken bread:\nThe wine, which in this cup is poured,\nPoints to the blood which Thou hast shed.\n\nAnd while we meet together thus\nWe show that we are one in Thee;\nThy precious blood was shed for us,\nThy death, O Lord, has set us free.\n\nBrethren! In Thee, in union sweet,\nFor ever be Thy grace adored!\n'Tis in Thy Name that now we meet,\nAnd know Thou'rt with us, gracious Lord.\n\nWe have one hope that Thou wilt come;\nThee in the air we wait to see,\nWhen Thou wilt take Thy people home,\nAnd we shall ever reign with Thee.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "292",
        "title": "Though often here we're weary",
        "author": "Anonymous",
        "meter": "7.6.7.6.D.",
        "tuneName": "Salvatori",
        "lyrics": "\nThough often here we're weary\nThere is sweet rest above;\nA rest that is eternal\nWhere all is peace and love:\nO then let us press forward\nThat glorious rest to gain!\nWe'll soon be free from sorrow,\nFrom toil, and care, and pain.\n\nOur Saviour will be with us\nE'en to our journey's end,\nIn every sore affliction\nHis present help to lend.\nHe never will grow weary,\nThough often we request;\nHe'll give us grace to conquer,\nAnd take us home to rest.\n\nAll glory to the Father\nWho gives us every good;\nAnd glory be to Jesus\nWho bought us with His blood;\nAnd glory to the Spirit\nWho keeps us to the end:\nTo the Triune God be glory,\nThe sinner's only Friend.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "293",
        "title": "Through the dark path of sorrow",
        "author": "Mary Carter",
        "meter": "P.M.",
        "tuneName": "Security",
        "lyrics": "\nThrough the dark path of sorrow\nWhich Jesus has trod,\nThy feeble ones wander,\nOur Father, our God:\nAnd the thick clouds that gather\nBut turn us away\nFrom the wast, howling desert,\nWhere He could not stay.\n\nFrom the cold world that knoweth\nAnd loveth its own,\nWhere Jesus was hated,\nRejected, unknown,\nWe will cheerfully hasten,\nRejoicing to be\nCounted worthy to suffer,\nLord Jesus, for Thee.\n\nIn the fierce hour that trieth\nThe children of men,\nIn the hour of temptation,\nO succour us then!\nLet the weak and the feeble\nFind under Thine arm,\nIn the blast of the terrible,\nShelter from harm.\n\nWhen the proud are exalted\nAnd seated on high,\nWhen trouble and desperate\nSorrow draw nigh,\nWhen the hearts of all others\nAre failing for fear,\nThen we lift up our heads,\nFor the glory is near.\n\nO hasten Thy coming!\nWe long for the day;\nBright Star of the morning\nNo longer delay;\nLet the groaning creation\nFrom sorrow be free,\nAnd the purchased possession\nBe gathered to Thee.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "294",
        "title": "Thou, my everlasting portion!",
        "author": "Frances (Fanny) Jane Crosby (1874)",
        "meter": "P.M.",
        "tuneName": "Close to Thee",
        "lyrics": "\nThou, my everlasting portion!\nMore than friend or life to me,\nAll along my pilgrim journey,\nSaviour, let me walk with Thee.\nClose to Thee, close to Thee,\nClose to Thee, close to Thee,\nAll along my pilgrim journey,\nSaviour, let me walk with Thee.\n\nNot for ease or worldly pleasure,\nNor for fame my prayer shall be,\nGladly will I toil and suffer,\nOnly let me walk with Thee.\nClose to Thee, close to Thee,\nClose to Thee, close to Thee,\nGladly will I toil and suffer,\nOnly let me walk with Thee.\n\nLead me through the vale of shadows,\nBear me o'er life's fitful sea;\nThen the gate of life eternal\nI shall enter, Lord, with Thee,\nClose to Thee, close to Thee,\nClose to Thee, close to Thee,\nThen the gate of life eternal\nI shall enter, Lord, with Thee.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "295",
        "title": "Thy love we own, Lord Jesus;",
        "author": "W. Yerbury",
        "meter": "7.7.8.7.D.",
        "tuneName": "Ezra",
        "lyrics": "\nThy love we own, Lord Jesus;\nIn service unremitting,\nWithin the veil Thou dost prevail,\nEach soul for worship fitting.\nEncompassed here with failure,\nEach earthly refuge fails us;\nWithout, within, beset with sin,\nThy Name alone avails us.\n\nThy love we own, Lord Jesus!\nFor though Thy toils are ended,\nThy tender heart doth take its part\nWith those Thy grace befriended.\nThy sympathy, most precious!\nThou succourest in sorrow,\nAnd bidst us cheer while pilgrims here,\nAnd haste the hopeful morrow.\n\nThy love we own, Lord Jesus!\nThy way is traced before Thee;\nThou wilt descend, and we ascend,\nTo meet in heavenly glory.\nSoon shall the blissful morning\nCall forth Thy saints to meet Thee,\nOnly our Lord, alone adored,\nWith gladness then we'll greet Thee.\n\nThy love we own, Lord Jesus!\nAnd wait to see Thy glory,\nTo know as known, and fully own\nThy perfect grace before Thee:\nWe plead Thy parting promise,\nCome, Saviour, to release us;\nThen endless praise our lips shall raise\nFor love like Thine, Lord Jesus.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "296",
        "title": "Through the love of God our Saviour",
        "author": "Mary Bowly Peters (1847)",
        "meter": "8.4.8.8.8.4.",
        "tuneName": "Evensong",
        "lyrics": "\nThrough the love of God our Saviour\nAll will be well.\nFree and changeless is His favour;\nAll, all is well.\nPrecious is the blood that healed us,\nPerfect is the grace that sealed us,\nStrong the hand stretched forth to shield us,\nAll must be well.\n\nThough we pass through tribulation\nAll will be well.\nOurs is such a full salvation;\nAll, all is well.\nHappy, still in God confiding,\nFruitful, if in Christ abiding,\nHoly, through the Spirit's guiding,\nAll must be well.\n\nWe expect a bright to-morrow;\nAll will be well.\nFaith can sing through days of sorrow,\nAll, all is well.\nOn our Father's love relying,\nChrist our every need supplying,\nWhether living now, or dying,\nAll must be well.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "297",
        "title": "Twas love that sought Gethsemane",
        "author": "William Dickinson",
        "meter": "8.7.8.7.",
        "tuneName": "Ezra",
        "lyrics": "\nTwas love that sought Gethsemane\nOr Judas ne'er had found Thee;\n'Twas love that nailed Thee to the tree\nOr iron ne'er had bound Thee.\n\n'Twas love that lived, 'twas love that died,\nWith endless life to bless us;\nWell hast Thou won Thy blood-bought Bride,\nWorthy art Thou, Lord Jesus!\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "298",
        "title": "This world is a wilderness wide",
        "author": "John Nelson Darby",
        "meter": "8.9.9.9.",
        "tuneName": "David",
        "lyrics": "\nThis world is a wilderness wide,\nI have nothing to seek or to choose;\nI've no thought in the waste to abide;\nI have nought to regret nor to lose.\n\nThe path where my Saviour is gone\nHas led up to His Father and God,\nTo the place where He's now on the throne;\nAnd His strength shall be mine on the road.\n\nWith Him shall my rest be on high,\nWhen in holiness bright I sit down,\nIn the joy of His love ever nigh,\nIn the peace that His presence shall crown.\n\n'Tis the treasure I've found in His love\nThat has made me a pilgrim below;\nAnd 'tis there, when I reach Him above\nAs I'm known, all His fullness I'll know.\n\nAnd Saviour, 'tis Thou from on high\nI await till the time Thou shalt come,\nTo take him Thou hast led by Thine eye\nTo Thyself in Thy heavenly home.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "299",
        "title": "\"Till He come!\" O let the words",
        "author": "Edward Henry Bickersteth (1861)",
        "meter": "7.7.7.7.7.7.",
        "tuneName": "Studley",
        "lyrics": "\n\"Till He come!\" O let the words\nLinger on the trembling chords;\nLet the \"little while\" between\nIn their golden light be seen;\nLet us think how heaven and home\nLie beyond that \"Till He come!\"\n\nWhen the weary ones we love\nEnter on their rest above,\nWhen their words of love and cheer\nFall no longer on our ear,\nHush! be every murmur dumb,\nIt is only \"Till He come!\"\n\nClouds and darkness round us press;\nWould we have one sorrow less?\nAll the sharpness of the cross,\nAll that tells the world is loss,\nDeath, and darkness, and the tomb,\nPain us only \"Till He come!\"\n\nSweet the feast of love divine,\nBroken bread and outpoured wine;\nSweet memorials, till the Lord\nCall us round His heavenly board,\nSome from earth, from glory some,\nSevered only \"Till He come!\"\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "300",
        "title": "Tis we, O Lord, whom Thou hast shown",
        "author": "Mary Bowly Peters",
        "meter": "L.M.",
        "tuneName": "Winchester",
        "lyrics": "\nTis we, O Lord, whom Thou hast shown\nThe deadly bitterness of sin;\nWe, who forgiving love have known,\nMay fitly bring thank-offerings in.\n\nThy presence called for Israel's praise,\nEncompassed by their mortal foes;\nAnd when in death they met their gaze,\nWhat songs of glorious triumph rose.\n\nAnd we have known redemption, Lord,\nFrom bondage worse than theirs by far;\nSin held us by a stronger cord,\nYet by Thy mercy free we are.\n\nO blessed Lord! Thy groans and tears,\nThy death the power of darkness broke;\nBursting the chains we wore for years\nIt freed us from the iron yoke.\n\nDivine Deliverer! Thou alone\nThy people from the deep couldst bring;\nThe glorious triumph all Thine own:\nThy Name, Thy might, Thy grace, we sing.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "301",
        "title": "To Thee, O gracious Saviour!",
        "author": "John Samuel Bewley Monsell",
        "meter": "7.6.7.6.D.",
        "tuneName": "Munich",
        "lyrics": "\nTo Thee, O gracious Saviour!\nMy spirit turns for rest,\nMy peace is in Thy favour,\nMy pillow on Thy breast:\nThough all the world deceive me\nI know that I am Thine,\nAnd Thou wilt never leave me,\nO blessed Saviour mine.\n\nIn Thee my trust abideth,\nOn Thee my hope relies,\nO Thou whose love provideth\nFor all beneath the skies:\nO Thou whose mercy found me,\nFrom bondage set me free,\nAnd then for ever bound me\nWith threefold cords to Thee.\n\nMy grief is in the dullness\nWith which this sluggish heart\nDoth open to the fullness\nOf all Thou dost impart:\nMy joy is in Thy merit,\nAnd holiness divine,\nMy comfort in Thy Spirit\nThat binds my life to Thine.\n\nAlas, that I should ever\nHave failed in love to Thee,\nThe only One who never\nForgot or slighted me!\nO for a heart to love Thee\nMore truly as I ought,\nAnd nothing place above Thee\nIn deed, or word, or thought.\n\nO for that choicest blessing\nOf living in Thy love!\nAnd thus on earth possessing\nThe peace of heaven above:\nO for the bliss that by it\nThe soul securely knows,\nThe holy calm and quiet\nOf faith's serene repose.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "302",
        "title": "'Tis the blessed hour of prayer when our hearts lowly bend",
        "author": "Frances (Fanny) Jane Crosby (1880)",
        "meter": "P.M.",
        "tuneName": "Hour of Prayer",
        "lyrics": "\n'Tis the blessed hour of prayer when our hearts lowly bend,\nAnd we gather to Jesus, our Saviour and Friend;\nIf we come to Him in faith, His protection to share,\nWhat a balm for the weary! O how sweet to be there.\n\n\"'Tis the blessed hour of prayer when the Saviour-draws near\nWith tender compassion His people to hear;\nWhen He tells us we may cast at His feet every care:\nWhat a balm for the weary! O how sweet to be there.\n\n\"'Tis the blessed hour of prayer when the tempted and tried,\nTo the Saviour who loves them, their sorrows confide;\nWith a sympathising heart He removes every care:\nWhat a balm for the weary! O how sweet to be there.\n\nAt the blessed hour of prayer, if we firmly believe\nThat the blessing we ask for we'll surely receive,\nIn the fullness of delight we shall lose every care:\nWhat a balm for the weary! O how sweet to be there.\n",
        "Chorus": "\nBlessed hour of prayer,\nBlessed hour of prayer,\nWhat a balm for the weary!\nO how sweet to be there.\n",
        "addedChorus": ""
    },
    {
        "number": "303",
        "title": "Tis finished all: our souls to win",
        "author": "Sir Edward Denny",
        "meter": "L.M.",
        "tuneName": "Melcombe",
        "lyrics": "\nTis finished all: our souls to win\nHis life the blessed Saviour gave;\nThen rising, left His people's sin\nBehind Him in His open grave.\n\nPast suff'ring now, the tender heart,\nOf Jesus, on His Father's throne,\nStill in our sorrow bears a part,\nAnd feels it as He felt His own.\n\nSweet thought! We have a Friend above,\nOur weary, faltering steps to guide,\nWho follows with the eye of love\nThe little flock for which He died.\n\nLord Jesus, teach us more\nand more On Thee alone to cast our care;\nAnd gazing on Thy Cross, adore\nThe wondrous grace that brought Thee there.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "304",
        "title": "Tis past, the dark and dreary night.",
        "author": "Sir Edward Denny",
        "meter": "C.M.",
        "tuneName": "Harrington",
        "lyrics": "\nTis past, the dark and dreary night.\nAnd, Lord, we hail Thee now,\nOur Morning Star, without a cloud\nOf sadness on Thy brow.\n\nThy path on earth. the Cross, the grave,\nThy sorrows all are o'er;\nAnd O sweet thought! Thine eye shall weep.\nThy heart shall break no more.\n\nDeep were those sorrows, deeper still\nThe love that brought Thee low,\nThat bade the streams of life from Thee,\nA lifeless Victim, flow.\n\nDrawn from Thy pierced and bleeding side,\nThat pure and cleansing flood\nSpeaks peace to every heart that knows\nThe virtues of Thy blood.\n\nYet 'tis not that we know the joy\nOf cancelled sin alone,\nBut, happier far, Thy saints are called\nTo share Thy glorious throne.\n\nSo closely are we linked in love,\nSo wholly one with Thee,\nThat all Thy bliss and glory then\nOur portion blest shall be.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "305",
        "title": "To Calvary, Lord, in spirit now",
        "author": "Sir Edward Denny",
        "meter": "C.M.",
        "tuneName": "St. Paul",
        "lyrics": "\nTo Calvary, Lord, in spirit now\nOur weary souls repair,\nTo dwell upon Thy dying love,\nAnd taste its sweetness there.\n\nSweet resting-place of every heart\nThat feels the plague of sin,\nYet knows the deep, mysterious joy\nOf peace with God within.\n\nThere, through Thine hour of deepest woe,\nThy suffering spirit passed;\nGrace there its wondrous victory gained,\nAnd love endured its last.\n\nO Lamb of God! Thy bleeding wounds,\nWith cords of love divine,\nHave drawn our willing hearts to Thee,\nAnd linked our life with Thine.\n\nOur longing eyes would fain behold\nThat bright and blessed brow,\nOnce wrung with bitterest anguish, wear\nIts crown of glory now.\n\nThy sympathies and hopes are ours:\nWe long, O Lord, to see\nCreation all\u2014below, above,\nRedeemed and blessed by Thee.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "306",
        "title": "Unworthy our thanksgiving",
        "author": "Mary Bowly Peters",
        "meter": "7.6.7.6.D.",
        "tuneName": "Missionary",
        "lyrics": "\nUnworthy our thanksgiving,\nOur service stained with sin,\nExcept as Thou art living.\nOur Priest, to bear it in;\nIn every act of worship,\nIn every loving deed,\nOur thoughts around Thee centre\nAs meeting all our need.\n\nA bond that nought can sever\nHas fixed us to the Rock;\nSin put away for ever\nFrom all the Shepherd's flock\nAnd, Lord, Thy perfect fitness\nTo do a kinsman's part,\nThe Holy Ghost doth witness\nTo each believer's heart.\n\nAs dews that fall on Hermon\nRefresh the plains below,\nThe Spirit's holy unction\nThrough Thee to us doth flow.\nAh, then, how good and pleasant,\nAs one, to live in love,\nForgetting all things present\nIn hope of joys above.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "307",
        "title": "Unto Him who loved us, gave us",
        "author": "Samuel Miller Waring",
        "meter": "8.7.8.7.8.7.",
        "tuneName": "Regent Square",
        "lyrics": "\nUnto Him who loved us, gave us\nEvery pledge that love could give;\nFreely shed His blood to save us;\nGave His life that we might live;\nBe the kingdom, And dominion,\nAnd the glory evermore.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "308",
        "title": "Unto the Lamb that was slain",
        "author": "Isaac Watts",
        "meter": "C.M.",
        "tuneName": "St. Magnus",
        "lyrics": "\nUnto the Lamb that was slain,\nBe endless blessings paid!\nSalvation, glory, joy remain\nFor ever on Thy head.\n\nThou has redeemed us with Thy blood,\nHast set the prisoners free;\nHast made us kings and priests to God,\nAnd we shall reign with Thee.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "309",
        "title": "Walk in the light, so shalt thou know",
        "author": "Bernard Barton (1826)",
        "meter": "C.M.",
        "tuneName": "Emmanuel",
        "lyrics": "\nWalk in the light, so shalt thou know\nThat fellowship of love\nHis Spirit only can bestow,\nWho reigns in light above.\n\nWalk in the light, o'er sin abhorred\nThou shalt the victory gain;\nThe blood of Jesus Christ Thy Lord\nCleanseth from every stain.\n\nWalk in the light, and thou shalt find\nThy heart made truly His,\nWho dwells in cloudless light enshrined,\nIn whom no darkness is.\n\nWalk in the light, and e'en the tomb\nNo fearful shade shall wear;\nGlory shall chase away the gloom,\nFor Christ hath conquered there.\n\nWalk in the light, and thine shall be.\nA path, though thorny, bright;\nFor God, by grace, shall dwell in thee,\nAnd God Himself is light.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "310",
        "title": "We bless our Saviour's Name",
        "author": "James George Deck (1841)",
        "meter": "S.M.",
        "tuneName": "Boylston",
        "lyrics": "\nWe bless our Saviour's Name,\nOur sins are all forgiven;\nTo suffer, once to earth He came,\nAnd now He's crowned in heaven.\n\nHis precious blood was shed,\nHis body bruised for sin;\nRememb'ring this we break the bread,\nAnd, joyful, drink the wine.\n\nWhile we remember Thee,\nLord, in our midst appear!\nLet each by faith Thy body see\nWhile we assemble here.\n\nWe never would forget\nThy rich, Thy precious love;\nOur theme of joy and wonder here,\nOur endless song above!\n\nO let Thy love constrain\nOur souls to cleave to Thee!\nAnd ever in our hearts remain\nThat word, \"Remember Me!\"\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "311",
        "title": "We come, our gracious Father",
        "author": "Anonymous",
        "meter": "7.6.7.6.D.",
        "tuneName": "Munich",
        "lyrics": "\nWe come, our gracious Father,\nWith many hearts as one,\nAnd here we only gather\nIn memory of Thy Son:\nWe prize each happy token\nOf peace with Thee, our God;\nThe bread, His body broken;\nThe wine, His precious blood.\n\nWhilst breaking bread we ponder,\nLord Jesus, on Thy love,\nAnd see, with silent wonder.\nWhat drew Thee from above.\nComplete in Thy completeness,\nThe Church, Thy favoured Bride,\nPossesses all the Sweetness\nThy perfect love supplied.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "312",
        "title": "We love to sing with one accord",
        "author": "Anonymous",
        "meter": "C.M.",
        "tuneName": "Belmount",
        "lyrics": "\nWe love to sing with one accord\nThe riches of Thy grace;\nWe love to come before Thee, Lord,\nOn earth no happier place.\n\nWe love to lean upon Thy breast\nIn the repose of faith,\nAnd find our soul's enduring rest\nIn what Thy Spirit saith.\n\nHe witnessed to the constant guilt\nThat marked the path we trod;\nHe witnessed that Thy blood was spilt\nTo bring us nigh to God.\n\nHe made us look to Thee alone,\nAnd showed us our release;\nHe brings the message from the throne,\nOf mercy, grace, and peace.\n\nIn songs of praise we would record\nThy mercy while we live,\nAnd standing in Thy presence, Lord,\nFar sweeter praises give.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "313",
        "title": "We praise Thy great love",
        "author": "William Paton MacKay",
        "meter": "P.M.",
        "tuneName": "Thine the Glory",
        "lyrics": "\nWe praise Thy great love,\nOur Father and God;\nRejoicing in Jesus,\nWhom Thou hast bestowed.\n\nWe praise Thee, O God,\nFor the joy Thou hast given\nTo Thy saints in communion,\nThese foretastes of heaven.\n\nWe praise Thee, O God,\nFor the Word of Thy love,\nWhich unfolds Thy rich grace\nAnd Thy glory above.\n\nAccepted in Christ,\nWho has stood in our place,\nWe shall show in the glory\nThy riches of grace.\n\nWe work for Him now,\nTill, God's purpose complete,\nThe Bride and the Bridegroom\nIn glory shall meet.\n\nLord Jesus, we wait\nFor the day Thou shalt come;\nWe long for Thy presence,\nOur heavenly home.\n",
        "Chorus": "\nHallelujah! Thine the glory!\nHallelujah! Amen!\nHallelujah! Thine the glory!\nCome quickly again.\n",
        "addedChorus": ""
    },
    {
        "number": "314",
        "title": "We're a pilgrim band in a stranger land",
        "author": "A. B. MacKay",
        "meter": "P.M.",
        "tuneName": "Resolution",
        "lyrics": "\nWe're a pilgrim band in a stranger land\nWho are marching from Calvary,\nWhere the wondrous Cross, with its gain and loss,\nIs the sum of our history:\nThere we lost our stand in a death-doomed land,\nAs children of wrath by the fall;\nThere we gained a place as heirs of grace\nAt the feast in the heavenly hall.\n\nWe read our guilt in the blood that was spilt,\nAnd we weep o'er the crimson flow;\nBut we joy in the grace of the unveiled face\nOf a Father here below:\nAnd as sons of God, redeemed by blood,\nWe hasten from Egypt away;\nWe cross the sand to the pleasant land\nAnd the joys of an endless day.\n\nWe were children of night, kept far from the light,\nEnslaved by a cruel foe;\nBut Jesus' pains broke the iron chains,\nAnd redeemed our souls from woe:\nNow as children of light we walk and we fight\nIn a path of triumphant joy;\nFor our strength is the Lord, whose Word is our sword,\nWhile faith is the shield we employ.\n\nOur home is with God, and our path has been trod\nBy the faithful of ages all,\nAnd us He will bring, as on eagles' wing,\nTo our place in the marriage hall:\nThen, then shall we sing, as the Bride of the King,\nOf the blood that has brought us so nigh,\nTo bask in the blaze of the Ancient of Days,\nEnthroned above the sky.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "315",
        "title": "We sing the praise of Him who died",
        "author": "Thomas Kelly (1815)",
        "meter": "L.M.",
        "tuneName": "Mainzer",
        "lyrics": "\nWe sing the praise of Him who died,\nOf Him who died upon the Cross,\nThe sinner's Hope\u2014though men deride,\nFor Him we count the world but loss.\n\nInscribed upon the Cross we see,\nIn shining letters, \"God is love;\"\nThe Lamb who died upon the tree\nHas brought us mercy from above.\n\nThe Cross! It takes our guilt away;\nIt holds the fainting spirit up;\nIt cheers with hope the gloomy day\nAnd sweetens every bitter cup.\n\nIt makes the coward spirit brave,\nAnd nerves the feeble arm to fight;\nIt takes its terror from the grave,\nAnd gilds the bed of death with light.\n\nThe balm of life, the cure of woe,\nThe measure and the pledge of love,\nThe sinner's refuge here below,\nThe theme of praise in heaven above.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "316",
        "title": "What grace, O Lord, and beauty shone",
        "author": "Edward Denny (1839)",
        "meter": "C.M.",
        "tuneName": "St. Bernard",
        "lyrics": "\nWhat grace, O Lord, and beauty shone\nAround Thy steps below!\nWhat patient love was seen in all\nThy life and death of woe!\n\nFor ever on Thy burdened heart\nA weight of sorrow hung;\nYet no ungentle, murmuring word\nEscaped Thy silent tongue.\n\nThy foes might hate, despise, revile,\nThy friends unfaithful prove;\nUnwearied in forgiveness still\nThy heart could only love.\n\nO give us hearts to love like Thee!\nLike Thee, O Lord, to grieve\nFar more for others' sins, than all\nThe wrongs that we receive.\n\nOne with Thyself, may every eye,\nIn us, Thy brethren, see\nThat gentleness and grace that spring\nFrom union, Lord, with Thee.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "317",
        "title": "What a Friend we have in Jesus",
        "author": "Joseph Medicott Scriven & Charles Crozat Converse (1857)",
        "meter": "8.7.8.7.D.",
        "tuneName": "Paraclete",
        "lyrics": "\nWhat a Friend we have in Jesus,\nAll our sins and grief's to bear!\nWhat a privilege to carry\nEverything to God in prayer!\nO what peace we often forfeit,\nO what needless pain we bear!\nAll because we do not carry\nEverything to God in prayer.\n\nHave we trials and temptations?\nIs there trouble anywhere?\nWe should never be discouraged:\nTake it to the Lord in prayer!\nCan we find a friend so faithful,\nWho will all our sorrows share?\nJesus knows our every weakness:\nTake it to the Lord in prayer.\n\nAre we weak and heavy-laden,\nCumbered with a load of care?\nBlessed Saviour, still our refuge:\nTake it to the Lord in prayer!\nDo thy friends despise, forsake thee?\nTake it to the Lord in prayer!\nIn His arms He'll take and shield thee,\nThou shalt find a solace there.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "318",
        "title": "We'll sing of the Shepherd that died",
        "author": "Thomas Kelly",
        "meter": "8.8.8.8.",
        "tuneName": "David",
        "lyrics": "\nWe'll sing of the Shepherd that died,\nThat died for the sake of the flock;\nHis love to the utmost was tried,\nBut firmly endured as a rock.\n\nWhen blood from a victim must flow,\nThis Shepherd, by pity, was led\nTo stand between us and the foe,\nAnd willingly die in our stead.\n\nOur song then for ever should be\nOf the Shepherd who gave Himself thus;\nNo subject's so glorious as He,\nNo theme's so affecting to us.\n\nWe'll sing of such subjects alone\nNone other our tongues shall employ,\nTill fully His love becomes known\nIn yonder bright regions of joy.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "319",
        "title": "When first, o'erwhelmed with sin and shame",
        "author": "James George Deck (1841)",
        "meter": "8.8.8.8.8.8.",
        "tuneName": "Giessen",
        "lyrics": "\nWhen first, o'erwhelmed with sin and shame,\nTo Jesus' Cross I trembling came,\nBurdened with guilt, and full of fear,\nYet drawn by love to venture near,\nPardon I found, and peace with God,\nIn Jesus' rich, atoning blood.\n\nMy sin is gone, my fear is o'er,\nI shun God's presence now no more;\nHe sits upon the throne of grace,\nHe bids me boldly seek His face:\nSprinkled upon the throne of God\nI see that rich, atoning blood.\n\nHere I can rest without a fear;\nBy this, to God I now draw near;\nBy this, I triumph over sin,\nFor this has made and keeps me clean;\nAnd when I reach the throne of God\nI'll praise that rich, atoning blood.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "320",
        "title": "When languor and disease invade",
        "author": "Augustus Montague Toplady (1780)",
        "meter": "C.M.",
        "tuneName": "Courtallan Martyrdom",
        "lyrics": "\nWhen langour and disease invade\nThis trembling house of clay,\n'Tis sweet to look beyond our cage\nAnd long to fly away.\n\nSweet to look inward, and attend\nThe whispers of His love;\nSweet to look upward to the place\nWhere Jesus pleads above.\n\nSweet to look back, and see my name\nIn life's fair book set down;\nSweet to look forward, and behold\nEternal joys my own.\n\nSweet to reflect how grace divine\nMy sins on Jesus laid;\nSweet to remember that His blood\nMy debt of suffering paid.\n\nSweet in God's righteousness to stand,\nWhich saves from second death;\nSweet to experience, day by day,\nHis Spirit's quickening breath.\n\nSweet on His faithfullness to rest,\nWhose love can never end;\nSweet on His covenant of grace\nFor all things to depend.\n\nSweet, in the confidence of faith,\nTo trust His firm decrees;\nSweet to lie passive in His hands,\nAnd know no will but His.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "321",
        "title": "Come, ye saints, rejoice with Jesus",
        "author": "Richard Chenevix Trench (George Frederick Trench?)",
        "meter": "8.7.8.7.8.7.",
        "tuneName": "Anticipation",
        "lyrics": "\nCome, ye saints, rejoice with Jesus,\nCalled with Him His joy to share;\nSeraphs worship, angels praise Him;\nWe His friends and followers are:\nLost ones found and\nDead ones raised,\nNow the heart of Jesus cheer.\n\nPraise the Lord with hallelujahs!\nEndless praises let us bring;\nPraise His Name for these great mercies,\nTurn we now His praise to sing:\nLoudest praises\nMake the court of heaven ring.\n\nPraise Him! Praise Him! Never ceasing,\nYe who prove God's boundless grace;\nHave we asked, and has He answered?\nThankful hearts to heaven raise:\nHe is worthy\nTo receive His children's praise.\n\nHallelujah! Hallelujah!\nHeartfelt praise to God we give;\nThey should loudest sing His praises\nWho His blessings thus receive:\nSongs of praises\nLet us render while we live.\n\nShout, ye ransomed heirs of heaven!\nSaved to show God's praises forth;\nWhile ye shout, let joys unspoken\nFill your hearts with heavenly mirth:\nHearts exulting,\nSongs out-bursting,\nPut to shame the joys of earth\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "322",
        "title": "When I survey the wondrous Cross",
        "author": "Isaac Watts & Hymns Ancient and Modern (1707)",
        "meter": "L.M.",
        "tuneName": "Rockingham Boston Mason",
        "lyrics": "\nWhen I survey the wondrous Cross\nOn which the Prince of Glory died,\nMy richest gain I count but loss,\nAnd pour contempt on all my pride.\n\nForbid it, Lord, that I should boast,\nSave in the Cross of Christ, my God;\nAll the vain things that charm me most\nI sacrifice them to His blood.\n\nSee from His head, His hands, His feet,\nSorrow and love flow mingled down;\nDid e'er such love and sorrow meet,\nOr thorns compose so rich a crown?\n\nWere the whole realm of nature mine\nThat were an offering far too small;\nLove so amazing, so divine,\nDemands my heart, my life, my all!\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "323",
        "title": "While in sweet communion feeding",
        "author": "Sir Edward Denny",
        "meter": "8.7.8.7.D.",
        "tuneName": "Salvator Deerhurst",
        "lyrics": "\nWhile in sweet communion feeding\nOn this earthly bread and wine,\nSaviour, may we see Thee bleeding\nOn the Cross to make us Thine!\nNow our eyes we would be closing\nTo this fleeting world below,\nAnd upon Thyself reposing,\nMore of grace and mercy know.\n\nThough unseen, be ever near us\nWith the still small voice of love,\nWhispering words of peace to cheer us,\nEvery doubt and fear remove;\nBring before us all the story\nOf Thy life and death of woe,\nAnd, with hopes of endless glory,\nWean our hearts from all below.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "324",
        "title": "When peace, like a river, attendeth my way",
        "author": "Horatio Gates Spafford (1873)",
        "meter": "P.M.",
        "tuneName": "It is Well",
        "lyrics": "\nWhen peace, like a river, attendeth my way,\nWhen sorrows, like sea-billows roll;\nWhatever my lot, Thou hast taught me to say,\nIt is well, it is well with my soul.\n\nThough Satan should buffet, though trials should come,\nLet this blest assurance control,\nThat Christ hath regarded my helpless estate,\nAnd hath shed His own blood for my soul.\n\nMy sin, O the bliss of this glorious thought!\nMy sin, not in part but the whole,\nIs nailed to His Cross, and I bear it no more;\nPraise the Lord, praise the Lord, O my soul!\n\nFor me be it Christ, be it Christ hence to live!\nIf death's waters o'er me shall roll\nNo pang shall be mine, for in death as in life,\nThou wilt whisper Thy peace to my soul.\n\nBut, Lord, 'tis for Thee, for Thy coming we wait;\nThe sky, not the grave is our goal:\nO trump of the angel! O voice of the Lord!\nBlessed hope! Blessed rest of my soul!\n",
        "Chorus": "\nIt is well with my soul,\nIt is well, it is well with my soul.\n",
        "addedChorus": ""
    },
    {
        "number": "325",
        "title": "With Jesus in our midst",
        "author": "Robert Cleaver Chapman",
        "meter": "S.M.",
        "tuneName": "Selma",
        "lyrics": "\nWith Jesus in our midst,\nWe gather round the board;\nThough many, we are one in Christ,\nOne body in the Lord.\n\nOur sins were laid on Him\nWhen bruised on Calvary:\nWith Christ we died and rose again,\nAnd sit with Him on high.\n\nFaith eats the bread of life,\nAnd drinks the living wine;\nThus we, in love together knit,\nOn Jesus' breast recline.\n\nSoon shall the night be gone,\nAnd we with Jesus reign;\nThe marriage supper of the Lamb\nShall banish all our pain.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "326",
        "title": "With joy we meditate the grace",
        "author": "Isaac Watts (1707)",
        "meter": "C.M.",
        "tuneName": "Harington",
        "lyrics": "\nWith joy we meditate the grace\nOf our High Priest above;\nHis heart o'erflows with tenderness,\nHis very name is Love.\n\nTouched with a sympathy within\nHe knows our feeble frame;\nHe knows what sore temptations are\nFor He endured the same.\n\nBut spotless, innocent, and pure\nOur great Redeemer stood;\nNo stain of sin did e'er defile\nThe holy Lamb of God.\n\nHe, when He sojourned here below,\nPoured forth His cries and tears;\nAnd, though exalted, feels afresh\nWhat every member bears.\n\nThen boldly let our faith address\nHis mercy and His power;\nWe shall obtain delivering grace\nIn each distressing hour.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "327",
        "title": "Hark! hark! hear the glad tidings",
        "author": "Anonymous",
        "meter": "P.M.",
        "tuneName": "Glad Tidings",
        "lyrics": "\nHark! hark! hear the glad tidings,\nSoon, soon, Jesus will come,\nRobed, robed, in honour and glory,\nTo gather His ransomed ones home:\nYes, yes, O yes!\nTo gather His ransomed ones home.\n\nJoy, joy, sound it more loudly;\nSing, sing, glory to God;\nChrist Jesus is quickly returning,\nPublish the tidings abroad:\nYes, yea, O yes!\nPublish the tidings abroad.\n\nNow, now, through a glass darkly,\nShine, shine, visions to come;\nSoon, soon, we shall behold Him,\nCloudless and bright in our home:\nYes, yes, O yes!\nCloudless and bright in our home.\n\nLong, long, have we been waiting,\nWho, who love His blest Name;\nNow, now, we are delighting\nJesus is near to proclaim:\nYes, yes, O yes!\nJesus is near to proclaim.\n\nStill, still, rest on the promise;\nCling, cling, fast to His Word;\nWait, wait, He will not tarry,\nWe'll patiently wait for the Lord:\nYes, yes, O yes!\nWe'll patiently wait for the Lord.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "328",
        "title": "Worthy, worthy is the Lamb!",
        "author": "William Paton MacKay",
        "meter": "P.M.",
        "tuneName": "Warwicl Lune",
        "lyrics": "\nWorthy, worthy is the Lamb!\nWorthy, worthy is the Lamb!\nWorthy, worthy is the Lamb\nThat was slain.\n\nThou redeem'st our souls to God\nBy Thy blood.\n\nThou has made us kings and priests\nTo our God.\n\nWe shall ever reign with Thee,\nLamb of God.\n",
        "Chorus": "\nPraise Him, hallelujah!\nBless Him, hallelujah!\nPraise Him, hallelujah!\nPraise the Lamb!\n",
        "addedChorus": ""
    },
    {
        "number": "329",
        "title": "I am Thine, O Lord! I have heard Thy voice",
        "author": "Frances (Fanny) Jane Crosby (1875)",
        "meter": "P.M.",
        "tuneName": "Draw Me Nearer",
        "lyrics": "\nI am Thine, O Lord! I have heard Thy voice,\nAnd it told Thy love to me;\nBut I long to rise in the arms of faith,\nAnd be closer drawn to Thee.\n\nConsecrate me now to Thy service, Lord,\nBy the power of grace divine;\nLet my soul look up with a steadfast hope,\nAnd my will be lost in Thine.\n\nO the pure delight of a single hour,\nThat before Thy throne I spend!\nWhen I kneel in prayer, and with Thee, my God,\nI commune as friend with friend.\n\nThere are depths of love that I cannot know\nTill I cross the narrow sea;\nThere are heights of joy that I may not reach\nTill I rest in peace with Thee.\n",
        "Chorus": "\nDraw me nearer, nearer blessed Lord,\nTo the Cross where Thou hast died;\nDraw me nearer, nearer, nearer blessed Lord,\nTo Thy precious, wounded side.\n",
        "addedChorus": ""
    },
    {
        "number": "330",
        "title": "I will never, never leave thee",
        "author": "Anonymous",
        "meter": "8.7.8.7.D.",
        "tuneName": "Constancy",
        "lyrics": "\nI will never, never leave thee,\nI will never thee forsake!\nI will guard, and save, and keep thee,\nFor My Name and mercy's sake!\nFear no evil, fear no evil,\nOnly all My counsel take,\nFor I'll never, never leave thee,\nI will never thee forsake.\n\nWhen the storm is raging round thee,\nCall on Me in humble prayer,\nI will fold My arms about thee,\nGuard thee with the tend'rest care;\nIn the trial, in the trial\nI will make thy pathway clear.\nFor I'll never, never leave thee,\nI will never thee forsake.\n\nWhen the sky above is glowing,\nAnd around thee all is bright,\nPleasure like a river flowing,\nAll things tending to delight,\nI'll be with thee, I'll be with thee,\nI will guide thy steps aright.\nFor I'll never, never leave thee,\nI will never thee forsake.\n\nWhen thy soul is dark and clouded,\nFilled with doubt, and grief, and care,\nThrough the mist by which 'tis shrouded.\nI will make a light appear.\nAnd the banner, and the banner\nOf My love I will uprear.\nFor I'll never, never leave thee,\nI will never thee forsake.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "331",
        "title": "With steady pace the pilgrim moves",
        "author": "Richard Jukes (no B.H.B.C. entry available)",
        "meter": "C.M.",
        "tuneName": "St. Magnus Irish",
        "lyrics": "\nWith steady pace the pilgrim moves\nTo-wards the blissful shore,\nAnd sings with cheerful heart and voice,\n\"'Tis better on before.\"\n\nHis passage through a desert lies\nWhere furious lions roar;\nHe takes his staff, and, smiling, says,\n\"'Tis better on before.\"\n\nWhen tempted to forsake his God\nAnd give the contest o'er,\nHe hears a voice which says, \"Look up!\n'Tis better on before.\"\n\nWhen stern affliction clouds his cheek,\nAnd want stands at the door,\nHope cheers him with her sunniest note,\n\"'Tis better on before.\"\n\nAnd if on Jordan's bank he stands,\nAnd sees the radiant shore,\nBright angels whisper, \"Come away!\n'Tis better on before.\"\n\nAnd so it is, for high in heaven\nThey never suffer more;\nEternal calm succeeds the storm;\n\"'Tis better on before!\"\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "332",
        "title": "O thou whose bounty fills our cup",
        "author": "Jane Fox Crewdson (1860)",
        "meter": "C.M.",
        "tuneName": "Abridge",
        "lyrics": "\nO thou whose bounty fills our cup\nWith every blessing meet!\nWe give Thee thanks for every drop,\nThe bitter and the sweet.\n\nWe thank Thee for the desert road,\nAnd for the river side;\nFor all Thy goodness has bestowed,\nAnd all Thy grace denied.\n\nWe thank Thee for the smile and frown,\nAnd for the gain and loss;\nWe bless Thee for the future crown,\nAnd for the present cross.\n\nWe bless Thee for the glad increase,\nAnd for the waning joy;\nAnd for the calm and settled peace\nWhich nothing can destroy.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "333",
        "title": "Just as I am, without one plea",
        "author": "Charlotte Elliott & William Batchelder Bradbury (1835)",
        "meter": "8.8.8.6.",
        "tuneName": "Woodworth Agnus Dei",
        "lyrics": "\nJust as I am, without one plea\nBut that Thy blood was shed for me,\nAnd that Thou bidst me come to Thee,\nO Lamb of God, I come!\n\nJust as I am, and waiting not\nTo rid my soul of one dark blot,\nTo Thee, whose blood can cleanse each spot,\nO Lamb of God, I come!\n\nJust as I am, though tossed about\nWith many a conflict, many a doubt,\nFightings within, and foes without,\nO Lamb of God, I come!\n\nJust as I am, poor, wretched, blind,\nSight, riches, healing of the mind,\nYea, all I need in Thee to find,\nO Lamb of God, I come!\n\nJust as I am, Thou wilt receive,\nWilt welcome, pardon, cleanse, relieve;\nBecause Thy promise I believe,\nO Lamb of God, I come!\n\nJust as I am, Thy love unknown\nHas broken every barrier down;\nNow to be Thine, yea, Thine alone,\nO Lamb of God, I come!\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "334",
        "title": "Come ye, who bow to sovereign grace",
        "author": "Charles Haddon Spurgeon & Maria de Fleury",
        "meter": "C.M.",
        "tuneName": "Sawley Sennen Cove",
        "lyrics": "\nCome ye, who bow to sovereign grace,\nRecord Immanuel's love;\nJoin in a song of grateful praise\nTo Him who lives above.\n\nOnce in the gloomy grave He lay,\nBut, by His rising power,\nHe bore the gates of death away:\nHail! Mighty Conqueror.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "335",
        "title": "Come sing, my soul, and praise the Lord",
        "author": "Daniel Webster Whittle",
        "meter": "L.M.D.",
        "tuneName": "Redemption Ground",
        "lyrics": "\nCome sing, my soul, and praise the Lord,\nWho hath redeemed thee by His blood;\nDelivered thee from chains that bound,\nAnd brought thee to redemption ground.\n\nOnce from my God I wandered far,\nAnd with His holy will made war;\nBut now my songs to God abound:\nI'm standing on redemption ground.\n\nO joyous hour when God to me\nA vision gave of Calvary!\nMy bonds were loosed, my soul unbound:\nI sang upon redemption ground.\n\nNo works of merit now I plead,\nBut Jesus take for all my need;\nNo righteousness in me is found,\nExcept upon redemption ground.\n\nCome, weary soul, and here find rest;\nAccept redemption, and be blest:\nThe Christ who died, by God is crowned\nTo pardon on redemption ground.\n",
        "Chorus": "\nRedemption ground, the ground of peace!\nRedemption ground, O wondrous grace!\nHere let our praise to God abound,\nWho saves us on redemption ground!\n",
        "addedChorus": ""
    },
    {
        "number": "336",
        "title": "Endless praises to our Lord",
        "author": "Thomas Kelly",
        "meter": "7.7.7.7.",
        "tuneName": "Orientis Partibus Melling",
        "lyrics": "\nEndless praises to our Lord,\nEver be His Name adored!\nHallelujah! Crown the Lamb:\nHe is worthy, praise His Name!\n\nSaints, adore Him, sound His fame,\nYou He saved from endless shame;\nHallelujah! Crown the Lamb:\nHe is worthy, praise His Name!\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "337",
        "title": "Father of mercies! In Thy Word",
        "author": "Anne Steele (1760)",
        "meter": "C.M.",
        "tuneName": "Grafenberg Tiltey Abbey",
        "lyrics": "\nFather of mercies! In Thy Word\nWhat endless glory shines!\nFor ever be Thy Name adored\nFor these celestial lines.\n\nHere the Redeemer's welcome voice\nSpreads heavenly peace around;\nAnd life and everlasting joys\nAttend the blissful sound.\n\nO may these holy pages be\nOur ever new delight!\nAnd still new beauties may we see,\nAnd still increasing light.\n\nDivine Instructor! Gracious Lord!\nThou art for ever near;\nTeach us to love Thy sacred Word\nAnd view a Saviour there.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "338",
        "title": "Hark! How the blood-bought hosts above",
        "author": "John Kent",
        "meter": "8.8.6.8.8.6.",
        "tuneName": "Praise : Piety",
        "lyrics": "\nHark! How the blood-bought hosts above\nConspire to chant the Saviour's love,\nIn sweet harmonious strains!\nAnd while they strike their golden lyres\nThis glorious theme each bosom fires,\nThat Grace triumphant reigns!\n\nWe'll join the song, for we can tell\nHow sovereign grace dissolved the spell\nThat kept us bound in chains;\nAnd from that dear and happy day\nHow oft we've been constrained to say\nThat grace triumphant reigns.\n\nYes! Though we've strayed, like saints of old,\nGrace has restored us to the fold,\nAs captives in its chains:\nThus saved by grace, we'd gladly sing,\nTill all the earth and heavens ring\nWith grace triumphant reigns.\n\nWhen called to meet our glorious Head,\nThat perfect love shall banish dread,\nWhich now our soul sustains;\nAnd when we rise to endless day,\nWe'll raise our voice and boldly say,\nGrace, grace triumphant reigns.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "339",
        "title": "Here, O our Lord, we see Thee face to face;",
        "author": "Horatius Bonar (1855)",
        "meter": "10's",
        "tuneName": "St. Agnes Kensington Eventide",
        "lyrics": "\nHere, O our Lord, we see Thee face to face;\nHere would we touch and handle things unseen;\nHere grasp with firmer hand th' eternal grace,\nAnd all our weariness upon Thee lean.\n\nHere would we feed upon the bread of God;\nHere drink with Thee the royal wine of heaven;\nHere would we lay aside each earthly load;\nHere taste afresh the calm of sin forgiven.\n\nOurs is the sin, but Thine the righteousness;\nOurs is the guilt, but Thine the cleansing blood;\nHere is our robe, our refuge and our peace,\nThy blood, Thy righteousness, O Lord, our God.\n\nToo soon we rise; the symbols disappear;\nThe feast, though not the love, is past and gone;\nThe bread and wine remove, but Thou art here,\nNearer than ever, still our shield and sun.\n\nBut see, the pillar-cloud is rising now,\nAnd moving onward through the desert night;\nIt beckons, and we follow, for we know\nIt leads us to the heritage of light.\n\nFeast after feast thus comes and passes by;\nYet passing, points to the glad feast above;\nGiving sweet foretaste of the festal joy,\nThe Lamb's great bridal feast of bliss and love.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "340",
        "title": "Is it Thy will that I should be",
        "author": "Anonymous (1888)",
        "meter": "L.M.",
        "tuneName": "St. Luke Onslow",
        "lyrics": "\nIs it Thy will that I should be\nBuried, in symbol, Lord, with Thee?\nOwning Thee by this solemn sign,\nTelling the world that I am Thine.\n\nGladly I yield obedience now;\nIn all things to Thy will I'd bow;\nI'll follow where my Saviour led,\nAnd humbly in His footsteps tread.\n\nThis emblematic, watery grave\nShows forth His love, who came to save;\nAnd as I enter it, I see\nThe price my Saviour paid for me.\n\nForth from Thy burial, Lord, I come,\nFor Thou hast triumphed o'er the tomb;\nThy resurrection life I share,\nMy portion is no longer here.\n\nO may I count myself to be\nDead to the sins that wounded Thee,\nDead to the pleasures of this earth\nUnworthy of my heavenly birth.\n\nLord Jesus, when I gaze on Thee\nAnd all Thy radiant glory see,\nThat joy will far exceed the shame\nI bear on earth for Thy loved name.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "341",
        "title": "Jesus, the Christ! Eternal Word!",
        "author": "William Morshead (R. Morshead?)",
        "meter": "L.M.",
        "tuneName": "Arizona Erbistock",
        "lyrics": "\nJesus, the Christ! Eternal Word!\nOf all creation Sovereign Lord!\nOn Thee alone by faith we rest,\nAnd lean our weakness on Thy breast.\n\nThy blood hath washed us from our sin;\nThy Spirit sanctifies within;\nAnd Thou for us in all our need\nAt God's right hand dost ever plead.\n\nO Keep us in the narrow way\nThat ne'er from Thee our footsteps stray;\nSustain our weakness, calm our fear,\nAnd to Thy presence keep us near.\n\nAnd be it thus till that blest day\nWhen God shall wipe all tears away:\nQuickly! The promise of Thy word;\nE'en so; Amen. Come, Jesus, Lord!\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "342",
        "title": "Join all the glorious names",
        "author": "Isaac Watts (1709)",
        "meter": "6.6.6.6.8.8.",
        "tuneName": "Darwall's 148th Raleigh",
        "lyrics": "\nJoin all the glorious names\nOf wisdom, love, and power,\nThat mortals ever knew,\nThat angels ever bore;\nAll are too mean to speak His worth,\nToo mean to set our Saviour forth.\n\nGreat prophet of our God!\nOur tongues would bless Thy name;\nBy Thee the joyful news\nOf our salvation came;\nThe joyful news of sins forgiven,\nOf hell subdued, of peace with heaven.\n\nBe Thou our counsellor,\nOur pattern, and our guide;\nAnd through this desert land\nStill keep us near Thy side;\nO let our feet ne'er run astray,\nNor rove, nor seek the crooked way.\n\nWe love our Shepherd's voice;\nHis watchful eye shall keep\nOur wand'ring souls among\nThe thousands of His sheep;\nHe feeds His flock, He calls their names,\nHis bosom bears the tender lambs.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "343",
        "title": "Light of the world, shine on our souls;",
        "author": "Edward Henry Bickersteth",
        "meter": "C.M.",
        "tuneName": "French Nox Praecessit",
        "lyrics": "\nLight of the world, shine on our souls;\nThy grace to us afford;\nAnd while we meet to learn Thy truth\nBe Thou our teacher, Lord.\n\nMay we its riches, power, and depth,\nIts holiness discern;\nIts joyful news of saving grace\nBy blest experience learn.\n\nThus may Thy word be dearer still,\nAnd studied more each day;\nAnd as it richly dwells within,\nThyself in it display.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "344",
        "title": "Low in the grave He lay",
        "author": "Robert Lowry (1874)",
        "meter": "P.M.",
        "tuneName": "Christ Arose",
        "lyrics": "\nLow in the grave He lay,\nJesus, my Saviour,\nWaiting the coming day,\nJesus, my Lord.\n\nVainly they watch His bed,\nJesus, my Saviour,\nVainly they seal the dead,\nJesus, my Lord.\n\nDeath cannot keep his prey,\nJesus, my Saviour,\nHe tore the bars away,\nJesus, my Lord.\n",
        "Chorus": "\nUp from the grave He arose\nWith a mighty triumph o'er His foes;\nHe arose a victor from the dark domain,\nAnd He lives for ever with His saints to reign;\nHe arose! He arose!\nHallelujah! Christ arose!\n",
        "addedChorus": ""
    },
    {
        "number": "345",
        "title": "O safe to the rock that is higher than I",
        "author": "William Orcutt Cushing (1876)",
        "meter": "P.M.",
        "tuneName": "Security (\"Hiding in Thee\" without chorus)",
        "lyrics": "\nO safe to the rock that is higher than I\nMy soul in its conflicts and sorrows would fly;\nSo sinful, so weary, Thine, Thine would I be;\nThou blest Rock of Ages I'm hiding in Thee.\n\nIn the calm of the noontide, in sorrow's lone hour,\nIn times when temptation casts o'er me its power;\nIn the tempest of life, on its wide, heaving sea,\nThou blest Rock of Ages I'm hiding in Thee.\n\nHow oft in the conflict, when pressed by the foe,\nI have fled to my refuge, and breathed out my woe;\nHow often, when trials like sea-billows roll,\nHave I hidden in Thee O Thou rock of my soul.\n",
        "Chorus": "\nHiding in Thee, hiding in Thee,\nThou blest Rock of Ages I'm hiding in Thee.\n",
        "addedChorus": ""
    },
    {
        "number": "346",
        "title": "O Lamb of God, we lift our eyes",
        "author": "Alexander Stewart",
        "meter": "C.M.",
        "tuneName": "Eastgate",
        "lyrics": "\nO Lamb of God, we lift our eyes\nTo Thee amidst the throne;\nShine on us, bid Thy light arise,\nAnd make Thy glory known.\n\nWe know Thy work for ever done,\nOurselves alive and free;\nGraced with the Spirit of the Son,\nMade nigh to God in Thee.\n\nYet would we prove Thine instant grace,\nThy present power would feel;\nLift on us now Thy glorious face,\nThyself, O Lord, reveal.\n\nFrom Thy high place of purest light,\nO Lamb, amidst the throne,\nShine forth upon our waiting sight\nAnd make Thy glory known.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "347",
        "title": "O how the thought that I shall know",
        "author": "Joseph Swain",
        "meter": "P.M.",
        "tuneName": "For Ever Farringdon",
        "lyrics": "\nO how the thought that I shall know\nJesus, who suffered here below\nTo manifest God's favour;\nFor me and all the saints I love,\nBoth here and with Himself above,\nShould my delighted spirit move\nAt that sweet word, for ever.\n\nFor ever to behold Him shine,\nFor evermore to call Him mine,\nAnd see Him still before me;\nFor ever on His face to gaze,\nAnd meet His full assembled rays,\nWhile all His beauty He displays\nTo all His saints in glory.\n\nNot all things else are half so dear\nAs is His blissful presence here;\nWhat must it be in heaven?\n'Tis heaven on earth we hear Him say,\nAs now we journey day by day,\nPoor sinner, cast thy fears away,\nThy sins are all forgiven.\n\nBut how will His celestial voice\nMake our enraptured hearts rejoice\nWhen we shall stand before Him;\nWhen we for Him no longer wait,\nBut, opened wide the heavenly gate,\nWe rise our glorious Lord to meet,\nAnd all His saints adore Him.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "348",
        "title": "O They've reached the sunny shore",
        "author": "Mary Whateley",
        "meter": "7.7.7.3.",
        "tuneName": "Warwick Lane",
        "lyrics": "\nO They've reached the sunny shore,\nThey will never suffer more,\nAll their pain and grief are o'er,\nOver there.\n\nO the street is shining gold,\nAnd the glory is untold;\n'Tis our Shepherd's peaceful fold\nOver there.\n\nO they've done the weary fight,\nJesus saved them by His might,\nAnd they walk with Him in white\nOver there.\n\nO they never shed a tear\nFor the Lord Himself is near,\nAnd to Him they're ever dear\nOver there.\n\nO they feel no chilling blast\nFor their winter time is past,\nAnd the summers always last\nOver there.\n\nO they need no lamp at night\nFor the day is always bright,\nAnd the Saviour is their light\nOver there.\n\nO we'll form a happy band\nWhen we hear our Lord's command,\nAnd in glory round Him stand\nOver there.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "349",
        "title": "Poor, weak, and worthless though I am",
        "author": "John Newton (1779)",
        "meter": "L.M.",
        "tuneName": "Warrington",
        "lyrics": "\nPoor, weak, and worthless though I am,\nI have a rich, almighty friend;\nJesus, the Saviour, is His name;\nHe freely loves, and without end.\n\nHe ransomed me from hell with blood,\nAnd by His power my foes controlled;\nHe found me wand'ring far from God,\nAnd brought me to His chosen fold,\n\nHe cheers my heart, my want supplies,\nAnd says that I shall shortly be\nEnthroned with Him above the skies;\nO what a friend is Christ to me!\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "350",
        "title": "Rock of Ages! Cleft for me",
        "author": "Augustus Montague Toplady (1776)",
        "meter": "7.7.7.7.7.7.",
        "tuneName": "Redhead",
        "lyrics": "\nRock of Ages! Cleft for me,\nLo, I hide myself in Thee,\nWhere the water and the blood\nFrom Thy wounded side which flowed\nAre of sin the double cure,\nCleansing from its guilt and power.\n\nNot the labour of my hands\nCould fulfil Thy law's demands:\nCould my zeal no respite know,\nCould my tears for ever flow,\nAll for sin could not atone:\nThou must save, and Thou alone.\n\nNothing in my hand I bring,\nSimply to Thy cross I cling;\nNaked, come to Thee for dress;\nHelpless, look to Thee for grace;\nHungry, thirsty, still I flee,\nAll-sufficient Lord, to Thee.\n\nWhile I draw this fleeting breath,\nShould mine eyelids close in death,\nWhen I soar to heights unknown,\nAnd behold Thee on Thy throne,\nRock of Ages, cleft for me,\nStill I'll hide myself in Thee.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "351",
        "title": "Without a cloud between;",
        "author": "Albert Midlane",
        "meter": "S.M.",
        "tuneName": "Dennis Zurich",
        "lyrics": "\nWithout a cloud between;\nTo see Him face to face;\nNot struck with dire amazement dumb,\nBut triumphing in grace.\n\nWithout a cloud between;\nTo see Him as He is;\nO who can tell the height of joy,\nThe full transporting bliss.\n\nWithout a cloud between;\nMy longing spirit waits\nFor that sweet hour, from which my soul\nIts highest glory dates.\n\nWithout a cloud between;\nLord Jesus, haste the day,\nThe morning bright without a cloud,\nAnd chase our tears away.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "352",
        "title": "Thou art the Everlasting Word",
        "author": "Josiah Condor (1836)",
        "meter": "8.6.8.6.8.8.",
        "tuneName": "Supremacy Arabia",
        "lyrics": "\nThou art the Everlasting Word,\nThe Father's only Son,\nGod manifestly seen and heard,\nAnd heaven's beloved One.\n\nIn Thee, most perfectly expressed,\nThe Father's glories shine,\nOf the full Deity possessed,\nEternally divine.\n\nTrue image of the Infinite,\nWhose essence is concealed;\nBrightness of uncreated light,\nThe heart of God revealed.\n\nBut the high myst'ries of His name\nAn angel's grasp transcend;\nThe Father only, glorious claim!\nThe Son can comprehend.\n\nYet loving Thee, on whom His love\nIneffable doth rest,\nThy members all, in Thee, above,\nAs one with Thee are blest.\n\nThroughout the universe of bliss\nThe centre Thou, and Sun,\nTh' eternal theme of praise is this,\nTo heaven's beloved One.\n",
        "Chorus": "\nWorthy, O Lamb of God, art Thou,\nThat every knee to Thee should bow.\n",
        "addedChorus": ""
    },
    {
        "number": "353",
        "title": "When we reach our peaceful dwelling",
        "author": "William Paton MacKay & Anne Ross Cundell Cousin 1878",
        "meter": "8.7.8.",
        "tuneName": "Land Ahead",
        "lyrics": "\nWhen we reach our peaceful dwelling\nOn the strong, eternal hills,\nAnd our praise to Him is swelling,\nWho the vast creation fills;\nWhen the path of prayer, and duty,\nAnd affliction, all are trod,\nAnd we wake and see the beauty\nOf our Saviour and our God:\n\nWith the light of resurrection,\nWhen our changed bodies glow,\nAnd we gain the full perfection\nOf the bliss begun below;\nWhen the life the flesh obscureth\nIn each radiant form shall shine,\nAnd the joy that aye endureth\nFlashes forth in beams divine.\n\nShall the memory be banished\nOf His kindness and His care,\nWhen the wants and woes are vanished,\nWhich He loved to soothe and share?\nAll the way by which He led us,\nAll the grievings which He bore,\nAll the patient love He taught us,\nShall we think of them no more?\n\nWe shall read the tender meaning\nOf the sorrows and alarms,\nAs we trod the desert, leaning\nOn His everlasting arms;\nAnd His rest will be the dearer\nWhen we think of weary ways,\nAnd His light will shine the clearer\nAs we muse on cloudy days.\n",
        "Chorus": "\nO 'twill be a glorious morrow\nTo a dark and stormy day\nWhen we smile upon our sorrow,\nAnd the storms have passed away.\n",
        "addedChorus": ""
    },
    {
        "number": "354",
        "title": "What was it, O our God",
        "author": "Anne Taylor Gilbert",
        "meter": "6.6.6.6.8.8.",
        "tuneName": "St. John's",
        "lyrics": "\nWhat was it, O our God,\nLed Thee to give Thy Son,\nTo yield Thy well-beloved\nFor us by sin undone?\n'Twas love unbounded led Thee thus\nTo give Thy well-beloved for us.\n\nWhat led the Son of God\nTo leave His throne on high,\nTo shed His precious blood,\nTo suffer and to die?\n'Twas love, unbounded love for us,\nLed Him to die and suffer thus.\n\nWhat moved Thee to impart\nThy Spirit from above?\nTherewith to fill our heart\nWith heavenly peace and love?\n'Twas love, unbounded love to us,\nMoved Thee to give Thy Spirit thus.\n\nWhat love to Thee we owe,\nOur God, for all Thy grace,\nOur hearts should overflow\nIn everlasting praise:\nHelp us, O Lord, to praise Thee thus\nFor all Thy boundless love to us.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "355",
        "title": "What will it be to dwell above",
        "author": "Joseph Swain",
        "meter": "8.8.8.8.8.8.",
        "tuneName": "Stella Giessen",
        "lyrics": "\nWhat will it be to dwell above,\nAnd with the Lord of glory reign?\nSince the blest knowledge of His love\nSo brightens all this dreary plain;\nNo heart can think, no tongue can tell\nWhat joy 'twill be with Christ to dwell.\n\nWhen sin no more obstructs the sight,\nAnd flesh and sense deceive no more,\nWhen we shall see the prince of light,\nAnd all His works of grace explore;\nWhat heights and depths of love divine\nWill there through endless ages shine!\n\nAnd God has fixed the happy day\nWhen the last tear shall dim our eyes,\nWhen He will wipe these tears away\nAnd fill our hearts with glad surprise\nTo hear His voice, and see His face,\nAnd know the fullness of His grace.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "356",
        "title": "When this passing world is done;",
        "author": "Robert Murray McCheyne (1837)",
        "meter": "7.7.7.7.7.7.",
        "tuneName": "Wells",
        "lyrics": "\nWhen this passing world is done;\nWhen has sunk yon glaring sun;\nWhen I stand with Christ on high\nLooking o'er life's history:\nThen, Lord, shall I fully know,\nNot till then, how much I owe.\n\nWhen I stand before the throne\nDressed in beauty not my own;\nWhen I see Thee as Thou art,\nLove Thee with unsinning heart:\nThen, Lord, shall I fully know,\nNot till then, how much I owe.\n\nWhen the praise of heaven I hear\nLoud as thunders to the ear,\nLoud as many water's noise,\nSweet as harp's melodious voice:\nThen, Lord, shall I fully know,\nNot till then, how much I owe.\n\nChosen, not for good in me;\nWakened up from wrath to flee;\nHidden in the Saviour's side;\nBy the Spirit sanctified:\nTeach me, Lord, on earth to show\nBy my love, how much I owe.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "357",
        "title": "God is love! His word has said it;",
        "author": "Thomas Kelly",
        "meter": "8.7.8.7.4.",
        "tuneName": "Woodlands",
        "lyrics": "\nGod is love! His word has said it;\nThis is news of heavenly birth:\nSpeed abroad and widely spread it,\nMake it known through all the earth\nThat God is love.\n\nNot in yonder blessed regions,\nWhere the Lord, with glory crowned,\nReigns amid angelic legions,\nWill the brightest proof be found\nThat God is love.\n\n'Tis on earth the Lord discloses\nAll His love, how vast it is;\nEarth's the favoured spot He chooses\nTo display the truth of this,\nThat God is love.\n\n'Tis that Man of sorrows yonder\nObject of contempt beneath,\nBut, in heaven, of highest wonder,\nTeaches fully by His death\nThat God is love.\n\nHis a throne, the throne of heaven,\nYet He comes on earth to bleed,\nAnd for man His life is given;\nThis is what declares indeed\nThat God is love.\n\nNot for those who ever loved Him\nDid the Lord of glory die;\nPity to the wretched moved Him:\nWho that hears it will deny\nThat God is love?\n\n'Tis a truth: away and spread it;\nSpread the tidings far and near;\nO may sinners give it credit,\nAnd be joyful when they hear\nThat God is love.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "358",
        "title": "Farewell, for the present, farewell",
        "author": "Charles Russell Hurditch",
        "meter": "P.M.",
        "tuneName": "Farewell",
        "lyrics": "\nFarewell, for the present, farewell,\nAt most for a few fleeting years;\nFor soon with our God we shall dwell.\nAnd know neither sorrow nor tears.\n\nIncreasing in knowledge and grace,\nAbounding in labours of love,\nMay you run in the heavenly race\nTill we meet in the glory above.\n\nNo parting shall ever be known\nOn that happy and heavenly shore;\nThose seated with Christ on His throne\nGo out from His presence no more.\n\nFarewell, for the present, farewell,\nThe long-looked-for glory is near;\nThe joys of that morn, who can tell?\nWhen Jesus our Lord will appear.\n",
        "Chorus": "\nFarewell! Farewell!\nThe long-looked-for glory is near:\nFarewell! Farewell!\nSoon Jesus our Lord will appear.\n",
        "addedChorus": ""
    },
    {
        "number": "359",
        "title": "Praise God, from whom all blessings flow;",
        "author": "Thomas (Bishop) Ken",
        "meter": "L.M.",
        "tuneName": "Old Hundredth",
        "lyrics": "\nPraise God, from whom all blessings flow;\nPraise Him, all creatures here below;\nPraise Him above, ye heavenly host:\nPraise Father, Son, and Holy Ghost,\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "360",
        "title": "Glory, honour, praise, and power",
        "author": "Theodulph of Orleans? or Isaac Watts?",
        "meter": "8.8.8.8.",
        "tuneName": "Ashley",
        "lyrics": "\nGlory, honour, praise, and power,\nBe unto the Lamb for ever;\nJesus Christ is our Redeemer,\nHallelujah! hallelujah!\nHallelujah! Praise the Lord.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "361",
        "title": "All hail the power of Jesus' name!",
        "author": "Edward Perronet & John Rippon (1779)",
        "meter": "C.M.",
        "tuneName": "Miles Lane Diadem",
        "lyrics": "\nAll hail the power of Jesus' name!\nLet angels prostrate fall;\nBring forth the royal diadem\nAnd crown Him Lord of all!\n\nCrown Him ye martyrs of your God\nWho from His altar call;\nExtol the stem of Jesse's rod\nAnd crown Him Lord of all!\n\nYe seed of Israel's chosen race,\nA remnant weak and small,\nHail Him who saves you by His grace,\nAnd crown Him Lord of all!\n\nSinners, whose love can ne'er forget\nThe wormwood and the gall,\nGo, spread your trophies at His feet,\nAnd crown Him Lord of all!\n\nLet every kindred, every tribe,\nOn this terrestrial ball,\nTo Him all majesty ascribe,\nAnd crown Him Lord of all!\n\nO that, with yonder sacred throng,\nWe at His feet may fall;\nJoin in the everlasting song,\nAnd crown Him Lord of all!\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "362",
        "title": "Abide in me, my Saviour",
        "author": "E. Costello",
        "meter": "7.6.7.6.D.",
        "tuneName": "Bentley",
        "lyrics": "\nAbide in me, my Saviour,\nAnd let me in Thee live;\nInto Thy holy keeping\nMy soul, my life I give:\nWithout Thy grace to keep me\nI know my steps will slide,\nSo daily, hourly, always,\nDo Thou in me abide.\n\nI long, my Lord and Master,\nTo love and serve Thee more,\nTo live more near to Thee, Lord.\nThan e'er I have before:\nTo keep more sure and steadfast\nWithin the narrow way,\nIn love's obedience growing\nMore perfect day by day.\n\nThen let my life and labours\nHenceforth and ever be,\nIn fervent love abounding,\nAcceptable to Thee;\nUpon Thy strength relying\nIn weakness and when tried,\nAnd seeking that in all things\nThy name be glorified.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "363",
        "title": "Amidst us our Beloved stands",
        "author": "Charles Haddon Spurgeon (1866)",
        "meter": "L.M.",
        "tuneName": "Gloucester",
        "lyrics": "\nAmidst us our Beloved stands\nAnd bids us view His pierced hands,\nPoints to His wounded feet and side,\nBlest emblems of the crucified.\n\nWhat food luxurious loads the board\nWhen at His table sits the Lord!\nThe wine how rich, the bread how sweet,\nWhen Jesus deigns the guests to meet.\n\nIf now, with eyes defiled and dim,\nWe see the signs, but see not Him,\nO may His love the scales displace\nAnd bid us see Him face to face.\n\nThou glorious Bridegroom of our hearts,\nThy present smile a heaven imparts;\nO lift the veil, if veil there be,\nLet every saint Thy beauties see.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "364",
        "title": "All the way my Saviour leads me;",
        "author": "Frances (Fanny) Jane Crosby (1875)",
        "meter": "8.7.8.7.D.",
        "tuneName": "All the Way",
        "lyrics": "\nAll the way my Saviour leads me;\nWhat have I to ask beside?\nCan I doubt His tender mercy\nWho through life has been my guide?\nHeavenly peace, divinest comfort,\nHere by faith in Him to dwell;\nFor I know, whate'er befall me,\nJesus doeth all things well.\n\nAll the way my Saviour leads me;\nCheers each winding path I tread;\nGives me grace for every trial,\nFeeds me with the living bread:\nThough my weary steps may falter,\nAnd my soul athirst may be,\nGushing from the rock before me,\nLo! a spring of joy I see.\n\nAll the way my Saviour, leads me;\nO the fullness of His love!\nPerfect rest to me is promised\nIn my Father's house above:\nWhen my spirit, clothed, immortal,\nWings its flight to realms of day,\nThis my song through endless ages,\nJesus led me all the way.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "365",
        "title": "And can it be that I should gain",
        "author": "Charles Wesley (1738)",
        "meter": "8.8.8.8.8.8.",
        "tuneName": "Sagina",
        "lyrics": "\nAnd can it be that I should gain\nAn interest in the Saviour's blood?\nDied He for me who caused His pain?\nFor me who Him to death pursued?\nAmazing love! How can it be\nThat Thou, my God, shouldst die for me?\n\n'Tis mystery all! the Immortal dies;\nWho can explore His strange design?\nIn vain the first-born seraph tries\nTo sound the depths of love divine;\n'Tis mercy all! let earth adore,\nLet angel minds inquire no more.\n\nHe left His Father's throne above,\nSo free, so infinite His grace;\nEmptied Himself of all but love,\nAnd bled for Adam's helpless race;\n'Tis mercy all, immense and free;\nFor, O my God, it found out me.\n\nLong my imprisoned spirit lay\nFast bound in sin and nature's night;\nThine eye diffused a quickening ray\u2014\nI woke, the dungeon flamed with light;\nMy chains fell off, my heart was free,\nI rose, went forth, and followed Thee.\n\nNo condemnation now I dread;\nJesus, and all in Him, is mine,\nAlive in Him, my living Head,\nAnd clothed in righteousness divine,\nBold I approach the eternal throne,\nAnd claim the crown, through Christ, my own.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "366",
        "title": "And is it so! we shall be like Thy Son",
        "author": "John Nelson Darby (1872)",
        "meter": "10.10.10.10.",
        "tuneName": "Glaston",
        "lyrics": "\nAnd is it so! we shall be like Thy Son,\nIs this the grace which He for us has won?\nFather of glory! thought beyond all thought\nIn glory to His own blest likeness brought.\n\nO Jesus, Lord, who loved us like to Thee?\nFruit of Thy work, with Thee, too, there to see\nThy glory, Lord, while endless ages roll;\nThy saints the prize and travail of Thy soul.\n\nYet it must be, Thy love had not its rest\nWere Thy redeemed not with Thee fully blest;\nThat love that gives not as the world, but shares\nAll it possesses with its loved co-heirs.\n\nNot we alone, Thy loved ones all, complete,\nIn glory round Thee there with joy shall meet,\nAll like Thee, for Thy glory like Thee, Lord,\nObject supreme of all, by all adored.\n\nThe heart is satisfied, can ask no more;\nAll thought of self is now for ever o'er;\nChrist, its unmingled object, fills the heart\nIn blest adoring love\u2014its endless part.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "367",
        "title": "Assembled, Lord, at Thy behest",
        "author": "David J. Beattie",
        "meter": "C.M.",
        "tuneName": "Martyrdom",
        "lyrics": "\nAssembled, Lord, at Thy behest,\nWe wait Thy voice to hear;\nO come and bless this hallowed feast\u2014\nIn spirit now draw near.\n\nDraw near, yea, linger in our midst;\nThy waiting saints inspire\nWith thoughts of Thine unfailing love;\nGrant this our soul's desire.\n\nSuch love! surpassing human thought,\nThat Thou, blest Lamb of God,\nShould'st bear sin's curse, and interpose\nThine own atoning blood.\n\nWith hearts adoring thus we view\nThy table fitly spread;\nLove's sweet memorial feast to Thee,\nOur risen, glorious Head.\n\nO help us, Lord, while gathered here,\nThat we none else may see;\nKeep Thou our thoughts graced with Thy love,\nAnd wholly stayed on Thee.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "368",
        "title": "Awake, and sing the song",
        "author": "William Hammond (1745)",
        "meter": "S.M.",
        "tuneName": "Carlisle Watchman Galway",
        "lyrics": "\nAwake, and sing the song\nOf glory to the Lamb!\nWake every heart and every tongue\nTo praise the Saviour's name.\n\nSing of His dying love,\nSing of His rising power,\nSing how He intercedes above\nFor those whose sins He bore.\n\nSing on your heavenly way;\nYe ransomed sinners sing;\nSing on, rejoicing every day\nIn Christ, the eternal King.\n\nSoon shall we hear Him say,\nYe blessed children, come;\nSoon will He call us hence away,\nAnd take us to His home.\n\nThere shall each raptured tongue\nHis endless praise proclaim;\nAnd sweeter voices tune the song\nOf glory to the Lamb.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "369",
        "title": "Blest be the everlasting God",
        "author": "Isaac Watts & William Cameron",
        "meter": "C.M.",
        "tuneName": "Bishopthorpe Abridge",
        "lyrics": "\nBlest be the everlasting God,\nThe Father of our Lord;\nBe His abounding mercy praised,\nHis majesty adored.\n\nWhen from the dead He raised His Son,\nAnd called Him to the sky,\nHe gave our souls a lively hope\nThat they should never die.\n\nTo an inheritance divine\nHe taught our hearts to rise;\n'Tis uncorrupted, undefiled,\nUnfading in the skies.\n\nSaints by the power of God are kept\nTill the salvation come;\nWe walk by faith as strangers here,\nBut Christ shall call us home.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "370",
        "title": "Blest morning, whose first dawning rays",
        "author": "Isaac Watts 1709",
        "meter": "C.M.",
        "tuneName": "Abridge",
        "lyrics": "\nBlest morning, whose first dawning rays\nBeheld the Son of God\nArise triumphant from the grave,\nAnd leave His dark abode.\n\nWrapt in the silence of the tomb\nThe great Redeemer lay\nTill the revolving skies had brought\nThe third, the appointed day.\n\nHell and the grave combined their force\nTo hold our Lord, in vain;\nSudden the Conqueror arose\nAnd burst their feeble chain.\n\nTo Thy great name, almighty Lord,\nWe sacred honours pay,\nAnd loud hosannahs shall proclaim\nThe triumphs of the day.\n\nSalvation and immortal praise\nTo our victorious King!\nLet heaven and earth, and rocks and seas,\nWith glad hosannas ring.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "371",
        "title": "Break every barrier down",
        "author": "Bertha Mullen",
        "meter": "D.S.M.",
        "tuneName": "Moncton",
        "lyrics": "\nBreak every barrier down,\nThou Lamb of Calvary;\nShow me the awfullness of sin,\nThe thing which grieveth Thee:\nPurge Thou my soul from dross,\nCleanse me from every sin,\nWash me in Thine atoning blood,\nAnd make me pure within.\n\nBreak every barrier down\nTill Christ be formed in me;\nTill of the travail of Thy soul\nThou, satisfied, shalt see:\nMay earth's success seem nought,\nMay self be lost to sight,\nReproach for Thee be counted joy\nAnd weakness turn to might.\n\nBreak every barrier down,\nThou risen Son of God;\nTake Thou possession of my heart,\nI crown Thee now as Lord!\nO for a closer walk,\nA greater love for Thee,\nA fuller knowledge of Thyself,\nA life of victory.\n\nBreak every barrier down\nAnd reign triumphant, Lord;\nMay every breathing of my heart\nWith Thine be in accord:\nGrant me to enter in\nThe secret place with Thee,\nTo walk with Thee, as Enoch walked,\nInto eternity.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "372",
        "title": "By Christ redeemed, in Christ restored",
        "author": "George Rawson (1857)",
        "meter": "8.8.8.4.",
        "tuneName": "Memoria In Memorian",
        "lyrics": "\nBy Christ redeemed, in Christ restored,\nWe keep the memory adored,\nAnd show the death of our dear Lord\nUntil He come.\n\nHis body, broken in our stead,\nIs seen in this memorial bread,\nAnd so our feeble love is fed\nUntil He come.\n\nThe drops of His dread agony,\nHis life-blood shed for us, we see;\nThe wine shall tell the mystery\nUntil He come.\n\nUntil the trump of God be heard,\nUntil the ancient graves be stirred,\nAnd with the great commanding word\nThe Lord shall come.\n\nO blessed hope! With this elate,\nLet not our hearts be desolate,\nBut, strong in faith, in patience wait\nUntil He come.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "373",
        "title": "Break Thou the bread of life",
        "author": "Mary Artemisia Lathbury & Alexander Groves (1877)",
        "meter": "6.4.6.4.D.",
        "tuneName": "Lathbury Troutbeck",
        "lyrics": "\nBreak Thou the bread of life,\nDear Lord, to me,\nAs Thou didst break the loaves\nBeside the sea;\nBeyond the sacred page\nI seek Thee, Lord;\nMy spirit pants for Thee,\nO living Word.\n\nBreak Thou the bread of life,\nO Lord, to me,\nThat hid within my heart\nThy word may be:\nMould Thou each inward thought,\nFrom self set free,\nAnd let my steps be all\nControlled by Thee.\n\nOpen Thy word of truth\nThat I may see\nThy message written clear\nAnd plain for me;\nThen, in sweet fellowship,\nWalking with Thee,\nThine image on my life\nEngraved will be.\n\nBless Thou the truth, dear Lord,\nTo me, to me,\nAs Thou didst bless the bread\nBy Galilee;\nThen shall all bondage cease,\nAll fetters fall;\nAnd I shall find my peace,\nMy all in all.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "374",
        "title": "Come, my soul, thy suit prepare;",
        "author": "John Newton (1779)",
        "meter": "7.7.7.7.",
        "tuneName": "Ellingham Canterbury",
        "lyrics": "\nCome, my soul, thy suit prepare;\nJesus loves to answer prayer;\nHe Himself has bid thee pray,\nTherefore will not say thee nay.\n\nThou art coming to a King;\nLarge petitions with thee bring;\nFor His grace and power are such,\nNone can ever ask too much.\n\nLord, I come to Thee for rest;\nTake possession of my breast;\nThere Thy blood-bought right maintain,\nAnd without a rival reign.\n\nAs the image in the glass\nAnswers the beholder's face,\nThus unto my heart appear,\nPrint Thine own resemblance there.\n\nWhile I am a pilgrim here\nLet Thy love my spirit cheer;\nAs my guide, my guard, my friend,\nLead me to my journey's end.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "375",
        "title": "Come, every joyful heart",
        "author": "Samuel Stennett",
        "meter": "6.6.6.6.8.8.",
        "tuneName": "Lenox Christ church St. John",
        "lyrics": "\nCome, every joyful heart\nThat loves the Saviour's name,\nYour noblest powers exert\nTo celebrate His fame;\nTell all above and all below\nThe debt of love to Him you owe.\n\nHe left His heavenly crown,\nHis glory laid aside;\nOn wings of love came down,\nAnd wept, and bled, and died:\nWhat He endured no tongue can tell,\nTo save our souls from death and hell.\n\nFrom the dark grave He rose\u2014\nThe mansion of the dead;\nAnd thence His mighty foes\nIn glorious triumph led:\nUp through the sky the Conqueror rode,\nAnd reigns on high, the Saviour God.\n\nFrom thence He'll quickly come,\nHis chariot will not stay,\nAnd bear His people home\nTo realms of endless day:\nThere shall we see His lovely face,\nAnd ever be in His embrace.\n\nJesus, we ne'er can pay\nThe debt of love we owe;\nYet grant us day by day\nOur\ngratitude to show;\nOur life, our all, to Thee we give,\nTo Thee, by whom alone we live.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "376",
        "title": "Crown Him with many crowns",
        "author": "Matthew Bridges & Godfrey Thring (1852)",
        "meter": "D.S.M.",
        "tuneName": "Diademta",
        "lyrics": "\nCrown Him with many crowns,\nThe Lamb upon His throne;\nHark! How the heavenly anthem drowns\nAll music but its own;\nAwake, my soul, and sing\nOf Him who died for thee,\nAnd hail Him as thy matchless King\nThrough all eternity.\n\nCrown Him the Lord of love;\nBehold His hands and side;\nRich wounds, yet visible above\nIn beauty glorified;\nAll hail, Redeemer, hail!\nFor Thou hast died for me:\nThy praise shall never, never fail\nThroughout eternity.\n\nCrown Him the Lord of life\nWho triumphed o'er the grave,\nAnd rose victorious in the strife\nFor those He came to save:\nHis glories now we sing,\nWho died and rose on high,\nWho died eternal life to bring,\nAnd lives that death may die.\n\nCrown Him the Lord of heaven,\nEnthroned in worlds above,\nThe King of kings to whom is given\nThe wondrous name of Love:\nHis reign shall know no end,\nAnd round His pierced feet\nFair flowers of Paradise extend\nTheir fragrance ever sweet.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "377",
        "title": "Dear Lord and Father of mankind",
        "author": "John Greenleaf Whittier (1872)",
        "meter": "8.6.8.8.6.",
        "tuneName": "Rest Repton",
        "lyrics": "\nDear Lord and Father of mankind,\nForgive our foolish ways;\nReclothe us in our rightful mind;\nIn purer lives Thy service find,\nIn deeper reverence, praise.\n\nIn simple trust like theirs who heard,\nBeside the Syrian sea,\nThe gracious calling of the Lord,\nLet us, like them, without a word\nRise up and follow Thee.\n\nO Sabbath rest by Galilee!\nO calm of hills above,\nWhere Jesus knelt to share with Thee\nThe silence of eternity,\nInterpreted by love.\n\nWith that deep hush subduing all\nOur words and works that drown\nThe tender whisper of Thy call,\nAs noiseless let Thy blessing fall\nAs fell Thy manna down.\n\nDrop Thy still dews of quietness\nTill all our strivings cease;\nTake from our souls the strain and stress,\nAnd let our ordered lives confess\nThe beauty of Thy peace.\n\nBreathe through the heats of our desire\nThy coolness and Thy balm;\nLet sense be dumb, let flesh retire;\nSpeak through the earthquake, wind and fire,\nO still small voice of calm!\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "378",
        "title": "Eternal Light! eternal Light!",
        "author": "Thomas Binney (c.18)",
        "meter": "8.6.8.8.6.",
        "tuneName": "Newcastle",
        "lyrics": "\nEternal Light! eternal Light!\nHow pure the soul must be\nWhen, placed within Thy searching sight,\nIt shrinks not, but with calm delight\nCan live, and look on Thee.\n\nThe spirits that surround Thy throne\nMay bear the burning bliss;\nBut that is surely theirs alone,\nSince they have never, never known\nA fallen world like this.\n\nO how shall I, whose native sphere\nIs dark, whose mind is dim,\nBefore the Ineffable appear,\nAnd on my naked spirit bear\nThe uncreated beam?\n\nThere is a way for man to rise\nTo that sublime abode;\nAn offering and a sacrifice,\nA Holy Spirit's energies,\nAn Advocate with God.\n\nThese, these prepare us for the sight\nOf holiness above;\nThe sons of ignorance and night\nMay dwell in the eternal Light,\nThrough the eternal Love.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "379",
        "title": "Far, far away, in heathen darkness dwelling",
        "author": "James McGranahan (1886)",
        "meter": "P.M.",
        "tuneName": "Far Away",
        "lyrics": "\nFar, far away, in heathen darkness dwelling,\nMillions of souls for ever may be lost;\nWho, who will go? salvation's story telling,\nLooking to Jesus, counting not the cost.\n\nSee o'er the world wide open doors inviting:\nSoldiers of Christ, arise and enter in;\nChristians, awake! your forces all uniting,\nSend forth the gospel, break the chains of sin.\n\nWhy will ye die? the voice of God is calling,\nWhy will ye die? re-echo in His name;\nJesus hath died to save from death appalling;\nLife and salvation therefore go, proclaim.\n\nGod speed the day when those of every nation\nGlory to God triumphantly shall sing;\nRansomed, redeemed, rejoicing in salvation,\nShout Hallelujah, for the Lord is King!\n",
        "Chorus": "\nAll power is given unto Me;\nAll power is given unto Me;\nGo ye into all the world and preach the gospel;\nAnd lo, I am with you alway.\n",
        "addedChorus": ""
    },
    {
        "number": "380",
        "title": "Father of peace, and God of love",
        "author": "Philip Doddridge & William Cameron(?) (1751)",
        "meter": "C.M.",
        "tuneName": "Salzburg Palestrina",
        "lyrics": "\nFather of peace, and God of love,\nWe own Thy power to save,\nThat power by which our Shepherd rose\nVictorious o'er the grave.\n\nHim from the dead Thou brought'st again,\nWhen, by His sacred blood,\nConfirmed and sealed for evermore\nThe eternal covenant stood.\n\nO may Thy Spirit fill our souls,\nAnd mould them to Thy will,\nThat our weak hearts no more may stray,\nBut keep Thy precepts still;\n\nThat to perfection's sacred height\nWe nearer still may rise,\nAnd all we think, and all we do,\nBe pleasing in Thine eyes.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "381",
        "title": "Fight the good fight with all thy might;",
        "author": "John Samuel Bewley Monsell (1863)",
        "meter": "L.M.",
        "tuneName": "Pentecost",
        "lyrics": "\nFight the good fight with all thy might;\nChrist is thy strength, and Christ thy right;\nLay hold on life, and it shall be\nThy joy and crown eternally.\n\nRun the straight race through God's good grace,\nLift up thine eyes, and seek His face;\nLife with its way before thee lies;\nChrist is the path, and Christ the prize.\n\nCast care aside; lean on thy Guide,\nHis boundless mercy will provide;\nLean, and the trusting soul shall prove\nChrist is its life, and Christ its love.\n\nFaint not, nor fear; His arm is near;\nHe changeth not, and thou art dear;\nOnly believe, and thou shalt see\nThat Christ is all in all to thee.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "382",
        "title": "From Greenland's icy mountains",
        "author": "Reginald Heber (1819)",
        "meter": "7.6.7.6.D.",
        "tuneName": "Missionary Greenland",
        "lyrics": "\nFrom Greenland's icy mountains,\nFrom India's coral strand,\nWhere Afric's sunny fountains\nRoll down their golden sand;\nFrom many an ancient river,\nFrom many a palmy plain,\nThey call us to deliver\nTheir land from error's chain.\n\nWhat though the spicy breezes\nBlow soft o'er Ceylon's isle;\nThough every prospect pleases,\nAnd only man is vile:\nIn vain with lavish kindness\nThe gifts of God are strewn;\nThe heathen, in his blindness,\nBows down to wood and stone.\n\nCan we, whose souls are lighted\nWith wisdom from on high;\nCan we to men benighted\nThe lamp of life deny?\nSalvation! O salvation!\nThe joyful sound proclaim\nTill earth's remotest nation\nHas learned Messiah's name.\n\nWaft, waft, ye winds, His story,\nAnd you, ye waters, roll,\nTill, like a sea of glory,\nIt spreads from pole to pole;\nTill o'er our ransomed nature\nThe Lamb for sinners slain,\nRedeemer, King, Creator,\nIn bliss returns to reign.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "383",
        "title": "Gathered, Lord, around Thy table",
        "author": "Douglas Russell",
        "meter": "8.5.8.3.",
        "tuneName": "Bullinger Hartham",
        "lyrics": "\nGathered, Lord, around Thy table,\nNow we seek Thy face;\nLet us know Thy presence with us,\nLord of grace.\n\nLove divine first drew us to Thee\nIn our sin and need;\nFor our sin, in deep compassion,\nThou didst bleed.\n\nRisen Lord, in glory seated,\nWe are one with Thee;\nThou hast snapt the chains that bound us:\nWe are free.\n\nGratefully we Thee remember\nAs we break the bread,\nSymbol of Thy body broken\nIn our stead.\n\nDrink we too the cup of blessing\nWhich Thy love has filled;\nThrough Thy blood we have redemption:\nFears are stilled.\n\nBackward look we, drawn to Calvary,\nMusing while we sing;\nForward haste we to Thy coming,\nLord and King.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "384",
        "title": "Gathered to Thy name, Lord Jesus",
        "author": "C. A. Wellesley",
        "meter": "8.7.8.7.",
        "tuneName": "Chapel Brae",
        "lyrics": "\nGathered to Thy name, Lord Jesus,\nLosing sight of all but Thee,\nO what joy Thy presence gives us,\nCalling up our hearts to Thee.\n\nLoved with love which knows no measure\nSave the Father's love to Thee,\nBlessed Lord, our hearts would treasure\nAll the Father's thoughts of Thee.\n\nAll His joy, His rest, His pleasure,\nAll His deep delight in Thee;\nLord, Thy heart alone can measure\nWhat Thy Father found in Thee.\n\nHow He set His love upon Thee,\nCalled Thee His beloved Son;\nYet for us He did not spare Thee,\nBy Thy death our life was won.\n\nO the joy, the wondrous singing\nWhen we see Thee as Thou art;\nThy blest name, Lord Jesus, bringing\nSweetest music to God's heart.\n\nNotes of gladness songs unceasing,\nHymns of everlasting praise,\nPsalms of glory, joy increasing\nThrough God's endless day of days.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "385",
        "title": "Gazing on Thee, Lord, in glory",
        "author": "Centra Thompson",
        "meter": "8.7.8.7.",
        "tuneName": "West Meletius",
        "lyrics": "\nGazing on Thee, Lord, in glory,\nWhile our hearts in worship bow,\nThere we read the wondrous story\nOf the cross, its shame and woe.\n\nEvery mark of dark dishonour\nHeaped upon Thy thorn-crowned brow,\nAll the depths of Thy heart's sorrow\nTold in answering glory now.\n\nOn that cross, alone, forsaken,\nWhere no pitying eye was found;\nNow to God's right hand exalted,\nWith Thy praise the heavens resound.\n\nDid Thy God e'en then forsake Thee,\nHide His face from Thy deep need?\nIn Thy face, once marred and smitten,\nAll His glory now we read.\n\nGazing on it we adore Thee,\nBlessed, precious, holy Lord;\nThou, the Lamb, art ever worthy;\nThis be earth's and heaven's accord.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "386",
        "title": "Glory to Thee; Thou Son of God most High",
        "author": "Edward C. Quine",
        "meter": "10.4's",
        "tuneName": "Sandon Luz Benigna",
        "lyrics": "\nGlory to Thee; Thou Son of God most High,\nAll praise to Thee!\nGlory to Thee, enthroned above the sky,\nWho died for me;\nHigh on Thy throne, Thine ear, Lord Jesus, bend\nAs grateful hearts now to Thyself ascend.\n\nDeep were Thy sorrows, Lord, when heaven frowned\u2014\nGethsemane!\nBloodlike Thy sweat, Lord falling to the ground\nSo heavily;\nDark was the night, but heaven was darker still,\nO Christ my God!\u2014is this the Father's will?\n\nThorns wreathed Thy brow when hanging on the tree,\nMan's cruelty!\nWhy lavish love like this, O Lord, on me!\nThou lovest me!\nWould that my soul could understand its length,\nIts breadth, depth, height, and\neverlasting strength!\n\nThy precious blood was freely shed for me\nOn Calvary\nTo save me from a lost eternity;\nGlory to Thee!\nNor death, nor hell, nor things below\u2014above\nCan sever me from Thy eternal love.\n\nLike shoreless seas, Thy love can know no bound;\nThou lovest me!\nDeep, vast, immense, unfathomed, Lord\u2014profound,\nLord, I love Thee!\nAnd when above, my crown is at Thy feet,\nI'll praise Thee still for Calvary's\nmercy seat.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "387",
        "title": "Go, labour on; spend, and be spent;",
        "author": "Horatius Bonar (1843)",
        "meter": "L.M.",
        "tuneName": "Hesperus St. Bartholomew",
        "lyrics": "\nGo, labour on; spend, and be spent;\nThy joy to do the Father's will;\nIt is the way the Master went,\nShould not the servant tread it still?\n\nGo, labour on, 'tis not for naught;\nThy earthly loss is heavenly gain;\nMen heed thee, love thee, praise thee, not;\nThe Master praises\u2014what are men?\n\nGo, labour on while it is day,\nThe world's dark night is hastening on;\nSpeed, speed thy work, cast sloth away,\nIt is not thus that souls are won.\n\nToil on, faint not, keep watch and pray;\nBe wise the erring soul to win;\nGo forth into the world's highway,\nCompel the wanderer to come in.\n\nToil on, and in thy toil rejoice;\nFor toil comes rest, for exile, home;\nSoon shalt thou hear the Bridegroom's voice,\nThe midnight cry, Behold, I come!\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "388",
        "title": "Gracious God, we worship Thee",
        "author": "Samuel Trevor Francis",
        "meter": "7.7.7.6.",
        "tuneName": "Worship",
        "lyrics": "\nGracious God, we worship Thee,\nReverently we bow the knee;\nJesus Christ our only plea;\nFather, we adore Thee.\n\nVast Thy love, how deep, how wide,\nIn the gift of Him who died;\nRighteous claims all satisfied;\nFather, we adore Thee.\n\nLow we bow before Thy face,\nSons of God, O wondrous place!\nGreat the riches of Thy grace;\nFather, we adore Thee.\n\nBy Thy Spirit grant that we\nWorshippers in truth may be;\nPraise, as incense sweet to Thee;\nFather, we adore Thee.\n\nYet again our song we raise,\nNote of deep adoring praise;\nNow, and soon through endless days;\nFather, we adore Thee.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "389",
        "title": "Hail to the Lord's Anointed",
        "author": "James Montgomery (1821)",
        "meter": "7.6.7.6.D.",
        "tuneName": "Cruger",
        "lyrics": "\nHail to the Lord's Anointed,\nGreat David's greater Son!\nHail, in the time appointed,\nHis reign on earth begun;\nHe comes to break oppression,\nTo set the captive free;\nTo take away transgression\nAnd rule in equity.\n\nHe shall come down like showers\nUpon the fruitful earth:\nAnd love, joy, hope, like flowers,\nSpring in His path to birth;\nBefore Him on the mountains\nShall peace, the herald, go;\nAnd righteousness in fountains\nFrom hill to valley flow.\n\nKings shall fall down before Him,\nAnd gold and incense bring;\nAll nations shall adore Him,\nHis praise all people sing:\nFor He shall have dominion\nO'er river, sea, and shore,\nFar as the eagle's pinion\nOr dove's light wing can soar,\n\nO'er every foe victorious\nHe on His throne shall rest;\nFrom age to age more glorious,\nAll-blessing and all-blest:\nThe tide of time shall never\nHis covenant remove;\nHis name shall stand for ever;\nThat name to us is\u2014Love.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "390",
        "title": "He dies! He dies! The lowly Man of sorrows",
        "author": "Charles Russell Hurditch",
        "meter": "P.M.",
        "tuneName": "He that Liveth",
        "lyrics": "\nHe dies! He dies! The lowly Man of sorrows,\nOn whom were laid our many griefs and woes;\nOur sins He bore beneath God's awful billows,\nAnd He hath triumphed over all our foes.\n\nHe lives! He lives! What glorious consolation!\nExalted at His Father's own right hand;\nHe pleads for us, and, by His intercession,\nEnables all His saints by grace to stand.\n\nHe comes! He comes! O blest anticipation!\nIn keeping with His true and faithful word;\nTo call us to our heavenly consummation\u2014\nCaught up, to be for ever with the Lord.\n",
        "Chorus": "\nI am He that liveth, that liveth, and was dead;\nAnd behold, . . I am alive . . for evermore, . .\nBehold, . . I am alive . . for evermore . . .\nI am He that liveth, that liveth. And was dead;\nAnd behold, . . I am alive . . for evermore.\n",
        "addedChorus": ""
    },
    {
        "number": "391",
        "title": "He giveth more grace when the burdens grow greater",
        "author": "Annie Johnson Flint",
        "meter": "12.11.12.11.",
        "tuneName": "Surrey Chapel",
        "lyrics": "\nHe giveth more grace when the burdens grow greater,\nHe sendeth more strength when the labours increase,\nTo added affliction He addeth His mercy,\nTo multiplied trials His multiplied peace.\n\nWhen we have exhausted our store of endurance,\nWhen strength has declined ere the day is half-done,\nWhen we reach the end of our hoarded resources,\nOur Father's full giving is only begun.\n\n(or chorus) His love has no limit, His grace has no measure,\nHis power no boundary known unto men,\nFor out of His infinite riches in Jesus\nHe giveth and giveth and giveth again.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "392",
        "title": "Holy, holy, holy! Lord God Almighty!",
        "author": "Reginald Heber (1826)",
        "meter": "11.12.12.10.",
        "tuneName": "Nicaea",
        "lyrics": "\nHoly, holy, holy! Lord God Almighty!\nEarly in the morning our song shall rise to Thee;\nHoly, holy, holy! Merciful and mighty,\nGod in Three Persons, blessed Trinity!\n\nHoly, holy, holy! Though the darkness hide Thee,\nThough the eye of sinful man Thy glory may not see;\nOnly Thou art holy, there is none beside Thee,\nPerfect in power, in love, and purity.\n\nHoly, holy, holy! Lord God Almighty!\nAll Thy works shall praise Thy name in earth, and sky and sea;\nHoly, holy, holy! Merciful and mighty,\nGod in Three Persons, blessed Trinity!\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "393",
        "title": "How I praise Thee, precious Saviour!",
        "author": "Mary E. Maxwell",
        "meter": "8.7.8.7.D.",
        "tuneName": "Channels Only",
        "lyrics": "\nHow I praise Thee, precious Saviour!\nThat Thy love laid hold of me;\nThou has saved and cleansed and filled me,\nThat I might Thy channel be.\n\nJust a channel, full of blessing,\nTo the thirsty hearts around;\nTo tell out Thy full salvation,\nAll Thy loving message sound.\n\nEmptied that Thou shouldest fill me,\nA clean vessel in Thine hand;\nWith no power but as Thou givest\nGraciously with each command.\n\nWitnessing Thy power to save me,\nSetting free from self and sin;\nThou hast bought me to possess me,\nIn Thy fullness, Lord, come in.\n",
        "Chorus": "\nChannels only, blessed Master,\nBut with all Thy wondrous power\nFlowing through us, Thou canst use us\nEvery day and every hour.\n",
        "addedChorus": ""
    },
    {
        "number": "394",
        "title": "I am the Lord's! O joy beyond expression",
        "author": "Lucy Ann Bennett",
        "meter": "11.10's",
        "tuneName": "Raynolds Within the Veil",
        "lyrics": "\nI am the Lord's! O joy beyond expression,\nO sweet response to voice of love divine;\nFaith's joyous Yes to the assuring Whisper,\nFear not, I have redeemed thee. thou art Mine.\n\nI am the Lord's! it hushes every murmur,\nIt soothes the fevered spirit to its rest;\nI am the Lord's! it is the child's rejoinder,\nWho knows and feels the Father's will is best.\n\nI am the Lord's! O eagerly and gladly,\nTriumphantly and gratefully we sing;\nI am the Lord's it is the rock unfailing\nTo which our storm-tossed souls in danger cling.\n\nI am the Lord's! yet teach me all it meaneth,\nAll it involves of love and loyalty,\nOf holy service, full and glad surrender,\nAnd unreserved obedience unto Thee.\n\nI am the Lord's! yes; body, soul and spirit;\nThey're sealed, and irrecoverably Thine;\nAs Thou, Beloved, in Thy grace and fullness\nFor ever and for evermore art mine.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "395",
        "title": "In heavenly love abiding",
        "author": "Anna Laetitia Waring & E. Cronin(?) (1850)",
        "meter": "7.6.7.6.D.",
        "tuneName": "Penlan",
        "lyrics": "\nIn heavenly love abiding,\nNo change my heart shall fear;\nAnd safe is such confiding,\nFor nothing changes here:\nThe storm may roar without me,\nMy heart may low be laid,\nBut God is round about me,\nAnd can I be dismayed?\n\nWherever He may guide me\nNo want shall turn me back;\nMy Shepherd is beside me,\nAnd nothing can I lack:\nHis wisdom ever waketh,\nHis sight is never dim;\nHe knows the way He taketh,\nAnd I will walk with Him.\n\nGreen pastures are before me\nWhich yet I have not seen;\nBright skies will soon be o'er me\nWhere dark the clouds have been:\nMy hope I cannot measure,\nMy path to life is free;\nMy Saviour has my treasure,\nAnd He will walk with me.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "396",
        "title": "Immortal, invisible, God only wise",
        "author": "Walter Chalmers Smith (1876)",
        "meter": "11.11's",
        "tuneName": "St. Denio St. Luke",
        "lyrics": "\nImmortal, invisible, God only wise,\nIn light inaccessible hid from our eyes,\nMost blessed, most glorious, the Ancient of Days,\nAlmighty, victorious, Thy great name we praise.\n\nUnresting, unhasting, and silent as light,\nNor wanting, nor wasting, Thou rulest in might;\nThy justice like mountains high soaring above\nThy clouds which are fountains of goodness and love.\n\nTo all, life Thou givest\u2014to both great and small;\nIn all life Thou livest, the true life of all;\nWe blossom and flourish as leaves on the tree,\nAnd wither and perish\u2014but nought changeth Thee.\n\nGreat Father of glory, pure Father of light,\nThine angels adore Thee, all veiling their sight;\nAll laud we would render: O help us to see\n'Tis only the splendour of light hideth Thee.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "397",
        "title": "In the name of Jesus every knee shall bow",
        "author": "Caroline Maria Noel (1870)",
        "meter": "6.4.6.4.D.",
        "tuneName": "Evelyns Zundel",
        "lyrics": "\nIn the name of Jesus every knee shall bow\nEvery tongue confess Him King of glory now;\n'Tis the Father's pleasure we should call Him Lord,\nWho from the beginning was the mighty Word.\n\nHumbled for a season to receive a name\nFrom the lips of sinners unto whom He came;\nFaithfully He bore it spotless to the last,\nBrought it back victorious when from death He passed:\n\nBore it up triumphant with its human light,\nThrough all ranks of creatures to the central height;\nTo the throne of Godhead, to the Father's breast,\nFilled it with the glory of that perfect rest.\n\nIn your hearts enthrone Him; there let Him subdue\nAll that is not holy, all that is not true;\nCrown Him as your Captain in temptation's hour;\nLet His will enfold you in its light and power.\n\nBrethren, this Lord Jesus shall return again,\nWith His Father's glory, with His angel train;\nFor all wreaths of empire meet upon His brow,\nAnd our hearts confess Him King of glory now.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "398",
        "title": "Jesus calls us! o'er the tumult",
        "author": "Cecil Frances (Humphreys) Alexander (1852)",
        "meter": "8.7.8.7.",
        "tuneName": "St. Andrew Mahon St. Catherine",
        "lyrics": "\nJesus calls us! o'er the tumult\nOf our life's wild restless sea\nDay by day His sweet voice soundeth,\nSaying, Christian, follow Me.\n\nAs, of old, apostles heard it\nBy the Galilean lake,\nTurned from home and toil and kindred,\nLeaving all for His dear sake.\n\nJesus calls us from the worship\nOf the vain world's golden store,\nFrom each idol that would keep us;\nSaying, Christian, love Me more.\n\nIn our joys and in our sorrows,\nDays of toil and hours of ease,\nStill He calls, in cares and pleasures,\nChristian, love Me more than these.\n\nJesus calls us! By Thy mercies,\nSaviour, may we hear Thy call,\nGive our hearts to Thy obedience,\nServe and love Thee best of all.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "399",
        "title": "Jesus, Lord, I need Thy presence",
        "author": "George Goodman",
        "meter": "8.7.8.7.7.7.",
        "tuneName": "Ottawa",
        "lyrics": "\nJesus, Lord, I need Thy presence\nAs I journey on my way,\nFor without Thee I am lonely,\nAnd my feet are apt to stray;\nBut if Thou wilt walk with me\nLife will calm and holy be.\n\nJesus, Lord, I need Thy wisdom,\nFor perplexing problems press,\nAnd without Thee I am foolish,\nNor can bear the strain and stress;\nBut if Thou wilt counsel me\nI shall true and upright be.\n\nJesus, Lord, I need Thy power,\nFor temptations come and go,\nAnd without Thee I am helpless,\nWith no strength to meet the foe;\nBut if Thou wilt strengthen me\nLife will all-triumphant be.\n\nJesus, Lord, I need Thy guidance,\nFire by night, and cloud by day,\nFor without Them I am sightless,\nGroping for the proper way;\nBut if Thou dost lead me on\nI will follow Thee alone.\n\nJesus, Lord, Thy love so tender\nIs my greatest need of all,\nFor without Thee pride and anger\nFrom unguarded lips will fall;\nBut if Thou Thy love impart\nI shall have a gracious heart.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "400",
        "title": "Jesus, I am resting, resting",
        "author": "Jean Sophia Pigott (1876)",
        "meter": "8.7.8.7.D.",
        "tuneName": "Tranquillity",
        "lyrics": "\nJesus, I am resting, resting\nIn the joy of what Thou art;\nI am finding out the greatness\nOf Thy loving heart:\nThou hast bid me gaze upon Thee,\nAnd Thy beauty fills my soul,\nFor, by Thy transforming power,\nThou hast made me whole.\n\nO how great Thy loving-kindness!\nVaster, broader than the sea:\nO how marvellous Thy goodness\nLavished all on me!\nYes, I rest in Thee, Beloved,\nKnow what wealth of grace is Thine,\nKnow Thy certainty of promise,\nAnd have made it mine.\n\nSimply trusting Thee, Lord Jesus,\nI behold Thee as Thou art,\nAnd Thy love, so pure, so changeless,\nSatisfies my heart;\nSatisfies its deepest longings,\nMeets, supplies its every need,\nCompasseth me round with blessings;\nThine is love indeed.\n\nEver lift Thy face upon me\nAs I work and wait for Thee,\nResting 'neath Thy smile, Lord Jesus,\nEarth's dark shadows flee;\nBrightness of my Father's glory,\nSunshine of my Father's face,\nKeep me ever trusting, resting;\nFill me with Thy grace.\n",
        "Chorus": "\nJesus, I am resting, resting\nIn the joy of what Thou art;\nI am finding out the greatness\nOf Thy loving heart.\n",
        "addedChorus": ""
    },
    {
        "number": "401",
        "title": "Jesus, Lord, we come together",
        "author": "Thomas Henry Reynolds",
        "meter": "8.7.8.7.",
        "tuneName": "Melbourne Hall Firenze",
        "lyrics": "\nJesus, Lord, we come together\nIn the bonds of Thine own love;\nThou hast drawn our footsteps hither\nIts deep meaning now to prove.\n\nHere together we recall Thee,\nIn Thy presence break the bread;\nNever more can grief befall Thee,\nThou art risen from the dead.\n\nBut Thy love remains, that entered\nInto death to make us Thine;\nIn that death all love was centred;\nThankful now we drink the wine.\n\nHere by grace we taste the blessing,\nSoon to fill a world of bliss;\nAnd we bless Thy name confessing\nThine own love our portion is.\n\nSweet it is to sit before Thee,\nSweet to hear Thy blessed voice,\nSweet to worship and adore Thee,\nFor our hearts in Thee rejoice.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "402",
        "title": "Jesus, our Lord, with what joy we adore Thee",
        "author": "Henry d'Arcy Champney",
        "meter": "11.10's",
        "tuneName": "Springfield Epiphany Hymn Tauy Cleave",
        "lyrics": "\nJesus, our Lord, with what joy we adore Thee,\nChanting our praise to Thyself on the throne,\nBlest in Thy presence, we worship before Thee,\nOwn Thou art worthy, and worthy alone.\n\nVerily God, yet become truly human\u2014\nLower than angels\u2014to die in our stead;\nHow hast Thou, long promised Seed of the woman,\nTrod on the serpent and bruised his head!\n\nHow didst Thou humble Thyself to be taken,\nLed by Thy creatures, and nailed to the cross?\nHated of men, and of God, too, forsaken,\nShunning not darkness, the curse, and the loss.\n\nHow hast Thou triumphed, and triumphed with glory,\nBattled death's forces, rolled back every wave!\nCan we refrain, then, from telling the story,\nHow Thou art victor o'er death and the grave?\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "403",
        "title": "Jesus shall reign where'er the sun",
        "author": "Isaac Watts (1719)",
        "meter": "L.M.",
        "tuneName": "Duke Street Rimington Truro",
        "lyrics": "\nJesus shall reign where'er the sun\nDoth his successive journeys run;\nHis kingdom stretch from shore to shore\nTill moons shall wax and wane no more.\n\nFor Him shall endless prayer be made,\nAnd praises throng to crown His head;\nHis name like sweet perfume shall rise\nWith every morning sacrifice.\n\nPeople and realms of every tongue\nDwell on His love with sweetest song;\nAnd infant voices shall proclaim\nTheir early blessings on His name.\n\nBlessings abound where'er He reigns,\nThe prisoner leaps to lose his chains,\nThe weary find eternal rest,\nAnd all the sons of want are blest.\n\nLet every creature rise and bring\nPeculiar honours to our King,\nAngels descend with songs again,\nAnd earth repeat the loud Amen.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "404",
        "title": "Jesus, Thou joy of loving hearts",
        "author": "Bernard of Clairvaux tr/ad by Ray Palmer (12 c)",
        "meter": "L.M.",
        "tuneName": "Maryton Hereford",
        "lyrics": "\nJesus, Thou joy of loving hearts,\nThou fount of life, Thou light of men,\nFrom the best bliss that earth imparts\nWe turn unfilled to Thee again.\n\nThy truth unchanged hath ever stood;\nThou savest those that on Thee call;\nTo them that seek Thee Thou art good;\nTo them that find Thee, all in all.\n\nWe taste Thee, O Thou living bread!\nAnd long to feast upon Thee still;\nWe drink of Thee, the fountain-head,\nAnd thirst our souls from Thee to fill.\n\nOur restless spirits yearn for Thee,\nWhere'er our changeful lot is cast:\nGlad, when Thy gracious smile we see;\nBlest, when our faith can hold Thee fast.\n\nO Jesus ever with us stay,\nMake all our moments calm and bright;\nChase the dark night of sin away;\nShed o'er the world Thy holy light.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "405",
        "title": "Just as I am, Thine own to be",
        "author": "Marianne \"Farningham\" Hearn (1887)",
        "meter": "8.8.8.6.",
        "tuneName": "Cambridge Howcroft",
        "lyrics": "\nJust as I am, Thine own to be,\nFriend of the young, who lovest me,\nTo consecrate myself to Thee,\nO Jesus Christ, I come.\n\nIn the glad morning of my day,\nMy life to give, my vows to pay,\nWith no reserve and no delay,\nWith all my heart, I come.\n\nJust as I am, young, strong and free,\nTo be the best that I can be\nFor truth, and righteousness, and Thee,\nLord of my life, I come.\n\nAnd for Thy sake to win renown,\nAnd then to take the victor's crown\nAnd at Thy feet to lay it down,\nO Master, Lord, I come.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "406",
        "title": "Let the song go round the earth",
        "author": "Sarah Geraldina Stock (1898)",
        "meter": "7.5.7.5.7.7.",
        "tuneName": "Moel Llys",
        "lyrics": "\nLet the song go round the earth,\nJesus Christ is Lord!\nSound His praises, tell His worth,\nBe His name adored;\nEvery clime and every tongue\nJoin the grand, the glorious song.\n\nLet the song go round the earth\nFrom the eastern sea,\nWhere the daylight has its birth,\nGlad, and bright, and free;\nChina's millions join the strains,\nWaft them on to India's plains.\n\nLet the song go round the earth;\nLands, where Islam's sway\nDarkly broods o'er home and hearth,\nCast their bonds away:\nLet His praise from Afric's shore\nRise and swell her wide lands o'er.\n\nLet the song go round the earth\nWhere the summer smiles;\nLet the notes of holy mirth\nBreak from distant isles;\nInland forests dark and dim,\nSnowbound coasts give back the hymn.\n\nLet the song go round the earth,\nJesus Christ is King!\nWith the story of His worth\nLet the whole world ring;\nHim creation all adore\nEvermore and evermore.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "407",
        "title": "Like a river, glorious",
        "author": "Frances Ridley Havergal (\u00a91876)",
        "meter": "6.4.6.4.D.",
        "tuneName": "Wye Valley",
        "lyrics": "\nLike a river, glorious\nIs God's perfect peace,\nOver all victorious\nIn its bright increase,\nPerfect, yet it floweth\nFuller every day,\nPerfect, yet it groweth\nDeeper all the way.\n\nHidden in the hollow\nOf His blessed hand,\nNever foe can follow,\nNever traitor stand;\nNot a surge of worry,\nNot a shade of care,\nNot a blast of hurry\nTouch the spirit there.\n\nEvery joy or trial\nFalleth from above,\nTraced upon life's dial\nBy the Sun of love:\nWe may trust Him fully\nAll for us to do;\nThey who trust Him wholly\nFind Him wholly true.\n",
        "Chorus": "\nStayed upon Jehovah,\nHearts are fully blest;\nFinding, as He promised,\nPerfect peace and rest,\n",
        "addedChorus": ""
    },
    {
        "number": "408",
        "title": "Lo, He comes! With clouds descending",
        "author": "John Cennick tr/ad by Charles Wesley & Martin Madan (1752)",
        "meter": "8.7.8.7.4.7.",
        "tuneName": "Helmsley",
        "lyrics": "\nLo, He comes! With clouds descending,\nOnce for favoured sinners slain;\nThousand thousand saints attending\nSwell the triumph of His train;\nHallelujah! (3x Helmsley)\nJesus comes, and comes to reign!\n\nEvery eye shall now behold Him\nRobed in brightest majesty;\nThose who set at naught and sold Him,\nPierced and nailed Him to the tree,\nDeeply wailing, (3x Helmsley)\nShall the true Messiah see.\n\nLo, the tokens of His passion\nStill His glorious body bears;\nCause of endless exultation\nTo His ransomed worshippers;\nHallelujah! (3x Helmsley)\nNow the day of Christ appears.\n\nYea, Amen! Let all adore Thee,\nHigh on Thine eternal throne;\nSaviour, take the power and glory,\nShare the kingdom with Thine own;\nO come quickly! (3x Helmsley)\nHallelujah! Come Lord, come!\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "409",
        "title": "Lord, e'en to death Thy love could go",
        "author": "H. L. Rossier tr/ad by C. A. Wellesley",
        "meter": "C.M.",
        "tuneName": "Lynnwood Dublin",
        "lyrics": "\nLord, e'en to death Thy love could go,\nA death of shame and loss,\nTo vanquish for us every foe,\nAnd break the strong man's force.\n\nO what a load was Thine to bear,\nAlone in that dark hour,\nOur sins in all their terror there,\nGod's wrath and Satan's power.\n\nThe storm that bowed Thy blessed head\nIs hushed for ever now,\nAnd rest divine is ours instead,\nWhilst glory crowns Thy brow.\n\nWithin the Father's house on high\nWe soon shall sing Thy praise;\nBut here, where Thou didst bleed and die,\nWe learn that song to raise.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "410",
        "title": "Lord, speak to me, that I may speak",
        "author": "Frances Ridley Havergal (1872)",
        "meter": "L.M.",
        "tuneName": "Winscott Barnet Ne Derelinquas Me",
        "lyrics": "\nLord, speak to me, that I may speak\nIn living echoes of Thy tone;\nAs Thou hast sought, so let me seek\nThy erring children lost and lone.\n\nO lead me, Lord, that I may lead\nThe wand'ring and the wav'ring feet;\nO feed me, Lord, that I may feed\nThy hung'ring ones with manna sweet.\n\nO teach me, Lord, that I may teach\nThe precious things Thou dost impart;\nAnd wing my words, that they may reach\nThe hidden depths of many a heart.\n\nO fill me with Thy fullness, Lord,\nUntil my very heart o'erflow\nIn kindling thought and glowing word,\nThy love to tell, Thy praise to show.\n\nO use me, Lord, use even me,\nJust as Thou wilt, and when, and where,\nUntil Thy blessed face I see;\nThy rest, Thy joy, Thy glory share.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "411",
        "title": "Look upon us, blessed Lord",
        "author": ">Tobias Clausnitzer tr/ad by Robert Alexander Stewart MacAlister (1663)",
        "meter": "7.8.7.8.8.8.",
        "tuneName": "Liebster Jesu",
        "lyrics": "\nLook upon us, blessed Lord,\nTake our wandering thoughts and guide us;\nWe have come to hear Thy word,\nWith Thy teaching now provide us,\nThat, from earth's distractions turning,\nWe Thy message may be learning.\n\nFor Thy Spirit's radiance bright\nWe, assembled here, are hoping;\nIf Thou shouldst withhold the light,\nIn the dark our souls were groping;\nIn word, deed, and thought direct us;\nThou, none other, canst correct us.\n\nBrightness of the Father's face,\nLight of light, from God proceeding,\nMake us ready in this place;\nEar and heart await Thy leading:\nIn our study, prayers and praising,\nMay our souls find their upraising.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "412",
        "title": "Lord, Thy word abideth",
        "author": "Henry Williams Baker (1861)",
        "meter": "6.6.6.6.",
        "tuneName": "Ravenshaw",
        "lyrics": "\nLord, Thy word abideth,\nAnd our footsteps guideth;\nWho its truth believeth\nLight and joy receiveth.\n\nWhen our foes are near us,\nThen Thy word doth cheer us,\nWord of consolation,\nMessage of salvation.\n\nWhen the storms are o'er us,\nAnd dark clouds before us,\nThen its light directeth,\nAnd our way protecteth.\n\nWho can tell the pleasure,\nWho recount the treasure,\nBy Thy word imparted\nTo the simple-hearted?\n\nWord of mercy, giving\nSuccour to the living;\nWord of life, supplying\nComfort to the dying.\n\nO that we, discerning\nIts most holy learning,\nLord, may love and fear Thee,\nEvermore be near Thee.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "413",
        "title": "Love divine, all loves excelling",
        "author": "Charles Wesley (1747)",
        "meter": "8.7.8.7.D.",
        "tuneName": "Beecher Hyfrydol Blaenwern",
        "lyrics": "\nLove divine, all loves excelling,\nJoy of heaven, to earth come down;\nMaking us Thy humble dwelling,\nAll Thy faithful mercies crown:\nJesus, Thou art all compassion;\nPure, unbounded love Thou art,\nVisit us with Thine affection,\nEnter every longing heart.\n\nCome, Almighty, to deliver!\nLet us all Thy grace receive,\nFollow in Thy steps, and never,\nNevermore the pathway leave:\nThen our hearts will yield their blessing,\nSweet incense to God above,\nOffer praises without ceasing,\nGlory in Thy perfect love.\n\nFirstfruits of Thy new creation,\nFaithful, holy, may we be,\nJoyful in Thy great salvation,\nDaily more conformed to Thee:\nChanged from glory into glory,\nTill in heaven we take our place,\nThen to worship and adore Thee,\nLost in wonder, love and praise.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "414",
        "title": "Majestic sweetness sits enthroned.",
        "author": "Samuel Stennett (1787)",
        "meter": "C.M.",
        "tuneName": "Mirfield",
        "lyrics": "\nMajestic sweetness sits enthroned.\nUpon the Saviour's brow;\nHis head with radiant glories crowned,\nHis lips with grace o'erflow.\n\nNo mortal can with Him compare\nAmong the sons of men;\nFairer is He than all the fair\nThat fill the heavenly train.\n\nHe saw me plunged in deep distress,\nHe came to my relief;\nFor me He bore the shameful cross,\nAnd carried all my grief.\n\nTo Him I owe my life and breath,\nAnd all the joys I have;\nHe makes me triumph over death,\nHe saves me from the grave.\n\nSince from His bounty I receive\nSuch proofs of love divine,\nHad I a thousand hearts to give,\nLord, they should all be Thine!\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "415",
        "title": "Master, speak! Thy servant heareth",
        "author": "Frances Ridley Havergal (1869)",
        "meter": "8.7.8.7.7.7.",
        "tuneName": "Ottawa",
        "lyrics": "\nMaster, speak! Thy servant heareth,\nWaiting for Thy gracious word,\nLonging for Thy voice that cheereth,\nMaster, let it now be heard:\nI am listening, Lord, for Thee;\nWhat hast Thou to say to me?\n\nMaster, speak! though least and lowest,\nLet me not unheard depart;\nMaster, speak! for O Thou knowest\nAll the yearning of my heart:\nKnowest all its truest need;\nSpeak! And make me blest indeed.\n\nMaster, speak! and make me ready\nWhen Thy voice is truly heard,\nWith obedience glad and steady\nStill to follow every word:\nI am listening, Lord, for Thee:\nMaster, speak, O speak to me!\n\nSpeak to me by name, O Master!\nLet me know it is to me;\nSpeak! That I may follow faster\nWith a step more firm and free,\nWhere the Shepherd leads the flock\nIn the shadow of the rock.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "416",
        "title": "May the mind of Christ my Saviour",
        "author": "Kate Barclay Wilkinson",
        "meter": "8.7.8.5.",
        "tuneName": "St. Leonards Grenofen Kingston",
        "lyrics": "\nMay the mind of Christ my Saviour\nLive in me from day to day,\nBy His love and power controlling\nAll I do and say.\n\nMay the word of God dwell richly\nIn my heart from hour to hour\nSo that all may see I triumph\nOnly through His power.\n\nMay the peace of God my Father\nRule my life in everything,\nThat I may be calm to comfort\nSick and sorrowing.\n\nMay the love of Jesus fill me\nAs the waters fill the sea;\nHim exalting, self abasing,\nThis is victory.\n\nMay I run the race before me,\nStrong and brave to face the foe,\nLooking only unto Jesus\nAs I onward go.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "417",
        "title": "Mine eyes are unto Thee, my God",
        "author": "Frances (Fanny) Jane Crosby",
        "meter": "C.M.",
        "tuneName": "Tottenham Arden",
        "lyrics": "\nMine eyes are unto Thee, my God\nMy soul on Thee doth wait,\nMy hope is in Thy faithful word,\nAnd in Thy love so great.\n\nThy promise true my faith receives\nAnd claims it for its own;\nMy trusting heart with joy believes\nThe covenant-keeping One.\n\nWhat if Thy love impose a task\nToo hard for me to scan?\nI will not question it, nor ask\nThe meaning of Thy plan.\n\nO Lord, I only ask for grace\nTo work it out with Thee;\nAnd as in faith each step I take\nI'll more its beauty see.\n\nIts rich unfoldings on my soul\nEach day shall burst anew,\nTill glory, bright and endless, dawns\nUpon my ransomed view.\n\nTill then. O keep me safely, Lord,\nFull trusting only Thee,\nTill that blest, happy moment come,\nWhen, Lord, Thy face I'll see.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "418",
        "title": "More about Jesus would I know",
        "author": "Eliza Edmunds Hewitt (1887)",
        "meter": "P.M.",
        "tuneName": "More about Jesus",
        "lyrics": "\nMore about Jesus would I know,\nMore of His grace to others show;\nMore of His saving fullness see,\nMore of His love who died for me.\n\nMore about Jesus let me learn,\nMore of His holy will discern:\nSpirit of God, my teacher be,\nShowing the things of Christ to me.\n\nMore about Jesus; in His word\nHolding communion with my Lord;\nHearing His voice in every line,\nMaking each faithful saying mine.\n\nMore about Jesus; on His throne,\nRiches in glory all His own;\nMore of His kingdom's sure increase;\nMore of His coming\u2014Prince of Peace.\n",
        "Chorus": "\nMore, more about Jesus,\nMore, more about Jesus;\nMore of His saving fullness see,\nMore of His love who died for me.\n",
        "addedChorus": ""
    },
    {
        "number": "419",
        "title": "My glorious Victor, Prince divine",
        "author": "Handley Carr Glyn Moule",
        "meter": "L.M.",
        "tuneName": "Staincliffe Bodmin",
        "lyrics": "\nMy glorious Victor, Prince divine,\nClasp these surrendered hands in Thine;\nAt length my will is all Thine own,\nGlad vassal of a Saviour's throne.\n\nMy Master, lead me to Thy door;\nPierce this now willing ear once more:\nThy bonds are freedom; let me stay\nWith Thee to toil, endure, obey.\n\nYes, ear and hand, and thought and will,\nUse all in Thy dear slavery still;\nSelf's weary liberties I cast\nBeneath Thy feet; there keep them fast.\n\nTread them still down; and then I know\nThese hands shall with Thy gifts o'erflow;\nAnd pierced ears shall hear the tone\nWhich tells me Thou and I are one.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "420",
        "title": "My heart is full of Christ, and longs",
        "author": "Charles Wesley (1743)",
        "meter": "8.8.8.8.8.8.",
        "tuneName": "Worsley Dura",
        "lyrics": "\nMy heart is full of Christ, and longs\nIts glorious matter to declare,\nOf Him I make my loftier songs,\nAnd cannot from His praise forbear;\nMy ready tongue makes haste to sing\nThe glories of my heavenly King.\n\nFairer than all the earth-born race,\nPerfect in comeliness Thou art;\nReplenished are Thy lips with grace,\nAnd full of love Thy tender heart;\nGod ever blest! We bow the knee,\nAnd own all fullness dwells in Thee.\n\nGird on Thy thigh the Spirit's sword,\nAnd take to Thee Thy power divine;\nStir up Thy strength, almighty Lord,\nAll power and majesty are Thine:\nAssert Thy worship and renown;\nO all-redeeming God, come down!\n\nCome, and maintain Thy righteous cause\nAnd let Thy glorious toil succeed;\nExtend the victory of Thy cross,\nRide on, and prosper in Thy deed;\nThrough earth triumphantly ride on,\nAnd reign in every heart alone.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "421",
        "title": "No gospel like this feast",
        "author": "Elizabeth Rundle Charles",
        "meter": "S.M.",
        "tuneName": "Sandys Fareham",
        "lyrics": "\nNo gospel like this feast\nSpread for us, Lord, by Thee;\nNo prophets or evangelists\nPreach the glad news more free.\n\nAll our redemption cost,\nAll our redemption won;\nAll it has won for us, the lost,\nAll it cost Thee, the Son.\n\nThine was the bitter price,\nOurs is the free gift given;\nThine was the blood of sacrifice,\nOurs is the wine of heaven.\n\nHere we would rest midway\nAs on a sacred height;\nThat darkest and that brightest day\nMeeting before our sight.\n\nFrom that dark depth of woes\nThy love for us has trod,\nWe soar to heights of blest repose\nThy love prepares with God.\n\nThus, from self's chains released,\nOne sight alone we see,\nStill at the cross, while at this feast,\nWe see Thee, only Thee!\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "422",
        "title": "O God of Bethel! By whose hand",
        "author": "Philip Doddridge & John Logan & others (1737)",
        "meter": "C.M.",
        "tuneName": "Salzburg Stracathro",
        "lyrics": "\nO God of Bethel! By whose hand\nThy people still are fed;\nWho through this weary pilgrimage\nHast all our fathers led.\n\nOur vows, our prayers, we now present\nBefore Thy throne of grace:\nGod of our fathers! Be the God\nOf their succeeding race.\n\nThrough each perplexing path of life\nOur wandering footsteps guide;\nGive us each day our daily bread.\nAnd raiment fit provide.\n\nO spread Thy covering wings around\nTill all our wanderings cease,\nAnd at our Father's loved abode\nOur souls arrive in peace.\n\nSuch blessings from Thy gracious hand\nOur humble prayers implore;\nAnd Thou shalt be our chosen God,\nAnd portion evermore.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "423",
        "title": "O Christ, Thou Son of God!",
        "author": "William Bennett",
        "meter": "D.S.M.",
        "tuneName": "Leominster",
        "lyrics": "\nO Christ, Thou Son of God!\nThou glorious Lord of all,\nThou living One who once wast slain\nBefore Thy face we fall:\nTo Thee, O Lord, we look,\nTo Thee ourselves we yield;\nBe Thou throughout our earthly course\nOur refuge and our shield.\n\nThough all around may change\nNo change Thou e'er shalt know;\nThe same art Thou upon the throne\nAs Thou was here below;\nThe same to-day Thou art\nAs yesterday Thou wast,\nThe same e'en to eternal days\nAs in the wondrous past.\n\nLord Jesus, Take our hearts,\nFrom self-love set them free;\nHelp us, however dark our path,\nTo stay our souls on Thee:\nThough evil waxes worse,\nAnd many hearts grow cold,\nHelp us to cleave unto Thy name,\nThy faithful word to hold.\n\nHelp us to look beyond\nThe dark and gloomy night,\nTo wait for that blest hour when Thou\nWilt come in glory bright:\nWhen we Thy voice shall hear,\nThy glorious face shall see,\nAnd, like Thee, in Thy presence stand,\nAnd ever worship Thee.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "424",
        "title": "O Jesus Christ, grow Thou in me",
        "author": "Johann Caspar Lavater tr/ad by Elizabeth Lee Allen Smith (1780)",
        "meter": "C.M.",
        "tuneName": "Beatitudo Caithness Stracathro",
        "lyrics": "\nO Jesus Christ, grow Thou in me,\nAnd all things else recede;\nMy heart be daily nearer Thee,\nFrom sin be daily freed.\n\nEach day let Thy supporting might\nMy weakness still embrace;\nMy darkness vanish in Thy light,\nThy life my death efface.\n\nIn Thy bright beams which on me fall,\nFade every evil thought;\nThat I am nothing, Thou art all,\nI would be daily taught.\n\nMore of Thy glory let me see,\nThou holy, wise and true;\nI would Thy living image be,\nIn joy and sorrow too.\n\nFill me with gladness from above,\nHold me by strength divine;\nLord, let the glow of Thy great love\nThrough my whole being shine.\n\nMake this poor self grow less and less,\nBe Thou my life and aim;\nO make me daily, through Thy grace,\nMore meet to bear Thy name.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "425",
        "title": "O Jesus, I have promised",
        "author": "John Ernest Bode (1868)",
        "meter": "7.6.7.6.D.",
        "tuneName": "Day of Rest",
        "lyrics": "\nO Jesus, I have promised\nTo serve Thee to the end,\nBe Thou forever near me,\nMy Master and my Friend;\nI shall not fear the battle\nIf Thou art by my side,\nNor wander from the pathway\nIf Thou wilt be my guide.\n\nO let me feel Thee near me;\nThe world is ever near;\nI see the sights that dazzle,\nThe tempting sounds I hear;\nMy foes are ever near me,\nAround me and within;\nBut, Jesus, draw Thou nearer,\nAnd shield my soul from sin\n\nO let me hear Thee speaking,\nIn accents clear and still,\nAbove the storms of passion,\nThe murmurs of self-will:\nO speak to re-assure me,\nTo hasten or control;\nO speak, and make me listen,\nThou guardian of my soul.\n\nO let me see Thy footmarks,\nAnd in them plant mine own;\nMy hope to follow duly\nIs in Thy strength alone;\nO guide me, call me, draw me,\nUphold me to the end;\nAnd then in heaven receive me,\nMy Saviour and my friend.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "426",
        "title": "O Lord of heaven and earth and sea",
        "author": "Christopher Wordsworth (1863)",
        "meter": "8.8.8.4.",
        "tuneName": "Almsgiving Portland",
        "lyrics": "\nO Lord of heaven and earth and sea,\nTo Thee all praise and glory be:\nHow shall we show our love to Thee\nWho givest all?\n\nFor health and home and lengthened days,\nFor all the blessings earth displays,\nOur God, we owe Thee thanks and praise,\nWho givest all.\n\nThou didst not spare Thine only Son,\nBut gav'st Him for a world undone,\nAnd freely with that blessed One\nThou givest all.\n\nFor souls redeemed, for sins forgiven,\nFor present grace and hopes of heaven,\nFather, what can to Thee be given,\nWho givest all?\n\nWe lose what on ourselves we spend;\nWe have as treasure without end\nWhatever, Lord, to Thee we lend,\nWho givest all.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "427",
        "title": "O Lord, it is Thyself to meet",
        "author": "Boethia Thompson",
        "meter": "D.C.M.",
        "tuneName": "St. Ursula Land of Rest",
        "lyrics": "\nO Lord, it is Thyself to meet\nTo this sweet feast we come;\nLike Mary, resting at Thy feet\nWe learn of Thee alone:\nWe well remember Thou hast said,\nThis do, remembering Me;\nSo thus we take the wine, the bread,\nIn memory of Thee.\n\nO Lord, we come, not for our need,\nNor with our grief to Thee;\nBut on the bread and wine to feed,\nAnd to remember Thee:\nYes, to remember all Thy love,\nRemember all Thy woe,\nRemember Thou art now above,\nYet in our midst below.\n\nO Lord, from Thee the bread we take,\nFrom Thy pierced hand the wine;\nIn rest\u2014accepted for Thy sake\u2014\nOur meetness, Lord, is Thine:\nWe praise Thee for this quiet hour\nSpent with Thyself alone,\nIn which we feel the Spirit's power,\nAnd all His teachings own.\n\nO Lord, we come, for Thou art here;\nEnrich each memory;\nThy faithful promise brings Thee near\nAnd gathers us to Thee:\nO body broken! poured out blood!\nBlest memories ever dear;\nThou Son of man! Thou Lamb of God!\nHow good to meet Thee here!\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "428",
        "title": "O love that wilt not let me go",
        "author": "George Matheson (1882)",
        "meter": "8.8.8.8.6.",
        "tuneName": "St. Margaret",
        "lyrics": "\nO love that wilt not let me go,\nI rest my weary soul in Thee;\nI give Thee back the life I owe,\nThat in Thine ocean depths its flow\nMay richer, fuller be.\n\nO light that followest all my way,\nI yield my flickering torch to Thee;\nMy heart restores its borrowed ray,\nThat in Thy sunshine's blaze its day\nMay brighter, fairer be.\n\nO joy that seekest me through pain,\nI cannot close my heart to Thee;\nI trace the rainbow through the rain,\nAnd feel the promise is not vain\nThat morn shall tearless be.\n\nO cross that liftest up my head,\nI dare not ask to fly from thee,\nI lay in dust life's glory dead,\nAnd from the ground there blossoms red\nLife that shall endless be.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "429",
        "title": "O Master! when Thou callest",
        "author": "Sarah Geraldina Stock (1888)",
        "meter": "7.6.7.6.D.",
        "tuneName": "Lancashire",
        "lyrics": "\nO Master! when Thou callest\nNo voice may say Thee nay,\nFor blest are they that follow\nWhere Thou dost lead the way:\nIn freshest prime of morning,\nOr fullest glow of noon,\nThe note of heavenly warning\nCan never come too soon.\n\nO Master! where Thou callest\nNo foot may shrink in fear,\nFor they who trust Thee wholly\nShall find Thee ever near;\nAnd quiet room and lonely,\nOr busy harvest field,\nWhere Thou, Lord, rulest only,\nShall precious produce yield.\n\nO Master! whom Thou callest\nNo heart may dare refuse;\n'Tis honour, highest honour,\nWhen Thou dost deign to use\nOur brightest and our fairest,\nOur dearest\u2014all are Thine;\nThou who for each one carest,\nWe hail Thy love's design.\n\nThey who go forth to serve Thee,\nWe, too, who serve at home,\nMay watch and pray together\nUntil Thou, Lord, shalt come;\nIn Thee for aye united\nOur song of hope we raise,\nTill that blest shore is sighted\nWhere all shall turn to praise.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "430",
        "title": "O the bitter shame and sorrow!",
        "author": "Theodore Monod (1874)",
        "meter": "8.7.8.8.7.",
        "tuneName": "St. Jude All of Thee",
        "lyrics": "\nO the bitter shame and sorrow!\nThat a time could ever be\nWhen I let the Saviour's pity\nPlead in vain; and proudly answered,\nAll of self, and none of Thee!\n\nYet He found me: I beheld Him\nBleeding on the accursed tree:\nHeard Him pray: Forgive them, Father!\nAnd my wistful heart said faintly,\nSome of self, and some of Thee!\n\nDay by day His tender mercy,\nHealing, helping, full and free:\nSweet and strong, and ah! So patient,\nBrought me lower, while I whispered,\nLess of self, and more of Thee!\n\nHigher than the highest heaven,\nDeeper than the deepest sea,\nLord, Thy love at last hath conquered;\nGrant me now my supplication\u2014\nNone of self, and all of Thee!\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "431",
        "title": "O The deep, deep love of Jesus!",
        "author": "Samuel Trevor Francis (1875)",
        "meter": "8.7.8.7.D.",
        "tuneName": "Ebenezer",
        "lyrics": "\nO The deep, deep love of Jesus!\nVast, unmeasured, boundless, free;\nRolling as a mighty ocean\nIn its fullness over me:\nUnderneath me, all around me,\nIs the current of Thy love,\nLeading onward, leading homeward,\nTo my glorious rest above.\n\nO the deep, deep love of Jesus!\nSpread His praise from shore to shore;\nHow He loveth, ever loveth,\nChangeth never, nevermore:\nHow He watches o'er His loved ones,\nDied to call them all His own;\nHow for them He intercedeth,\nWatcheth o'er them from the throne.\n\nO the deep, deep love of Jesus!\nLove of every love the best:\n'Tis an ocean vast of blessing,\n'Tis a haven sweet of rest:\nO such love! the love of Jesus;\n'Tis a heaven of heavens to me;\nAnd it lifts me up to glory,\nFor it lifts me up to Thee.\n\nO the deep, deep love of Jesus!\n'Twould take ages to explore\nBut a drop of all this ocean\nOr a grain from off its shore:\nYet our hearts are beating highly,\nIf our faith is sometimes dim,\nFor the glory and the rapture\nWe shall have when we have Him.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "432",
        "title": "O Thou, my soul, bless God the Lord;",
        "author": "Author Uncertain: Thomas Sternhold or Francis Rous (Rowe) & William Barton (1650)",
        "meter": "C.M.",
        "tuneName": "Coleshill Stracathro",
        "lyrics": "\nO Thou, my soul, bless God the Lord;\nAnd all that in me is\nBe stirr\u00e8d up His holy name\nTo magnify and bless.\n\nBless, O my soul, the Lord thy God,\nAnd not forgetful be\nOf all His gracious benefits\nHe hath bestowed on thee:\n\nAll thine iniquities who doth\nMost graciously forgive;\nWho thy diseases all and pains\nDoth heal, and thee relieve;\n\nWho doth redeem thy life, that thou\nTo death may'st not go down;\nWho thee with loving kindness doth\nAnd tender mercies crown.\n\nO bless the Lord, all ye His works,\nWherewith the world is stored\nIn His dominions everywhere:\nMy soul, bless thou the Lord!\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "433",
        "title": "O wondrous hour, when Jesus, Thou",
        "author": "Edward Denny (1839)",
        "meter": "L.M.",
        "tuneName": "Atonement Henman",
        "lyrics": "\nO wondrous hour, when Jesus, Thou,\nCo-equal with the eternal God,\nBeneath our sin didst deign to bow,\nAnd in our stead didst bear the rod.\n\nWhen most in Satan's awful power,\nO Lord, Thy suffering spirit seemed,\nThen, in that dark and fearful hour,\nOur souls were by Thy blood redeemed.\n\n'Tis in Thy cross, Lord, that we learn\nWhat Thou in all Thy fullness art;\nThere, through the darkening cloud, discern\nThe love of Thy devoted heart.\n\n'Twas mighty love's constraining power\nThat made Thee, blessed Saviour, die;\n'Twas love, in that tremendous hour,\nThat triumphed in Thy mighty cry.\n\n'Twas all for us\u2014our life we owe,\nOur hope, our crown of joy, to Thee;\nThy sufferings in that hour of woe,\nThy victory, Lord, have made us free.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "434",
        "title": "O worship the King all-glorious above",
        "author": "William Kethe & Robert Grant (1561)",
        "meter": "10.10.11.11.",
        "tuneName": "Hanover Houghton",
        "lyrics": "\nO worship the King all-glorious above,\nO gratefully sing His power and His love;\nOur shield and defender, the Ancient of Days,\nPavilioned in splendour and girded with praise.\n\nO tell of His might, O sing of His grace,\nWhose robe is the light, whose canopy space;\nHis chariots of wrath the deep thunderclouds form,\nAnd dark is His path on the wings of the storm.\n\nThe earth, with its store of wonders untold,\nAlmighty, Thy power hath founded of old;\nHath stablished it fast by a changeless decree,\nAnd round it hath cast, like a mantle, the sea.\n\nThy bountiful care what tongue can recite?\nIt breathes in the air, it shines in the light;\nIt streams from the hills, it descends to the plain,\nAnd sweetly distils in the dew and the rain.\n\nFrail children of dust, and feeble as frail,\nIn Thee do we trust, nor find Thee to fail;\nThy mercies how tender, how firm to the end,\nOur maker, defender, redeemer, and friend.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "435",
        "title": "On that same night, Lord Jesus",
        "author": "George West Frazer",
        "meter": "7.6.7.6.D.",
        "tuneName": "Chenies Eden Grove",
        "lyrics": "\nOn that same night, Lord Jesus,\nIn which Thou wast betrayed,\nWhen without cause man's hatred\nAgainst Thee was displayed,\nWe hear Thy gracious accents\u2014\nThis do; remember Me;\nWith joyful hearts responding\nWe would remember Thee.\n\nWe think of all the darkness\nWhich round Thy spirit pressed,\nOf all those waves and billows\nWhich rolled across Thy breast;\n'Tis there Thy grace unbounded\nAnd perfect love we see;\nWith joy and yet with sorrow\nWe do remember Thee.\n\nWe know Thee now as risen,\nThe First-born from the dead;\nWe see Thee now ascended,\nThe Church's glorious Head:\nIn Thee by grace accepted,\nWith heart and mind set free,\nWe think of all Thy sorrow,\nAnd thus remember Thee.\n\nTill Thou shalt come in glory\nAnd call us hence away,\nTo share with Thee the brightness\nOf that unclouded day,\nWe show Thy death, Lord Jesus,\nAnd here would seek to be\nMore to that death conformed\nWhilst we remember Thee.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "436",
        "title": "Our blest Redeemer, ere He breathed",
        "author": "Harriet Auber (1829)",
        "meter": "8.6.8.4.",
        "tuneName": "St. Cuthbert Wreford",
        "lyrics": "\nOur blest Redeemer, ere He breathed\nHis tender last Farewell,\nA Guide, a Comforter bequeathed\nWith us to dwell.\n\nHe came sweet influence to impart,\nA gracious, willing guest,\nWhile He can find one humble heart\nWherein to rest.\n\nAnd His that gentle voice we hear,\nSoft as the breath of even,\nThat checks each fault, that calms each fear,\nAnd speaks of heaven.\n\nAnd every virtue we possess,\nAnd every victory won,\nAnd every thought of holiness\nAre His alone.\n\nSpirit of purity and grace,\nOur weakness, pitying see;\nO make our hearts, Thy dwelling-place,\nWorthy of Thee.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "437",
        "title": "Our great Redeemer liveth! This assurance",
        "author": "Frances (Fanny) Jane Crosby",
        "meter": "11.10's",
        "tuneName": "Raynolds Strength and Stay",
        "lyrics": "\nOur great Redeemer liveth! This assurance\nCalms anxious fears and satisfies the heart;\nYes, Jesus lives! at God's right hand He reigneth,\nAnd in His great salvation we have part.\n\nA living Christ, so strong, so pure, so tender,\nBears every ransomed soul before the throne;\nComplete in Him we stand, saved by His merit\u2014\nIt was His blood which did for sin atone.\n\nAnd now we live in Him, our great Redeemer,\nWho, living, intercedes for us above,\nYet by His Spirit dwells with us, and keeps us\nEnfolded in His mighty arms of love.\n\nRedeemer, Lord! with gratitude unfeigned,\nWe bless Thy holy name that Thou has taught\nOur hearts to know Thee, loving, caring, pleading:\nNow grant us grace to love Thee as we ought.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "438",
        "title": "Praise, my soul, the King of heaven;",
        "author": "Henry Francis Lyte (1834)",
        "meter": "8.7.8.7.8.7.",
        "tuneName": "Praise My Soul Triumph",
        "lyrics": "\nPraise, my soul, the King of heaven;\nTo His feet thy tribute bring;\nRansomed, healed, restored, forgiven,\nWho like thee His praise shall sing?\nPraise Him! praise Him!\nPraise the everlasting King.\n\nPraise Him for His grace and favour\nTo our fathers in distress;\nPraise Him, still the same as ever,\nSlow to chide and swift to bless:\nPraise Him! praise Him!\nGlorious in His faithfullness.\n\nFather-like He tends and spares us,\nWell our feeble frame He knows;\nIn His hands He gently bears us,\nRescues us from all our foes:\nPraise Him! praise Him!\nWidely as His mercy flows.\n\nFrail as summer flower we flourish;\nBlows the wind and it is gone;\nBut, while mortals rise and perish,\nGod endures unchanging on:\nPraise Him! praise Him!\nPraise the high eternal One.\n\nAngels, help us to adore Him,\nYe behold Him face to face;\nSun and moon, bow down before Him,\nDwellers all in time and space:\nPraise Him! praise Him!\nPraise with us the God of grace.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "439",
        "title": "Praise to the Lord, the Almighty, the King of creation;",
        "author": "Joachim Neander & Rupert E. Davies tr/ad by Katherine Winkworth & others (1679)",
        "meter": "14.14.4.7.8.",
        "tuneName": "Lobe den Herren",
        "lyrics": "\nPraise to the Lord, the Almighty, the King of creation;\nO my soul, praise Him, for He is thy health and salvation;\nAll ye who hear,\nBrethren and sisters draw near,\nPraise Him in glad adoration.\n\nPraise to the Lord, who doth prosper thy work and defend thee;\nSurely His goodness and mercy here daily attend thee;\nPonder anew\nWhat the Almighty can do\nIf with His love He befriend thee.\n\nPraise to the Lord, who, when darkness and sin is abounding,\nWho, when the godless do triumph, all virtue confounding,\nSheddeth His light,\nChaseth the horrors of night,\nSaints with His mercy surrounding.\n\nPraise to the Lord, O let all that is in me adore Him;\nAll that hath life and breath come now with praises before Him;\nLet the Amen\nSound from His people again:\nGladly for aye we adore Him.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "440",
        "title": "Put thou thy trust in God",
        "author": "Paul Gerhardt tr/ad by John Wesley [Paisley: Charles Wesley] (1656)",
        "meter": "S.M.",
        "tuneName": "Shere Rhodes Clifton",
        "lyrics": "\nPut thou thy trust in God,\nIn duty's path go on;\nWalk in His strength with faith and hope,\nSo shall thy work be done.\n\nGive to the winds thy fears;\nHope, and be undismayed;\nGod hears thy sighs and counts thy tears,\nGod shall lift up thy head.\n\nCommit thou all thy griefs\nAnd ways into His hands,\nTo His sure truth and tender care\nWho earth and heaven commands.\n\nThough years on years roll on,\nHis covenant shall endure;\nThough clouds and darkness hide His path,\nThe promised grace is sure.\n\nThrough waves, and clouds, and storms\nHe gently clears thy way;\nWait thou His time; so shall this night\nSoon end in joyous day.\n\nLeave to His sovereign sway\nTo choose and to command;\nSo shalt thou, wondering, own His way\nHow wise, how strong His hand.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "441",
        "title": "Rejoice! The Lord is King;",
        "author": "Charles Wesley (1744)",
        "meter": "6.6.6.6.8.8.",
        "tuneName": "Gopsal Ramoth",
        "lyrics": "\nRejoice! The Lord is King;\nYour Lord and King adore;\nMortals, give thanks and sing,\nAnd triumph evermore:\nLift up your heart, lift up your voice;\nRejoice, again I say, rejoice.\n\nJesus, the Saviour, reigns,\nThe God of truth and love;\nWhen He had purged our stains\nHe took His seat above:\nLift up your heart, lift up your voice;\nRejoice, again I say, rejoice.\n\nHis kingdom cannot fail;\nHe rules o'er earth and heaven;\nThe keys of death and hell\nAre to our Jesus given:\nLift up your heart, lift up your voice;\nRejoice, again I say, rejoice.\n\nHe sits at God's right hand\nTill all His foes submit,\nAnd bow to His command,\nAnd fall beneath His feet:\nLift up your heart, lift up your voice,\nRejoice, again I say, rejoice.\n\nRejoice in glorious hope;\nJesus, our Lord, shall come\nAnd take His servants up\nTo their eternal home;\nWe soon shall hear th' archangel's voice;\nThe trump of God shall sound, rejoice!\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "442",
        "title": "Saviour, again to Thy dear name we raise",
        "author": "John Ellerton (1866)",
        "meter": "10's",
        "tuneName": "Ellers Autumn",
        "lyrics": "\nSaviour, again to Thy dear name we raise\nWith one accord our parting hymn of praise:\nWe rise to bless Thee ere our worship cease;\nThen, quietly waiting, hear Thy word of peace.\n\nGrant us Thy peace upon our homeward way;\nWith Thee began, with Thee shall end the day;\nGuard Thou the lips from sin, the hearts from shame,\nThat in this place have called upon Thy name.\n\nGrant us Thy peace, Lord, through the coming night;\nTurn Thou for us its darkness into light;\nFrom harm and danger keep Thy children free,\nFor dark and light are both alike to Thee.\n\nGrant us Thy peace throughout our earthly life,\nOur balm in sorrow and our stay in strife;\nThen, when Thy voice shall bid our conflict cease,\nCall us, O Lord, to Thine eternal peace.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "443",
        "title": "Saviour, Thy dying love",
        "author": "Sylvanus Dryden Phelps (1862)",
        "meter": "6.4.6.4.6.6.6.4.",
        "tuneName": "Fenwick Offering",
        "lyrics": "\nSaviour, Thy dying love\nThou gavest me,\nNor should I aught withhold,\nMy Lord, from Thee;\nIn love my soul would bow,\nMy heart fulfil its vow,\nSome offering bring Thee now,\nSomething for Thee.\n\nAt the blest mercy-seat\nPleading for me,\nMy feeble faith looks up,\nJesus, to Thee;\nHelp me the cross to bear,\nThy wondrous love declare,\nSome song to raise, or prayer,\nSomething for Thee.\n\nGive me a faithful heart,\nLikeness to Thee;\nThat each departing day\nHenceforth may see\nSome work of love begun,\nSome deed of kindness done,\nSome wanderer sought and won,\nSomething for Thee.\n\nAll that I am and have,\nThy gifts so free;\nIn joy, in grief, through life,\nO Lord, for Thee!\nAnd when Thy face I see\nMy ransomed soul shall be,\nThrough all eternity,\nSomething for Thee.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "444",
        "title": "Saviour, lead us by Thy power",
        "author": "William Williams of Pantycelyn",
        "meter": "8.7.8.7.D.",
        "tuneName": "Everton Rex Gloria Faber",
        "lyrics": "\nSaviour, lead us by Thy power\nSafe into the promised rest;\nChoose the path, the way whatever\nSeems to Thee, O Lord, the best:\nBe our guide in every peril,\nWatch and keep us night and day,\nElse our foolish hearts will wander\nFrom the straight and narrow way.\n\nSince in Thee is our redemption,\nAnd salvation full and free,\nNothing need our souls dishearten\nBut forgetfullness of Thee:\nNaught can stay our steady progress,\nMore than conquerors are we,\nIf our eyes, whate'er the danger,\nLook to Thee, and none but Thee.\n\nIn Thy presence we are happy;\nIn Thy presence we're secure;\nIn Thy presence all afflictions\nWe can steadfastly endure;\nIn Thy presence we can conquer,\nWe can suffer, we can die;\nWandering from Thee we are feeble;\nLet Thy love then keep us nigh.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "445",
        "title": "Speak, Lord, in the stillness",
        "author": "Emily May Grimes Crawford (1920)",
        "meter": "6.5.6.5.",
        "tuneName": "Quietude St. Wystan",
        "lyrics": "\nSpeak, Lord, in the stillness,\nWhile I wait on Thee;\nHushed my heart to listen\nIn expectancy.\n\nSpeak, O blessed Master,\nIn this quiet hour;\nLet me see Thy face, Lord,\nFeel Thy touch of power.\n\nFor the words Thou speakest,\nThey are life indeed;\nLiving Bread from heaven\nNow my spirit feed.\n\nSpeak, Thy servant heareth,\nBe not silent, Lord;\nWaits my soul upon Thee\nFor the quickening word.\n\nFill me with the knowledge\nOf Thy glorious will;\nAll Thine own good pleasure\nIn Thy child fulfil.\n\nLike a watered garden,\nFull of fragrance rare,\nLingering in Thy presence\nLet my life appear.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "446",
        "title": "Take my life, and let it be",
        "author": "Frances Ridley Havergal (1874)",
        "meter": "7.7.7.7.",
        "tuneName": "Nottinghan Lubeck",
        "lyrics": "\nTake my life, and let it be\nConsecrated, Lord, to Thee;\nTake my moments and my days,\nLet them flow with ceaseless praise.\n\nTake my hands, and let them move\nAt the impulse of Thy love;\nTake my feet, and let them be\nSwift and beautiful for Thee.\n\nTake my voice, and let me sing\nAlways only, for my King;\nTake my lips, and let them be\nFilled with messages from Thee.\n\nTake my silver and my gold,\nNot a mite would I withhold;\nTake my intellect, and use\nEvery power as Thou shalt choose.\n\nTake my will, and make it Thine,\nIt shall be no longer mine;\nTake my heart\u2014it is Thine own,\nIt shall be Thy royal throne.\n\nTake my love; my Lord, I pour\nAt Thy feet its treasure-store:\nTake myself, and I will be\nEver, only, all for Thee.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "447",
        "title": "Teach me Thy way, O Lord",
        "author": "Benjamin Mansell Ramsey (1919)",
        "meter": "6.4.6.4.6.6.6.4.",
        "tuneName": "Camacha",
        "lyrics": "\nTeach me Thy way, O Lord,\nTeach me Thy way;\nThy gracious aid afford,\nTeach me Thy way:\nHelp me to walk aright,\nMore by faith, less by sight;\nLead me with heavenly light,\nTeach me Thy way:\n\nWhen doubts and fears arise,\nTeach me Thy way;\nWhen storms o'erspread the skies\nTeach me Thy way:\nShine through the cloud and rain,\nThrough sorrow, toil and pain;\nMake Thou my pathway plain,\nTeach me Thy way.\n\nLong as my life shall last,\nTeach me Thy way;\nWhere'er my lot is cast,\nTeach me Thy way:\nUntil the race is run,\nUntil the journey's done,\nUntil the crown is won,\nTeach me Thy way.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "448",
        "title": "The bread and wine are spread upon the board",
        "author": "George Goodman",
        "meter": "10's",
        "tuneName": "Morecambe Dalkeith Parting",
        "lyrics": "\nThe bread and wine are spread upon the board,\nThe guests are here, invited by the Lord;\nWhy come they thus, why tarry for a space?\nBut for Thy presence, O Thou King of grace\n\nHush, O our hearts, as in the sacred name\nWe bow in worship and the promise claim\u2014\nWhere two or three are gathered there am I,\nUnseen, yet present to faith's opened eye.\n\nHere in our midst art Thou, O risen Lord;\nWorthy, O Lamb once slain, to be adored;\nHere in our midst to lead Thy people's praise,\nAnd incense sweet unto the Father raise.\n\nWe do remember Thee, as Thou hast said,\nAnd think upon Thee as we break the bread,\nRecall Thy dying love, Thy cross and shame,\nDrinking the cup of blessing in Thy name.\n\nThus do we show the death of our dear Lord,\nWhile in our hearts His love is shed abroad;\nSo is faith quickened for the conflict here,\nTill in a little while He shall appear.\n\nOnly a little while we pilgrims stay\nTo spread the table on our desert way;\nSoon will He come, and coming take us home,\nAmen, e'en so, Lord Jesus quickly come!\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "449",
        "title": "The Church's one foundation",
        "author": "Samuel John Stone (1866)",
        "meter": "7.6.7.6.D.",
        "tuneName": "Aurelia",
        "lyrics": "\nThe Church's one foundation\nIs Jesus Christ her Lord:\nShe is His new creation\nBy water and the word;\nFrom heaven He came and sought her\nTo be His holy bride;\nWith His own blood He bought her,\nAnd for her life He died.\n\nElect from every nation,\nYet one o'er all the earth,\nHer charter of salvation\nOne Lord, one faith, one birth:\nOne holy name she blesses,\nPartakes one holy food,\nAnd to one hope she presses,\nWith every grace endued.\n\nThough with a scornful wonder\nMen see her sore oppressed,\nBy schisms rent asunder,\nBy heresies distressed,\nYet saints their watch are keeping,\nTheir cry goes up, How long?\nAnd soon the night of weeping\nShall be the morn of song.\n\n'Mid toil and tribulation,\nAnd tumult of her war,\nShe waits the consummation\nOf peace for evermore,\nTill, with the vision glorious,\nHer longing eyes are blest,\nAnd the great Church victorious\nShall be the Church at rest.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "450",
        "title": "The day Thou gavest, Lord, is ended;",
        "author": "John Ellerton (1870)",
        "meter": "9.8.9.8.",
        "tuneName": "St. Clement Radford",
        "lyrics": "\nThe day Thou gavest, Lord, is ended;\nThe darkness falls at Thy behest;\nTo Thee our morning hymns ascended,\nThy praise shall sanctify our rest.\n\nWe thank Thee that Thy Church unsleeping,\nWhile earth rolls onward into light,\nThrough all the world her watch is keeping,\nAnd rests not now by day or night.\n\nAs o'er each continent and island\nThe dawn leads on another day,\nThe voice of prayer is never silent,\nNor dies the stain of praise away.\n\nThe sun that bids us rest is waking\nOur brethren 'neath the western sky;\nAnd hour by hour fresh lips are making\nThy wondrous doings heard on high.\n\nSo be it, Lord! Thy throne shall never,\nLike earth's proud empires, pass away;\nThy kingdom stands, and grows for ever,\nTill all Thy creatures own Thy sway.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "451",
        "title": "The King of love my Shepherd is",
        "author": "Henry Williams Baker (1868)",
        "meter": "8.7.8.7.",
        "tuneName": "Dominus Regit Me St. Columba",
        "lyrics": "\nThe King of love my Shepherd is,\nWhose goodness faileth never;\nI nothing lack if I am His\nAnd He is mine for ever.\n\nWhere streams of living water flow\nMy ransomed soul He leadeth,\nAnd where the verdant pastures grow\nWith food celestial feedeth.\n\nPerverse and foolish oft I strayed,\nBut yet in love He sought me,\nAnd on His shoulder gently laid,\nAnd home rejoicing brought me.\n\nIn death's dark vale I fear no ill\nWith Thee, dear Lord, beside me;\nThy rod and staff my comfort still,\nThy cross before to guide me.\n\nThou spread'st a table in my sight\nThy unction grace bestoweth;\nAnd O what transport of delight\nFrom Thy pure chalice floweth.\n\nAnd so through all the length of days\nThy goodness faileth never;\nGood Shepherd, may I sing Thy praise\nWithin Thy house for ever.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "452",
        "title": "The gloomy night will soon be past",
        "author": "Samuel Prideaux Tregelles (1855)",
        "meter": "C.M.",
        "tuneName": "Irish Palestine",
        "lyrics": "\nThe gloomy night will soon be past,\nThe morning will appear;\nThe day of glorious light at last\nEach waiting one will cheer.\n\nAh, yes, Lord Jesus, Thou whose heart\nStill for Thy saints doth care,\nWe shall behold Thee as Thou art,\nAnd Thy full image bear.\n\nThy love sustains us on our way\nWhile pilgrims here below;\nThou dost, O Saviour, day by day\nThy suited grace bestow.\n\nBut, oh, the more we learn of Thee,\nAnd Thy rich mercy prove,\nThe more we long Thy face to see,\nAnd fully know Thy love.\n\nThen Shine, Thou bright and morning star,\nDispel the dreary gloom;\nO take from sin and grief afar\nThy blood-bought people home.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "453",
        "title": "The Lord will perfect that which doth concern me",
        "author": "Winifred A. Iverson",
        "meter": "11.10's",
        "tuneName": "Hold Thou My Hand",
        "lyrics": "\nThe Lord will perfect that which doth concern me,\nHis way is perfect, so His goal must be;\nAll life's events in harmony are working\nFor those clear issues which I yet shall see.\n\nThe Lord will perfect that which doth concern me,\nAnd will complete each half-formed thing He sends:\nHis rich designs most carefully are woven,\nThere are with Him no loose or broken ends.\n\nThe Lord will perfect that which doth concern me,\nAnd finish what His grace has here begun;\nHe gathers up life's fragments, losing nothing,\nAnd turns to good account each single one.\n\nThe Lord will perfect that which doth concern me,\nWill do it in so many different ways;\nBy loss or gain, by high success or failure,\nBy steady course or unexpected phase.\n\nThe Lord will perfect that which doth concern me,\nExpecting me to show Him on my part\nA trust intelligent and full of interest\nIn all these purposes of His great heart.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "454",
        "title": "The Lord's my Shepherd, I'll not want:",
        "author": "Francis Rous (Rowe) & (1650) Scottish Psalter (1650)",
        "meter": "C.M.",
        "tuneName": "Crimond Wiltshire",
        "lyrics": "\nThe Lord's my Shepherd, I'll not want:\nHe makes me down to lie\nIn pastures green; He leadeth me\nThe quiet waters by.\n\nMy soul He doth restore again;\nAnd me to walk doth make\nWithin the paths of righteousness,\nE'en for His own name's sake.\n\nYea, though I walk in death's dark vale,\nYet will I fear none ill;\nFor Thou art with me; and Thy rod\nAnd staff me comfort still.\n\nMy table Thou hast furnished\nIn presence of my foes;\nMy head Thou dost with oil anoint,\nAnd my cup overflows.\n\nGoodness and mercy all my life\nShall surely follow me;\nAnd in God's house for evermore\nMy dwelling-place shall be.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "455",
        "title": "There is a green hill far away",
        "author": "Cecil Frances (Humphreys) Alexander (1852)",
        "meter": "C.M.",
        "tuneName": "Horsley Meditation",
        "lyrics": "\nThere is a green hill far away,\nWithout a city wall,\nWhere the dear Lord was crucified,\nWho died to save us all.\n\nWe may not know, we cannot tell\nWhat pains He had to bear;\nBut we believe it was for us\nHe hung and suffered there.\n\nHe died that we might be forgiven,\nHe died to make us good,\nThat we might go at last to heaven,\nSaved by His precious blood.\n\nThere was no other good enough\nTo pay the price of sin;\nHe only could unlock the gate\nOf heaven, and let us in.\n\nO dearly, dearly has He loved,\nAnd we must love Him too,\nAnd trust in His redeeming blood,\nAnd try His works to do.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "456",
        "title": "Thou who did'st come to die",
        "author": "K. H. Elders",
        "meter": "6.6.4.6.6.6.4.",
        "tuneName": "Malvern Olivet",
        "lyrics": "\nThou who did'st come to die\nFrom the bright realms on high,\nThou art our peace:\nPeace Thou dost now impart\nTo each believing heart,\nPeace that shall ne'er depart;\nThou art our peace.\n\nThou who did'st rise again,\nThy tomb was sealed in vain,\nThou art our life:\nAll power to Thee is given,\nExalted Lord in heaven,\nAnd we with Thee are risen,\nThou art our life.\n\nThou who wilt surely come\nTo take Thy loved ones home,\nThou art our hope:\nWhat joys and bliss untold\nWill to our gaze unfold\nWhen we Thy face behold!\nThou art our hope.\n\nPeace, life and hope, O Lord,\nThou giv'st us in Thy word,\nBlest be Thy name:\nWe would our praise outpour,\nWould worship and adore\nNow and for evermore;\nBlest be Thy name.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "457",
        "title": "Thou whose almighty word",
        "author": "John Marriott (1813)",
        "meter": "6.6.4.6.6.6.4.",
        "tuneName": "Moscow",
        "lyrics": "\nThou whose almighty word\nChaos and darkness heard,\nAnd took their flight,\nHear us, we humbly pray,\nAnd, where the gospel day\nSheds not its glorious ray,\nLet there be light.\n\nThou who didst come to bring,\nOn Thy redeeming wing,\nHealing and sight,\nHealth to the sick in mind,\nSight to the inly blind,\nO now to all mankind\nLet there be light.\n\nSpirit of truth and love,\nLife-giving, holy Dove,\nSpeed forth Thy flight;\nMove on the water's face,\nBearing the lamp of grace,\nAnd in earth's darkest place\nLet there be light.\n\nBlessed and holy Three,\nGlorious Trinity,\nWisdom, Love, Might,\nBoundless as ocean's tide\nRolling in fullest pride,\nThrough the world, far and wide,\nLet there be light.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "458",
        "title": "Thy life was given for me",
        "author": "Frances Ridley Havergal tr/ad by Church Hymns (1858)",
        "meter": "6.6.6.6.6.6.",
        "tuneName": "Baca",
        "lyrics": "\nThy life was given for me,\nThy blood, O Lord, was shed\nThat I might ransomed be,\nAnd quickened from the dead;\nThy life was given for me;\nWhat have I given for Thee?\n\nLong years were spent for me\nIn weariness and woe,\nThat through eternity\nThy glory I might know;\nLong years were spent for me:\nHave I spent one for Thee?\n\nThou, Lord, hast borne for me\nMore than my tongue can tell\nOf bitterest agony\nTo rescue me from hell;\nThou sufferedst all for me:\nWhat have I borne for Thee?\n\nAnd Thou hast brought to me,\nDown from Thy home above,\nSalvation full and free,\nThy pardon and Thy love;\nGreat gifts Thou broughtest me;\nWhat have I brought to Thee?\n\nO let my life be given,\nMy years for Thee be spent;\nWorld-fetters all be riven,\nAnd joy with suffering blent;\nThou gavest Thyself for me;\nI give myself to Thee.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "459",
        "title": "'Twas on that night, when doomed to know",
        "author": "John Morrison (1781)",
        "meter": "L.M.",
        "tuneName": "Rockingham",
        "lyrics": "\n'Twas on that night, when doomed to know\nThe eager rage of every foe,\nThat night in which He was betrayed,\nThe Saviour of the world took bread.\n\nAnd after thanks and glory given\nTo Him that rules in earth and heaven,\nThat symbol of His flesh He broke,\nAnd thus to all His followers spoke.\n\nMy broken body thus I give\nFor you, for all; take, eat, and live:\nAnd oft the sacred rite renew\nThat brings My wondrous love to view.\n\nThen in His hands the cup He raised,\nAnd God anew He thanked and praised,\nWhile kindness in His bosom glowed,\nAnd from His lips salvation flowed.\n\nMy blood I thus pour forth, He cries,\nTo cleanse the soul in sin that lies;\nIn this the covenant is sealed,\nAnd heaven's eternal grace revealed.\n\nWith love to man this cup is fraught,\nLet all partake the sacred draught;\nThrough latest ages let it pour\nIn memory of My dying hour.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "460",
        "title": "We bless Thee, God and Father",
        "author": "Alexander Carruthers",
        "meter": "7.6.7.6.D.",
        "tuneName": "Lymington",
        "lyrics": "\nWe bless Thee, God and Father,\nWe joy before Thy face;\nBeyond dark death for ever\nWe share Thy Son's blest place:\nHe lives a Man before Thee\nIn cloudless light above,\nIn Thine unbounded favour,\nThine everlasting love.\n\nHis Father and our Father,\nHis God and ours Thou art;\nAnd He is Thy Beloved,\nThe gladness of Thy heart:\nWe're His, in joy He brings us\nTo share His part and place,\nTo know Thy love and favour,\nThe shining of Thy face.\n\nThy love that now enfolds us\nCan ne'er wax cold or dim;\nIn Him that love doth centre,\nAnd we are loved in Him:\nIn Him Thy love and glory\nFind their eternal rest;\nThe many sons\u2014His brethren\u2014\nIn Him how near, how blest!\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "461",
        "title": "We saw Thee not when Thou didst come",
        "author": "Anne Rigby Richter & John Hampden Gurney (1834)",
        "meter": "8.8.8.8.8.8.",
        "tuneName": "Credo Pater Omnium",
        "lyrics": "\nWe saw Thee not when Thou didst come\nTo this poor world of sin and death,\nNor e'er beheld Thy cottage home\nIn that despised Nazareth;\nBut we believe Thy footsteps trod\nIts streets and plains, Thou Son of God.\n\nWe did not see Thee lifted high\nAmid that wild and savage crew,\nNor heard Thy meek, imploring cry,\nForgive, they know not what they do;\nYet we believe the deed was done\nWhich shook the earth, and veiled the sun.\n\nWe stood not by the empty tomb\nWhere late Thy sacred body lay,\nNor sat within that upper room,\nNor met Thee in the open way;\nBut we believe the angel said,\nWhy seek the living with the dead?\n\nWe did not mark the chosen few\nWhen Thou didst through the clouds ascend,\nFirst lift to heaven their wondering view,\nThen to the earth all prostrate bend;\nYet we believe that mortal eyes\nBeheld that journey to the skies.\n\nAnd now that Thou dost reign on high,\nAnd thence Thy waiting people bless,\nNo ray of glory from the sky\nDoth shine upon our wilderness;\nBut we believe Thy faithful word,\nAnd trust in our redeeming Lord.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "462",
        "title": "Worthy of homage and of praise;",
        "author": "F. Theodora Wigram",
        "meter": "L.M.",
        "tuneName": "Saxby",
        "lyrics": "\nWorthy of homage and of praise;\nWorthy by all to be adored;\nExhaustless theme of heavenly lays;\nThou, Thou art worthy, Jesus, Lord.\n\nNow seated on Jehovah's throne,\nThe Lamb once slain, in glory bright;\n'Tis thence Thou watchest o'er Thine own,\nGuarding us through the deadly fight.\n\nTo Thee, e'en now, our song we raise,\nThough sure the tribute mean must prove,\nNo mortal tongue can tell Thy ways,\nSo full of light and life and love.\n\nYet, Saviour, Thou shalt have full praise;\nWe soon shall meet Thee on the cloud,\nWe soon shall see Thee face to face,\nIn glory praising as we would.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "463",
        "title": "Ye gates, lift up your heads on high;",
        "author": "Francis Rous (Rowe) & William Barton & (1650) Scottish Psalter",
        "meter": "P.M.",
        "tuneName": "St. George's, Edinburgh",
        "lyrics": "\nYe gates, lift up your heads on high;\nYe doors that last for aye\nBe lifted up, that so the King\nOf glory enter may:\nBut who of glory is the King?\nThe mighty Lord is this;\nEv'n that same Lord that great in might\nAnd strong in battle is.\n\nYe gates, lift up your heads; ye doors,\nDoors that do last for aye,\nBe lifted up, that so the King\nOf glory enter may:\nBut who is He that is the King\nOf glory? who is this?\nThe Lord of hosts, and none but He,\nThe King of glory is.\n",
        "Chorus": "\nHallelujah! Hallelujah!\nHallelujah! Hallelujah!\nAmen, Amen, Amen.\n",
        "addedChorus": ""
    },
    {
        "number": "464",
        "title": "Ye servants of God, your Master proclaim",
        "author": "Charles Wesley (1744)",
        "meter": "10.11's",
        "tuneName": "Laudate Dominum Worship",
        "lyrics": "\nYe servants of God, your Master proclaim,\nAnd publish abroad His wonderful name;\nThe name all-victorious of Jesus extol;\nHis kingdom is glorious, and rules over all.\n\nGod ruleth on high, almighty to save;\nAnd still He is nigh, His presence we have;\nThe great congregation His triumph shall sing,\nAscribing salvation to Jesus our King.\n\nSalvation to God who sits on the throne;\nLet all cry aloud, and honour the Son;\nThe praises of Jesus the angels proclaim,\nFall down on their faces and worship the Lamb.\n\nThen let us adore and give Him His right;\nAll glory and power, all wisdom and might;\nAll honour and blessing with angels above,\nAnd thanks never-ceasing, and infinite love.\n",
        "Chorus": "",
        "addedChorus": ""
    },
    {
        "number": "465",
        "title": "Now to Him who loved us, gave us",
        "author": "Samuel Miller Waring",
        "meter": "8.7.8.7.8.7.",
        "tuneName": "Triumph",
        "lyrics": "\nNow to Him who loved us, gave us\nEvery pledge that love could give,\nFreely shed His blood to save us,\nGave His life that we may live,\nBe the kingdom and dominion\nAnd the glory evermore.\n",
        "Chorus": "",
        "addedChorus": ""
    },
        // Additional hymns...
    ];

    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    let sortOption = 'number';
    let currentList = 'all'; // 'all' or 'favorites'
    const hymnList = document.getElementById("hymn-list");
    const hymnDetail = document.getElementById("hymn-detail");
    const hymnDetailTitle = document.getElementById("hymn-detail-title");
    const hymnDetailLyrics = document.getElementById("hymn-detail-lyrics");
    const searchInput = document.getElementById("search");
    const sortNumberButton = document.getElementById("sort-number");
    const sortTitleButton = document.getElementById("sort-title");
    const viewFavoritesButton = document.getElementById("view-favorites");
    const switchThemeButton = document.getElementById("switch-theme");
    const backToListButton = document.getElementById("back-to-list");
    const sortNumberButtonBottom = document.getElementById("sort-number-bottom");
    const sortTitleButtonBottom = document.getElementById("sort-title-bottom");
    const viewFavoritesButtonBottom = document.getElementById("view-favorites-bottom");
    const switchThemeButtonBottom = document.getElementById("switch-theme-bottom");
    const backToListFooterButton = document.getElementById("back-to-list-footer");

    const renderHymns = (hymnsToRender) => {
        hymnList.innerHTML = "";
        hymnsToRender.forEach(hymn => {
            const li = document.createElement("li");
            li.innerHTML = `
                <h2 data-number="${hymn.number}">
                    <span class="star" data-number="${hymn.number}">
                        ${favorites.includes(hymn.number) ? '<i class="fas fa-star"></i>' : '<i class="far fa-star"></i>'}
                    </span>
                    ${hymn.number}: ${hymn.title}
                </h2>
                <p class="hidden">${hymn.lyrics}</p>
            `;
            hymnList.appendChild(li);
        });
        addHymnListeners();
    };

    const sortHymns = (hymnsToSort) => {
        return hymnsToSort.sort((a, b) => {
            if (sortOption === 'number') {
                return a.number.localeCompare(b.number);
            } else {
                return a.title.localeCompare(b.title);
            }
        });
    };

    const filterHymns = (query) => {
        return hymns.filter(hymn => {
            return hymn.title.toLowerCase().includes(query.toLowerCase()) ||
                   hymn.number.includes(query) ||
                   hymn.lyrics.toLowerCase().includes(query.toLowerCase());
        });
    };

    const addHymnListeners = () => {
        document.querySelectorAll("#hymn-list h2").forEach(h2 => {
            h2.addEventListener("click", (event) => {
                const hymnNumber = event.target.closest("h2").dataset.number;
                const hymn = hymns.find(h => h.number === hymnNumber);
                if (hymn && !event.target.classList.contains("star") && !event.target.closest(".star")) {
                    hymnDetailTitle.innerHTML = `
                        <span class="star" data-number="${hymn.number}">
                            ${favorites.includes(hymn.number) ? '<i class="fas fa-star"></i>' : '<i class="far fa-star"></i>'}
                        </span>
                        ${hymn.number}: ${hymn.title}
                    `;
                    hymnDetailLyrics.innerText = hymn.lyrics.trim();
                    hymnList.classList.add("hidden");
                    hymnDetail.classList.remove("hidden");
                    addStarClickListener();
                }
            });
        });

        addStarClickListener();
    };

    const addStarClickListener = () => {
        document.querySelectorAll(".star").forEach(star => {
            star.addEventListener("click", (event) => {
                event.stopPropagation();
                const number = event.target.closest(".star").dataset.number;
                if (favorites.includes(number)) {
                    favorites = favorites.filter(fav => fav !== number);
                } else {
                    favorites.push(number);
                }
                localStorage.setItem('favorites', JSON.stringify(favorites));
                if (currentList === 'all') {
                    renderHymns(sortHymns(filterHymns(searchInput.value)));
                } else {
                    const favoriteHymns = hymns.filter(hymn => favorites.includes(hymn.number));
                    renderHymns(sortHymns(favoriteHymns));
                }
                updateStarIcon(number);
            });
        });
    };

    const updateStarIcon = (number) => {
        document.querySelectorAll(`.star[data-number="${number}"]`).forEach(star => {
            if (favorites.includes(number)) {
                star.innerHTML = '<i class="fas fa-star"></i>';
            } else {
                star.innerHTML = '<i class="far fa-star"></i>';
            }
        });
    };

    const toggleTheme = () => {
        document.body.classList.toggle('light-theme');
    };

    searchInput.addEventListener("input", () => {
        renderHymns(sortHymns(filterHymns(searchInput.value)));
    });

    sortNumberButton.addEventListener("click", () => {
        sortOption = 'number';
        hymnDetail.classList.add("hidden");
        hymnList.classList.remove("hidden");
        if (currentList === 'all') {
            renderHymns(sortHymns(filterHymns(searchInput.value)));
        } else {
            const favoriteHymns = hymns.filter(hymn => favorites.includes(hymn.number));
            renderHymns(sortHymns(favoriteHymns));
        }
    });

    sortTitleButton.addEventListener("click", () => {
        sortOption = 'title';
        hymnDetail.classList.add("hidden");
        hymnList.classList.remove("hidden");
        if (currentList === 'all') {
            renderHymns(sortHymns(filterHymns(searchInput.value)));
        } else {
            const favoriteHymns = hymns.filter(hymn => favorites.includes(hymn.number));
            renderHymns(sortHymns(favoriteHymns));
        }
    });

    viewFavoritesButton.addEventListener("click", () => {
        currentList = 'favorites';
        const favoriteHymns = hymns.filter(hymn => favorites.includes(hymn.number));
        hymnDetail.classList.add("hidden");
        hymnList.classList.remove("hidden");
        renderHymns(sortHymns(favoriteHymns));
    });

    sortNumberButtonBottom.addEventListener("click", () => {
        sortOption = 'number';
        hymnDetail.classList.add("hidden");
        hymnList.classList.remove("hidden");
        if (currentList === 'all') {
            renderHymns(sortHymns(filterHymns(searchInput.value)));
        } else {
            const favoriteHymns = hymns.filter(hymn => favorites.includes(hymn.number));
            renderHymns(sortHymns(favoriteHymns));
        }
    });

    sortTitleButtonBottom.addEventListener("click", () => {
        sortOption = 'title';
        hymnDetail.classList.add("hidden");
        hymnList.classList.remove("hidden");
        if (currentList === 'all') {
            renderHymns(sortHymns(filterHymns(searchInput.value)));
        } else {
            const favoriteHymns = hymns.filter(hymn => favorites.includes(hymn.number));
            renderHymns(sortHymns(favoriteHymns));
        }
    });

    viewFavoritesButtonBottom.addEventListener("click", () => {
        currentList = 'favorites';
        const favoriteHymns = hymns.filter(hymn => favorites.includes(hymn.number));
        hymnDetail.classList.add("hidden");
        hymnList.classList.remove("hidden");
        renderHymns(sortHymns(favoriteHymns));
    });

    switchThemeButton.addEventListener("click", toggleTheme);
    switchThemeButtonBottom.addEventListener("click", toggleTheme);

    const backToListButtons = [backToListButton, backToListFooterButton];
    backToListButtons.forEach(button => {
        button.addEventListener("click", () => {
            hymnDetail.classList.add("hidden");
            hymnList.classList.remove("hidden");
            if (currentList === 'favorites') {
                currentList = 'all';
                renderHymns(sortHymns(filterHymns(searchInput.value)));
            }
        });
    });

    renderHymns(sortHymns(hymns));
});
