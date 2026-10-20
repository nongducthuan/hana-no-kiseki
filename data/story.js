const ASSETS = {
  bg: {
    classroom:       'assets/bg/classroom.webp',
    rooftop:         'assets/bg/rooftop_sunset.webp',
    corridor:        'assets/bg/corridor.jpg',
    sakura:          'assets/bg/school_gate.webp',
    student_council: 'assets/bg/student_council.webp',
  },
  char: {
    hana_normal: 'assets/char/hana_normal.webp',
    hana_smile:  'assets/char/hana_smile.webp',
    hana_sad:    'assets/char/hana_sad.webp',
    hana_blush:  'assets/char/hana_blush.webp',
    yuki_normal: 'assets/char/yuki_normal.webp',
    yuki_smile:  'assets/char/yuki_smile.webp',
    yuki_sad:    'assets/char/yuki_sad.webp',
    rin_normal:  'assets/char/rin_normal.webp',
    rin_smile:   'assets/char/rin_smile.webp',
    rin_blush:   'assets/char/rin_blush.webp',
  }
};

const CHAR_INFO = {
  narrator: { name: 'Dẫn Chuyện',   icon: '📖', color: '#cbd5e1', avatar: null },
  player:   { name: 'Bạn',          icon: '💬', color: '#a78bfa', avatar: null },
  hana:     { name: 'Sakura Hana',  icon: '🌸', color: '#f472b6', sprite: 'char-hana', avatar: 'assets/char/avatar_hana.png', avatarSmile: 'assets/char/avatar_hana_smile.png', avatarSad: 'assets/char/avatar_hana_sad.png', avatarBlush: 'assets/char/avatar_hana_blush.png' },
  yuki:     { name: 'Aoki Yuki',    icon: '❄️', color: '#60a5fa', sprite: 'char-yuki', avatar: 'assets/char/avatar_yuki.png', avatarSmile: 'assets/char/avatar_yuki_smile.png', avatarSad: 'assets/char/avatar_yuki_sad.png' },
  rin:      { name: 'Tachibana Rin',icon: '⚡', color: '#fb923c', sprite: 'char-rin',  avatar: 'assets/char/avatar_rin.png', avatarSmile: 'assets/char/avatar_rin_smile.png', avatarBlush: 'assets/char/avatar_rin_blush.png' },
};

// =============================================
//  MASTER STORY DATA (4 CHAPTERS + 8 ENDINGS)
// =============================================

