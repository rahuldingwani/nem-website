$(document).foundation();


$('.one-time').slick({
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3500,
  responsive: [
  {
    breakpoint: 1000,
    settings: {
      mobileFirst: true,
      adaptiveHeight: true
    }
  }
  ]
});

// Elements to inject
var mySVGsToInject = document.querySelectorAll('img.injectIt');

// Options
var injectorOptions = {
  evalScripts: 'always',
  // pngFallback: '../img',
  each: function (svg) {
    // Callback after each SVG is injected
    // console.log('SVG injected: ' + svg.getAttribute('id'));
  }
};

// Trigger the injection
SVGInjector(mySVGsToInject, injectorOptions, function (totalSVGsInjected) {
  // Callback after all SVGs are injected
  // console.log('We injected ' + totalSVGsInjected + ' SVG(s)!');
});

$(function() {
    window.nodeexplorer = function(data) {

        var marketCap = numeral(data.marketcapUSD).format('($0.00a)');
        $('#data1').text(data.nodesOnlineQuantity);
        $('#data2').text(data.currentBlockHeight);
        $('#data3').text(marketCap);
        $('#data4').text(data.latestVersion);;
    }
    $.getJSON('https://www.nodeexplorer.com/api_network_status_jsonp?callback=?');

})

$.i18n.init({
		ns: { namespaces: ['en', 'cn', 'ja', 'fi'], defaultNs: 'en'},
		useLocalStorage: false,
		fallbackLng: 'en',
    resGetPath: 'assets/locales/__lng__.json',
		debug: false
	}, function(t) {

		<!-- OURNEM HOMEPAGE -->
		<!-- NAVIGATION -->
    $('#navClient').text($.t('navClient'));
    $('#navBuy').text($.t('navBuy'));
    $('#navSupport').text($.t('navSupport'));
    $('#navSupportFaq').text($.t('navSupportFaq'));
    $('#navSupportTutorial').text($.t('navSupportTutorial'));
    $('#navSupportForum').text($.t('navSupportForum'));
    $('#navSupportWiki').text($.t('navSupportWiki'));
    $('#navUpdates').text($.t('navUpdates'));
    $('#navBlog').text($.t('navBlog'));
    $('#navLang').i18n();

    <!-- ABOUT SECTION -->
    $('#nemSecurity').text($.t('nemSecurity'));
    $('#nemCore').text($.t('nemCore'));
    $('#nemFeatures').text($.t('nemFeatures'));

    $('.supernodesTitle').text($.t('supernodesTitle'));
    $('.lightwalletTitle').text($.t('lightwalletTitle'));
    $('.apisTitle').text($.t('apisTitle'));
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

    $('.multisig').i18n();
    $('.multisig2').i18n();
    $('.reputation').i18n();
    $('.reputation2').i18n();
    $('.messaging').i18n();
    $('.architecture').i18n();
    $('.harvesting').i18n();
    $('.harvesting2').i18n();
    $('.delegated').i18n();
    $('.mosaic').i18n();
    $('.mosaic2').i18n();
    $('.ncc').i18n();
    $('.nis').i18n();
    $('.consensus').i18n();
    $('.consensus2').i18n();
    $('.consensus3').i18n();
    $('.newcode').i18n();
    $('#newcode2').i18n();
    $('#newcode3').i18n();
    $('#newcode4').i18n();
    $('#newcode5').i18n();
    $('#newcode6').i18n();
    $('#newcode7').i18n();
    $('#newcode8').i18n();
    $('#newcode9').i18n();
    $('#newcode10').i18n();
    $('#newcode11').i18n();
    $('#newcode12').i18n();
    $('#newcode13').i18n();
    $('#newcode14').i18n();


    $('.blocktimes').i18n();
    $('.xem').i18n();
    $('.namespace').i18n();
    $('.namespace2').i18n();
    $('.namespace3').i18n();
    $('.spam').i18n();
    $('.supernode').i18n();
    $('.lightwallet').i18n();
    $('.lightwallet2').i18n();
    $('.lightwallet3').i18n();
    $('.nisApis').i18n();




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
    $('.clientHelp').i18n();
    $('#clientHelpAlt').i18n();

    $('#clientHeader2').text($.t('header2'));
    $('#clientAbout').text($.t('about2'));
    $('#clientAbout2').text($.t('about3'));
    $('#clientHelp2').i18n();
    $('.followGuide').i18n();


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
    $('#toolsList').text($.t('toolsList'));
    $('#toolsContent').i18n();
    $('#toolsContent2').i18n();
    $('#toolsContent3').i18n();
    $('#toolsContent4').i18n();
    $('#toolsContent5').i18n();
    $('#toolsContent6').i18n();
    $('#toolsContent7').i18n();

    $('#devResources').text($.t('devResources'));
    $('#devResourcesContent').i18n();
    $('#devResourcesContent2').i18n();
    $('#devResourcesContent3').i18n();
    $('#devResourcesContent4').i18n();
    $('#devResourcesContent5').i18n();
    $('#devResourcesContent6').i18n();
    $('#devResourcesContent7').i18n();
    $('#devResourcesContent8').i18n();

    $('#devGuides').text($.t('devGuides'));
    $('#devGuidesContent').i18n();
    $('#devGuidesContent2').i18n();
    $('#devGuidesContent3').i18n();
    $('#devGuidesContent4').i18n();
    $('#devGuidesContent5').i18n();
    $('#devGuidesContent6').i18n();
    $('#devGuidesContent7').i18n();

    $('#topBlogs').text($.t('topBlogs'));
    $('#topBlogsContent').i18n();
    $('#topBlogsContent2').i18n();
    $('#topBlogsContent3').i18n();
    $('#topBlogsContent4').i18n();
    $('#topBlogsContent5').i18n();
    $('#topBlogsContent6').i18n();
    $('#topBlogsContent7').i18n();

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
    $('.faqGeneral').text($.t('faqGeneral'));

    $('.nemCrypto').text($.t('nemCrypto'));
    $('#nemCryptoContent').text($.t('nemCryptoContent'));

    $('.whyNem').text($.t('whyNem'));
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

    $('.doWith').text($.t('doWith'));
    $('#doWithContent').text($.t('doWithContent'));

    $('.whatsXem').text($.t('whatsXem'));
    $('#whatsXemContent').text($.t('whatsXemContent'));

    $('.technicalReference').text($.t('technicalReference'));
    $('#technicalReferenceContent').i18n();

    $('.getStarted').text($.t('getStarted'));

    $('.osSupport').text($.t('osSupport'));
    $('#osSupportContent').text($.t('osSupportContent'));

    $('.installJava').text($.t('installJava'));
    $('#installJavaContent').i18n();
    $('#installJavaWindows').text($.t('installJavaWindows'));
    $('#installJavaContent2').i18n();
    $('#installJavaContent3').i18n();
    $('#installJavaContent4').i18n();
    $('#installJavaMac').text($.t('installJavaMac'));
    $('#installJavaContent5').text($.t('installJavaContent5'));
    $('#installJavaContent6').i18n();
    $('#installJavaContent7').i18n();
    $('#installJavaLinux').text($.t('installJavaLinux'));
    $('#installJavaContent8').text($.t('installJavaContent8'));
    $('#installJavaContent9').i18n();

    $('.nemWallet').text($.t('nemWallet'));
    $('#nemWalletContent').i18n();
    $('#nemWalletContent2').i18n();

    $('.strongPassword').text($.t('strongPassword'));
    $('#strongPasswordContent').i18n();

    $('.nemSoftware').text($.t('nemSoftware'));
    $('#checkJava8').text($.t('checkJava8'));
    $('#toInstall').text($.t('toInstall'));
    $('#downloadUnzip').i18n();
    $('#runIt').i18n();
    $('#for32Java').text($.t('for32Java'));
    $('#windows32').i18n();
    $('#ubuntu32').i18n();
    $('#outsideLan').i18n();

    $('.howGetXem').text($.t('howGetXem'));
    $('#howGetXemContent').i18n();
    $('#howGetXemContent2').i18n();
    $('#howGetXemContent3').i18n();
    $('#howGetXemContent4').i18n();
    $('#howGetXemContent5').i18n();
    $('#howGetXemContent6').i18n();
    $('#howGetXemContent7').i18n();
    $('#howGetXemContent8').i18n();

    $('.nccAbout').text($.t('nccAbout'));
    $('#nccContent').i18n();

    $('.nisAbout').text($.t('nisAbout'));
    $('#nisContent').i18n();

    $('.lightWallet').text($.t('lightWallet'));
    $('#lightWalletContent').text($.t('lightWalletContent'));
    $('#lightWalletContent2').text($.t('lightWalletContent2'));
    $('#lightWalletContent3').i18n();

    $('.whyLight').text($.t('whyLight'));
    $('#whyLightContent').text($.t('whyLightContent'));
    $('#whyLightContent2').text($.t('whyLightContent2'));
    $('#whyLightContent3').text($.t('whyLightContent3'));
    $('#whyLightContent4').i18n();

    $('.nisReq').text($.t('nisReq'));
    $('#nisReqContent').text($.t('nisReqContent'));
    $('#nisReqContent2').text($.t('nisReqContent2'));
    $('#nisReqContent3').text($.t('nisReqContent3'));
    $('#nisReqContent4').text($.t('nisReqContent4'));
    $('#nisReqContent5').i18n();
    $('#nisReqContent6').i18n();
    $('#nisReqContent7').i18n();

    $('.nccAndNisReq').text($.t('nccAndNisReq'));
    $('#nccAndNisReqContent').text($.t('nccAndNisReqContent'));
    $('#nccAndNisReqContent2').text($.t('nccAndNisReqContent2'));
    $('#nccAndNisReqContent3').text($.t('nccAndNisReqContent3'));
    $('#nccAndNisReqContent4').i18n();
    $('#nccAndNisReqContent5').i18n();

    $('.supernodeReq').text($.t('supernodeReq'));
    $('#supernodeReqContent').text($.t('supernodeReqContent'));
    $('#supernodeReqContent2').text($.t('supernodeReqContent2'));
    $('#supernodeReqContent3').text($.t('supernodeReqContent3'));
    $('#supernodeReqContent4').text($.t('supernodeReqContent4'));
    $('#supernodeReqContent5').i18n();
    $('#supernodeReqContent6').i18n();

    $('.runNode').text($.t('runNode'));
    $('#runNodeContent').i18n();
    $('#runNodeContent2').text($.t('runNodeContent2'));
    $('#runNodeContent3').i18n();
    $('#runNodeContent4').i18n();

    $('.nodeRewards').text($.t('nodeRewards'));
    $('#nodeRewardsContent').i18n();
    $('#nodeRewardsContent2').i18n();

    $('.mobileWallet').text($.t('mobileWallet'));
    $('#mobileWalletContent').i18n();

    $('.nemHelp').text($.t('nemHelp'));
    $('#nemHelpContent').i18n();

    $('.blockExplore').text($.t('blockExplore'));
    $('#blockExploreContent').i18n();
    $('#blockExploreContent2').i18n();
    $('#blockExploreContent3').i18n();
    $('#blockExploreContent4').i18n();
    $('#blockExploreContent5').i18n();

    $('.techBasics').text($.t('techBasics'));

    $('.whatsPoi').text($.t('whatsPoi'));
    $('#whatsPoiContent').text($.t('whatsPoiContent'));
    $('#whatsPoiContent2').i18n();

    $('.multiAccounts').text($.t('multiAccounts'));
    $('#multiAccountsContent').text($.t('multiAccountsContent'));
    $('#multiAccountsContent2').text($.t('multiAccountsContent2'));
    $('#multiAccountsContent3').text($.t('multiAccountsContent3'));
    $('#multiAccountsContent4').text($.t('multiAccountsContent4'));
    $('#multiAccountsContent5').text($.t('multiAccountsContent5'));
    $('#multiAccountsContent6').text($.t('multiAccountsContent6'));
    $('#multiAccountsContent7').i18n();

    $('.introMosaic').text($.t('introMosaic'));
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

    $('.introNamespace').text($.t('introNamespace'));
    $('#introNamespaceContent').text($.t('introNamespaceContent'));
    $('#introNamespaceContent2').text($.t('introNamespaceContent2'));
    $('#introNamespaceHow').text($.t('introNamespaceHow'));
    $('#introNamespaceExample').text($.t('introNamespaceExample'));
    $('#introNamespaceExample2').text($.t('introNamespaceExample2'));
    $('#introNamespaceExample3').text($.t('introNamespaceExample3'));
    $('#introNamespaceExample4').text($.t('introNamespaceExample4'));
    $('#introNamespaceMosaicExample').text($.t('introNamespaceMosaicExample'));
    $('#introNamespaceMosaicExample2').i18n();
    $('#introNamespaceMosaicExample3').i18n();
    $('#introNamespaceMosaicExample4').i18n();
    $('#introNamespaceContent3').text($.t('introNamespaceContent3'));
    $('#introNamespaceContent4').i18n();
    $('#introNamespaceContent5').i18n();
    $('#introNamespaceContent6').i18n();
    $('#introNamespaceContent7').i18n();
    $('#introNamespaceContent8').i18n();
    $('#introNamespaceContent9').i18n();
    $('#introNamespaceContent10').i18n();
    $('#introNamespaceContent11').i18n();
    $('#introNamespaceContent12').i18n();

    $('.whatsHarvesting').text($.t('whatsHarvesting'));
    $('#whatsHarvestingContent').text($.t('whatsHarvestingContent'));
    $('#whatsHarvestingContent2').text($.t('whatsHarvestingContent2'));
    $('#whatsHarvestingContent3').i18n();

    $('.howHarvest').text($.t('howHarvest'));
    $('#howHarvestContent').text($.t('howHarvestContent'));
    $('#howHarvestContent2').text($.t('howHarvestContent2'));

    $('.howDelegateHarvest').text($.t('howDelegateHarvest'));
    $('#howDelegateHarvestContent').text($.t('howDelegateHarvestContent'));
    $('#howDelegateHarvestContent2').i18n();

    $('.openPort').text($.t('openPort'));
    $('#openPortContent').i18n();
    $('#openPortContent2').i18n();

    $('.vestingXem').text($.t('vestingXem'));
    $('#vestingXemContent').i18n();

    $('.testnetWhat').text($.t('testnetWhat'));
    $('#testnetWhatContent').i18n();

    $('.deepQuestions').text($.t('deepQuestions'));

    $('.nemFund').text($.t('nemFund'));
    $('#nemFundContent').i18n();

    $('.nemDistribution').text($.t('nemDistribution'));
    $('#nemDistributionContent').i18n();

    $('.mijinWhat').text($.t('mijinWhat'));
    $('#mijinWhatContent').text($.t('mijinWhatContent'));
    $('#mijinWhatContent2').text($.t('mijinWhatContent2'));
    $('#mijinWhatContent3').text($.t('mijinWhatContent3'));
    $('#mijinWhatContent4').text($.t('mijinWhatContent4'));
    $('#mijinWhatContent5').text($.t('mijinWhatContent5'));
    $('#mijinWhatContent6').text($.t('mijinWhatContent6'));
    $('#mijinWhatContent7').text($.t('mijinWhatContent7'));
    $('#mijinWhatContent8').text($.t('mijinWhatContent8'));

    $('.moreNem').text($.t('moreNem'));
    $('#moreNemContent').i18n();
    $('#moreNemContent2').i18n();
    $('#moreNemContent3').i18n();
    $('#moreNemContent4').i18n();
    $('#moreNemContent5').i18n();
    $('#moreNemContent6').i18n();
    $('#moreNemContent7').i18n();

    $('.miscQuestions').text($.t('miscQuestions'));

    $('.xemCirculation').text($.t('xemCirculation'));
    $('#xemCirculationContent').text($.t('xemCirculationContent'));

    $('.nemCreditCards').text($.t('nemCreditCards'));
    $('#nemCreditCardsContent').i18n();

    $('.nemFaucet').text($.t('nemFaucet'));
    $('#nemFaucetContent').i18n();

    $('.socialNetwork').text($.t('socialNetwork'));
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
