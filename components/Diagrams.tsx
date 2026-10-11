import type { MotifName } from "@/lib/posts";

const G = "#C9A24A";
const GH = "#E6C77F";
const N2 = "#2B4166";
const INK = "#0F1F3A";
const INK2 = "#4A5570";
const ON = "#F6F2E8";
const ON2 = "#B3BDD0";
const NC = "#16294A";

type DiagramProps = { mini?: boolean };
const cls = (mini?: boolean) => `dg${mini ? " mini" : ""}`;

/** Người xách nước: dòng tiền dừng khi ngừng làm việc. */
export function Bucket({ mini }: DiagramProps) {
  return (
    <svg className={cls(mini)} viewBox="0 0 340 156" role="img" aria-label="Sơ đồ xách nước: làm việc, tạo thu nhập rồi quay lại làm việc">
      <line x1="44" y1="66" x2="290" y2="66" stroke={N2} strokeOpacity=".55" strokeWidth="2" strokeDasharray="10 9" />
      {[0, 1, 2].map((i) => (
        <g key={i} transform="translate(64 50)">
          <g className="bucket" style={{ animationDelay: `${-i * 1.8}s` }}>
            <path d="M-9 -7h18l-3 15h-12z" fill="none" stroke={N2} strokeWidth="1.6" strokeLinejoin="round" />
            <path d="M-7 -7q7-9 14 0" fill="none" stroke={N2} strokeWidth="1.4" />
          </g>
        </g>
      ))}
      <circle cx="34" cy="66" r="8" fill={N2} />
      <circle cx="300" cy="66" r="8" fill={N2} />
      <path d="M300 84C300 140 34 140 34 84" fill="none" stroke={N2} strokeOpacity=".55" strokeWidth="1.6" strokeDasharray="5 6" />
      <path d="M28 92l6-8 6 8" fill="none" stroke={N2} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <text x="34" y="28" textAnchor="middle" fill={INK}>Làm việc</text>
      <text x="300" y="28" textAnchor="middle" fill={INK}>Thu nhập</text>
      <text x="167" y="150" textAnchor="middle" fill={INK2}>Ngừng làm việc, dòng tiền dừng theo</text>
    </svg>
  );
}

/** Người xây đường ống: giá trị → hệ thống → nhân bản thành nhiều dòng tiền. */
export function Pipe({ mini }: DiagramProps) {
  const paths = ["M130 76C170 76 172 30 214 30H310", "M130 76H310", "M130 76C170 76 172 122 214 122H310"];
  return (
    <svg className={cls(mini)} viewBox="0 0 340 156" role="img" aria-label="Sơ đồ xây đường ống: giá trị đi qua hệ thống, nhân bản thành nhiều dòng tiền">
      <line x1="28" y1="76" x2="112" y2="76" stroke={G} strokeWidth="3" />
      <line className="flowline" x1="28" y1="76" x2="112" y2="76" stroke={GH} strokeWidth="3" />
      {paths.map((d) => (
        <g key={d}>
          <path d={d} fill="none" stroke={G} strokeWidth="3" strokeLinecap="round" />
          <path className="flowline" d={d} fill="none" stroke={GH} strokeWidth="3" strokeLinecap="round" />
        </g>
      ))}
      <circle cx="26" cy="76" r="7" fill={G} />
      <circle cx="120" cy="76" r="12" fill={NC} stroke={G} strokeWidth="2.5" />
      <circle cx="120" cy="76" r="4" fill={G} />
      <circle cx="312" cy="30" r="4.5" fill={G} />
      <circle cx="312" cy="76" r="4.5" fill={G} />
      <circle cx="312" cy="122" r="4.5" fill={G} />
      <text x="26" y="106" textAnchor="middle" fill={ON2}>Giá trị</text>
      <text x="120" y="110" textAnchor="middle" fill={ON}>Hệ thống</text>
      <text x="262" y="18" textAnchor="middle" fill={ON2}>Nhân bản</text>
      <text x="312" y="150" textAnchor="end" fill={GH}>Dòng tiền lặp lại</text>
    </svg>
  );
}

