
import { NativeModules } from 'react-native';
const InstallApk = NativeModules.InstallApk;

export default {
    install: InstallApk.install
}