const STORY = {
  // -------------------------------------------
  // CHƯƠNG I: KHỞI ĐẦU MÙA XUÂN
  // -------------------------------------------
  intro: {
    chapter: { title: 'CHƯƠNG I', subtitle: 'Khởi Đầu Mùa Xuân' },
    bg: 'classroom',
    bgmTheme: 'spring',
    hideChar: true,
    lines: [
      { speaker: 'narrator', text: 'Buổi sáng tháng Tư dịu dàng. Lớp 2-B trường Hanazono đắm mình trong những vạt nắng vàng như mật ngọt.' },
      { speaker: 'narrator', text: 'Bên ngoài khung cửa sổ kính hé mở, từng cơn gió xuân thoảng qua, mang theo hàng vạn cánh hoa anh đào mỏng manh chao lượn giữa không trung.' },
      { speaker: 'player',   text: '(Lại một năm học mới bắt đầu... Giữa tiếng cười nói náo nức của bạn bè xung quanh, mình vẫn luôn cảm thấy có một khoảng cách vô hình.)' },
      { speaker: 'player',   text: '(Liệu những năm tháng thanh xuân này rồi sẽ trôi qua lặng lẽ như những trang vở trắng, hay sẽ có một phép màu nào đó cập bến?)' },
    ],
    next: 'hana_enter',
  },

  hana_enter: {
    bg: 'classroom',
    bgmTheme: 'spring',
    showChar: 'hana',
    charExpr: 'hana_smile',
    lines: [
      { speaker: 'hana',     text: 'Khoan đã nào!! Làm ơn chờ mình với!!', bounce: true },
      { speaker: 'narrator', text: 'Cánh cửa trượt của lớp học bật mở với một tiếng "cạch" vội vã. Một nữ sinh với mái tóc màu hồng pastel bồng bềnh buộc twintails lao vào, chiếc cặp xách suýt tuột khỏi vai.' },
      { speaker: 'hana',     text: 'Phù... ha ha... May quá đi mất! Suýt chút nữa là bị thầy giám thị ghi tên vào sổ đầu bài ngay ngày khai giảng rồi! Ehehe~', bounce: true },
      { speaker: 'narrator', text: 'Cô ấy đưa mu bàn tay quệt vội giọt mồ hôi đọng trên trán, nở một nụ cười rạng rỡ đến mức khiến cả gian phòng học như bừng sáng theo.' },
      { speaker: 'player',   text: '(Nụ cười ấy... lấp lánh và ấm áp lạ thường, hệt như những vạt nắng đầu mùa sau chuỗi ngày đông u ám.)' },
      { speaker: 'hana',     text: 'A! Cậu là... bạn cùng bàn mới của mình đúng không? Tớ nhìn thấy tên cậu trên sơ đồ lớp dán trước cửa rồi!' },
      { speaker: 'hana',     text: 'Rất vui được gặp cậu nhé! Mình là Sakura Hana! Năm nay hãy giúp đỡ nhau thật nhiều nha~ ♪' },
    ],
    next: 'choice_greet',
  },

  choice_greet: {
    bg: 'classroom',
    showChar: 'hana',
    charExpr: 'hana_smile',
    choices: [
      {
        text: '🌸 "Chào Hana! Nụ cười rạng rỡ của cậu làm bừng sáng cả lớp học đấy."',
        effect: { hana: +2 },
        next: 'greet_flirt',
      },
      {
        text: '😊 "Chào bạn, mình cũng rất vui được làm quen với bạn."',
        effect: { hana: +1 },
        next: 'greet_friendly',
      },
      {
        text: '😐 "Ừ chào. Ngồi xuống đi, sắp vào tiết chủ nhiệm rồi."',
        effect: {},
        next: 'greet_cold',
      },
    ],
  },

  greet_flirt: {
    bg: 'classroom',
    showChar: 'hana',
    charExpr: 'hana_smile',
    lines: [
      { speaker: 'hana',     text: 'Oái—! C-Cậu... cậu khen gì mà ngọt ngào thế làm hai tai tớ nóng bừng lên rồi này!', bounce: true },
      { speaker: 'narrator', text: 'Hana giơ hai bàn tay nhỏ nhắn lên ôm lấy đôi má đã ửng hồng như quả đào chín mọng, đôi mắt tròn xoe ánh lên vẻ ngượng ngùng vô cùng đáng yêu.' },
      { speaker: 'hana',     text: 'Nhưng mà... cảm ơn cậu thật nhiều nha! Tớ đã lo lắng suốt cả tối qua vì sợ bạn cùng bàn sẽ là người khó gần cơ...' },
      { speaker: 'hana',     text: 'Nghe cậu nói câu đó, tớ cảm thấy nhẹ nhõm hẳn luôn! Chắc chắn năm học này chúng mình sẽ thân nhau lắm đây ♪' },
      { speaker: 'player',   text: '(Ánh mắt trong trẻo ngập tràn niềm vui của Hana dường như xua tan mọi âu lo trong lòng mình.)' },
    ],
    next: 'morning_corridor',
  },

  greet_friendly: {
    bg: 'classroom',
    showChar: 'hana',
    charExpr: 'hana_normal',
    lines: [
      { speaker: 'hana',     text: 'Tuyệt vời quá! Có bạn cùng bàn thân thiện và dễ mến thế này thì cả năm yên tâm rồi~' },
      { speaker: 'hana',     text: 'À mà này, thú thật là tớ dở tệ môn toán với lý luôn á... Nếu có bài nào khó nhằn, cậu nhớ kéo tớ qua kỳ thi với nhé!' },
      { speaker: 'player',   text: 'Được thôi, nếu giúp được gì thì tớ sẽ cố gắng hết sức.' },
      { speaker: 'hana',     text: 'Hứa rồi đấy nhé! Cậu đúng là vị cứu tinh đầu tiên của tớ trong năm học mới này mà~' },
    ],
    next: 'morning_corridor',
  },

  greet_cold: {
    bg: 'classroom',
    showChar: 'hana',
    charExpr: 'hana_normal',
    lines: [
      { speaker: 'hana',     text: 'À... ừm, xin lỗi nhé... Tớ hơi ồn ào quá mức rồi ha...' },
      { speaker: 'narrator', text: 'Nụ cười rạng rỡ trên môi Hana thoáng đông cứng trong một tích tắc, ánh mắt cô ấy chùng xuống một thoáng cô đơn khó tả trước khi vội vã phủ lên một nụ cười gượng gạo khác.' },
      { speaker: 'hana',     text: 'Tớ sẽ trật tự ngay đây! Sẽ không làm phiền cậu đâu, tớ hứa đấy!' },
      { speaker: 'player',   text: '(Cái cách cô ấy cúi đầu ngoan ngoãn... dường như không phải là lễ phép, mà là một phản xạ sợ hãi việc bị người khác ghét bỏ?)' },
    ],
    next: 'morning_corridor',
  },

  morning_corridor: {
    bg: 'corridor',
    bgmTheme: 'tsundere',
    hideChar: true,
    lines: [
      { speaker: 'narrator', text: 'Tiếng chuông báo hiệu kết thúc tiết sinh hoạt đầu năm vừa dứt. Hành lang tầng hai ngập tràn tiếng bước chân và tiếng cười nói rộn rã.' },
      { speaker: 'narrator', text: 'Bạn bước ra ngoài ban công đón luồng gió mát rượi thoảng hương hoa cỏ mùa xuân.' },
      { speaker: 'narrator', text: 'Bỗng nhiên, những tiếng gót giày dứt khoát nện trên sàn gạch vang lên, kèm theo một giọng nữ đanh thép đầy uy quyền phía sau lưng...' },
    ],
    next: 'rin_encounter',
  },

  rin_encounter: {
    bg: 'corridor',
    bgmTheme: 'tsundere',
    showChar: 'rin',
    charExpr: 'rin_normal',
    lines: [
      { speaker: 'rin',     text: 'Cậu học sinh đằng kia! Đứng lại ngay cho tôi!', shake: true },
      { speaker: 'narrator', text: 'Bạn quay người lại. Đứng trước mặt bạn là một nữ sinh có mái tóc màu cam rực rỡ được buộc hai bên cao vút, ánh mắt sắc sảo như lưỡi kiếm đang quét từ đầu đến chân bạn.' },
      { speaker: 'narrator', text: 'Trên cánh tay áo trái của cô ấy cài chiếc băng đỏ in chữ mạ vàng nổi bật: "HỘI HỌC SINH - TRƯỞNG BAN KỶ LUẬT".' },
      { speaker: 'rin',     text: 'Cúc áo khoác ngoài cài lệch một nấc, bảng tên thì xiên xẹo! Ngày đầu tiên của năm học mới mà tác phong đã cẩu thả thế này sao?' },
      { speaker: 'rin',     text: 'Tôi là Tachibana Rin, Phó Chủ Tịch Hội Học Sinh kiêm quản lý nề nếp toàn khối 11.' },
      { speaker: 'rin',     text: 'Trường Hanazono có truyền thống danh dự lâu đời, tuyệt đối không chấp nhận bất kỳ hành vi luộm thuộm nào làm tổn hại hình ảnh nhà trường!' },
    ],
    next: 'choice_rin_first',
  },

  choice_rin_first: {
    bg: 'corridor',
    showChar: 'rin',
    charExpr: 'rin_normal',
    choices: [
      {
        text: '⚡ "Hội phó Rin lúc nào cũng tận tụy thế này, trông vừa ngầu lại vừa đáng yêu nữa."',
        effect: { rin: +2 },
        next: 'rin_first_tease',
      },
      {
        text: '🫡 "Xin lỗi Hội phó! Tớ sẽ chỉnh đốn lại tác phong ngay lập tức."',
        effect: { rin: +1 },
        next: 'rin_first_obedient',
      },
      {
        text: '🙄 "Cậu có cần phải nghiêm trọng hóa một cái cúc áo như vậy không?"',
        effect: {},
        next: 'rin_first_cold',
      },
    ],
  },

  rin_first_tease: {
    bg: 'corridor',
    showChar: 'rin',
    charExpr: 'rin_normal',
    lines: [
      { speaker: 'rin',     text: 'C-Cái gì cơ?! Đ-Đáng yêu cái đầu cậu ấy! Cậu có bị ấm đầu không hả?!', bounce: true, shake: true },
      { speaker: 'narrator', text: 'Khuôn mặt sắc sảo và kiêu hãnh của Rin lập tức bốc hỏa, một vệt đỏ lan nhanh từ hai gò má sang tận vành tai. Cô nàng bối rối lùi lại nửa bước.' },
      { speaker: 'rin',     text: 'Bớt ăn nói ba hoa đi nhé! Đừng tưởng dùng mấy lời đường mật vô căn cứ đó là qua mặt được ban kỷ luật!' },
      { speaker: 'rin',     text: 'L-Lần này tôi chỉ ghi nhận nhắc nhở thôi... Chỉnh lại cúc áo ngay trước mắt tôi đi! Đồ ngốc vô kỷ luật!' },
      { speaker: 'player',   text: '(Dù lời nói có phần gay gắt, nhưng vẻ bối rối che giấu sự lúng túng của cô ấy lại chân thật đến lạ lùng.)' },
    ],
    next: 'lunch_decision',
  },

  rin_first_obedient: {
    bg: 'corridor',
    showChar: 'rin',
    charExpr: 'rin_normal',
    lines: [
      { speaker: 'player',   text: 'Xin lỗi Hội phó, tớ sơ ý quá. Tớ cài lại cúc áo ngay đây.' },
      { speaker: 'narrator', text: 'Rin hơi sững người khi thấy bạn ngoan ngoãn chấp hành mà không hề cãi lại một lời. Cô nàng khẽ hắng giọng, cố duy trì vẻ nghiêm nghị.' },
      { speaker: 'rin',     text: 'Hừm... thái độ biết nhận sai và sửa đổi thế là tốt. Người biết lắng nghe mới có thể tiến bộ được.' },
      { speaker: 'rin',     text: 'Nhớ cho kỹ đấy, trường Hanazono là nơi xây dựng tương lai. Đừng để những chi tiết nhỏ làm ảnh hưởng đến bản thân.' },
      { speaker: 'narrator', text: 'Rin gật đầu vẻ vừa ý, cẩn thận gạch một nét bút chì vào cuốn sổ tay da đen trên tay trước khi quay gót rời đi.' },
    ],
    next: 'lunch_decision',
  },

  rin_first_cold: {
    bg: 'corridor',
    showChar: 'rin',
    charExpr: 'rin_normal',
    lines: [
      { speaker: 'rin',     text: 'Nghiêm trọng hóa vấn đề ư?! Cậu xem thường những chuẩn mực cơ bản nhất à?', shake: true },
      { speaker: 'narrator', text: 'Đôi mắt của Rin lóe lên một tia thất vọng lẫn cay đắng, bàn tay cầm bút của cô nàng vô thức siết chặt lại.' },
      { speaker: 'rin',     text: 'Sai lầm lớn nhất của con người luôn bắt đầu từ những điều nhỏ nhặt bị xem thường! Nếu không giữ vững ranh giới, mọi thứ sẽ sụp đổ...' },
      { speaker: 'narrator', text: 'Rin ghi chép thoăn thoắt vào sổ tay rồi lườm bạn một cái lạnh băng: "Tôi sẽ để mắt tới cậu trong danh sách theo dõi đặc biệt!"' },
    ],
    next: 'lunch_decision',
  },

  // -------------------------------------------
  // QUYẾT ĐỊNH NGHỈ TRƯA (CHỌN NHÁNH GẶP GỠ)
  // -------------------------------------------
  lunch_decision: {
    bg: 'classroom',
    bgmTheme: 'spring',
    hideChar: true,
    lines: [
      { speaker: 'narrator', text: 'Keng-koong! Tiếng chuông báo hiệu giờ nghỉ trưa ngân vang từng hồi thanh thoát khắp các dãy phòng học.' },
      { speaker: 'narrator', text: 'Học sinh các lớp bắt đầu tản ra ăn trưa. Đã đến lúc bạn lựa chọn dành thời gian nghỉ trưa của mình cho ai.' },
      { speaker: 'player',   text: '(Một tiếng rưỡi nghỉ trưa... Mình nên dành khoảng thời gian này để ở bên ai đây?)' },
    ],
    next: 'choice_lunch_target',
  },

  choice_lunch_target: {
    bg: 'classroom',
    hideChar: true,
    choices: [
      {
        text: '🌸 Ở lại lớp: Ăn trưa cùng cô bạn cùng bàn Sakura Hana',
        effect: { hana: +1 },
        next: 'act_lunch_hana',
      },
      {
        text: '❄️ Lên sân thượng: Tìm sự yên tĩnh lộng gió cùng Aoki Yuki',
        effect: { yuki: +1 },
        next: 'act_lunch_yuki',
      },
      {
        text: '⚡ Đến phòng Hội Học Sinh: Tìm gặp Hội phó Tachibana Rin',
        effect: { rin: +1 },
        next: 'act_lunch_rin',
      },
    ],
  },

  // Nhánh Trưa 1: Ăn cùng Hana
  act_lunch_hana: {
    bg: 'classroom',
    bgmTheme: 'spring',
    showChar: 'hana',
    charExpr: 'hana_smile',
    lines: [
      { speaker: 'hana',     text: 'A! Cậu không đi căng-tin à? Cậu ở lại lớp ăn trưa sao?! Tuyệt quá đi mất!!', bounce: true },
      { speaker: 'narrator', text: 'Vừa thấy bạn lấy hộp cơm ra khỏi cặp, hai mắt Hana sáng rực lên. Cô ấy nhanh nhẹn kéo ghế lại gần sát bàn bạn.' },
      { speaker: 'narrator', text: 'Chiếc khăn bọc bento màu hoa anh đào được mở ra, bên trong là những cuộn trứng tamagoyaki vàng ươm, nắm cơm trang trí hình mặt gấu và rau củ tươi tắn.' },
      { speaker: 'hana',     text: 'Tadaaa~! Sáng nay tớ thức dậy từ 5 giờ sáng để chuẩn bị đấy! Trông ngon mắt không nè?' },
      { speaker: 'hana',     text: 'Cậu nếm thử món trứng cuộn này đi! Công thức gia truyền đặc biệt của nhà tớ đấy nha~' },
    ],
    next: 'choice_hana_lunch_food',
  },

  choice_hana_lunch_food: {
    bg: 'classroom',
    showChar: 'hana',
    charExpr: 'hana_smile',
    choices: [
      {
        text: '🍱 Nếm thử miếng trứng cuộn: "Trứng vừa mềm vừa ngọt dịu, cậu nấu ăn khéo léo thật đấy Hana!"',
        effect: { hana: +2 },
        next: 'hana_food_praise',
      },
      {
        text: '🥪 Chia sẻ lại bánh sandwich: "Cảm ơn cậu nhé, đổi lại cậu ăn thử bánh sandwich gà tớ làm đi."',
        effect: { hana: +1 },
        next: 'hana_food_share',
      },
    ],
  },

  hana_food_praise: {
    bg: 'classroom',
    showChar: 'hana',
    charExpr: 'hana_smile',
    lines: [
      { speaker: 'hana',     text: 'Thật... thật sao?! Cậu thấy ngon thật hả?! Oa, mừng quá đi mất!!', bounce: true },
      { speaker: 'narrator', text: 'Hana sung sướng vỗ tay bôm bốp, nụ cười rạng rỡ như cánh hoa vừa tắm trong cơn mưa rào mùa hạ.' },
      { speaker: 'hana',     text: 'Món này là do bà ngoại dạy tớ làm từ hồi tớ còn học tiểu học đấy! Bà bảo nấu ăn là cách gửi gắm hơi ấm cho người khác...' },
      { speaker: 'hana',     text: 'Dạo gần đây sức khỏe của bà yếu đi nhiều... nên tớ muốn tự tay nấu thật ngon để bà yên lòng...' },
    ],
    next: 'hana_lunch_backstory_hint',
  },

  hana_food_share: {
    bg: 'classroom',
    showChar: 'hana',
    charExpr: 'hana_normal',
    lines: [
      { speaker: 'hana',     text: 'Oa! Bánh sandwich của cậu nhìn hấp dẫn quá đi! Cho tớ xin một miếng nha~' },
      { speaker: 'narrator', text: 'Hana cắn một miếng nhỏ, hai má phúng phính phồng lên nhai nhồm nhoàm vô cùng thích thú.' },
      { speaker: 'hana',     text: 'Ưm... ngon tuyệt cú mèo! Cảm giác cùng chia sẻ đồ ăn với bạn bè thế này... ấm áp thật đấy.' },
      { speaker: 'hana',     text: 'Bình thường ở nhà... tớ toàn phải ngồi ăn một mình trong gian bếp rộng thênh thang thôi...' },
    ],
    next: 'hana_lunch_backstory_hint',
  },

  hana_lunch_backstory_hint: {
    bg: 'classroom',
    bgmTheme: 'spring',
    showChar: 'hana',
    charExpr: 'hana_normal',
    lines: [
      { speaker: 'player',   text: 'Ăn một mình sao? Bố mẹ cậu bận lắm à?' },
      { speaker: 'narrator', text: 'Bàn tay đang cầm đũa của Hana khẽ khựng lại một nhịp. Cô ấy cúi mặt xuống, hàng mi dài che khuất ánh nhìn.' },
      { speaker: 'hana',     text: 'Bố mẹ tớ... đều làm việc cho một tập đoàn đa quốc gia bên Mỹ. Họ đi suốt quanh năm suốt tháng... Có khi cả năm tớ chỉ gặp họ được vài ngày qua màn hình điện thoại thôi.' },
      { speaker: 'hana',     text: 'Từ nhỏ tớ đã lớn lên cùng bà ngoại. Nhưng dạo này huyết áp của bà hay lên xuống thất thường...' },
      { speaker: 'narrator', text: 'Hana ngẩng mặt lên, lại cố nặn ra một nụ cười thật tươi, nhưng giọng nói của cô bé đã nghẹn lại nơi cuống họng.' },
      { speaker: 'hana',     text: 'Nhưng mà tớ không sao đâu nhé! Tớ quen tự chăm sóc bản thân rồi! Ở lớp có bạn bè, có cậu cùng bàn thế này là tớ vui lắm rồi á!' },
      { speaker: 'player',   text: '(Nụ cười rạng rỡ của cô gái này... hóa ra lại là lớp áo giáp che chở cho một tâm hồn bé bỏng luôn nơm nớp sợ hãi sự cô đơn.)' },
    ],
    next: 'ch2_milestone',
  },

  // Nhánh Trưa 2: Lên sân thượng với Yuki
  act_lunch_yuki: {
    bg: 'rooftop',
    bgmTheme: 'sunset',
    showChar: 'yuki',
    charExpr: 'yuki_normal',
    lines: [
      { speaker: 'narrator', text: 'Đẩy cánh cửa kim loại nặng trịch dẫn lên sân thượng, một luồng gió lộng ào tới cuốn tung mái tóc bạn.' },
      { speaker: 'narrator', text: 'Giữa khoảng không gian khoáng đạt chỉ có tiếng gió rít và bầu trời cao vút, một bóng hình mảnh mai đang đứng lặng bên hàng rào sắt rỉ sét.' },
      { speaker: 'narrator', text: 'Nữ sinh ấy có mái tóc màu lam khói bồng bềnh dài chấm vai, tà váy đồng phục khẽ bay lượn theo từng đợt gió. Đôi mắt màu ngọc bích của cô ấy sâu thẳm, nhìn chằm chằm về phía dải mây trắng xa xăm.' },
      { speaker: 'yuki',     text: '...Tiếng bước chân. Lại có người muốn trốn thế giới dưới kia à?' },
      { speaker: 'player',   text: 'À... xin lỗi nếu tớ vô tình phá vỡ không gian yên tĩnh của cậu.' },
      { speaker: 'yuki',     text: 'Không sao. Bầu trời này đâu thuộc về riêng ai... Gió ở đây đủ mạnh để thổi bay những tạp âm ồn ã dưới sân trường.' },
      { speaker: 'yuki',     text: 'Tớ là Aoki Yuki, lớp 2-A.' },
    ],
    next: 'choice_yuki_deep',
  },

  choice_yuki_deep: {
    bg: 'rooftop',
    showChar: 'yuki',
    charExpr: 'yuki_normal',
    choices: [
      {
        text: '🕊️ Bước tới cạnh lan can: "Bầu trời bao la thật đấy, nhưng đứng một mình ở đây trông cậu có vẻ cô đơn quá."',
        effect: { yuki: +2 },
        next: 'yuki_deep_response',
      },
      {
        text: '🥪 Đưa phần ăn trưa: "Gió thổi mạnh thế này dễ lạnh lắm, cậu ăn thử chút bánh ngọt này với tớ nhé."',
        effect: { yuki: +1 },
        next: 'yuki_snack_response',
      },
    ],
  },

  yuki_deep_response: {
    bg: 'rooftop',
    showChar: 'yuki',
    charExpr: 'yuki_normal',
    lines: [
      { speaker: 'yuki',     text: '...Cậu nhìn thấu được sự cô đơn của tớ sao?' },
      { speaker: 'narrator', text: 'Yuki khẽ nghiêng đầu. Ánh mắt cô ấy lay động, tựa như mặt hồ băng giá vừa bị một hòn sỏi nhỏ khuấy động từng đợt sóng lăn tăn.' },
      { speaker: 'yuki',     text: 'Ai cũng nói tớ là người quái đản, thích tự cô lập bản thân... Họ nói tớ vô cảm như một pho tượng đá.' },
      { speaker: 'yuki',     text: 'Nhưng cậu lại dùng từ "cô đơn". Cậu là người đầu tiên sau một năm qua nói với tớ câu đó.' },
    ],
    next: 'yuki_lunch_backstory_hint',
  },

  yuki_snack_response: {
    bg: 'rooftop',
    showChar: 'yuki',
    charExpr: 'yuki_normal',
    lines: [
      { speaker: 'yuki',     text: '...Bánh ngọt sao? Cảm ơn cậu. Tớ quên mất là mình chưa ăn gì từ sáng.' },
      { speaker: 'narrator', text: 'Yuki nhận lấy chiếc bánh từ tay bạn. Đầu ngón tay cô ấy chạm nhẹ vào tay bạn — lạnh buốt hệt như những bông tuyết đầu đông.' },
      { speaker: 'yuki',     text: 'Vị sữa ngọt và ấm... Đã lâu lắm rồi, tớ mới lại nếm được hương vị ấm áp của lòng tốt từ một người xa lạ.' },
    ],
    next: 'yuki_lunch_backstory_hint',
  },

  yuki_lunch_backstory_hint: {
    bg: 'rooftop',
    bgmTheme: 'sunset',
    showChar: 'yuki',
    charExpr: 'yuki_normal',
    lines: [
      { speaker: 'yuki',     text: 'Cậu có biết vì sao tớ luôn đứng ở góc sân thượng này không?' },
      { speaker: 'player',   text: 'Vì nơi này có thể nhìn thấy trọn vẹn cả thành phố sao?' },
      { speaker: 'yuki',     text: '...Không phải. Bởi vì nơi này... từng là nơi tớ và một người quan trọng nhất hẹn ước sẽ cùng nhau ngắm sao sau mỗi buổi tan trường.' },
      { speaker: 'narrator', text: 'Yuki siết chặt lấy thanh rào sắt, những khớp ngón tay trắng bệch vì dùng lực. Một nỗi đau đớn câm lặng tràn ngập trong đôi mắt xanh biếc.' },
      { speaker: 'yuki',     text: 'Nhưng giờ đây, người đó không còn nữa. Chỉ còn mình tớ đứng đây chịu sự trừng phạt của ký ức...' },
      { speaker: 'player',   text: '(Trừng phạt ư? Ánh mắt dằn vặt của cô ấy chứa đựng một vết thương quá khứ quá đỗi nặng nề...)' },
      { speaker: 'yuki',     text: '...Xin lỗi, tớ nói những điều kỳ quặc rồi. Nhưng nếu cậu không chê... lần sau lại lên đây trò chuyện với tớ nhé?' },
    ],
    next: 'ch2_milestone',
  },

  // Nhánh Trưa 3: Phòng Hội Học Sinh với Rin
  act_lunch_rin: {
    bg: 'student_council',
    bgmTheme: 'tsundere',
    showChar: 'rin',
    charExpr: 'rin_normal',
    lines: [
      { speaker: 'narrator', text: 'Tiếng gõ cửa phòng Hội Học Sinh vang lên khe khẽ. Bạn đẩy cửa bước vào gian phòng rộng rãi ngập tràn ánh nắng trưa vàng ruộm.' },
      { speaker: 'narrator', text: 'Giữa những kệ sách đồ sộ và các chồng hồ sơ chất cao như núi, Tachibana Rin đang ngồi một mình bên bàn làm việc, đôi mày thanh tú chau lại đầy căng thẳng.' },
      { speaker: 'rin',     text: 'Ai đấy? Tôi đã bảo là giờ nghỉ trưa không nhận đơn từ... Ơ! Lại là cậu à?!' },
      { speaker: 'rin',     text: 'Cậu đến đây làm cái gì giờ này hả? Đừng bảo là lại đến để trêu chọc tôi đấy nhé!' },
      { speaker: 'player',   text: 'Thấy Hội phó cắm cúi làm việc từ sáng tới giờ chưa nghỉ ngơi, tớ ghé qua xem có việc gì cần phụ giúp không.' },
      { speaker: 'rin',     text: 'H-Hả?! Cần cậu giúp á? Tôi là Phó Chủ Tịch đấy nhé! Mấy công việc tổ chức Lễ hội cỏn con này làm sao làm khó được tôi!' },
    ],
    next: 'choice_rin_help_lunch',
  },

  choice_rin_help_lunch: {
    bg: 'student_council',
    showChar: 'rin',
    charExpr: 'rin_normal',
    choices: [
      {
        text: '☕ Đặt lon trà sữa đào ấm lên bàn: "Dù có xuất sắc đến đâu thì cũng phải ăn uống giữ sức chứ Hội phó."',
        effect: { rin: +2 },
        next: 'rin_tea_accept',
      },
      {
        text: '📑 Xắn tay áo vào việc: "Để tớ phụ phân loại danh sách các câu lạc bộ đăng ký gian hàng cho cậu."',
        effect: { rin: +1 },
        next: 'rin_work_together',
      },
    ],
  },

  rin_tea_accept: {
    bg: 'student_council',
    showChar: 'rin',
    charExpr: 'rin_normal',
    lines: [
      { speaker: 'rin',     text: 'T-Trà sữa vị đào... loại tớ hay uống sau giờ học?! S-Sao cậu lại biết được chứ?!', bounce: true },
      { speaker: 'narrator', text: 'Rin tròn mắt ngạc nhiên, hai bàn tay vô thức ôm lấy lon trà ấm áp. Sự ấm nóng từ vỏ lon như sưởi mềm cả vẻ ngoài gai góc của cô bé.' },
      { speaker: 'rin',     text: 'Đ-Đừng tưởng mua cho tôi lon trà là tôi sẽ thiên vị cậu đấy nhé! Nhưng mà... bụng tôi cũng đang đói thật...' },
      { speaker: 'rin',     text: 'Cảm ơn cậu... Đồ ngốc chu đáo kỳ lạ...' },
    ],
    next: 'rin_lunch_backstory_hint',
  },

  rin_work_together: {
    bg: 'student_council',
    showChar: 'rin',
    charExpr: 'rin_normal',
    lines: [
      { speaker: 'rin',     text: 'Này, cậu có biết phân loại theo mã số không đấy? Để tôi xem... Ơ?' },
      { speaker: 'narrator', text: 'Rin ngạc nhiên lướt qua những tập hồ sơ bạn vừa sắp xếp gọn gàng theo từng khối và câu lạc bộ, chuẩn xác đến từng chi tiết.' },
      { speaker: 'rin',     text: 'Cậu... làm cẩn thận và nhanh hơn tôi tưởng nhiều đấy. Tiết kiệm cho tôi được gần cả tiếng đồng hồ.' },
      { speaker: 'rin',     text: 'Không tệ chút nào. Xem ra tôi phải nhìn nhận lại năng lực của cậu rồi.' },
    ],
    next: 'rin_lunch_backstory_hint',
  },

  rin_lunch_backstory_hint: {
    bg: 'student_council',
    bgmTheme: 'tsundere',
    showChar: 'rin',
    charExpr: 'rin_normal',
    lines: [
      { speaker: 'narrator', text: 'Trong lúc dọn dẹp mặt bàn, ánh mắt bạn vô tình chạm vào một khung ảnh bằng gỗ mun bị úp mặt xuống góc kệ sách.' },
      { speaker: 'player',   text: 'Khung ảnh kia là...' },
      { speaker: 'rin',     text: 'Đừng chạm vào!!', shake: true },
      { speaker: 'narrator', text: 'Rin hốt hoảng giật lấy chiếc khung ảnh ôm chặt vào lòng, vẻ mặt cô ấy tái đi trong thoáng chốc trước khi chuyển sang phòng thủ quyết liệt.' },
      { speaker: 'rin',     text: 'Đó là... chuyện của quá khứ. Cậu không cần biết và cũng không được phép hỏi!' },
      { speaker: 'rin',     text: 'Tôi phải hoàn hảo... Tôi phải gánh vác Hội Học Sinh này đến cùng. Tôi tuyệt đối không bao giờ cho phép cái tên "Tachibana" bị người ta đem ra cười nhạo một lần nữa!' },
      { speaker: 'player',   text: '(Tachibana... cái tên ấy dường như mang một sức nặng quá lớn đối với đôi vai nhỏ bé của Rin.)' },
    ],
    next: 'ch2_milestone',
  },

  // -------------------------------------------
  // CHƯƠNG II: NHỊP ĐẬP HỌC ĐƯỜNG
  // -------------------------------------------
  ch2_milestone: {
    chapter: { title: 'CHƯƠNG II', subtitle: 'Nhịp Đập Học Đường' },
    bg: 'corridor',
    bgmTheme: 'spring',
    hideChar: true,
    lines: [
      { speaker: 'narrator', text: 'Một tuần trôi qua nhanh như một cái chớp mắt giữa những ngày tháng Tư ngập tràn hương hoa.' },
      { speaker: 'narrator', text: 'Khắp các bảng tin và góc hành lang trường Hanazono rực rỡ những tấm áp phích vẽ tay: "Lễ Hội Văn Hóa Thường Niên Hanazono sẽ chính thức khai mạc vào cuối tuần này!"' },
      { speaker: 'narrator', text: 'Tiếng búa gõ, tiếng cưa gỗ, tiếng cười đùa tập dượt văn nghệ vang vọng khắp mọi ngóc ngách ngôi trường.' },
      { speaker: 'player',   text: '(Lễ hội trường... Đây là cơ hội tốt nhất để mình thực sự thấu hiểu và gắn kết với người mình quan tâm.)' },
    ],
    next: 'choice_festival_prep',
  },

  choice_festival_prep: {
    bg: 'corridor',
    hideChar: true,
    choices: [
      {
        text: '🌸 Tham gia đội trang trí gian hàng quán cà phê hoa anh đào cùng Sakura Hana',
        effect: { hana: +2 },
        next: 'ch2_prep_hana',
      },
      {
        text: '❄️ Lên tầng thượng phụ giúp chuẩn bị góc triển lãm thiên văn cùng Aoki Yuki',
        effect: { yuki: +2 },
        next: 'ch2_prep_yuki',
      },
      {
        text: '⚡ Ở lại phòng Hội Học Sinh trực tiếp hỗ trợ quản lý sự kiện cùng Tachibana Rin',
        effect: { rin: +2 },
        next: 'ch2_prep_rin',
      },
    ],
  },

  // Sự kiện chuẩn bị: Hana
  ch2_prep_hana: {
    bg: 'classroom',
    bgmTheme: 'spring',
    showChar: 'hana',
    charExpr: 'hana_smile',
    lines: [
      { speaker: 'hana',     text: 'Aaa! Cậu đăng ký vào nhóm trang trí quán cà phê với tớ thật sao?! Vui quá đi mất thôi!!', bounce: true },
      { speaker: 'narrator', text: 'Lớp 2-B đang rộn ràng biến thành một quán trà bánh phong cách retro ngập tràn sắc hoa anh đào.' },
      { speaker: 'narrator', text: 'Suốt cả buổi chiều, bạn và Hana cùng nhau cắt dán những dây ruy băng phớt hồng, treo lồng đèn giấy và tô vẽ bảng hiệu menu đón khách.' },
      { speaker: 'narrator', text: 'Trong lúc mải mê pha màu vẽ nước, một vệt sơn hồng nhạt vô tình dính lên chóp má trắng mịn của Hana mà cô bé không hề hay biết.' },
      { speaker: 'player',   text: 'Hana này, đứng yên một chút nào. Má cậu bị dính sơn vẽ rồi kìa.' },
      { speaker: 'narrator', text: 'Bạn khẽ nghiêng người, rút chiếc khăn tay nhẹ nhàng lau đi vết màu trên gò má cô ấy. Khoảng cách gần đến mức bạn có thể nghe thấy nhịp thở gấp gáp của đối phương.' },
      { speaker: 'hana',     text: 'O-Oái... t-tim tớ... tim tớ đập loạn xạ cào cào lên rồi này... Cậu làm thế bất ngờ quá ai mà đỡ nổi chứ!', bounce: true },
      { speaker: 'narrator', text: 'Hana bối rối lấy hai tay che mặt chạy vụt ra ngoài lấy thêm cọ vẽ, để lại bạn với nụ cười ấm áp trong lòng.' },
    ],
    next: 'hana_cry_discovery',
  },

  hana_cry_discovery: {
    bg: 'classroom',
    bgmTheme: 'sunset',
    hideChar: true,
    lines: [
      { speaker: 'narrator', text: 'Chiều muộn. Hoàng hôn đỏ ối như máu đổ dài qua những dãy bàn ghế trống không. Mọi học sinh trong lớp đều đã thu dọn ra về.' },
      { speaker: 'narrator', text: 'Bạn chợt nhớ ra mình để quên cuốn sổ ghi chú bài học dưới ngăn bàn nên vội quay lại lớp lấy.' },
      { speaker: 'narrator', text: 'Khi bước tới trước cửa lớp 2-B, bạn chợt khựng lại.' },
      { speaker: 'narrator', text: 'Từ góc cuối lớp học tranh tối tranh sáng, những tiếng nấc nghẹn ngào, đứt quãng vang lên trong không gian tĩnh mịch.' },
      { speaker: 'narrator', text: 'Đó là Hana. Cô bạn lúc nào cũng ríu rít như chim sơn ca đang gục đầu xuống bàn, hai tay ôm chặt lấy chiếc điện thoại trước ngực, bả vai gầy run rẩy bần bật trong từng cơn nấc xé lòng.' },
    ],
    next: 'choice_hana_cry',
  },

  choice_hana_cry: {
    bg: 'classroom',
    hideChar: true,
    choices: [
      {
        text: '🌸 Bước lại gần, nhẹ nhàng đặt tay lên vai cô ấy: "Hana... Cậu không cần phải gượng cười trước mặt tớ đâu."',
        effect: { hana: +2 },
        next: 'hana_cry_comfort',
      },
      {
        text: '🫂 Đưa khăn tay và lặng lẽ ngồi xuống cạnh cô ấy: "Tớ ở đây. Cứ khóc đi nếu cậu muốn, tớ sẽ không bỏ đi đâu."',
        effect: { hana: +2 },
        next: 'hana_cry_stay',
      },
    ],
  },

  hana_cry_comfort: {
    bg: 'classroom',
    bgmTheme: 'sunset',
    showChar: 'hana',
    charExpr: 'hana_normal',
    lines: [
      { speaker: 'hana',     text: 'Hức... O-Oái?!', shake: true },
      { speaker: 'narrator', text: 'Hana giật thót người, hoảng hốt đưa tay quệt vội những giọt nước mắt giàn giụa trên má, cố nặn ra một nụ cười run rẩy méo mó.' },
      { speaker: 'hana',     text: 'C-Cậu chưa về sao...? T-Tớ không sao đâu mà... Chỉ là... chỉ là bụi bay vào mắt thôi á... Thật đấy...' },
      { speaker: 'player',   text: 'Hana à, nhìn vào mắt tớ này. Đừng gượng ép bản thân phải mỉm cười nữa. Ở trước mặt tớ, cậu có quyền được yếu đuối.' },
      { speaker: 'narrator', text: 'Lời nói chân thành của bạn như nhát búa đập tan bức tường phòng thủ kiên cố cuối cùng của cô gái nhỏ. Nước mắt lại trào ra như chuỗi ngọc đứt chỉ.' },
    ],
    next: 'hana_cry_revelation',
  },

  hana_cry_stay: {
    bg: 'classroom',
    bgmTheme: 'sunset',
    showChar: 'hana',
    charExpr: 'hana_normal',
    lines: [
      { speaker: 'narrator', text: 'Bạn không gặng hỏi dồn dập, chỉ lặng lẽ kéo ghế ngồi xuống bên cạnh cô ấy, nhẹ nhàng đặt chiếc khăn tay vào bàn tay đang run rẩy của Hana.' },
      { speaker: 'narrator', text: 'Hana nhìn chiếc khăn tay, rồi ngước lên nhìn bạn với đôi mắt đỏ hoe ngập tràn nước mắt và sự bất lực tột cùng.' },
      { speaker: 'hana',     text: 'Tại sao... tại sao cậu lại dịu dàng với tớ như thế chứ...?' },
      { speaker: 'narrator', text: 'Cô ấy vùi mặt vào chiếc khăn tay, bật khóc nức nở như một đứa trẻ lạc mẹ giữa ngã tư đường.' },
    ],
    next: 'hana_cry_revelation',
  },

  hana_cry_revelation: {
    bg: 'classroom',
    bgmTheme: 'sunset',
    showChar: 'hana',
    charExpr: 'hana_normal',
    lines: [
      { speaker: 'hana',     text: 'Bác sĩ ở bệnh viện thành phố vừa gọi điện cho tớ...' },
      { speaker: 'hana',     text: 'Bà ngoại... bà ngoại tớ đột ngột ngất xỉu khi đang đi chợ... Hiện giờ bà đang phải nằm trong phòng cấp cứu theo dõi đặc biệt...' },
      { speaker: 'hana',     text: 'Bố mẹ tớ ở bên Mỹ nghe tin cũng chỉ gửi tiền về... Họ bảo bận dự án ký kết hàng triệu đô la nên không thể bay về được...' },
      { speaker: 'hana',     text: 'Tại sao chứ?! Tiền bạc thì có ý nghĩa gì khi người thân duy nhất của tớ đang một mình trong bệnh viện?!' },
      { speaker: 'hana',     text: 'Tớ sợ lắm... Tớ sợ một ngày nào đó mở mắt ra, căn nhà sẽ hoàn toàn trống rỗng... Tớ sợ bị bỏ rơi lại một mình trên cõi đời này...' },
      { speaker: 'player',   text: 'Hana, nghe tớ nói này. Cậu không hề đơn độc. Dù có chuyện gì xảy ra đi nữa, tớ cũng sẽ luôn ở bên cạnh cậu.' },
      { speaker: 'player',   text: 'Bây giờ, tớ sẽ cùng cậu tới bệnh viện với bà ngay lập tức. Tớ sẽ nắm chặt tay cậu, được không?' },
      { speaker: 'narrator', text: 'Hana nghẹn ngào nhìn bạn, rồi gật đầu thật mạnh. Trong ánh hoàng hôn rực rỡ, bàn tay bạn siết chặt lấy bàn tay lạnh buốt của Hana, truyền cho cô ấy niềm tin để đối mặt với giông bão.' },
    ],
    next: 'ch3_milestone',
  },

  // Sự kiện chuẩn bị: Yuki
  ch2_prep_yuki: {
    bg: 'rooftop',
    bgmTheme: 'sunset',
    showChar: 'yuki',
    charExpr: 'yuki_normal',
    lines: [
      { speaker: 'yuki',     text: 'Cậu đến rồi à... Tớ đã đứng đây chờ cậu suốt cả buổi chiều.' },
      { speaker: 'narrator', text: 'Hoàng hôn nhuộm cả sân thượng trường học thành một màu tím biếc huyền ảo. Gió thổi lồng lộng qua từng song sắt.' },
      { speaker: 'narrator', text: 'Trên chiếc bàn xếp nhỏ, chiếc kính thiên văn khúc xạ được lau chùi sáng bóng đến từng thấu kính, bên cạnh là những biểu đồ sao mùa xuân được vẽ tay tỉ mỉ.' },
      { speaker: 'yuki',     text: 'Lễ hội trường này... tớ muốn dựng một góc nhỏ để mọi người có thể nhìn thấy những chòm sao xa xôi nhất.' },
      { speaker: 'narrator', text: 'Yuki khẽ rút một bên tai nghe có dây chia cho bạn. Giai điệu bản nhạc piano "Clair de Lune" êm đềm vang lên, hòa cùng tiếng gió rít giữa lưng chừng trời.' },
      { speaker: 'yuki',     text: 'Đây là bản nhạc tớ thích nhất... Cảm ơn cậu vì đã luôn kiên nhẫn ở bên cạnh lắng nghe một người tẻ nhạt như tớ.' },
    ],
    next: 'yuki_miyuki_flashback',
  },

  yuki_miyuki_flashback: {
    bg: 'rooftop',
    bgmTheme: 'sunset',
    showChar: 'yuki',
    charExpr: 'yuki_normal',
    lines: [
      { speaker: 'narrator', text: 'Bản nhạc dần đi vào những nốt trầm sâu lắng. Bầu trời chiều tối dần, những ngôi sao đầu tiên bắt đầu lấp lánh xuất hiện trên nền nhung đen.' },
      { speaker: 'narrator', text: 'Yuki ngước nhìn chòm sao Thiên Nga (Cygnus) đang tỏa sáng rực rỡ, ánh mắt cô ấy bỗng trở nên u uất đến nao lòng.' },
      { speaker: 'yuki',     text: 'Cậu có biết không... Đúng một năm trước, cũng vào những ngày chuẩn bị lễ hội trường như thế này...' },
      { speaker: 'yuki',     text: 'Tớ đã tự tay phá hủy sinh mệnh của người bạn thân nhất của mình.' },
    ],
    next: 'choice_yuki_past',
  },

  choice_yuki_past: {
    bg: 'rooftop',
    showChar: 'yuki',
    charExpr: 'yuki_normal',
    choices: [
      {
        text: '❄️ "Nếu điều đó làm tim cậu nhói đau, hãy chia sẻ cùng tớ đi. Tớ muốn cùng cậu gánh vác ký ức ấy."',
        effect: { yuki: +2 },
        next: 'yuki_past_confide',
      },
      {
        text: '🌌 "Mỗi ngôi sao trên trời đều từng trải qua vụ nổ đau đớn... Tớ luôn sẵn sàng lắng nghe mọi góc khuất của cậu."',
        effect: { yuki: +2 },
        next: 'yuki_past_listen',
      },
    ],
  },

  yuki_past_confide: {
    bg: 'rooftop',
    bgmTheme: 'sunset',
    showChar: 'yuki',
    charExpr: 'yuki_normal',
    lines: [
      { speaker: 'yuki',     text: '...Cậu muốn gánh vác cùng một kẻ tội đồ sao?' },
      { speaker: 'narrator', text: 'Giọng nói của Yuki run rẩy như sợi dây đàn sắp đứt. Cô ấy cúi gục đầu xuống, hai tay ôm chặt lấy lồng ngực mình.' },
      { speaker: 'yuki',     text: 'Người đó tên là Miyuki... Tụi tớ lớn lên cùng nhau từ thuở lọt lòng, như hình với bóng.' },
      { speaker: 'yuki',     text: 'Chiều hôm ấy, chỉ vì một chuyện xích mích cỏn con về tiết mục lễ hội... tớ đã mất bình tĩnh.' },
      { speaker: 'yuki',     text: 'Tớ đã hét vào mặt Miyuki: "Tớ ghét cậu! Đừng bao giờ xuất hiện trước mặt tớ nữa!"' },
    ],
    next: 'yuki_past_resolve',
  },

  yuki_past_listen: {
    bg: 'rooftop',
    bgmTheme: 'sunset',
    showChar: 'yuki',
    charExpr: 'yuki_normal',
    lines: [
      { speaker: 'yuki',     text: 'Góc khuất của tớ... chỉ toàn bóng tối và sự hối hận muộn màng thôi...' },
      { speaker: 'narrator', text: 'Những giọt nước mắt lặng lẽ trượt dài trên đôi gò má thanh tú của Yuki, lấp lánh dưới ánh sao đêm.' },
      { speaker: 'yuki',     text: 'Miyuki... bạn thân nhất của tớ. Hôm đó, vì những lời độc ác tớ thốt ra trong lúc nóng giận...' },
      { speaker: 'yuki',     text: 'Cô ấy đã vừa khóc vừa chạy vụt qua cổng trường trong cơn mưa rào...' },
    ],
    next: 'yuki_past_resolve',
  },

  yuki_past_resolve: {
    bg: 'rooftop',
    bgmTheme: 'sunset',
    showChar: 'yuki',
    charExpr: 'yuki_normal',
    lines: [
      { speaker: 'yuki',     text: 'Đúng lúc đó... một chiếc xe tải mất lái đã lao tới...', shake: true },
      { speaker: 'yuki',     text: 'Tiếng phanh xe rít lên xé toạc màn mưa... Tiếng kim loại va chạm... và tiếng thét của Miyuki...' },
      { speaker: 'yuki',     text: 'Đến tận bây giờ, mỗi khi nhắm mắt lại, tớ vẫn nghe thấy âm thanh kinh hoàng ấy văng vẳng bên tai!' },
      { speaker: 'yuki',     text: 'Nếu tớ không nói những lời tàn nhẫn ấy, Miyuki đã không chạy đi! Đáng lẽ người phải chết hôm đó là tớ mới phải!!' },
      { speaker: 'player',   text: 'Yuki! Nhìn tớ này! Đó là một tai nạn bất ngờ, không phải lỗi của cậu!' },
      { speaker: 'player',   text: 'Miyuki chắc chắn không bao giờ muốn thấy người bạn cô ấy yêu quý nhất lại tự giam cầm bản thân trong ngục tù tội lỗi suốt đời như vậy!' },
      { speaker: 'narrator', text: 'Yuki ngước lên nhìn bạn qua làn nước mắt nhạt nhòa, đôi môi mấp máy không thốt nên lời.' },
      { speaker: 'yuki',     text: 'Cậu... thật sự tin rằng... tớ vẫn còn tư cách để được sống và mỉm cười sao?' },
      { speaker: 'player',   text: 'Có chứ. Tớ tin. Và tớ sẽ ở đây để giúp cậu tìm lại nụ cười ấy.' },
    ],
    next: 'ch3_milestone',
  },

  // Sự kiện chuẩn bị: Rin
  ch2_prep_rin: {
    bg: 'student_council',
    bgmTheme: 'tsundere',
    showChar: 'rin',
    charExpr: 'rin_normal',
    lines: [
      { speaker: 'narrator', text: 'Chiều muộn tại văn phòng Hội Học Sinh. Ánh hoàng hôn vàng cam hắt qua khung cửa kính lớn, kéo dài những cái bóng im lìm.' },
      { speaker: 'narrator', text: 'Trên bàn làm việc, Tachibana Rin đã ngủ thiếp đi vì kiệt sức sau nhiều ngày liền thức trắng lo liệu hồ sơ duyệt ngân sách cho toàn bộ 32 câu lạc bộ.' },
      { speaker: 'narrator', text: 'Khuôn mặt khi ngủ của cô nàng không còn nét đanh thép thường ngày, mà trông thật ngây thơ, mong manh đến tội nghiệp.' },
      { speaker: 'narrator', text: 'Bạn nhẹ nhàng cởi chiếc áo khoác blazer của mình, rón rén bước tới đắp lên đôi vai gầy đang khẽ co ro vì gió lạnh.' },
      { speaker: 'rin',     text: 'Ưm... lạnh quá... Chị ơi... đừng bỏ rơi em...' },
      { speaker: 'narrator', text: 'Rin khẽ cựa mình lẩm bẩm trong cơn mê, rồi giật mình mở to mắt: "H-Hả?! Áo của ai thế này...?!"' },
      { speaker: 'rin',     text: 'C-CẬU?! Cậu dám thấy bộ dạng ngủ gật xấu hổ này của tôi à?!', bounce: true, shake: true },
      { speaker: 'player',   text: 'Thấy cậu vất vả quá nên tớ đắp áo cho đỡ lạnh thôi mà.' },
      { speaker: 'rin',     text: 'Hừ... đ-được rồi! Tạm thời tha cho cậu... Nhưng mà... áo ấm lắm, cảm ơn cậu...' },
    ],
    next: 'rin_sister_shadow',
  },

  rin_sister_shadow: {
    bg: 'student_council',
    bgmTheme: 'tsundere',
    showChar: 'rin',
    charExpr: 'rin_normal',
    lines: [
      { speaker: 'narrator', text: 'Rin kéo chặt hai vạt áo khoác của bạn vào người, ánh mắt lơ đãng nhìn ra vòm trời ngoài cửa sổ đang dần sẫm tối.' },
      { speaker: 'rin',     text: 'Cậu... có nghe thấy tiếng lẩm bẩm trong mơ của tôi vừa nãy không?' },
      { speaker: 'player',   text: 'Cậu gọi "chị ơi"... Chị của cậu là ai vậy?' },
      { speaker: 'narrator', text: 'Rin khẽ thở dài, một nụ cười tự giễu cay đắng hiện lên trên khóe môi cô gái kiêu hãnh.' },
      { speaker: 'rin',     text: 'Chị gái tôi... Tachibana Saki. Người từng là huyền thoại vĩ đại nhất của ngôi trường Hanazono này.' },
    ],
    next: 'choice_rin_sister',
  },

  choice_rin_sister: {
    bg: 'student_council',
    showChar: 'rin',
    charExpr: 'rin_normal',
    choices: [
      {
        text: '⚡ "Chị Saki từng là cựu Hội trưởng huyền thoại... nhưng tớ chỉ quan tâm đến Rin của hiện tại thôi."',
        effect: { rin: +2 },
        next: 'rin_sister_talk',
      },
      {
        text: '🛡️ "Mọi người nói gì không quan trọng, tớ thấy Rin đang nỗ lực hết mình vì danh dự của cả trường."',
        effect: { rin: +2 },
        next: 'rin_sister_admire',
      },
    ],
  },

  rin_sister_talk: {
    bg: 'student_council',
    bgmTheme: 'tsundere',
    showChar: 'rin',
    charExpr: 'rin_normal',
    lines: [
      { speaker: 'rin',     text: 'Rin của hiện tại ư... Cậu là người đầu tiên nói như vậy đấy...' },
      { speaker: 'narrator', text: 'Rin cụp mắt xuống, những ngón tay siết chặt lấy chiếc bút máy bằng kim loại.' },
      { speaker: 'rin',     text: 'Chị Saki từng hoàn hảo về mọi mặt. Thông minh, xinh đẹp, được thầy cô và bạn bè tôn sùng như một nữ thần.' },
      { speaker: 'rin',     text: 'Tôi luôn lấy chị làm tấm gương, khao khát được một lần chị xoa đầu khen ngợi...' },
      { speaker: 'rin',     text: 'Nhưng rồi năm ngoái... một vụ lộ đề thi quy mô lớn xảy ra trong trường...' },
    ],
    next: 'rin_sister_resolve',
  },

  rin_sister_admire: {
    bg: 'student_council',
    bgmTheme: 'tsundere',
    showChar: 'rin',
    charExpr: 'rin_normal',
    lines: [
      { speaker: 'rin',     text: 'Nỗ lực hết mình ư... Nhưng trong mắt mọi người, tôi chỉ đang cố dọn dẹp đống tro tàn của gia đình thôi...' },
      { speaker: 'narrator', text: 'Giọng Rin nghẹn lại, một cảm giác bất lực đè nặng trong từng câu chữ.' },
      { speaker: 'rin',     text: 'Năm ngoái, khi vụ bê bối gian lận thi cử bùng nổ... Để bảo vệ một người bạn thân trong ban chấp hành, chị Saki đã đứng ra nhận hết mọi tội lỗi về mình.' },
      { speaker: 'rin',     text: 'Chị ấy bị khai trừ khỏi trường trong nhục nhã. Bố mẹ tôi tức giận tống chị sang Anh, cấm chị quay về...' },
    ],
    next: 'rin_sister_resolve',
  },

  rin_sister_resolve: {
    bg: 'student_council',
    bgmTheme: 'tsundere',
    showChar: 'rin',
    charExpr: 'rin_normal',
    lines: [
      { speaker: 'rin',     text: 'Kể từ ngày đó, đi đâu tôi cũng nghe thấy những lời xì xào sau lưng: "Con bé đó là em gái của kẻ gian lận đấy"...' },
      { speaker: 'rin',     text: 'Tôi ứng cử vào Hội Học Sinh, ép bản thân làm việc gấp ba người khác, không cho phép mình phạm dù chỉ một sai lầm nhỏ nhất...' },
      { speaker: 'rin',     text: 'Tôi đẩy mọi người ra xa, tôi tỏ ra cay nghiệt... vì tôi sợ nếu kết thân với ai đó, rồi họ cũng sẽ đâm sau lưng tôi như cách họ đã làm với chị tôi!' },
      { speaker: 'player',   text: 'Rin... cậu không phải là cái bóng của chị mình, càng không phải người gánh tội cho bất kỳ ai.' },
      { speaker: 'player',   text: 'Cậu là Tachibana Rin, một người tận tâm, dũng cảm và chân thành nhất mà tớ từng biết. Và tớ hứa sẽ không bao giờ phản bội lòng tin của cậu.' },
      { speaker: 'narrator', text: 'Rin quay mặt đi chỗ khác giấu đi hai hàng nước mắt vừa ứa ra, đôi vai khẽ run lên.' },
      { speaker: 'rin',     text: 'Đ-Đồ ngốc... Ai cho phép cậu nói những lời làm người ta yếu lòng thế hả... Tôi ghi nhớ lời hứa này của cậu rồi đấy, đừng hòng nuốt lời!' },
    ],
    next: 'ch3_milestone',
  },

  // -------------------------------------------
  // CHƯƠNG III: LỄ HỘI VĂN HÓA HANAZONO
  // -------------------------------------------
  ch3_milestone: {
    chapter: { title: 'CHƯƠNG III', subtitle: 'Lễ Hội Văn Hóa Hanazono' },
    bg: 'sakura',
    bgmTheme: 'spring',
    hideChar: true,
    lines: [
      { speaker: 'narrator', text: 'Ngày hội lớn nhất trong năm cuối cùng cũng chính thức bùng nổ!' },
      { speaker: 'narrator', text: 'Cổng trường Hanazono tấp nập hàng ngàn lượt khách qua lại trong tiếng nhạc diễu hành rộn rã.' },
      { speaker: 'narrator', text: 'Dưới những cội anh đào cổ thụ nở rộ rực rỡ, hàng chục gian hàng ẩm thực bốc khói nghi ngút, tiếng reo hò cổ vũ vang dội khắp các sân khấu ngoài trời.' },
      { speaker: 'player',   text: '(Hôm nay là cao điểm của lễ hội... Mình phải tìm gặp người quan trọng nhất để cùng chia sẻ những khoảnh khắc quý giá này.)' },
    ],
    next: 'choice_festival_date',
  },

  choice_festival_date: {
    bg: 'sakura',
    hideChar: true,
    choices: [
      {
        text: '🌸 Đồng hành cùng Sakura Hana: Trải nghiệm quán cà phê & lễ hội náo nhiệt',
        effect: { hana: +2 },
        next: 'ch3_date_hana',
      },
      {
        text: '❄️ Đồng hành cùng Aoki Yuki: Ghé thăm đài thiên văn & góc ngắm trời thơ mộng',
        effect: { yuki: +2 },
        next: 'ch3_date_yuki',
      },
      {
        text: '⚡ Đồng hành cùng Tachibana Rin: Tuần tra sân khấu & cùng thưởng thức pháo hoa',
        effect: { rin: +2 },
        next: 'ch3_date_rin',
      },
    ],
  },

  // Hẹn hò Lễ hội: Hana
  ch3_date_hana: {
    bg: 'classroom',
    bgmTheme: 'spring',
    showChar: 'hana',
    charExpr: 'hana_smile',
    lines: [
      { speaker: 'hana',     text: 'Oa! Cậu đến tìm tớ thật sao?! Vui quá đi mất thôi!!', bounce: true },
      { speaker: 'narrator', text: 'Hana trong bộ trang phục hầu gái phối hoa anh đào truyền thống chạy ùa ra đón bạn, nụ cười rạng rỡ như ánh mặt trời ban trưa.' },
      { speaker: 'narrator', text: 'Bạn và cô ấy cùng nhau dạo qua các dãy phố ẩm thực náo nhiệt, cùng cắn chung một xiên kẹo táo đỏ au ngọt lịm.' },
      { speaker: 'narrator', text: 'Giữa dòng người chen chúc, bàn tay nhỏ nhắn của Hana bỗng khẽ tìm đến và nắm chặt lấy bàn tay bạn.' },
      { speaker: 'hana',     text: 'Đừng buông tay tớ ra nhé... Xin cậu đấy... Giữ chặt lấy tớ...' },
      { speaker: 'player',   text: '(Bàn tay của Hana... sao lại lạnh buốt và run rẩy đến thế này?)' },
    ],
    next: 'hana_transfer_crisis',
  },

  hana_transfer_crisis: {
    bg: 'corridor',
    bgmTheme: 'sunset',
    showChar: 'hana',
    charExpr: 'hana_normal',
    lines: [
      { speaker: 'narrator', text: 'Khi ánh hoàng hôn buông xuống, tiếng ồn ào của lễ hội dần lùi xa về phía sân khấu chính. Hai bạn dừng chân tại góc hành lang vắng lặng.' },
      { speaker: 'narrator', text: 'Hana buông tay bạn ra, đứng quay lưng lại, đầu cúi gằm xuống đất. Cơn gió chiều thổi tung những dải ruy băng hồng trên tóc cô ấy.' },
      { speaker: 'hana',     text: 'Cậu này... Ngày hôm nay... tớ đã ước giá như thời gian có thể ngừng trôi mãi mãi...' },
      { speaker: 'player',   text: 'Sao lại nói những lời buồn bã thế, Hana?' },
      { speaker: 'hana',     text: 'Sáng nay... bố mẹ tớ vừa gọi điện từ California về...' },
      { speaker: 'hana',     text: 'Họ bảo bệnh tình của bà ngoại cần phải đưa sang Mỹ điều trị chuyên sâu ngay trong tuần tới...' },
      { speaker: 'hana',     text: 'Và... họ đã nộp xong toàn bộ giấy tờ bảo lãnh chuyển trường cho tớ rồi. Thứ Hai tuần sau... tớ sẽ phải lên máy bay rời khỏi Nhật Bản...' },
    ],
    next: 'choice_hana_transfer',
  },

  choice_hana_transfer: {
    bg: 'corridor',
    showChar: 'hana',
    charExpr: 'hana_normal',
    choices: [
      {
        text: '🌸 Bước tới ôm chặt lấy Hana: "Đừng đi, Hana! Tớ không thể để mất cậu được! Cậu là một phần linh hồn của tớ!"',
        effect: { hana: +3 },
        next: 'hana_transfer_plea',
      },
      {
        text: '💔 Cúi đầu ngập ngừng: "Nếu đó là quyết định của gia đình cậu... có lẽ tớ nên tôn trọng..."',
        effect: {},
        next: 'hana_transfer_hesitate',
      },
    ],
  },

  hana_transfer_plea: {
    bg: 'corridor',
    bgmTheme: 'romance',
    showChar: 'hana',
    charExpr: 'hana_normal',
    lines: [
      { speaker: 'narrator', text: 'Không chần chừ thêm một giây nào, bạn bước tới ôm ghì lấy Hana vào lòng. Vòng tay bạn siết chặt như sợ cô ấy sẽ tan biến vào hoàng hôn.' },
      { speaker: 'player',   text: 'Hana! Đừng đi! Tớ xin cậu đấy!' },
      { speaker: 'player',   text: 'Ở bên đó cậu sẽ lại phải một mình trong căn nhà xa lạ! Tớ sẽ cùng cậu nói chuyện với bố mẹ cậu, tớ sẽ cùng cậu chăm sóc bà ngoại mỗi ngày sau giờ học!' },
      { speaker: 'player',   text: 'Hãy ở lại đây! Tớ cần có cậu trong cuộc đời này!' },
      { speaker: 'narrator', text: 'Hana khựng lại, rồi hai tay cô ấy bám chặt lấy lưng áo bạn, những giọt nước mắt nóng hổi thấm đẫm qua vai áo.' },
      { speaker: 'hana',     text: 'Tớ... tớ cũng không muốn đi! Tớ muốn ở lại đây bên cạnh cậu! Mỗi giây mỗi phút rời xa cậu đều là cực hình đối với tớ!', bounce: true },
      { speaker: 'hana',     text: 'Cậu đã cho tớ dũng khí... Tớ sẽ gọi cho bố mẹ, tớ sẽ chiến đấu để được ở lại ngôi trường này... vì cậu!' },
    ],
    next: 'ch4_milestone',
  },

  hana_transfer_hesitate: {
    bg: 'corridor',
    bgmTheme: 'sunset',
    showChar: 'hana',
    charExpr: 'hana_normal',
    lines: [
      { speaker: 'narrator', text: 'Hana khẽ mỉm cười, một nụ cười thê lương và vỡ vụn như pha lê rơi xuống đá tảng.' },
      { speaker: 'hana',     text: 'Ừm... tớ hiểu mà. Ai rồi cũng phải tiếp tục con đường của riêng mình...' },
      { speaker: 'hana',     text: 'Cảm ơn cậu vì đã cho tớ những kỷ niệm đẹp đẽ nhất của tuổi thanh xuân ngắn ngủi này...' },
      { speaker: 'narrator', text: 'Hana quay gót bước đi vào bóng tối hành lang, để lại trong tim bạn một khoảng trống lạnh lẽo đến buốt giá.' },
    ],
    next: 'ch4_milestone',
  },

  // Hẹn hò Lễ hội: Yuki
  ch3_date_yuki: {
    bg: 'rooftop',
    bgmTheme: 'sunset',
    showChar: 'yuki',
    charExpr: 'yuki_normal',
    lines: [
      { speaker: 'yuki',     text: 'Cậu đã chọn đến với tớ... Giữa hàng ngàn niềm vui náo nhiệt dưới kia, cậu lại chọn góc trời vắng lặng này.' },
      { speaker: 'narrator', text: 'Trên sân thượng lộng gió, Yuki đưa tay đón những cánh hoa anh đào lạc lối bay tít lên tầng cao.' },
      { speaker: 'narrator', text: 'Cô ấy cẩn thận rút từ túi áo ra một chiếc bùa hộ mệnh đan bằng sợi len màu xanh lam tinh xảo hình bông tuyết lục giác.' },
      { speaker: 'yuki',     text: 'Tớ tự tay đan nó suốt một tuần qua... Tớ muốn trao nó cho người quan trọng nhất trần đời này đối với tớ.' },
      { speaker: 'yuki',     text: 'Nhưng hôm nay... đúng vào giờ này... chính là thời khắc định mệnh một năm trước.' },
      { speaker: 'narrator', text: 'Bầu trời bỗng chuyển màu xám xịt nhanh chóng. Những đám mây đen kịt từ phía chân trời ùn ùn kéo đến, sấm sét nổ vang rền rĩ.' },
    ],
    next: 'yuki_rooftop_crisis',
  },

  yuki_rooftop_crisis: {
    bg: 'rooftop',
    bgmTheme: 'sunset',
    showChar: 'yuki',
    charExpr: 'yuki_normal',
    lines: [
      { speaker: 'narrator', text: 'Một cơn mưa rào mùa xuân bất chợt trút xuống dữ dội! Nước mưa xối xả làm mờ mịt cả không gian sân thượng.' },
      { speaker: 'narrator', text: 'Giữa màn mưa lạnh buốt, bạn kinh hoàng phát hiện Yuki đang trèo qua lan can an toàn, đôi chân cô ấy đã đặt lên bờ rìa bê tông hẹp hòi ngoài trời!' },
      { speaker: 'narrator', text: 'Mái tóc màu lam của cô ấy ướt sũng dính bết vào má. Đôi mắt Yuki mở to nhìn xoáy vào khoảng không thăm thẳm bên dưới tầng lầu.', shake: true },
      { speaker: 'yuki',     text: 'Miyuki... cậu đang đứng ở dưới đó đúng không? Cậu ướt đẫm và lạnh lắm phải không?' },
      { speaker: 'yuki',     text: 'Một năm qua tớ sống trong sự tha thứ giả tạo... Tớ không xứng đáng được nhận tình yêu thương của bất kỳ ai!' },
      { speaker: 'yuki',     text: 'Tớ đến xin lỗi cậu đây... Chờ tớ với...' },
    ],
    next: 'choice_yuki_rooftop',
  },

  choice_yuki_rooftop: {
    bg: 'rooftop',
    showChar: 'yuki',
    charExpr: 'yuki_normal',
    choices: [
      {
        text: '❄️ Lao vụt tới trong mưa, ôm ghì lấy eo Yuki kéo giật ngược vào trong: "Yuki!! Đừng làm điều ngu ngốc!! Tớ tuyệt đối không để mất cậu đâu!!"',
        effect: { yuki: +3 },
        next: 'yuki_rooftop_saved',
      },
      {
        text: '🛑 Đứng sững lại hét lớn: "Yuki bình tĩnh lại đi! Xuống khỏi đó đi, nguy hiểm lắm!"',
        effect: {},
        next: 'yuki_rooftop_scared',
      },
    ],
  },

  yuki_rooftop_saved: {
    bg: 'rooftop',
    bgmTheme: 'romance',
    showChar: 'yuki',
    charExpr: 'yuki_normal',
    lines: [
      { speaker: 'narrator', text: 'Bỏ qua mọi hiểm nguy, bạn lao vụt tới như một mũi tên xé toạc màn mưa! Hai tay bạn vươn ra, ôm chặt cứng lấy eo Yuki và giật mạnh cô ấy lùi lại phía sau!', shake: true },
      { speaker: 'narrator', text: 'Cả hai ngã nhào xuống sàn bê tông ướt sũng. Bạn ôm chặt lấy thân hình mảnh mai đang run rẩy bần bật của Yuki trong lồng ngực mình.' },
      { speaker: 'player',   text: 'CẬU ĐIÊN RỒ VỪA THÔI, YUKI!! CẬU NGHĨ MIYUKI MUỐN NHÌN THẤY CẬU KẾT THÚC NHƯ THẾ NÀY SAO?!', shake: true },
      { speaker: 'player',   text: 'Người còn sống phải sống thay cho cả ước mơ của người đã khuất! Nếu cậu chết đi... cậu có biết trái tim tớ sẽ vỡ vụn thành trăm mảnh không hả?!' },
      { speaker: 'narrator', text: 'Yuki sững sờ ngước nhìn bạn. Lần đầu tiên, những cảm xúc bị kìm nén suốt một năm qua vỡ òa, cô ấy ôm lấy cổ bạn khóc thét lên giữa cơn mưa bão.' },
      { speaker: 'yuki',     text: 'Tớ... tớ sợ lắm... Tớ không muốn chết... Tớ muốn được ở bên cạnh cậu... Xin cậu đừng buông tớ ra...' },
      { speaker: 'player',   text: 'Tớ sẽ không bao giờ buông tay. Giông bão qua rồi, có tớ ở đây che chở cho cậu.' },
    ],
    next: 'ch4_milestone',
  },

  yuki_rooftop_scared: {
    bg: 'rooftop',
    bgmTheme: 'sunset',
    showChar: 'yuki',
    charExpr: 'yuki_normal',
    lines: [
      { speaker: 'narrator', text: 'Yuki từ từ trèo xuống khỏi lan can. Nhưng đôi mắt cô ấy đã mất đi hoàn toàn tia sáng hy vọng, trở nên vô hồn như mặt gương đóng băng.' },
      { speaker: 'yuki',     text: 'Cậu cũng nhìn tớ như một kẻ điên loạn thôi...' },
      { speaker: 'yuki',     text: 'Cảm ơn cậu vì chiếc bùa hộ mệnh... Nhưng có lẽ tớ vĩnh viễn không thể cứu chuộc chính mình.' },
    ],
    next: 'ch4_milestone',
  },

  // Hẹn hò Lễ hội: Rin
  ch3_date_rin: {
    bg: 'student_council',
    bgmTheme: 'tsundere',
    showChar: 'rin',
    charExpr: 'rin_normal',
    lines: [
      { speaker: 'rin',     text: 'N-Này, tôi rủ cậu đi tuần tra an ninh là vì công việc thôi đấy nhé, không phải hẹn hò lễ hội gì đâu!', bounce: true },
      { speaker: 'narrator', text: 'Rin đỏ mặt bước đi bên cạnh bạn, tay vẫn cầm chiếc bộ đàm kiểm tra từng chốt trực.' },
      { speaker: 'narrator', text: 'Khi sự cố chập điện bảng điều khiển sân khấu chính xảy ra, bạn và Rin đã phối hợp ăn ý nối lại cầu chì kịp thời trước giờ công diễn kịch.' },
      { speaker: 'rin',     text: 'Cậu... ngầu thật đấy... Nếu không có cậu sát cánh bên cạnh, tôi chẳng biết xoay sở thế nào nữa...' },
      { speaker: 'narrator', text: 'Đúng lúc đó, cánh cửa phòng Hội Học Sinh bị một giáo viên phụ trách đập mạnh mở toang, ném lên bàn một phong bì dày cộp!' },
    ],
    next: 'rin_panic_attack',
  },

  rin_panic_attack: {
    bg: 'student_council',
    bgmTheme: 'sunset',
    showChar: 'rin',
    charExpr: 'rin_normal',
    lines: [
      { speaker: 'narrator', text: '"Đơn tố cáo nặc danh gửi lên Ban Giám Hiệu: Ban Chấp Hành Hội Học Sinh biển thủ hơn hai triệu yên tiền quỹ Lễ Hội, kẻ chủ mưu là Tachibana Rin!"' },
      { speaker: 'narrator', text: '"Kèm theo lời đe dọa giải tán Hội Học Sinh ngay lập tức và chuyển hồ sơ sang cơ quan điều tra."' },
      { speaker: 'narrator', text: 'Tiếng sấm chớp rền vang ngoài cửa sổ. Thầy giáo bỏ đi sau khi để lại tối hậu thư yêu cầu giải trình trước 8 giờ tối.' },
      { speaker: 'rin',     text: 'K-Không... Không phải... Tôi không hề lấy một đồng nào...', shake: true },
      { speaker: 'narrator', text: 'Rin ôm lấy lồng ngực, hơi thở dồn dập đứt quãng. Hai mắt cô ấy trợn trừng trong hoảng loạn cực độ, các ngón tay cào cấu lên cổ áo như sắp nghẹt thở.' },
      { speaker: 'rin',     text: 'Lại là nhà Tachibana... Lại là sự ô nhục... Ai cũng nhìn tôi như một kẻ lừa đảo... Chị ơi... em không thở được...', shake: true },
      { speaker: 'narrator', text: 'Rin ngã quỵ xuống sàn nhà, một cơn hoảng loạn (panic attack) dữ dội đang nuốt chửng lấy cô bé kiêu hãnh!' },
    ],
    next: 'choice_rin_panic',
  },

  choice_rin_panic: {
    bg: 'student_council',
    showChar: 'rin',
    charExpr: 'rin_normal',
    choices: [
      {
        text: '⚡ Quỳ xuống ôm chặt lấy Rin, áp bàn tay ấm vào má cô ấy: "Rin, nhìn vào mắt tớ! Hít sâu vào... thở ra... Tớ ở đây, tớ tin cậu tuyệt đối!"',
        effect: { rin: +3 },
        next: 'rin_panic_comfort',
      },
      {
        text: '📋 Vội vàng lật tìm sổ sách kế toán: "Để tớ đi đối chất và làm rõ với Ban Giám Hiệu ngay bây giờ!"',
        effect: {},
        next: 'rin_panic_rush',
      },
    ],
  },

  rin_panic_comfort: {
    bg: 'student_council',
    bgmTheme: 'romance',
    showChar: 'rin',
    charExpr: 'rin_normal',
    lines: [
      { speaker: 'narrator', text: 'Bạn lập tức quỳ sụp xuống sàn, hai tay nâng lấy khuôn mặt đang lạnh toát và ướt đẫm mồ hôi của Rin.' },
      { speaker: 'player',   text: 'Rin! Tập trung vào giọng nói của tớ! Nhìn thẳng vào mắt tớ này!' },
      { speaker: 'player',   text: 'Hít vào thật sâu... 1... 2... 3... rồi từ từ thở ra... Đúng rồi, ngoan lắm.' },
      { speaker: 'narrator', text: 'Từng nhịp thở hỗn loạn của Rin dần dần chậm lại dưới hơi ấm từ bàn tay bạn. Đôi mắt hoang dại của cô bé dần tìm lại tiêu cự.' },
      { speaker: 'player',   text: 'Toàn bộ thu chi lễ hội này tớ và cậu đã cùng rà soát từng hóa đơn một. Cậu hoàn toàn trong sạch!' },
      { speaker: 'player',   text: 'Tớ sẽ đứng ra làm chứng trước toàn trường. Bất kỳ ai dám xúc phạm đến danh dự của cậu, người đó phải bước qua tớ trước!' },
      { speaker: 'narrator', text: 'Rin òa khóc nức nở, vòng tay ôm ghì lấy cổ bạn, vùi mặt vào hõm vai bạn như một đứa trẻ tìm thấy bến đỗ an toàn giữa cơn ác mộng.' },
      { speaker: 'rin',     text: 'Đồ ngốc... Tại sao lúc nào cậu cũng cứu vớt tôi như thế này chứ... Nếu không có cậu, tôi đã hoàn toàn gục ngã rồi...' },
    ],
    next: 'ch4_milestone',
  },

  rin_panic_rush: {
    bg: 'student_council',
    bgmTheme: 'sunset',
    showChar: 'rin',
    charExpr: 'rin_normal',
    lines: [
      { speaker: 'narrator', text: 'Bạn cuống cuồng lật tìm chứng từ mà không nhận ra Rin đang chới với trong cơn ngạt thở.' },
      { speaker: 'narrator', text: 'Khi bạn quay lại, Rin đã tự mình gượng dậy vịn vào mép bàn, nhưng ánh mắt cô ấy đã dựng lại bức tường sắt lạnh lùng tuyệt đối.' },
      { speaker: 'rin',     text: 'Cậu... ra ngoài đi. Đây là chuyện của nhà Tachibana, tôi sẽ tự giải quyết một mình.' },
    ],
    next: 'ch4_milestone',
  },

  // -------------------------------------------
  // CHƯƠNG IV: LỜI HẸN ƯỚC DƯỚI MƯA ANH ĐÀO
  // -------------------------------------------
  ch4_milestone: {
    chapter: { title: 'CHƯƠNG IV', subtitle: 'Lời Hẹn Ước Dưới Mưa Anh Đào' },
    bg: 'sakura',
    bgmTheme: 'romance',
    hideChar: true,
    lines: [
      { speaker: 'narrator', text: 'Những ngày cuối cùng của mùa xuân đã gõ cửa trường trung học Hanazono.' },
      { speaker: 'narrator', text: 'Cơn gió ấm áp thổi bừng lên hàng vạn cánh hoa anh đào cuối mùa, tạo thành một cơn mưa phớt hồng bay ngập tràn cả không gian.' },
      { speaker: 'narrator', text: 'Những thử thách, những vết thương sâu kín trong tâm hồn đã được bộc bạch và chữa lành qua ngọn lửa của sự sẻ chia.' },
      { speaker: 'player',   text: '(Thời khắc định mệnh đã điểm... Tiếng gọi chân thành từ sâu thẳm trái tim sẽ dẫn lối mình đến bên ai?)' },
    ],
    next: 'choice_final_confession',
  },

  choice_final_confession: {
    bg: 'sakura',
    hideChar: true,
    choices: [
      {
        text: '🌸 Đến gốc cây anh đào cổ thụ trước cổng trường — Gặp Sakura Hana',
        next: 'final_branch_hana',
      },
      {
        text: '❄️ Lên sân thượng lộng gió hoàng hôn — Gặp Aoki Yuki',
        next: 'final_branch_yuki',
      },
      {
        text: '⚡ Bước vào căn phòng Hội Học Sinh ấm áp ánh chiều — Gặp Tachibana Rin',
        next: 'final_branch_rin',
      },
      {
        text: '✨ Trân trọng tình bạn tuyệt đẹp của cả nhóm bốn người',
        next: 'final_branch_harem',
      },
      {
        text: '🚶 Rời trường một mình, không muốn vướng bận tình cảm',
        next: 'ending_alone',
      },
    ],
  },

  // --- Nhánh Tỏ Tình Hana ---
  final_branch_hana: {
    bg: 'sakura',
    bgmTheme: 'romance',
    showChar: 'hana',
    charExpr: 'hana_normal',
    lines: [
      { speaker: 'hana',     text: 'Cậu đã đến rồi... Cảm ơn cậu vì đã nhận lời hẹn của tớ.' },
      { speaker: 'narrator', text: 'Đứng dưới cội anh đào cổ thụ rợp bóng hoa bay, Hana hai tay nắm chặt vạt áo đồng phục, đôi mắt long lanh ngấn lệ nhưng tràn đầy hạnh phúc.' },
      { speaker: 'hana',     text: 'Tớ đã nói chuyện nghiêm túc suốt cả đêm với bố mẹ... Tớ bảo rằng ở nơi này tớ đã tìm thấy gia đình thứ hai của mình.' },
      { speaker: 'hana',     text: 'Bố mẹ đã đồng ý để tớ ở lại cùng bà ngoại... Và quan trọng nhất... là để tớ được ở bên cạnh cậu!' },
      { speaker: 'hana',     text: 'Từ giây phút đầu tiên cậu mỉm cười với tớ ở chiếc bàn học ấy... trong mắt tớ chỉ có duy nhất hình bóng của cậu mà thôi...' },
      { speaker: 'hana',     text: 'Cậu có muốn... cùng tớ nắm tay bước tiếp suốt những năm tháng thanh xuân này không?' },
    ],
    next: 'choice_confession_hana',
  },

  choice_confession_hana: {
    bg: 'sakura',
    showChar: 'hana',
    charExpr: 'hana_smile',
    choices: [
      {
        text: '💖 "Tớ yêu cậu từ rất lâu rồi, Hana! Hãy trở thành bạn gái của tớ nhé."',
        requireAffectionHero: 'hana',
        minVal: 4,
        next: 'ending_hana_good',
        failNext: 'ending_hana_normal',
      },
      {
        text: '🌸 "Cảm ơn tình cảm chân thành của cậu, chúng mình hãy luôn là đôi bạn cùng bàn tuyệt nhất nhé."',
        next: 'ending_hana_normal',
      },
    ],
  },

  // --- Nhánh Tỏ Tình Yuki ---
  final_branch_yuki: {
    bg: 'rooftop',
    bgmTheme: 'sunset',
    showChar: 'yuki',
    charExpr: 'yuki_normal',
    lines: [
      { speaker: 'yuki',     text: 'Hoàng hôn hôm nay đẹp quá... Bầu trời không còn mang màu tang tóc nữa.' },
      { speaker: 'narrator', text: 'Gió chiều lộng lẫy thổi tung làn tóc lam khói bồng bềnh của Yuki. Chiếc bùa hộ mệnh hình bông tuyết được cài trang trọng trên ngực áo cô ấy.' },
      { speaker: 'yuki',     text: 'Một năm qua, tớ ngỡ rằng trái tim mình đã vĩnh viễn hóa thành tảng băng lạnh giá...' },
      { speaker: 'yuki',     text: 'Nhưng chính sự dịu dàng kiên định của cậu đã sưởi ấm tâm hồn tớ, kéo tớ trở lại với ánh sáng cuộc đời.' },
      { speaker: 'yuki',     text: 'Giờ đây, tớ muốn sống thật rực rỡ... không chỉ vì Miyuki, mà vì chính tớ, và vì cậu.' },
      { speaker: 'yuki',     text: 'Cậu có bằng lòng trở thành ngọn lửa sưởi ấm duy nhất của cuộc đời tớ không?' },
    ],
    next: 'choice_confession_yuki',
  },

  choice_confession_yuki: {
    bg: 'rooftop',
    showChar: 'yuki',
    charExpr: 'yuki_normal',
    choices: [
      {
        text: '💙 Nắm lấy bàn tay nhỏ của Yuki: "Tớ muốn ở bên cạnh bảo bọc và chia sẻ mọi khoảnh khắc buồn vui cùng cậu."',
        requireAffectionHero: 'yuki',
        minVal: 4,
        next: 'ending_yuki_good',
        failNext: 'ending_yuki_normal',
      },
      {
        text: '❄️ "Cậu là người tri kỷ thanh cao tuyệt vời nhất mà tớ từng có trong đời."',
        next: 'ending_yuki_normal',
      },
    ],
  },

  // --- Nhánh Tỏ Tình Rin ---
  final_branch_rin: {
    bg: 'student_council',
    bgmTheme: 'tsundere',
    showChar: 'rin',
    charExpr: 'rin_normal',
    lines: [
      { speaker: 'rin',     text: 'C-Cậu đến muộn đúng 1 phút 30 giây đấy nhé! Bắt Hội phó chờ đợi là tội không thể tha thứ!', bounce: true },
      { speaker: 'narrator', text: 'Rin quay mặt sang hướng khác giấu đi đôi má đang đỏ bừng như cánh hoa hải đường, hai ngón tay bối rối mân mê chiếc bút ký.' },
      { speaker: 'narrator', text: 'Vụ vu khống quỹ đã được làm sáng tỏ, danh dự của Rin và gia đình đã hoàn toàn được minh oan trước toàn trường.' },
      { speaker: 'rin',     text: 'Nhưng mà... tôi không quan tâm đến mấy quy định vớ vẩn lúc này nữa đâu!' },
      { speaker: 'rin',     text: 'Từ ngày cậu xuất hiện, ngày nào cậu cũng chen vào tâm trí tôi, làm tim tôi đập loạn cào cào lên như đồ hâm dở...' },
      { speaker: 'rin',     text: 'Cậu đã gieo tương tư vào đầu tôi thì cậu phải chịu trách nhiệm cả đời này với tôi đấy! Nghe rõ chưa đồ ngốc?!' },
    ],
    next: 'choice_confession_rin',
  },

  choice_confession_rin: {
    bg: 'student_council',
    showChar: 'rin',
    charExpr: 'rin_normal',
    choices: [
      {
        text: '🧡 Bước tới ôm chặt lấy Rin: "Tớ xin chịu trách nhiệm cả đời này với cậu luôn, cô nàng Hội phó đáng yêu của tớ."',
        requireAffectionHero: 'rin',
        minVal: 4,
        next: 'ending_rin_good',
        failNext: 'ending_rin_normal',
      },
      {
        text: '⚡ "Tớ sẽ luôn là cánh tay phải đắc lực và người bạn trung thành nhất của cậu."',
        next: 'ending_rin_normal',
      },
    ],
  },

  // --- Nhánh Harem & Tình Bạn ---
  final_branch_harem: {
    bg: 'sakura',
    bgmTheme: 'spring',
    hideChar: true,
    lines: [
      { speaker: 'narrator', text: 'Dưới những cội hoa anh đào cổ thụ ngát hương, cả bốn người cùng nhau tụ họp dưới ánh nắng xuân trong trẻo.' },
      { speaker: 'narrator', text: 'Tiếng cười nói ríu rít như chim non của Hana, nụ cười thanh thản dịu dàng của Yuki, và những câu cằn nhằn dễ thương ngập tràn quan tâm của Rin...' },
      { speaker: 'narrator', text: 'Tất cả đan xen vào nhau, dệt nên một bức tranh thanh xuân rực rỡ và thuần khiết nhất mà bạn từng được chiêm ngưỡng.' },
      { speaker: 'player',   text: '(Không cần phải chiếm hữu riêng cho mình, tình bạn này, những gắn kết kỳ diệu này... mới chính là phép màu vô giá của tuổi trẻ.)' },
    ],
    next: 'ending_harem',
  },

  // =============================================
  //  8 KẾT THÚC (ENDINGS)
  // =============================================

  ending_hana_good: {
    type: 'ending',
    endingKey: 'hana_good',
    badge: '🌸💖🌸',
    title: 'True Ending: Dấu Ấn Hoa Anh Đào',
    desc: 'Dưới cơn mưa hoa anh đào bay ngợp trời mùa xuân, Sakura Hana nghẹn ngào ôm chầm lấy bạn trong niềm hạnh phúc tột cùng. Nụ cười rạng rỡ của cô ấy sẽ mãi đồng hành cùng bạn qua những năm tháng thanh xuân ngọt ngào và rực rỡ nhất, xua tan vĩnh viễn nỗi cô đơn của những ngày tháng cũ.',
    hearts: '💖💖💖💖💖',
  },

  ending_hana_normal: {
    type: 'ending',
    endingKey: 'hana_normal',
    badge: '🌸🤝🌸',
    title: 'Normal Ending: Bạn Cùng Bàn Tuyệt Nhất',
    desc: 'Hana khẽ mỉm cười gật đầu, dù đôi mắt thoáng vương một chút tiếc nuối dịu dàng. Hai bạn vẫn mãi là đôi bạn cùng bàn gắn bó keo sơn, luôn san sẻ từng chiếc bánh bento, từng bài vở trong suốt những năm tháng học trò tươi đẹp.',
    hearts: '💛💛💛🤍🤍',
  },

  ending_yuki_good: {
    type: 'ending',
    endingKey: 'yuki_good',
    badge: '❄️💙❄️',
    title: 'True Ending: Bản Tình Ca Tuyết Trắng Hoàng Hôn',
    desc: 'Trên sân thượng lộng gió hoàng hôn tím ngát, Yuki siết chặt lấy bàn tay bạn. Một nụ cười thuần khiết như tuyết đầu mùa bừng nở trên môi người con gái ấy. Kể từ hôm nay, cô ấy sẽ không bao giờ phải cô đơn ngắm nhìn bầu trời một mình nữa, bởi bạn đã trở thành bến đỗ bình yên nhất của đời cô.',
    hearts: '💙💙💙💙💙',
  },

  ending_yuki_normal: {
    type: 'ending',
    endingKey: 'yuki_normal',
    badge: '❄️🕊️❄️',
    title: 'Normal Ending: Tri Kỷ Sân Thượng',
    desc: 'Yuki nhìn về phía dải ngân hà xa xăm, mỉm cười thanh thản. Hai người trở thành những người bạn tri âm tri kỷ hiếm hoi trong cuộc đời, nơi sân thượng lộng gió luôn là chốn bình yên để cùng chia sẻ mọi nỗi niềm thầm kín.',
    hearts: '💙💙💙🤍🤍',
  },

  ending_rin_good: {
    type: 'ending',
    endingKey: 'rin_good',
    badge: '⚡🧡⚡',
    title: 'True Ending: Trái Tim Ngượng Ngùng Của Hội Trưởng',
    desc: 'Trong văn phòng Hội Học Sinh ấm áp ánh chiều tà, Rin gục đầu vào ngực bạn giấu đi đôi má nóng bừng. Lớp vỏ bọc kiêu kỳ, sắc nhọn tan biến hoàn toàn, nhường chỗ cho tình cảm chân thành và ngọt ngào nhất của cô nàng Tsundere đáng yêu.',
    hearts: '🧡🧡🧡🧡🧡',
  },

  ending_rin_normal: {
    type: 'ending',
    endingKey: 'rin_normal',
    badge: '⚡📋⚡',
    title: 'Normal Ending: Cánh Tay Đắc Lực',
    desc: 'Rin vỗ vai bạn đầy tự hào và tin cậy. Bạn chính thức trở thành phụ tá tin cậy nhất của Hội Học Sinh, kề vai sát cánh cùng Rin giải quyết mọi thử thách học đường đầy ắp tiếng cười và nhiệt huyết tuổi trẻ.',
    hearts: '🧡🧡🧡🤍🤍',
  },

  ending_harem: {
    type: 'ending',
    endingKey: 'harem',
    badge: '✨🌸❄️⚡',
    title: 'Special Ending: Vườn Hoa Tuổi Thanh Xuân',
    desc: 'Không cần chọn riêng một người, bạn đã chọn giữ trọn vẹn tình bạn và sự gắn kết tuyệt vời của cả bốn người. Cùng Hana, Yuki và Rin, những tháng ngày cấp ba tại trường Hanazono đã trở thành thiên đường kỷ niệm lấp lánh không bao giờ phai mờ.',
    hearts: '💖💙🧡✨💖',
  },

  ending_alone: {
    type: 'ending',
    endingKey: 'alone',
    badge: '🌧️💔',
    title: 'Sad Ending: Cánh Hoa Tàn Rơi',
    desc: 'Mùa hoa anh đào khép lại, để lại con đường rải đầy cánh hoa tàn úa không một bóng người. Bạn lặng lẽ bước đi một mình, dâng lên một nỗi tiếc nuối khôn nguôi khi nhớ về những cơ hội và nụ cười rạng rỡ mình đã từng bỏ lỡ.',
    hearts: '🤍🤍🤍🤍🤍',
  },
};