function arc(cx: number, cy: number, r: number, a0: number, a1: number) {
  const p = (a: number): [number, number] => {
    const rad = ((a - 90) * Math.PI) / 180;
    return [cx + r * Math.cos(rad), cy + r * Math.sin(rad)];
  };
  const s = p(a0);
  const e = p(a1);
  const large = a1 - a0 > 180 ? 1 : 0;
  return `M${s[0].toFixed(2)} ${s[1].toFixed(2)}A${r} ${r} 0 ${large} 1 ${e[0].toFixed(2)} ${e[1].toFixed(2)}`;
}

/** Bốn trụ cột giàu có toàn diện. */
export function Ring({ mini }: DiagramProps) {
  const items: [string, number][] = [["Tài chính", 0], ["Sức khỏe", 90], ["Mối quan hệ", 180], ["Nội tâm", 270]];
  return (
    <svg className={cls(mini)} viewBox="-70 -10 440 320" role="img" aria-label="Bốn trụ cột giàu có toàn diện: tài chính là điểm khởi đầu, cùng sức khỏe, mối quan hệ và nội tâm">
      <circle cx="150" cy="150" r="124" fill="none" stroke={G} strokeOpacity=".18" />
      <g className="spin">
        <circle cx="150" cy="150" r="124" fill="none" stroke={GH} strokeWidth="2" strokeDasharray="60 720" strokeLinecap="round" />
      </g>
      {items.map(([label, start], i) => {
        const mid = ((start + 45 - 90) * Math.PI) / 180;
        const lx = 150 + 136 * Math.cos(mid);
        const ly = 150 + 136 * Math.sin(mid) + 4;
        const anchor = lx > 150 ? "start" : "end";
        return (
          <g key={label}>
            <path d={arc(150, 150, 100, start + 6, start + 84)} fill="none" stroke={G} strokeOpacity={i === 0 ? 1 : 0.55} strokeWidth={i === 0 ? 14 : 10} strokeLinecap="round" />
            <text x={lx.toFixed(1)} y={ly.toFixed(1)} textAnchor={anchor} fill={i === 0 ? GH : ON} style={{ fontSize: 14, fontWeight: 600 }}>{label}</text>
            {i === 0 && (
              <text x={lx.toFixed(1)} y={(ly + 18).toFixed(1)} textAnchor="start" fill={ON2} style={{ fontSize: 11 }}>Điểm khởi đầu</text>
            )}
          </g>
        );
      })}
      <text x="150" y="146" textAnchor="middle" fill={ON} style={{ fontFamily: "var(--f-display)", fontSize: 24, fontWeight: 600 }}>Giàu có</text>
      <text x="150" y="174" textAnchor="middle" fill={GH} style={{ fontFamily: "var(--f-display)", fontSize: 24, fontStyle: "italic", fontWeight: 500 }}>toàn diện</text>
    </svg>
  );
}

/** Vòng lặp thành công cùng nhau. */
export function Loop({ mini }: DiagramProps) {
  const cx = 160;
  const cy = 128;
  const r = 82;
  const at = (deg: number, rad = r) => {
    const t = (deg * Math.PI) / 180;
    return [cx + rad * Math.cos(t), cy + rad * Math.sin(t)] as const;
  };
  return (
    <svg className={cls(mini)} viewBox="0 0 320 240" role="img" aria-label="Vòng lặp: mình làm được, giúp người khác làm được, họ tiếp tục giúp người khác">
      <circle cx={cx} cy={cy} r={r} fill="none" stroke={G} strokeWidth="2.5" />
      <circle className="flowline" cx={cx} cy={cy} r={r} fill="none" stroke="#B48A2E" strokeWidth="2.5" />
      {[-30, 90, 210].map((a) => {
        const [x, y] = at(a);
        return (
          <path key={a} d="M-5 -6L3 0L-5 6" transform={`translate(${x.toFixed(1)} ${y.toFixed(1)}) rotate(${a + 90})`} fill="none" stroke={INK} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        );
      })}
      {[-90, 30, 150].map((a, i) => {
        const [x, y] = at(a);
        const t = (a * Math.PI) / 180;
        return (
          <g key={a}>
            <circle cx={x.toFixed(1)} cy={y.toFixed(1)} r={i === 0 ? 11 : 9} fill={i === 0 ? INK : "#FFFFFF"} stroke={G} strokeWidth="2.5" />
            {[-1, 0, 1].map((k) => {
              const tt = t + k * 0.16;
              return (
                <circle key={k} cx={(cx + (r + 30) * Math.cos(tt)).toFixed(1)} cy={(cy + (r + 30) * Math.sin(tt)).toFixed(1)} r="2.6" fill={G} fillOpacity=".7" />
              );
            })}
          </g>
        );
      })}
      <text x="160" y="20" textAnchor="middle" fill={INK} style={{ fontWeight: 600 }}>Mình làm được</text>
      <text x="252" y="214" textAnchor="middle" fill={INK}>
        <tspan x="252">Giúp người khác</tspan>
        <tspan x="252" dy="15">làm được</tspan>
      </text>
      <text x="68" y="214" textAnchor="middle" fill={INK}>
        <tspan x="68">Họ tiếp tục</tspan>
        <tspan x="68" dy="15">giúp người khác</tspan>
      </text>
      <text x="160" y="124" textAnchor="middle" fill={INK2}>Thành công</text>
      <text x="160" y="140" textAnchor="middle" fill={INK2}>cùng nhau</text>
    </svg>
  );
}

