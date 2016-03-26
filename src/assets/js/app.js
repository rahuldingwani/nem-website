$(document).foundation();

// Elements to inject
var mySVGsToInject = document.querySelectorAll('img.injectIt');

// Options
var injectorOptions = {
  evalScripts: 'once',
  pngFallback: '../img',
  each: function (svg) {
    // Callback after each SVG is injected
    console.log('SVG injected: ' + svg.getAttribute('id'));
  }
};

// Trigger the injection
SVGInjector(mySVGsToInject, injectorOptions, function (totalSVGsInjected) {
  // Callback after all SVGs are injected
  console.log('We injected ' + totalSVGsInjected + ' SVG(s)!');
});

// smoothScroll.init();
gumshoe.init({
  offset: 10, // Distance in pixels to offset calculations
});

//parrallax scrolling
var s = skrollr.init(/*other stuff*/);
// The options (second parameter) are all optional. The values shown are the default values.
skrollr.menu.init(s, {
    //skrollr will smoothly animate to the new position using `animateTo`.
    animate: true,
    //The easing function to use.
    easing: 'sqrt',
    //Multiply your data-[offset] values so they match those set in skrollr.init
    scale: 1.5,
    //How long the animation should take in ms.
    duration: function(currentTop, targetTop) {
        //By default, the duration is hardcoded at 500ms.
        // return 500;
        //But you could calculate a value based on the current scroll position (`currentTop`) and the target scroll position (`targetTop`).
        // return Math.abs(currentTop - targetTop) * 10;
    },
    //By default skrollr-menu will only react to links whose href attribute contains a hash and nothing more, e.g. `href="#foo"`.
    //If you enable `complexLinks`, skrollr-menu also reacts to absolute and relative URLs which have a hash part.
    //The following will all work (if the user is on the correct page):
    //http://example.com/currentPage/#foo
    //http://example.com/currentDir/currentPage.html?foo=bar#foo
    ///?foo=bar#foo
    complexLinks: false,
    //This event is triggered right before we jump/animate to a new hash.
    // change: function(newHash, newTopPosition) {
    //     //Do stuff
    // },
    //Add hash link (e.g. `#foo`) to URL or not.
    updateUrl: true //defaults to `true`.
});

// fixes bug that messed up Foundation Reveal while skrollr was active.
// This could make more bugs though so let's see....
var div = document.getElementById("body");
div.style.height = "0px";

// Make elements stick function calls
$(document).ready(function(){
  $("#sticker").sticky({
    topSpacing:20,
    bottomSpacing: 800
  });
});

// remove stats section if stats are null
if ($('#data1').is(':empty')) {
    $('#stats').remove();
}

// //**## NEM NEWS FEED ##**/
// //Pulls twitter feed using twitter fetcher.
// // Also automatically hyperlinks URLS and user mentions and hashtags.
// //@nemcoin
var config1 = {
  "id": '474290838172749825',
  "domId": 'newsFeed',
  "maxTweets": 3,
  "enableLinks": true,
  "showUser": true,
  "showImages": true,
  "showTime": true,
  "dateFunction": '',
  "showRetweet": false,
  "showInteraction": false
};
twitterFetcher.fetch(config1);


