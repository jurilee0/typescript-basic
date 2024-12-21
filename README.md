## typescript-basic
A repository for archiving practice code

## 기본 개념

### 타입스크립트란?
- 자바스크립트에 타입을 부여한 상위 호환 언어(superset)
- 컴파일 과정을 통해 자바스크립트로 변환

### 등장 배경
- 자바스크립트는 원래 클라이언트 측 언어였으나 Node.js의 등장으로 서버 측에서도 사용됨
- 동적 타입 언어 특성상 컴파일 시 타입 검사와 오류 검출이 어려움

### 타입 시스템
- 개발 환경에서 타입 관련 오류를 사전에 탐지
- 코드 분석 가능
- 런타임이 아닌 개발 환경에서만 활성화
- 성능 향상과는 관계없으며 안정적 개발 환경 제공

### 사용하는 이유
- 자바스크립트를 단순화해 더 읽기 쉽고 디버깅 용이
- 버그 예방 및 생산성 향상

### Type
- 프로퍼티와 함수의 타입을 자동으로 추론
- 자바스크립트 기본 타입을 상속 및 확장

### any
- 알 수 없는 타입을 나타냄(사용 지양)
- 타입스크립트의 정적 타입 지향성과 상충

### union
- 변수나 함수 매개변수에 두 개 이상의 데이터 유형을 허용

### enum
- 값 집합을 명명하여 열거형으로 사용
- 객체와 유사하나 선언 후 변경 불가. 숫자 또는 문자열만 허용

### tuple
- 요소의 순서와 타입을 고정한 배열 `[string, number]`

### void
- 값을 반환하지 않음을 나타냄
- 함수가 값을 반환하지 않을 때 사용
- `any`의 반대 의미

### never
- 발생하지 않을 값을 나타냄
- 주로 함수 리턴 타입으로 사용. 항상 오류를 반환하거나 값을 리턴하지 않음

### void vs never
- `void`는 `null`과 `undefined`를 가질 수 있지만, `never`는 어떠한 값도 가질 수 없음

### type annotation
- 개발자가 타입을 명시적으로 지정
  - JSON 파싱 시 리턴 타입이 일정하지 않아 `any`로 추론될 때
  - 변수를 선언하고 나중에 초기화할 때
  - 변수에 대입되는 값의 타입이 일정하지 않을 때

### type inference
- 타입스크립트가 자동으로 타입을 추론
- 변수 선언과 동시에 초기화하면 타입을 자동 추론

### 설치
```bash
npm install -g typescript
```

### 변환
```bash
tsc main.ts
```

-w 플래그로 watch mode 활성화
```bash
tsc main.ts -w
```

### tsconfig.json 설정
```js
{
  "compilerOptions": {
    "rootDir": "./src",           // 타입스크립트 소스 파일의 기본 디렉토리
    "outDir": "./build/js",       // 컴파일된 자바스크립트 파일이 출력될 디렉토리
    "target": "ES6",              // 컴파일된 자바스크립트의 호환성을 위한 ECMAScript 버전
    "noEmitOnError": false,       // 오류가 있어도 파일을 출력할지 여부 (false일 경우 출력)
    "module": "ESNext",           // ES 모듈 시스템 설정
    "moduleResolution": "Node",  // 모듈 해석 방법 (Node.js 방식 사용)
    "esModuleInterop": true,      // ES 모듈과 CommonJS 모듈 간 상호운용성을 지원
    "lib": ["ESNext", "DOM"],     // 사용 가능한 라이브러리 설정 (최신 ES와 DOM API 포함)
    "strict": true,               // 엄격한 타입 검사를 활성화
    "strictNullChecks": true      // `null`과 `undefined`를 엄격히 검사
  },
  "include": ["./src/**/*.ts"]     // 포함할 파일의 경로 패턴
}

```



### 실습 코드
- https://github.com/jurilee0/typescript-basic/blob/main/02.types/src/main.ts
- https://github.com/jurilee0/typescript-basic/blob/main/03.type-assertion,type-gurad/src/main.ts
- https://github.com/jurilee0/typescript-basic/blob/main/04.type%2Cinterface/src/main.ts
- https://github.com/jurilee0/typescript-basic/blob/main/05.call-signature%2C%20index-signature/src/main.ts
- https://github.com/jurilee0/typescript-basic/blob/main/06.overloading/src/main.ts
- https://github.com/jurilee0/typescript-basic/blob/main/07.access-modifier/src/main.ts
- https://github.com/jurilee0/typescript-basic/blob/main/08.generics/src/main.ts
- https://github.com/jurilee0/typescript-basic/blob/main/09.utilty-types/src/main.ts
- https://github.com/jurilee0/typescript-basic/blob/main/10.implements/src/main.ts
- https://github.com/jurilee0/typescript-basic/blob/main/11.keyof/src/main.ts
- https://github.com/jurilee0/typescript-basic/blob/main/12.mapped-type/src/main.ts

