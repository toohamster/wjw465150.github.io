d = new dTree("d");
<!--
d.add("0","-1","WJW Blog","");
d.add("1","0","笔记","");
d.add("2","0","开发","");
d.add("3","0","算法","");
d.add("4","0","杂谈","");
d.add("5","0","Groovy专辑","");
d.add("6","0","安装指南","");
d.add("7","0","参考资料","");
d.add("8","1","停车入位","my_data/笔记/停车入位.html");
d.add("9","1","电脑键盘上你所不知道的秘密","my_data/笔记/电脑键盘上你所不知道的秘密.html");
d.add("10","1","Linux截图工具","my_data/笔记/Linux截图工具.md.html");
d.add("11","1","常用的MarkDown语法","my_data/笔记/常用的MarkDown语法.html");
d.add("12","2","Java_GC日志","my_data/开发/Java_GC日志.html");
d.add("13","2","Java语言学校的危险性（译文）","my_data/开发/Java语言学校的危险性（译文）.md.html");
d.add("14","2","为什么Lisp语言如此先进？","my_data/开发/为什么Lisp语言如此先进？.md.html");
d.add("15","2","URL的井号","my_data/开发/URL的井号.html");
d.add("16","2","JavaScript","");
d.add("17","3","GPG入门教程","my_data/算法/GPG入门教程.md.html");
d.add("18","4","程序员精神崩溃怎么办？九大建议巧应对","my_data/杂谈/程序员精神崩溃怎么办？九大建议巧应对.md.html");
d.add("19","4","我为什么喜欢编程","my_data/杂谈/我为什么喜欢编程.md.html");
d.add("20","4","优秀的程序员如何思考、学习新技术的原则和方式","my_data/杂谈/优秀的程序员如何思考、学习新技术的原则和方式.htm");
d.add("21","4","为什么好多公司要费劲_DIY_私有云，而不是愉快地采用公有云？.htm","my_data/杂谈/为什么好多公司要费劲_DIY_私有云，而不是愉快地采用公有云？.htm");
d.add("22","4","函数编程之道","my_data/杂谈/函数编程之道.md.html");
d.add("23","4","函数式编程另类指南","my_data/杂谈/函数式编程另类指南.htm");
d.add("24","5","Groovy操纵集合秘籍","my_data/Groovy专辑/Groovy操纵集合秘籍.html");
d.add("25","5","实战 Groovy: 美妙的操作符","my_data/Groovy专辑/实战_Groovy__美妙的操作符.htm");
d.add("26","5","groovy风格的动态面向对象","my_data/Groovy专辑/groovy风格的动态面向对象.md.html");
d.add("27","5","Servlet","");
d.add("28","5","Sql","");
d.add("29","5","Goodness(精华)","");
d.add("30","6","Docker","");
d.add("31","6","Hadoop","");
d.add("32","6","HBase","");
d.add("33","6","Java","");
d.add("34","6","Linux","");
d.add("35","6","Memcached","");
d.add("36","6","Redis","");
d.add("37","6","Tomcat","");
d.add("38","6","Galera_Cluster_For_MySQL","");
d.add("39","7","Java资料","../java/index.html","","view_java");
d.add("40","7","Redis指令大全","../redis/index.html","","view_redis");
d.add("41","7","Git中文指南","../gitpro/index.html","","view_git");
d.add("42","7","Hadoop资料","../Hadoop/index.html","","view_Hadoop");
d.add("43","16","Zip 压缩、解压技术在 HTML5 浏览器中的应用","my_data/开发/JavaScript/Zip 压缩、解压技术在 HTML5 浏览器中的应用.htm");
d.add("44","16","两种方法判断是否为移动端访问，跳转到对应wap页面.md.html","my_data/开发/JavaScript/两种方法判断是否为移动端访问，跳转到对应wap页面.md.html");
d.add("45","27","获取Spring的WebApplicationContext","my_data/Groovy专辑/Servlet/获取Spring的WebApplicationContext.htm");
d.add("46","27","用 Groovlet 和 GSP 进行动态服务器端编程","my_data/Groovy专辑/Servlet/用 Groovlet 和 GSP 进行动态服务器端编程.htm");
d.add("47","28","Groovy_Sql_知识点整理","my_data/Groovy专辑/Sql/Groovy_Sql_知识点整理.md.html");
d.add("48","28","Notes about Groovy's DataSet","my_data/Groovy专辑/Sql/Notes_about_Groovy's_DataSet.htm");
d.add("49","28","Use Sql under transaction","my_data/Groovy专辑/Sql/Use Sql under transaction.htm");
d.add("50","28","Batch Sql","my_data/Groovy专辑/Sql/Batch_Sql.htm");
d.add("51","29","Add Methods Dynamically to Classes with ExpandoMetaClass","my_data/Groovy专辑/Goodness/Add Methods Dynamically to Classes with ExpandoMetaClass.htm");
d.add("52","29","Annotion-Create a Singleton Class","my_data/Groovy专辑/Goodness/Annotion-Create a Singleton Class.htm");
d.add("53","29","Annotion-Easy toString Creation for Our Classes","my_data/Groovy专辑/Goodness/Annotion-Easy toString Creation for Our Classes.htm");
d.add("54","29","Annotion-Generate equals and hashcode Methods with EqualsAndHashCode Annotation","my_data/Groovy专辑/Goodness/Annotion-Generate equals and hashcode Methods with EqualsAndHashCode Annotation.htm");
d.add("55","29","Annotion-Making a Class Immutable","my_data/Groovy专辑/Goodness/Annotion-Making a Class Immutable.htm");
d.add("56","29","Annotion-Tuple Constructor Creation","my_data/Groovy专辑/Goodness/Annotion-Tuple Constructor Creation.htm");
d.add("57","29","Annotion-Use Builder AST Transformation for Fluent API","my_data/Groovy专辑/Goodness/Annotion-Use Builder AST Transformation for Fluent API.htm");
d.add("58","29","Base-Padding Strings","my_data/Groovy专辑/Goodness/Base-Padding Strings.htm");
d.add("59","29","Base-the Switch Statement","my_data/Groovy专辑/Goodness/Base-the Switch Statement.htm");
d.add("60","29","Base-the With Method","my_data/Groovy专辑/Goodness/Base-the With Method.htm");
d.add("61","29","Base-Transform String into Enum","my_data/Groovy专辑/Goodness/Base-Transform String into Enum.htm");
d.add("62","29","Base-Working with Arrays","my_data/Groovy专辑/Goodness/Base-Working with Arrays.htm");
d.add("63","29","Builder-Create Simple Builders with Closures","my_data/Groovy专辑/Goodness/Builder-Create Simple Builders with Closures.htm");
d.add("64","29","Builder-Solve Naming Conflicts with Builders","my_data/Groovy专辑/Goodness/Builder-Solve Naming Conflicts with Builders.htm");
d.add("65","29","Closure as a Class","my_data/Groovy专辑/Goodness/Closure as a Class.htm");
d.add("66","29","Collection-Determine Min and Max Entries in a Map","my_data/Groovy专辑/Goodness/Collection-Determine Min and Max Entries in a Map.htm");
d.add("67","29","Collection-Drop or Take Elements with Condition","my_data/Groovy专辑/Goodness/Collection-Drop or Take Elements with Condition.htm");
d.add("68","29","Collection-Finding Data in Collections","my_data/Groovy专辑/Goodness/Collection-Finding Data in Collections.htm");
d.add("69","29","Collection-Getting the Indices of a Collection","my_data/Groovy专辑/Goodness/Collection-Getting the Indices of a Collection.htm");
d.add("70","29","Collection-GroupBy with Multiple Closures","my_data/Groovy专辑/Goodness/Collection-GroupBy with Multiple Closures.htm");
d.add("71","29","Collection-Observable Map and List","my_data/Groovy专辑/Goodness/Collection-Observable Map and List.htm");
d.add("72","29","Collection-Pop And Push Items In a List","my_data/Groovy专辑/Goodness/Collection-Pop And Push Items In a List.htm");
d.add("73","29","Collection-Revisited Getting the Sum of Items in a Collection","my_data/Groovy专辑/Goodness/Collection-Revisited Getting the Sum of Items in a Collection.htm");
d.add("74","29","Collection-Take and Drop Items from a List","my_data/Groovy专辑/Goodness/Collection-Take and Drop Items from a List.htm");
d.add("75","29","Collection-Using Lists and Maps As Constructors","my_data/Groovy专辑/Goodness/Collection-Using Lists and Maps As Constructors.htm");
d.add("76","29","conf-Check Configuration Property Is Set In ConfigObject","my_data/Groovy专辑/Goodness/conf-Check Configuration Property Is Set In ConfigObject.htm");
d.add("77","29","conf-Using ConfigSlurper with Configuration Scripts","my_data/Groovy专辑/Goodness/conf-Using ConfigSlurper with Configuration Scripts.htm");
d.add("78","29","Create Indexed Property Getter and Setter Methods","my_data/Groovy专辑/Goodness/Create Indexed Property Getter and Setter Methods.htm");
d.add("79","29","Date-Convert Date to java.sql.Timestamp","my_data/Groovy专辑/Goodness/Date-Convert Date to java.sql.Timestamp.htm");
d.add("80","29","Date-Create New Date or Calendar from Existing and Set Property Value","my_data/Groovy专辑/Goodness/Date-Create New Date or Calendar from Existing and Set Property Value.htm");
d.add("81","29","JSON-Build JSON with JsonBuilder and Pretty Print JSON Text","my_data/Groovy专辑/Goodness/JSON-Build JSON with JsonBuilder and Pretty Print JSON Text.htm");
d.add("82","29","JSON-Parse JSON with JsonSlurper","my_data/Groovy专辑/Goodness/JSON-Parse JSON with JsonSlurper.htm");
d.add("83","29","JSON-Streaming JSON with StreamingJsonBuilder","my_data/Groovy专辑/Goodness/JSON-Streaming JSON with StreamingJsonBuilder.htm");
d.add("84","29","Parsing Commandline Arguments with CliBuilder","my_data/Groovy专辑/Goodness/Parsing Commandline Arguments with CliBuilder.htm");
d.add("85","29","Regular-Matchers for Regular Expressions","my_data/Groovy专辑/Goodness/Regular-Matchers for Regular Expressions.htm");
d.add("86","29","Regular-Using Regular Expression Pattern Class","my_data/Groovy专辑/Goodness/Regular-Using Regular Expression Pattern Class.htm");
d.add("87","29","Transforming Reader Input to Writer Output","my_data/Groovy专辑/Goodness/Transforming Reader Input to Writer Output.htm");
d.add("88","29","Use Connection Parameters to Get Text From URL","my_data/Groovy专辑/Goodness/Use Connection Parameters to Get Text From URL.htm");
d.add("89","29","Using Groovy for Git Hooks","my_data/Groovy专辑/Goodness/Using Groovy for Git Hooks.htm");
d.add("90","29","XML-Change XML Structure","my_data/Groovy专辑/Goodness/XML-Change XML Structure.htm");
d.add("91","29","XML-Pretty Print XML","my_data/Groovy专辑/Goodness/XML-Pretty Print XML.htm");
d.add("92","30","(WJW)Docker安装笔记","my_data/安装指南/Docker/(WJW)Docker安装笔记.md.html");
d.add("93","30","(WJW)Docker私有Registry在CentOS6_X下安装指南","my_data/安装指南/Docker/(WJW)Docker私有Registry在CentOS6_X下安装指南.md.html");
d.add("94","31","(WJW)完全分布式Hadoop集群安装指南","my_data/安装指南/Hadoop/(WJW)完全分布式Hadoop集群安装指南.md.html");
d.add("95","32","(WJW)完全分布式HBase集群安装指南","my_data/安装指南/HBase/(WJW)完全分布式HBase集群安装指南.md.html");
d.add("96","33","JMeter技巧","my_data/安装指南/Java/JMeter技巧.md.html");
d.add("97","34","CentOS 6.2 双网卡绑定单个IP地址","my_data/安装指南/Linux/!!!CentOS 6.2 双网卡绑定单个IP地址.md.html");
d.add("98","35","(WJW)安装Memcached","my_data/安装指南/Memcached/(WJW)安装Memcached.md.html");
d.add("99","35","(WJW)Memcached高可用安装笔记","my_data/安装指南/Memcached/(WJW)Memcached高可用安装笔记.md.html");
d.add("100","35","定时检测Memcached进程是否存在,若不存在自动启动它","my_data/安装指南/Memcached/定时检测Memcached进程是否存在,若不存在自动启动它.md.html");
d.add("101","36","(WJW)Redis高可用安装笔记","my_data/安装指南/Redis/(WJW)Redis高可用安装笔记.md.html");
d.add("102","37","(WJW)Resin_to_Tomcat转换手册(JSP静态映射版)","my_data/安装指南/Tomcat/(WJW)Resin_to_Tomcat转换手册(JSP静态映射版).md.html");
d.add("103","37","(WJW)Resin_to_Tomcat转换手册(启动时编译版)","my_data/安装指南/Tomcat/(WJW)Resin_to_Tomcat转换手册(启动时编译版).md.html");
d.add("104","37","Tomcat/(WJW)tomcat7安装文档","my_data/安装指南/Tomcat/(WJW)tomcat7安装文档.md.html");
d.add("105","38","Galera_Cluster_For_MySQL集群安装","my_data/安装指南/Galera_Cluster_For_MySQL/Galera_Cluster_For_MySQL集群安装.md.html");
document.write(d);
//-->
