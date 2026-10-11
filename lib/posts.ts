export type PostType = "Bài viết" | "Video" | "Tài liệu";
export type MotifName = "pipe" | "tree" | "chain" | "loop" | "ring" | "bucket";

export type Block =
  | { t: "h"; text: string }
  | { t: "p"; text: string }
  | { t: "q"; text: string }
  | { t: "list"; items: string[] }
  | { t: "fig"; motif: MotifName; caption: string }
  | { t: "video" };

export type Post = {
  id: string;
  type: PostType;
  motif: MotifName;
  title: string;
  lede: string;
  body: Block[];
};

export const POSTS: Post[] = [
  {
    id: "xach-nuoc",
    type: "Bài viết",
    motif: "pipe",
    title: "Xách nước hay xây đường ống?",
    lede: "Hai người cùng chăm chỉ, cùng có thu nhập. Điều khác nhau là một người dừng thì dòng nước dừng, người kia đã xây được thứ có thể chảy tiếp.",
    body: [
      { t: "h", text: "Câu chuyện hai người mang nước" },
      { t: "p", text: "Hãy hình dung một ngôi làng cần nước sạch. Người thứ nhất nhận việc xách nước mỗi ngày: càng nhiều chuyến, càng nhiều tiền. Người thứ hai dành một phần thời gian mỗi ngày để đào và lắp đường ống từ nguồn nước về làng." },
      { t: "p", text: "Những tháng đầu, người xách nước có thu nhập tốt hơn. Nhưng khi người đó mệt, ốm hoặc muốn nghỉ, thu nhập dừng theo. Còn đường ống, khi đã hoàn thành, nước tiếp tục chảy." },
      { t: "fig", motif: "pipe", caption: "Xây đường ống: giá trị đi qua hệ thống và được nhân bản thành nhiều dòng tiền." },
      { t: "h", text: "Hai công thức khác nhau" },
      { t: "list", items: ["Xách nước: Làm việc → Tạo thu nhập → Tiếp tục làm việc.", "Xây đường ống: Tạo giá trị → Xây hệ thống → Nhân bản → Duy trì và phát triển dòng tiền."] },
      { t: "p", text: "Đường ống trong đời thực là phương pháp, quy trình, con người và cơ chế vận hành. Khi hệ thống phát triển, kết quả không còn chỉ phụ thuộc vào công sức của một cá nhân." },
      { t: "q", text: "Đừng chỉ hỏi mình có thể làm được bao nhiêu. Hãy hỏi mình có thể xây dựng một hệ thống giúp bao nhiêu người cùng làm được." },
      { t: "h", text: "Điều cần hiểu cho đúng" },
      { t: "p", text: "Xây hệ thống không có nghĩa là không cần làm việc, càng không có nghĩa là không có rủi ro. Người xây đường ống thường phải làm nhiều hơn ở giai đoạn đầu. Giá trị của hệ thống nằm ở khả năng giảm dần sự phụ thuộc vào một cá nhân thông qua chuẩn hóa, quản trị và chuyển giao." },
      { t: "p", text: "Câu hỏi dành cho bạn: trong công việc hiện tại, phần nào là xách nước, và phần nào có thể bắt đầu trở thành đường ống?" },
    ],
  },
  {
    id: "von-con-nguoi",
    type: "Bài viết",
    motif: "tree",
    title: "Vốn tài chính và vốn con người",
    lede: "Khi nghĩ đến đầu tư, phần lớn chúng ta chỉ đếm số tiền mình có. Có một nguồn vốn khác ít được tính đến nhưng có khả năng mở rộng lớn hơn.",
    body: [
      { t: "h", text: "Hai loại vốn" },
      { t: "list", items: ["Vốn tài chính: nguồn lực tiền bạc dùng để đầu tư, kinh doanh và phát triển tài sản.", "Vốn con người: kiến thức, kỹ năng, uy tín, mối quan hệ và khả năng tổ chức những người cùng tạo giá trị."] },
      { t: "fig", motif: "tree", caption: "Vốn tài chính bị giới hạn bởi khả năng cá nhân; vốn con người mở rộng qua chuyển giao và nhân bản." },
      { t: "h", text: "Vì sao vốn con người mở rộng được" },
      { t: "p", text: "Vốn tài chính thường bị giới hạn bởi khả năng của từng cá nhân. Vốn con người thì khác: kiến thức chia sẻ ra không mất đi, kỹ năng được chuyển giao sẽ nhân lên, và mỗi người được giúp đỡ có thể giúp người tiếp theo." },
      { t: "q", text: "Không chỉ hỏi mình đang có bao nhiêu tiền, mà hỏi mình có thể tạo ra giá trị cho bao nhiêu người và cùng họ xây dựng được điều gì." },
      { t: "p", text: "Đây là cách nhìn lại sự nghiệp: đầu tư vào năng lực, uy tín và các mối quan hệ cũng là đầu tư, và thường là khoản đầu tư bền nhất." },
    ],
  },
  {
    id: "nhan-ban",
    type: "Video",
    motif: "chain",
    title: "Vì sao hệ thống có thể nhân bản?",
    lede: "Một người giỏi tạo ra kết quả. Một phương pháp rõ ràng giúp nhiều người cùng tạo ra kết quả. Đó là điều kiện để nhân bản.",
    body: [
      { t: "video" },
      { t: "h", text: "Tóm tắt nội dung video" },
      { t: "p", text: "Hệ thống chỉ có khả năng mở rộng khi phương pháp đủ rõ ràng để nhiều người có thể học và thực hành. Nếu kết quả phụ thuộc vào tài năng riêng của một người, đó là thành tích cá nhân, chưa phải hệ thống." },
      { t: "list", items: ["Chuẩn hóa: biến kinh nghiệm thành quy trình viết ra được.", "Đào tạo: giúp người mới làm đúng ngay từ đầu.", "Chuyển giao: người đã làm được trở thành người hướng dẫn."] },
      { t: "p", text: "Nhân bản không phải là sao chép con người, mà là sao chép phương pháp, để mỗi người vẫn phát triển theo năng lực của mình." },
    ],
  },
  {
    id: "cong-thuc",
    type: "Bài viết",
    motif: "chain",
    title: "Công thức thành công và vai trò của người dẫn đường",
    lede: "Người mới không cần xuất sắc ngay từ đầu. Họ cần một phương pháp rõ ràng, một môi trường học hỏi và những người đồng hành.",
    body: [
      { t: "h", text: "Năm bước có thể chuyển giao" },
      { t: "list", items: ["Hiểu đúng", "Làm đúng", "Có kết quả", "Chia sẻ", "Hướng dẫn người tiếp theo"] },
      { t: "p", text: "Mỗi bước là điều kiện cho bước sau. Hiểu sai thì làm sai; làm đúng mà không có kết quả thì cần xem lại phương pháp; có kết quả mà không chia sẻ thì hệ thống dừng ở một người." },
      { t: "h", text: "Vai trò của người dẫn đường" },
      { t: "p", text: "Người dẫn đường không làm thay. Mục tiêu là giúp người học từng bước trưởng thành, làm chủ công việc và có khả năng hỗ trợ người tiếp theo, chứ không tạo ra những người mãi phụ thuộc vào mình." },
      { t: "q", text: "Điểm quan trọng không phải ai cũng phải trở thành người xuất sắc ngay từ đầu." },
    ],
  },
  {
    id: "cung-nhau",
    type: "Video",
    motif: "loop",
    title: "Thành công cùng nhau",
    lede: "Một hệ thống bền vững không thể chỉ dựa trên mong muốn làm giàu của một cá nhân.",
    body: [
      { t: "video" },
      { t: "h", text: "Tóm tắt nội dung video" },
      { t: "p", text: "Khi mỗi người hiểu rằng sự trưởng thành và thành công của người khác cũng góp phần tạo nên sức mạnh chung, họ có động lực chia sẻ, hỗ trợ và chuyển giao kinh nghiệm." },
      { t: "fig", motif: "loop", caption: "Mình làm được → Giúp người khác làm được → Họ tiếp tục giúp người khác." },
      { t: "p", text: "Đây là nền tảng để hình thành một cộng đồng có khả năng phát triển lâu dài: trách nhiệm, kỷ luật, biết hợp tác, trân trọng và giúp đỡ nhau." },
    ],
  },
  {
    id: "toan-dien",
    type: "Bài viết",
    motif: "ring",
    title: "Tư duy dòng tiền và cuộc sống giàu có toàn diện",
    lede: "Có nhiều tiền nhưng thiếu sức khỏe, thiếu những mối quan hệ gắn kết hay sự bình an thì chưa phải giàu có.",
    body: [
      { t: "h", text: "Bốn phương diện" },
      { t: "list", items: ["Tài chính: tự chủ, nhiều nguồn thu, giảm phụ thuộc vào một nguồn duy nhất.", "Sức khỏe: nền tảng để tận hưởng thành quả và đồng hành cùng gia đình.", "Mối quan hệ: tin tưởng, yêu thương, tôn trọng và hỗ trợ lẫn nhau.", "Nội tâm: biết ơn, sống có mục tiêu, bình an và làm chủ bản thân."] },
      { t: "p", text: "Tư duy dòng tiền là điểm khởi đầu, vì tài chính ổn định cho ta thời gian và lựa chọn. Nhưng đích đến là sự phát triển hài hòa cả bốn phương diện." },
      { t: "q", text: "Thành công không chỉ là liên tục theo đuổi những mục tiêu lớn hơn, mà còn là khả năng cảm nhận hạnh phúc và ý nghĩa trong cuộc sống hiện tại." },
    ],
  },
  {
    id: "inside-out",
    type: "Tài liệu",
    motif: "chain",
    title: "Inside–Out: trưởng thành từ bên trong",
    lede: "Sơ đồ một trang về chuỗi thay đổi: tư duy, niềm tin, thái độ, hành động, năng lực và kết quả.",
    body: [
      { t: "h", text: "Chuỗi thay đổi" },
      { t: "list", items: ["Tư duy", "Niềm tin", "Thái độ", "Hành động", "Năng lực", "Kết quả"] },
      { t: "p", text: "Kết quả là phần nhìn thấy được, nhưng nó đến sau cùng. Muốn kết quả khác, hãy bắt đầu từ cách nghĩ." },
      { t: "p", text: "Tài liệu PDF đầy đủ sẽ được cập nhật trong thư viện." },
    ],
  },
  {
    id: "ba-nen-tang",
    type: "Tài liệu",
    motif: "pipe",
    title: "Sơ đồ Tư duy – Hệ thống – Con người",
    lede: "Một trang tóm tắt ba nền tảng kiến tạo dòng tiền và chuỗi phát triển từ tư duy đúng đến phát triển bền vững.",
    body: [
      { t: "h", text: "Ba nền tảng" },
      { t: "list", items: ["Tư duy: nhìn đúng bản chất của tiền bạc, kinh doanh và sự phát triển dài hạn.", "Hệ thống: chuyển tư duy thành phương pháp, quy trình và năng lực vận hành.", "Con người: kết nối, hợp tác, đào tạo và giúp nhiều người cùng tạo ra giá trị."] },
      { t: "h", text: "Chuỗi phát triển" },
      { t: "p", text: "Tư duy đúng → Phương pháp đúng → Hệ thống → Nhân bản → Phát triển bền vững." },
      { t: "p", text: "Tài liệu PDF đầy đủ sẽ được cập nhật trong thư viện." },
    ],
  },
  {
    id: "khong-hua-hen",
    type: "Bài viết",
    motif: "bucket",
    title: "Vì sao ở đây không có lời hứa thu nhập",
    lede: "Website này chia sẻ nguyên lý và kinh nghiệm, không bán giấc mơ làm giàu nhanh. Đó là lựa chọn có chủ đích.",
    body: [
      { t: "h", text: "Kết quả không chuyển giao được, phương pháp thì có" },
      { t: "p", text: "Kết quả của một người phụ thuộc vào thời điểm, năng lực, mức độ cam kết và cả rủi ro thị trường. Vì vậy, trình bày kết quả đầu tư hay thu nhập kinh doanh như một cam kết cho người mới là không trung thực." },
      { t: "p", text: "Điều có thể chuyển giao là cách hiểu đúng, cách làm đúng và môi trường để mỗi người tự phát triển năng lực." },
      { t: "q", text: "Hiểu đúng → Làm đúng → Có kết quả → Chia sẻ → Hướng dẫn người tiếp theo." },
      { t: "h", text: "Rủi ro là có thật" },
      { t: "p", text: "Đầu tư tài chính luôn có rủi ro, kể cả khả năng mất vốn. Xây dựng hệ thống cũng cần thời gian, công sức và kỷ luật. Biết trước điều này là bước đầu tiên của tư duy dòng tiền." },
    ],
  },
];

export function getPost(id: string): Post | undefined {
  return POSTS.find((p) => p.id === id);
}
