module.exports = {
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
  },
  //커버리지 보고 형식 설정
  coverageReporters: ["lcov", "text"],
};
