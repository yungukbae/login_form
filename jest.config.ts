import type { Config } from "jest";

const config: Config = {
  /**
   * automock:[boolean]
   * Default:false
   * 모듈(함수) import시 자동으로 test mock 함수로 변경해준다.
   */
  automock: false,

  /**
   * bail:[number|boolean]
   * Default:0
   * 옵션을 설정하면 설정한 숫자만큼 테스트가 실패할 경우 테스트를 중단한다.
   */
  bail: 0,

  /**
   * cacheDirectory:[string]
   * Default:"/tmp/<path>"
   */
  cacheDirectory: "./tmp",

  //커버리지 수집범위 설정
  collectCoverageFrom: ["**/*.[jt]s?(x)", "!**/*.stories.[jt]s?(x)"],
  //   커버리지 최소 기준 설정(백분율)
  //이 명령어를 CI(Continuos Integration)나 CD(Continuos Delivery)를 통해 실행해준다면 커버리지 기준에 미달하는 코드가 코드 저장소에 유입되는 것을 방지할 수 있을 것입니다.
  coverageThreshold: {
    "./src/": {
      statements: 95,
      branches: 90,
      functions: 95,
      lines: 90,
    },
    global: {
      statements: 95,
      branches: 90,
      functions: 95,
      lines: 90,
    },
  },
  //커버리지 보고 형식 설정
  coverageReporters: ["lcov", "text"],
};

export default config;
