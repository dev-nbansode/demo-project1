// import * as Sentry from '@sentry/react-native';
// import codePush, {CodePushOptions} from 'react-native-code-push';
// import Config from 'react-native-config';

// const AppWrapper = (component: any) => {
//   let codePushOptions: CodePushOptions = {
//     checkFrequency: codePush.CheckFrequency.MANUAL,
//   };
//   const routingInstrumentation = new Sentry.ReactNavigationInstrumentation();
//   Sentry.init({
//     enabled: !__DEV__,
//     dsn: Config.SENTRY_DNS,
//     environment: Config.ENV,
//     integrations: [
//       new Sentry.ReactNativeTracing({
//         // Pass instrumentation to be used as `routingInstrumentation`
//         enableUserInteractionTracing: true,
//         routingInstrumentation,
//       }),
//     ],
//   });

//   return codePush(codePushOptions)(Sentry.wrap(component));
// };

// export default AppWrapper;
