import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';

// vite.config.js

// https://cn.vitejs.dev/config/#config-intellisense
export default defineConfig(({ mode }) => {

    // 根据当前工作目录中的 `mode` 加载 .env 文件
    // 设置第三个参数,表示拦截的环境变量的prefix。
    const env = loadEnv(mode, process.cwd(), ['APP_','VITE_','VUE_']);

    return {
        'plugins': [
            vue()
        ],
        //解决vite use --host to expose
        'server': {
            'host': env.VITE_APP_HOST,
            'port': env.VITE_APP_PORT,
            'open': true
        },
        'resolve': {
            'alias':{
                '@': '/src'
            },
            'extensions': ['.js', '.json', '.vue'],
            'css': {
                'preprocessorOptions': {
                    'scss': {
                        'additionalData': '@import "@/global.scss";'
                    }
                }
            },
            'jsx': 'preserve'
        },
        // vite 配置
        'define': {
            '__APP_ENV__': env
        }
    };
});
