import { MainInput } from "stayedcss/client";

export const postData = async (input: MainInput) => {
  try {
    // 서버가 실행 중인지 확인 (임시 로직)
    if (typeof window === "undefined") {
      console.warn("Server is not available during SSR or initial render.");
      return; // 서버가 없을 경우 요청 건너뜀
    }

    const response = await fetch("/api/client-style", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ input }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    console.log("Response received:", await response.json());
  } catch (error) {
    console.error("Error in postData:", error); // 에러를 콘솔에 출력
    throw error; // 에러를 호출한 쪽에서 처리하도록 다시 throw
  }
};
