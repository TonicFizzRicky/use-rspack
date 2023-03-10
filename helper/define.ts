/*
 * @Author: wangzhisen
 * @Date: 2023-03-10 11:29:30
 * @Last Modified by: wangzhisen
 * @Last Modified time: 2023-03-10 11:32:54
 *
 * 协助 cjs模块 生成 rspack 配置
 */

import type { Configuration } from "@rspack/cli";

export const defineConfig = <T extends Configuration>(config: T): T => {
  return config;
};
