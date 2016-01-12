$(document).foundation();

smoothScroll.init();

// $.ajax({
//   url: "http://nem.servehttp.com:7890/node/peer-list/all",
//   dataType: "json",
//   success: function(response) {
//     $.each(response.Users, function(item) {
//       informationArray.push(item);
//     });
//     informationArray.push("success");
//     alert(data)
//   }
// });

//**## NEM NEWS FEED ##**/
//Pulls twitter feed using twitter fetcher.
// Also automatically hyperlinks URLS and user mentions and hashtags.
//@nemcoin
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

    <!-- INSTALL SECTION -->
    $('#installers').text($.t('installers'));
    $('#standalone').text($.t('standalone'));
    $('#installOptions').text($.t('installOptions'));
    $('#backup').text($.t('backup'));
    $('#ifIssues').i18n();
    $('#or').text($.t('or'));
    $('#sisterSite').i18n();


    <!-- GENERIC -->
    $('.coming').text($.t('coming'));
    $('.more').text($.t('more'));
    $('.getXem').text($.t('getXem'));
});
