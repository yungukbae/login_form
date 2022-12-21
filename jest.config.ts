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
   * 캐시된 종속성 정보를 저장하는 디렉토리를 사용자 지정할 수 있는 옵션
   */
  cacheDirectory: "./tmp",

  /**
   * clearMocks [boolean]
   * Default:false
   * 모든 테스트 전에 모의 호출, 인스턴스, 컨텍스트, 결과를 자동으로 지울 수 있는 옵션
   */
  clearMocks: false,

  /**
   * collectCoverage [boolean]
   * Default:false
   * 테스트를 실행하는 동안 커버리지 정보를 수집하는지에 대한 옵션
   */
  collectCoverage: false,

  /**
   * collectCoverageFrom[array]
   * Default: undefined
   * 커버리지 정보를 수집해야 하는 파일 세트를 나타내는 glob 패턴 의 배열입니다 . 파일이 지정된 glob 패턴과 일치하는 경우 이 파일에 대한 테스트가 없고 테스트 제품군에 필요하지 않은 경우에도 해당 파일에 대한 커버리지 정보가 수집하는 옵션
   * ※ collectCoverage 가 true거나 CLI에 Jest --coverage를 호출해야 가능!
   */
  collectCoverageFrom: ["**/*.[jt]s?(x)", "!**/*.stories.[jt]s?(x)"],

  /**
   * coverageDirectory [string]
   * Default:undefined
   * Jest가 해당 커버리지를 출력해야하는 디렉토리를 설정하는 옵션
   */
  coverageDirectory: undefined,

  /**
   * coveragePathIgnorePatterns [array<string>]
   * Default: ["/node_modules/"]
   * 커버리지 수집을 건너뛰는 데에 사용하는 정규 표현식 패턴의 배열을 설정하는 옵션
   */
  coveragePathIgnorePatterns: ["/node_modules/"],

  /**
   * coverageProvider [string]
   * 커버리지를 위한 코드를 계측하는데에 사용하는 공급자를 설정하는 옵션
   */
  //  coverageProvider (type: string, choose: babel(default) or v8)

  /**
   * coverageReporters [array<string | [string, options]>]
   * Default: ["clover", "json", "lcov", "text"]
   * Jest에서 커버리지의 기록을 작성하는 확장자 명을 설정하는 옵션
   */
  coverageReporters: ["lcov", "text"],

  /**
   * coverageThreshold [object]
   * Default: undefined
   * 커버리지 결과를 위한 최소 임계값 적용을 구성하는 객체를 설정하는 옵션
   * 이 명령어를 CI(Continuos Integration)나 CD(Continuos Delivery)를 통해 실행해준다면 커버리지 기준에 미달하는 코드가 코드 저장소에 유입되는 것을 방지할 수 있을 것입니다.
   */
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

  /**
   * dependencyExtractor [string]
   * Default: undefined
   * 사용자 지정 종속성 추출기이고, 이 추출 함수는 코드에서 종속성과 이터러블을 반환해야한다.
   * 추출 기능이 있는 객체를 내보내는 노드 모듈이여야 하고, 그 모듈은 로직이 변경되었고 이에 의존하는 캐시된 아티팩트가 폐기되어야 하는지를 결정하기 위해 캐시 키를 생성하는 getCacheKey 함수를 포함할 수도 있다.
   */
  dependencyExtractor: undefined,

  /**
   * displayName [string, object]
   * Default: undefined
   * 
   */
  displayName: { name: "TEST", color: "blue" },

  /**
   * errorOnDeprecated [boolean]
   * Default: false
   * 더이상 사용하지 않는 API를 호출하면 오류 메세지를 보내는 옵션
   */
   errorOnDeprecated:false,

   /**
    * extensionsToTreatAsEsm [array<string>]
    * Default: []
    * Jest는 가장 가까운 package.json 의 type 필드 가 ECMAScript 모듈 로 module 로 설정된 .mjs 및 .js 파일을 실행 합니다. 기본 ESM으로 실행해야하는 다른 파일이있는 경우 여기에서 파일 확장자를 지정해야합니다.
    */
    extensionsToTreatAsEsm:[],

    
}

export default config;
