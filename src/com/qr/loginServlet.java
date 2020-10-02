package com.qr;

import javax.servlet.*;
import java.io.IOException;

public class loginServlet implements Servlet {
    @Override
    public void init(ServletConfig servletConfig) throws ServletException {
        System.out.println("初始化");
        //初始化
    }

    @Override
    public ServletConfig getServletConfig() {
        System.out.println("获取servlet配置信息");
        return null;
    }

    @Override
    public void service(ServletRequest servletRequest, ServletResponse servletResponse) throws ServletException, IOException {
        servletResponse.setContentType("text/html");    //设置为文本类型
        servletResponse.setCharacterEncoding("utf-8");   //编码
        servletResponse.getWriter().println("服务收到");
        System.out.println("服务");
    }

    @Override
    public String getServletInfo() {
        System.out.println("获取servlet配置信息");
        return null;
    }

    @Override
    public void destroy() {
        System.out.println("销毁");
    }
}