$.i18n.init({
		ns: { namespaces: ['en', 'cn', 'ja', 'fi'], defaultNs: 'en'},
		useLocalStorage: false,
		fallbackLng: 'en',
    resGetPath: 'assets/locales/__lng__.json',
		debug: true
	}, function(t) {
		// $('#add').text($.t('ns.common:add'));
		// $('#appname').text($.t('app.name'));
		// $('#appclient').text($.t('app.client'));

		<!-- OURNEM HOMEPAGE -->



		<!-- NAVIGATION -->
    $('#navClient').text($.t('navClient'));
    $('#navBuy').text($.t('navBuy'));
    $('#navSupport').text($.t('navSupport'));
    $('#navSupportFaq').text($.t('navSupportFaq'));
    $('#navSupportTutorial').text($.t('navSupportTutorial'));
    $('#navSupportForum').text($.t('navSupportForum'));
    $('#navUpdates').text($.t('navUpdates'));
    $('#navBlog').text($.t('navBlog'));
    $('#navLang').i18n();

    <!-- ABOUT SECTION -->
    $('.multisigTitle').text($.t('multisigTitle'));
    $('.appsTitle').text($.t('appsTitle'));
    $('.reputationTitle').text($.t('reputationTitle'));
    $('.messagingTitle').text($.t('messagingTitle'));
    $('.architectureTitle').text($.t('architectureTitle'));
    $('.harvestingTitle').text($.t('harvestingTitle'));
    $('.delegatedTitle').text($.t('delegatedTitle'));
    $('.mosaicTitle').text($.t('mosaicTitle'));
    $('.videoTitle').text($.t('videoTitle'));
    $('.nccTitle').text($.t('nccTitle'));
    $('.nisTitle').text($.t('nisTitle'));
    $('.consensusTitle').text($.t('consensusTitle'));
    $('.newcodeTitle').text($.t('newcodeTitle'));
    $('.blocktimesTitle').text($.t('blocktimesTitle'));
    $('.xemTitle').text($.t('xemTitle'));
    $('.namespaceTitle').text($.t('namespaceTitle'));
    $('.spamTitle').text($.t('spamTitle'));

    $('.multisig').text($.t('multisig'));
    $('.multisig2').text($.t('multisig2'));
    $('.apps').text($.t('apps'));
    $('.reputation').text($.t('reputation'));
    $('.messaging').text($.t('messaging'));
    $('.architecture').text($.t('architecture'));
    $('.harvesting').text($.t('harvesting'));
    $('.delegated').text($.t('delegated'));
    $('.mosaic').text($.t('mosaic'));
    $('.mosaic2').text($.t('mosaic2'));
    $('.ncc').text($.t('ncc'));
    $('.nis').text($.t('nis'));
    $('.consensus').text($.t('consensus'));
    $('.consensus2').text($.t('consensus2'));
    $('.newcode').text($.t('newcode'));
    $('.blocktimes').text($.t('blocktimes'));
    $('.xem').text($.t('xem'));
    $('.namespace').text($.t('namespace'));
    $('.namespace2').text($.t('namespace2'));
    $('.namespace3').text($.t('namespace3'));
    $('.spam').text($.t('spam'));

    <!-- STATS SECTION -->
    $('#dataText1').text($.t('data1'));
    $('#dataText2').text($.t('data2'));
    $('#dataText3').text($.t('data3'));
    $('#dataText4').text($.t('data4'));


    <!-- CLIENT SECTION -->
    $('#clientHeader').text($.t('header'));
    $('#clientContent').i18n();
    $('#clientClick').text($.t('click'));
    $('#clientClickAlt').text($.t('clickAlt'));
    $('#clientHelp').i18n();
    $('#clientHelpAlt').i18n();

    $('#clientHeader2').text($.t('header2'));
    $('#clientAbout').text($.t('about2'));
    $('#clientHelp2').i18n();

    <!-- BUY SECTION -->
    $('#buyHeader').text($.t('buyHeader'));
    $('#buyHere').text($.t('buyHere'));
    $('#xemFaucet').text($.t('xemFaucet'));
    $('#xemCash').text($.t('xemCash'));

    <!-- HELP SECTION -->
    $('#helpHeader').text($.t('helpHeader'));
    $('#faq').text($.t('faq'));
    $('#faqAlt').text($.t('faqAlt'));
    $('#forum').text($.t('forum'));
    $('#forumAlt').text($.t('forumAlt'));
    $('#forumAlt2').text($.t('forumAlt2'));
    $('#tutorials').text($.t('tutorials'));
    $('#tutorialsAlt').text($.t('tutorialsAlt'));
    $('#chat').text($.t('chat'));
    $('#chatAlt').text($.t('chatAlt'));
    $('#chatAlt2').text($.t('chatAlt2'));

    <!-- FOOTER SECTION -->
    $('#footerText').text($.t('footerText'));
    $('#resources').text($.t('resources'));
    $('#articles').text($.t('articles'));
    $('#posts').text($.t('posts'));

    <!-- INSTALL PAGE -->
    $('.getClient').text($.t('getClient'));
    $('#installers').text($.t('installers'));
    $('#standalone').text($.t('standalone'));
    $('#installOptions').text($.t('installOptions'));
    $('#backup').text($.t('backup'));
    $('#ifIssues').i18n();
    $('#or').text($.t('or'));
    $('#sisterSite').i18n();

    <!-- FAQ -->
    $('.faqHeader').text($.t('faqBanner'));
    $('#faqGeneral').text($.t('faqGeneral'));

    $('#nemCrypto').text($.t('nemCrypto'));
    $('#nemCryptoContent').text($.t('nemCryptoContent'));

    $('#whyNem').text($.t('whyNem'));
    $('#whyNemContent').text($.t('whyNemContent'));
    $('#whyNemContent2').text($.t('whyNemContent2'));
    $('#whyNemContent3').text($.t('whyNemContent3'));
    $('#whyNemContent4').text($.t('whyNemContent4'));
    $('#whyNemContent5').text($.t('whyNemContent5'));
    $('#whyNemContent6').text($.t('whyNemContent6'));
    $('#whyNemContent7').text($.t('whyNemContent7'));
    $('#whyNemContent8').text($.t('whyNemContent8'));
    $('#whyNemContent9').text($.t('whyNemContent9'));
    $('#whyNemContent10').text($.t('whyNemContent10'));
    $('#whyNemContent11').text($.t('whyNemContent11'));

    $('#doWith').text($.t('doWith'));
    $('#doWithContent').text($.t('doWith'));

    $('#whatsXem').text($.t('whatsXem'));
    $('#whatsXemContent').text($.t('whatsXemContent'));

    $('#technicalReference').text($.t('technicalReference'));
    $('#technicalReferenceContent').i18n();

    $('#getStarted').text($.t('getStarted'));

    $('#osSupport').text($.t('osSupport'));
    $('#osSupportContent').text($.t('osSupportContent'));

    $('#installJava').text($.t('installJava'));
    $('#installJavaContent').i18n();
    $('#installJavaContent2').text($.t('installJavaContent2'));
    $('#installJavaContent3').i18n();
    $('#installJavaContent4').i18n();
    $('#installJavaContent5').i18n();
    $('#installJavaContent6').text($.t('installJavaContent6'));
    $('#installJavaContent7').i18n();
    $('#installJavaContent8').i18n();
    $('#installJavaContent9').i18n();
    $('#installJavaContent10').text($.t('installJavaContent10'));
    $('#installJavaContent11').i18n();
    $('#installJavaContent12').i18n();

    $('#nemWallet').text($.t('nemWallet'));
    $('#nemWalletContent').i18n();
    $('#nemWalletContent2').i18n();

    $('#strongPassword').text($.t('strongPassword'));
    $('#strongPassword').i18n();

    $('#nemSoftware').text($.t('nemSoftware'));
    $('#checkJava8').text($.t('checkJava8'));
    $('#toInstall').text($.t('toInstall'));
    $('#downloadUnzip').i18n();
    $('#runIt').i18n();
    $('#for32Java').text($.t('for32Java'));
    $('#windows32').i18n();
    $('#ubuntu32').i18n();
    $('#outsideLan').i18n();

    $('#howGetXem').text($.t('howGetXem'));
    $('#howGetXemContent').i18n();
    $('#howGetXemContent2').i18n();
    $('#howGetXemContent3').i18n();
    $('#howGetXemContent4').i18n();
    $('#howGetXemContent5').i18n();
    $('#howGetXemContent6').i18n();
    $('#howGetXemContent7').i18n();
    $('#howGetXemContent8').i18n();

    $('#nccAndNis').text($.t('nccAndNis'));
    $('#nccAndNisContent').i18n();
    $('#nccAndNisContent2').i18n();

    /* NCC and NIS system requirments go here */
    /* NCC and NIS system requirments go here */
    /* NCC and NIS system requirments go here */
    /* NCC and NIS system requirments go here */

    $('#lightWallet').text($.t('lightWallet'));
    $('#lightWalletContent').text($.t('lightWalletContent'));
    $('#lightWalletContent2').text($.t('lightWalletContent2'));
    $('#lightWalletContent3').i18n();

    $('#whyLight').text($.t('whyLight'));
    $('#whyLightContent').text($.t('whyLightContent'));
    $('#whyLightContent2').text($.t('whyLightContent2'));
    $('#whyLightContent3').text($.t('whyLightContent3'));
    $('#whyLightContent4').i18n();

    $('#runNode').text($.t('runNode'));
    $('#runNodeContent2').i18n();
    $('#runNodeContent3').i18n();
    $('#runNodeContent4').i18n();

    $('#nodeRewards').text($.t('nodeRewards'));
    $('#nodeRewardsContent').i18n();
    $('#nodeRewardsContent2').i18n();

    $('#mobileWallet').text($.t('mobileWallet'));
    $('#mobileWalletContent').i18n();

    $('#blockExplore').text($.t('blockExplore'));
    $('#blockExploreContent').i18n();
    $('#blockExploreContent2').i18n();
    $('#blockExploreContent3').i18n();
    $('#blockExploreContent4').i18n();
    $('#blockExploreContent5').i18n();

    $('#techBasics').text($.t('techBasics'));
    $('#whatsPoi').text($.t('whatsPoi'));
    $('#whatsPoiContent').text($.t('whatsPoiContent'));
    $('#whatsPoiContent2').i18n();

    $('#MultiAccounts').text($.t('MultiAccounts'));
    $('#MultiAccountsContent').text($.t('MultiAccountsContent'));
    $('#MultiAccountsContent2').text($.t('MultiAccountsContent2'));
    $('#MultiAccountsContent3').text($.t('MultiAccountsContent3'));
    $('#MultiAccountsContent4').text($.t('MultiAccountsContent4'));
    $('#MultiAccountsContent5').text($.t('MultiAccountsContent5'));
    $('#MultiAccountsContent6').text($.t('MultiAccountsContent6'));
    $('#MultiAccountsContent7').i18n();

    $('#introMosaic').text($.t('introMosaic'));
    $('#introMosaicContent').text($.t('introMosaicContent'));
    $('#introMosaicProperties').text($.t('introMosaicProperties'));
    $('#introMosaicDescription').text($.t('introMosaicDescription'));
    $('#introMosaicContent2').text($.t('introMosaicContent2'));
    $('#introMosaicDivisibilty').text($.t('introMosaicDivisibilty'));
    $('#introMosaicContent3').text($.t('introMosaicContent3'));
    $('#introMosaicInfo').text($.t('introMosaicInfo'));
    $('#introMosaicContent4').text($.t('introMosaicContent4'));
    $('#introMosaicDomain').text($.t('introMosaicDomain'));
    $('#introMosaicContent5').text($.t('introMosaicContent5'));
    $('#introMosaicName').text($.t('introMosaicName'));
    $('#introMosaicContent6').text($.t('introMosaicContent6'));
    $('#introMosaicMutable').text($.t('introMosaicMutable'));
    $('#introMosaicContent7').text($.t('introMosaicContent7'));
    $('#introMosaicTransfer').text($.t('introMosaicTransfer'));
    $('#introMosaicContent8').text($.t('introMosaicContent8'));
    $('#introMosaicLevy').text($.t('introMosaicLevy'));
    $('#introMosaicContent9').text($.t('introMosaicContent9'));
    $('#introMosaicContent10').text($.t('introMosaicContent10'));

    $('#introNamespace').text($.t('introNamespace'));
    $('#introNamespaceContent').text($.t('introNamespaceContent'));
    $('#introNamespaceContent2').text($.t('introNamespaceContent2'));
    $('#introNamespaceHow').text($.t('introNamespaceHow'));
    $('#introNamespaceExample').text($.t('introNamespaceExample'));
    $('#introNamespaceExample2').text($.t('introNamespaceExample2'));
    $('#introNamespaceExample3').text($.t('introNamespaceExample3'));
    $('#introNamespaceExample4').text($.t('introNamespaceExample4'));
    $('#introNamespaceMosaicExample').text($.t('introNamespaceMosaicExample'));
    $('#introNamespaceMosaicExample2').text($.t('introNamespaceMosaicExample2'));
    $('#introNamespaceMosaicExample3').text($.t('introNamespaceMosaicExample3'));
    $('#introNamespaceMosaicExample4').text($.t('introNamespaceMosaicExample4'));
    $('#introNamespaceContent3').i18n();
    $('#introNamespaceContent4').i18n();
    $('#introNamespaceContent5').i18n();
    $('#introNamespaceContent6').i18n();
    $('#introNamespaceContent7').i18n();
    $('#introNamespaceContent8').i18n();
    $('#introNamespaceContent9').i18n();
    $('#introNamespaceContent10').i18n();
    $('#introNamespaceContent11').i18n();
    $('#introNamespaceContent12').i18n();

    $('#whatsHarvesting').text($.t('whatsHarvesting'));
    $('#whatsHarvestingContent').text($.t('whatsHarvestingContent'));
    $('#whatsHarvestingContent2').text($.t('whatsHarvestingContent2'));
    $('#whatsHarvestingContent3').i18n();

    $('#howHarvest').text($.t('howHarvest'));
    $('#howHarvestContent').text($.t('howHarvestContent'));
    $('#howHarvestContent2').text($.t('howHarvestContent2'));

    $('#howDelegateHarvest').text($.t('howDelegateHarvest'));
    $('#howDelegateHarvestContent').text($.t('howDelegateHarvestContent'));
    $('#howDelegateHarvestContent2').i18n();

    $('#openPort').text($.t('openPort'));
    $('#openPortContent').i18n();
    $('#openPortContent2').i18n();

    $('#vestingXem').text($.t('vestingXem'));
    $('#vestingXemContent').i18n();

    $('#testnetWhat').text($.t('testnetWhat'));
    $('#testnetWhatContent').i18n();

    $('#deepQuestions').text($.t('deepQuestions'));

    $('#nemFund').text($.t('nemFund'));
    $('#nemFundContent').i18n();

    $('#nemDistribution').text($.t('nemDistribution'));
    $('#nemDistributionContent').i18n();

    $('#mijinWhat').text($.t('mijinWhat'));
    $('#mijinWhatContent').text($.t('mijinWhatContent'));
    $('#mijinWhatContent2').text($.t('mijinWhatContent2'));
    $('#mijinWhatContent3').text($.t('mijinWhatContent3'));
    $('#mijinWhatContent4').text($.t('mijinWhatContent4'));
    $('#mijinWhatContent5').text($.t('mijinWhatContent5'));
    $('#mijinWhatContent6').text($.t('mijinWhatContent6'));
    $('#mijinWhatContent7').text($.t('mijinWhatContent7'));
    $('#mijinWhatContent8').i18n();

    $('#moreNem').text($.t('moreNem'));
    $('#moreNemContent').i18n();
    $('#moreNemContent2').i18n();
    $('#moreNemContent3').i18n();
    $('#moreNemContent4').i18n();
    $('#moreNemContent5').i18n();
    $('#moreNemContent6').i18n();
    $('#moreNemContent7').i18n();

    $('#miscQuestions').text($.t('miscQuestions'));

    $('#xemCirculation').text($.t('xemCirculation'));
    $('#xemCirculationContent').text($.t('xemCirculationContent'));

    $('#nemCreditCards').text($.t('nemCreditCards'));
    $('#nemCreditCardsContent').i18n();

    $('#nemFaucet').text($.t('nemFaucet'));
    $('#nemFaucetContent').i18n();

    $('#socialNetwork').text($.t('socialNetwork'));
    $('#socialNetworkContent').text($.t('socialNetworkContent'));
    $('#socialNetworkContent2').i18n();
    $('#socialNetworkContent3').i18n();
    $('#socialNetworkContent4').i18n();
    $('#socialNetworkContent5').i18n();
    $('#socialNetworkContent6').i18n();
    $('#socialNetworkContent7').i18n();
    $('#socialNetworkContent8').i18n();
    $('#socialNetworkContent9').i18n();
    $('#socialNetworkContent10').i18n();


    <!-- GENERIC -->
    $('.coming').text($.t('coming'));
    $('.more').text($.t('more'));
    $('.getXem').text($.t('getXem'));
});