/** Vốn tài chính (giới hạn) so với vốn con người (nhân bản). */
export function Tree({ mini }: DiagramProps) {
  return (
    <svg className={cls(mini)} viewBox="0 0 340 172" role="img" aria-label="So sánh vốn tài chính giới hạn với vốn con người có thể nhân bản">
      <line x1="70" y1="44" x2="70" y2="118" stroke={N2} strokeWidth="2" />
      <circle cx="70" cy="44" r="9" fill={N2} />
      <circle cx="70" cy="118" r="6" fill={N2} fillOpacity=".55" />
      <circle cx="250" cy="34" r="9" fill={G} />
      {[200, 250, 300].map((x) => (
        <g key={x}>
          <path d={`M250 40C250 58 ${x} 56 ${x} 76`} fill="none" stroke={G} strokeWidth="2" />
          <circle cx={x} cy="80" r="6" fill={G} />
          {[-14, 0, 14].map((d) => (
            <g key={d}>
              <path d={`M${x} 86L${x + d} 116`} stroke={G} strokeOpacity=".7" strokeWidth="1.5" />
              <circle cx={x + d} cy="120" r="3.8" fill={G} fillOpacity=".8" />
            </g>
          ))}
        </g>
      ))}
      <text x="70" y="20" textAnchor="middle" fill={INK} style={{ fontWeight: 600 }}>Vốn tài chính</text>
      <text x="70" y="146" textAnchor="middle" fill={INK2}>
        <tspan x="70">Giới hạn bởi</tspan>
        <tspan x="70" dy="15">khả năng cá nhân</tspan>
      </text>
      <text x="250" y="16" textAnchor="middle" fill={INK} style={{ fontWeight: 600 }}>Vốn con người</text>
      <text x="250" y="146" textAnchor="middle" fill={INK2}>
        <tspan x="250">Mở rộng qua</tspan>
        <tspan x="250" dy="15">chuyển giao, nhân bản</tspan>
      </text>
      <line x1="150" y1="20" x2="150" y2="140" stroke="#E4DCCB" strokeDasharray="3 5" />
    </svg>
  );
}

/** Chuỗi 5 nút — dùng làm họa tiết thẻ bài. */
export function ChainMini() {
  return (
    <svg className="dg mini" viewBox="0 0 340 120" aria-hidden="true">
      <line x1="20" y1="60" x2="320" y2="60" stroke={G} strokeWidth="3" />
      <line className="flowline" x1="20" y1="60" x2="320" y2="60" stroke={GH} strokeWidth="3" />
      {[20, 95, 170, 245, 320].map((x, i) => (
        <circle key={x} cx={x} cy="60" r={i === 4 ? 11 : 8} fill={i === 4 ? G : NC} stroke={G} strokeWidth="2.5" />
      ))}
    </svg>
  );
}

export function Motif({ name, mini }: { name: MotifName; mini?: boolean }) {
  switch (name) {
    case "bucket": return <Bucket mini={mini} />;
    case "pipe": return <Pipe mini={mini} />;
    case "ring": return <Ring mini={mini} />;
    case "loop": return <Loop mini={mini} />;
    case "tree": return <Tree mini={mini} />;
    case "chain": return <ChainMini />;
  }
}
