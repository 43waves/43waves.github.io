// The words on the invite page (weshare/join.html), in the 16 languages Weshare
// speaks. The wording follows the app's own strings (lib/l10n in the weshare
// repo): the line under the title is the app's tagline plus the welcome
// screen's subtitle, and the privacy link is the app's "Privacy policy".
//
// join.js picks one by the phone's language (the way the app does: English
// when there is none, and Hong Kong / Macau / traditional Chinese get zh-TW),
// and puts it into the elements marked data-i18n. The English in the HTML is
// what shows without JavaScript.
window.JOIN_TEXT = {
  en: {
    title: "You're invited to Weshare",
    lead: 'Find each other in real time. Share your live location with the people you choose.',
    open: 'Open Weshare',
    noteGet: "Don't have it yet? The button takes you to Google Play to get it, and you'll join as soon as it opens.",
    noteUpdate: 'Already have Weshare but this page opened? Update it from Google Play, then tap the invite link again.',
    other: 'Weshare is for Android phones. Open this link on your Android phone.',
    privacy: 'Privacy policy'
  },
  ar: {
    title: 'تمت دعوتك إلى Weshare',
    lead: 'اعثروا على بعضكم في الوقت الفعلي. شارك موقعك المباشر مع من تختارهم.',
    open: 'افتح Weshare',
    noteGet: 'ليس لديك التطبيق بعد؟ سيأخذك الزر إلى Google Play لتثبيته، وستنضم فور فتحه.',
    noteUpdate: 'لديك Weshare لكن هذه الصفحة هي التي فُتحت؟ حدّثه من Google Play ثم انقر على رابط الدعوة مرة أخرى.',
    other: 'Weshare متاح لهواتف Android. افتح هذا الرابط على هاتف Android.',
    privacy: 'سياسة الخصوصية'
  },
  de: {
    title: 'Du wurdest zu Weshare eingeladen',
    lead: 'Findet euch in Echtzeit. Teile deinen Live-Standort mit den Menschen, die du auswählst.',
    open: 'Weshare öffnen',
    noteGet: 'Noch nicht installiert? Der Button führt dich zu Google Play, und sobald du die App öffnest, bist du dabei.',
    noteUpdate: 'Weshare ist schon installiert, aber diese Seite hat sich geöffnet? Aktualisiere die App bei Google Play und tippe dann noch einmal auf den Einladungslink.',
    other: 'Weshare gibt es für Android-Handys. Öffne diesen Link auf deinem Android-Handy.',
    privacy: 'Datenschutzrichtlinie'
  },
  es: {
    title: 'Te han invitado a Weshare',
    lead: 'Encontraos en tiempo real. Comparte tu ubicación en directo con las personas que elijas.',
    open: 'Abrir Weshare',
    noteGet: '¿Aún no la tienes? El botón te lleva a Google Play para instalarla y te unirás en cuanto la abras.',
    noteUpdate: '¿Ya tienes Weshare pero se ha abierto esta página? Actualízala en Google Play y vuelve a tocar el enlace de invitación.',
    other: 'Weshare es para teléfonos Android. Abre este enlace en tu teléfono Android.',
    privacy: 'Política de privacidad'
  },
  fr: {
    title: 'Une invitation t’attend sur Weshare',
    lead: 'Retrouvez-vous en temps réel. Partage ta position en direct avec les personnes que tu choisis.',
    open: 'Ouvrir Weshare',
    noteGet: 'Tu n’as pas encore l’appli ? Le bouton t’emmène sur Google Play, et tu rejoins dès son ouverture.',
    noteUpdate: 'Tu as déjà Weshare mais cette page s’est ouverte ? Mets l’appli à jour sur Google Play, puis touche de nouveau le lien d’invitation.',
    other: 'Weshare est conçu pour les téléphones Android. Ouvre ce lien sur ton téléphone Android.',
    privacy: 'Politique de confidentialité'
  },
  hi: {
    title: 'आपको Weshare पर आमंत्रित किया गया है',
    lead: 'एक-दूसरे को रीयल टाइम में खोजें। अपना लाइव स्थान उन लोगों के साथ साझा करें जिन्हें आप चुनें।',
    open: 'Weshare खोलें',
    noteGet: 'ऐप अभी नहीं है? बटन आपको Google Play पर ले जाएगा, और ऐप खुलते ही आप जुड़ जाएँगे।',
    noteUpdate: 'Weshare पहले से है, फिर भी यह पेज खुला? Google Play से उसे अपडेट करें, फिर आमंत्रण लिंक पर दोबारा टैप करें।',
    other: 'Weshare Android फ़ोन के लिए है। इस लिंक को अपने Android फ़ोन पर खोलें।',
    privacy: 'गोपनीयता नीति'
  },
  id: {
    title: 'Kamu diundang ke Weshare',
    lead: 'Temukan satu sama lain secara real-time. Bagikan lokasi langsungmu dengan orang-orang yang kamu pilih.',
    open: 'Buka Weshare',
    noteGet: 'Belum punya aplikasinya? Tombol ini membawamu ke Google Play, dan kamu langsung bergabung begitu aplikasi dibuka.',
    noteUpdate: 'Sudah punya Weshare tetapi halaman ini yang terbuka? Perbarui dari Google Play, lalu ketuk lagi tautan undangan.',
    other: 'Weshare untuk ponsel Android. Buka tautan ini di ponsel Android-mu.',
    privacy: 'Kebijakan privasi'
  },
  it: {
    title: 'C’è un invito per te su Weshare',
    lead: 'Trovatevi, in tempo reale. Condividi la tua posizione in tempo reale con le persone che scegli.',
    open: 'Apri Weshare',
    noteGet: 'Non hai ancora l’app? Il pulsante ti porta su Google Play e ti unirai non appena la apri.',
    noteUpdate: 'Hai già Weshare ma si è aperta questa pagina? Aggiornala da Google Play, poi tocca di nuovo il link d’invito.',
    other: 'Weshare è per i telefoni Android. Apri questo link sul tuo telefono Android.',
    privacy: 'Privacy policy'
  },
  ja: {
    title: 'Weshareに招待されました',
    lead: 'お互いをリアルタイムで見つけよう。選んだ人とだけ、現在地をリアルタイムで共有します。',
    open: 'Weshareを開く',
    noteGet: 'まだアプリをお持ちでない場合は、ボタンからGoogle Playへ。アプリを開くとすぐに参加できます。',
    noteUpdate: 'Weshareをお持ちなのにこのページが開いた場合は、Google Playでアプリを更新してから、招待リンクをもう一度タップしてください。',
    other: 'WeshareはAndroidスマートフォン向けです。このリンクをAndroidスマートフォンで開いてください。',
    privacy: 'プライバシーポリシー'
  },
  ko: {
    title: 'Weshare에 초대받았어요',
    lead: '서로를 실시간으로 찾아보세요. 내가 고른 사람들과 실시간 위치를 공유하세요.',
    open: 'Weshare 열기',
    noteGet: '앱이 아직 없나요? 버튼을 누르면 Google Play로 이동하고, 앱을 열면 바로 참여돼요.',
    noteUpdate: 'Weshare가 이미 있는데 이 페이지가 열렸나요? Google Play에서 앱을 업데이트한 다음 초대 링크를 다시 탭하세요.',
    other: 'Weshare는 Android 휴대폰용이에요. 이 링크를 Android 휴대폰에서 열어 주세요.',
    privacy: '개인정보 처리방침'
  },
  pt: {
    title: 'Você recebeu um convite para o Weshare',
    lead: 'Encontrem-se em tempo real. Compartilhe sua localização ao vivo com as pessoas que você escolher.',
    open: 'Abrir o Weshare',
    noteGet: 'Ainda não tem o app? O botão leva você ao Google Play e você entra assim que abrir.',
    noteUpdate: 'Já tem o Weshare, mas esta página abriu? Atualize o app no Google Play e toque no link de convite de novo.',
    other: 'O Weshare é para celulares Android. Abra este link no seu celular Android.',
    privacy: 'Política de privacidade'
  },
  ru: {
    title: 'Вас пригласили в Weshare',
    lead: 'Находите друг друга в реальном времени. Делитесь местоположением в реальном времени с теми, кого выберете.',
    open: 'Открыть Weshare',
    noteGet: 'Приложения ещё нет? Кнопка откроет Google Play, а после запуска вы сразу присоединитесь.',
    noteUpdate: 'Weshare уже установлен, но открылась эта страница? Обновите приложение в Google Play и снова нажмите на ссылку-приглашение.',
    other: 'Weshare — для телефонов Android. Откройте эту ссылку на телефоне с Android.',
    privacy: 'Политика конфиденциальности'
  },
  tr: {
    title: 'Weshare’e davet edildin',
    lead: 'Birbirinizi gerçek zamanlı bulun. Canlı konumunu seçtiğin kişilerle paylaş.',
    open: 'Weshare’i aç',
    noteGet: 'Uygulama henüz yok mu? Düğme seni Google Play’e götürür; uygulamayı açtığın anda katılırsın.',
    noteUpdate: 'Weshare zaten yüklü ama bu sayfa mı açıldı? Uygulamayı Google Play’den güncelle, sonra davet bağlantısına yeniden dokun.',
    other: 'Weshare, Android telefonlar içindir. Bu bağlantıyı Android telefonunda aç.',
    privacy: 'Gizlilik politikası'
  },
  vi: {
    title: 'Bạn được mời tham gia Weshare',
    lead: 'Tìm thấy nhau theo thời gian thực. Chia sẻ vị trí trực tiếp của bạn với những người bạn chọn.',
    open: 'Mở Weshare',
    noteGet: 'Chưa có ứng dụng? Nút này đưa bạn đến Google Play, và bạn sẽ tham gia ngay khi mở ứng dụng.',
    noteUpdate: 'Đã có Weshare nhưng trang này lại mở ra? Hãy cập nhật ứng dụng từ Google Play, rồi chạm lại vào liên kết mời.',
    other: 'Weshare dành cho điện thoại Android. Hãy mở liên kết này trên điện thoại Android của bạn.',
    privacy: 'Chính sách quyền riêng tư'
  },
  zh: {
    title: '你被邀请加入 Weshare',
    lead: '实时找到彼此。与你选择的人分享你的实时位置。',
    open: '打开 Weshare',
    noteGet: '还没有安装？按钮会带你前往 Google Play，打开应用后即可加入。',
    noteUpdate: '已经装了 Weshare，却打开了这个页面？请先在 Google Play 更新应用，再点按一次邀请链接。',
    other: 'Weshare 适用于 Android 手机。请在你的 Android 手机上打开此链接。',
    privacy: '隐私政策'
  },
  'zh-TW': {
    title: '你受邀加入 Weshare',
    lead: '即時找到彼此。與你選擇的人分享你的即時位置。',
    open: '開啟 Weshare',
    noteGet: '還沒有安裝？按鈕會帶你前往 Google Play，開啟應用程式後即可加入。',
    noteUpdate: '已經安裝 Weshare，卻開啟了這個頁面？請先到 Google Play 更新應用程式，再點一下邀請連結。',
    other: 'Weshare 適用於 Android 手機。請在你的 Android 手機上開啟此連結。',
    privacy: '隱私權政策'
  }
};
