/**
 * 파일명: public/categories.js
 * 목적: 화면에 표시할 대주제와 소주제 관리
 */

window.CIS_CATEGORIES = [
  {
    id: "intro",
    name: "누구에게 전달하시나요?",
    children: [
      { id: "intro-new", name: "순수신인" },
      { id: "intro-career", name: "경력" },
      { id: "intro-sidejob", name: "N잡러" },
    ],
  },
  {
    id: "understand",
    name: "인카를 어떻게 소개할까요?",
    children: [
      { id: "understand-fa-ga", name: "FA 및 GA 이해" },
      { id: "understand-history", name: "연혁" },
      { id: "understand-company", name: "회사 소개" },
    ],
  },
  {
    id: "strength",
    name: "어떤 경쟁력을 강조할까요?",
    children: [
      { id: "strength-scale", name: "규모" },
      { id: "strength-trust", name: "대외 신뢰" },
      { id: "strength-services", name: "자회사 서비스" },
    ],
  },
  {
    id: "support",
    name: "어떤 지원을 소개할까요?",
    children: [
      { id: "support-training", name: "교육·정착" },
      { id: "support-db", name: "DB 지원" },
      { id: "support-system", name: "영업관리 시스템" },
      { id: "support-digital", name: "디지털 지원" },
      { id: "support-promotion", name: "프로모션" },
    ],
  },
  {
    id: "outro",
    name: "어떤 내용을 더할까요?",
    children: [
      { id: "outro-message", name: "핵심 메시지" },
      { id: "outro-manager", name: "사업부장 소개" },
      { id: "outro-fa", name: "우수 FA 사례" },
    ],
  },
];