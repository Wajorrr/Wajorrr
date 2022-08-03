<template>
    <div class="container">
        <el-card class="box-card">
            <div class="header">
                <div class="header-left">
                    <div class="header-left-top">
                        <el-descriptions title="王梓健" size="large">
                            <el-descriptions-item label="电话：">19171801130</el-descriptions-item>
                            <el-descriptions-item label="邮箱：">2434007515@qq.com</el-descriptions-item>
                        </el-descriptions>
                    </div>

                    <el-divider class="divider" content-position="left">
                        <h2 class="module_title">个人信息</h2>
                    </el-divider>
                    <div class="header-left-bottom">
                        <div class="personal_information">
                            <el-descriptions label-class-name="description-label" title="">
                                <el-descriptions-item label="性别：">男</el-descriptions-item>
                                <el-descriptions-item label="籍贯：">湖北荆州</el-descriptions-item>
                                <el-descriptions-item label="民族：">汉族</el-descriptions-item>
                                <el-descriptions-item label="出生年月：">2001-11</el-descriptions-item>
                                <el-descriptions-item label="政治面貌：">共青团员</el-descriptions-item>
                                <el-descriptions-item label="联系地址：">北京市海淀区中国地质大学(北京)</el-descriptions-item>
                            </el-descriptions>
                        </div>
                        <!-- <ul>
                    <li>电话</li>
                    <li>邮箱</li>
                    <li>性别</li>
                    <li>籍贯</li>
                    <li>民族</li>
                    <li>出生年月</li>
                    <li>政治面貌</li>
                    <li>联系地址</li>
                </ul> -->
                    </div>
                </div>
                <div class="header-right">
                    <div class="header-right-img">
                        <el-image style="width:100%;height:100%;" src="../../../public/照片1.jpg" fit=fill />
                    </div>
                </div>
            </div>
            <el-divider class="divider" content-position="left">
                <h2 class="module_title">教育背景</h2>
            </el-divider>
            <div class="educational_background">
                <el-descriptions title="" :column="3" style="width:60%">
                    <el-descriptions-item label="2019.9-至今"></el-descriptions-item>
                    <el-descriptions-item label="学校：">中国地质大学(北京)</el-descriptions-item>
                    <el-descriptions-item label="专业：">软件工程</el-descriptions-item>
                </el-descriptions>
                <el-descriptions :column="2" style="width:50%">
                    <el-descriptions-item label="总评成绩：">91.6/100</el-descriptions-item>
                    <el-descriptions-item label="绩点排名：">6/63 (3.77/4.0)</el-descriptions-item>
                </el-descriptions>
                <el-descriptions :column="1" style="width:85%">
                    <el-descriptions-item label="主修核心课程：">
                        离散数学、数据结构、算法设计与分析、数据库原理与应用、计算机网络、操作系统、面向对象分析与设计、企业级java应用开发、企业级.NET应用开发...
                    </el-descriptions-item>
                </el-descriptions>
                <!-- <el-descriptions :column="1" style="width:80%">
                    <el-descriptions-item label="主修核心课程：">
                        高等数学(上)(94.6)、高等数学(下)(94.5)、线性代数(90)、离散数学(97)、数据结构(93.6)、算法设计与分析(93.9)、数据库原理与应用(93.4)、计算机网络、操作系统、企业级java应用开发(优秀)、企业级.NET应用开发(优秀)...
                    </el-descriptions-item>
                </el-descriptions> -->
                <el-descriptions :column="1" style="width:50%">
                    <el-descriptions-item label="英语能力：">已通过四六级考试（CET-4：570，CET-6：480）</el-descriptions-item>
                </el-descriptions>
                <el-descriptions :column="1" style="width:80%">
                    <el-descriptions-item label="校内荣誉：">校三好学生、每学期均获得专业奖学金、其他校级奖项若干
                    </el-descriptions-item>
                </el-descriptions>
                <el-descriptions :column="1" style="width:80%">
                    <el-descriptions-item label="编程语言：">C++、Java、Python
                    </el-descriptions-item>
                </el-descriptions>
            </div>
            <el-divider class="divider" content-position="left">
                <h2 class="module_title">竞赛获奖</h2>
            </el-divider>
            <div class="competition_experience">
                <h3>国家级</h3>
                <ul>
                    <li>
                        <h4>2021美国大学生数学建模竞赛 H奖</h4>
                    </li>
                    <li>
                        <h4>2021中国高校计算机大赛——团体程序设计天梯赛 个人国家二等奖</h4>
                    </li>
                    <li>
                        <h4>2021中国高校计算机大赛——团体程序设计天梯赛 团队国家三等奖</h4>
                    </li>
                    <li>
                        <h4>2021RoboCup机器人世界杯中国赛——足球机器人小型组 国家三等奖</h4>
                    </li>
                    <li>
                        <h4>2021RoboCom机器人开发者大赛全国赛——人工智能编程设计赛 国家三等奖</h4>
                    </li>
                    <li>
                        <h4>2021RoboCom机器人开发者大赛全国赛——iLoboke足球对抗赛 国家三等奖</h4>
                    </li>
                    <li>
                        <h4>第十一届中国软件杯大赛 国家三等奖</h4>
                    </li>
                </ul>
                <h3>省级</h3>
                <ul>
                    <li>
                        <h4>第十二届蓝桥杯大赛软件类C/C++程序设计大学A组 北京市一等奖</h4>
                    </li>
                    <li>
                        <h4>第九届“大唐杯”全国大学生移动通信 5G 技术大赛 北京市三等奖</h4>
                    </li>
                </ul>
            </div>
            <el-divider class="divider" content-position="left">
                <h2 class="module_title">项目经历</h2>
            </el-divider>
            <div class="project_experience">
                <ul>
                    <li>
                        <h4>基于rocos的多级足球机器人系统的开发 大学生创新创业项目 国家级 核心成员</h4>
                        <el-descriptions :column="1" style="width:85%">
                            <el-descriptions-item label="-">在Linux系统上使用QT
                                C++和Lua语言对足球机器人系统进行开发，分层实现视觉信息的收集与建模、对机器人的控制、战术设计以及实现等。主要负责使用C++实现对机器人的控制，并用Lua来实现足球机器人的战术布置。
                            </el-descriptions-item>
                            <el-descriptions-item label="-">通过此项目学习了Linux系统的使用，了解了Lua语言的函数式编程思想，同时也锻炼了查阅文档和工程实践的能力。
                            </el-descriptions-item>
                        </el-descriptions>
                    </li>
                    <li>
                        <h4>高性能分析型连接查询设计与实现 软件杯竞赛项目</h4>
                        <el-descriptions :column="1" style="width:85%">
                            <el-descriptions-item label="-">基于TPC-H基准中的Q17业务逻辑简化而来，探索实现分布式数据库中的高性能分析型连接查询算法。
                            </el-descriptions-item>
                            <el-descriptions-item label="-">
                                通过多进程来模拟分布式数据库，使用了asio库来进行进程间的socket通信，每个进程实例通过多线程来实现相互之间通信、本地计算的并行执行。
                            </el-descriptions-item>
                        </el-descriptions>
                    </li>
                    <li>
                        <h4>基于springboot和vue的银行产品秒杀系统</h4>
                        <el-descriptions :column="1" style="width:85%">
                            <el-descriptions-item label="-">
                                使用springboot和vue框架开发的一个前后端分离项目，后端使用控制器、业务逻辑、数据访问三层架构，前端使用MVVM模式来展现页面，核心秒杀逻辑采用了乐观锁的思想。
                            </el-descriptions-item>
                        </el-descriptions>
                    </li>
                </ul>
            </div>
            <el-divider class="divider" content-position="left">
                <h2 class="module_title">校内实践</h2>
            </el-divider>
            <div class="school_activity">
                <ul>
                    <li>
                        校计算机协会技术部部长：每周在学校的学生综合服务中心帮助同学和老师解决电脑硬件和软件上的问题
                    </li>
                    <li>
                        校机器人队成员：参与机器人队的相关训练以及对足球机器人进行编程和调试
                    </li>
                    <li>
                        院足球队队员：参与院内足球训练以及校内足球比赛
                    </li>
                </ul>
            </div>
            <!-- <p class="module_title">校内荣誉</p>
            <el-divider />
            <div class="school_honor"></div> -->
            <!-- <p class="module_title">基本技能</p>
            <el-divider />
            <div class="basic_skills"></div> -->
            <!-- <p class="module_title">自我评价</p>
            <el-divider />
            <div class="self_evaluation"></div> -->
        </el-card>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
h2 {
    font-size: 18px;
}

h3 {
    font-size: 17px;
}

h4 {
    font-size: 15px;
}

.container {
    height: auto;
    width: 78%;
    margin: auto auto;
    display: flex;
    overflow: auto;
}

.box-card {
    flex: 1;
    margin: 60px;
}

.divider {
    margin-top: 45px;
    margin-bottom: 30px;
    background-color: rgb(74, 101, 139);
    height: 5px;
}

.module_title {}

//使用官方给定的属性label-class-name总是没有效果
//于是直接到网页中去找到对应元素的class值，在这里直接为其添加效果
//注意还需要使用:deep样式穿透才能生效
.el-descriptions {
    :deep(.el-descriptions__label) {
        font-weight: 800;
    }
}


.header {
    height: 260px;
    display: flex;

    &-left {
        flex: 7;
        margin-right: 20px;

        &-top {
            :deep(.el-descriptions__title) {
                font-size: 22px;
            }

            width: 60%;
            height: 25%;
            margin: 30px 10px;
        }

        &-bottom {
            height: 30%;
            margin: auto 10px;
        }
    }

    &-right {
        // border: 1px solid;
        height: 100%;
        flex: 2;

        &-img {
            width: 180px;
            height: 240px;
            // background-color: black;
            margin: 10px auto;
        }
    }
}

.personal_information {
    width: 100%;
    margin: 50px 0;
}


$module_height: 200px;


.educational_background {
    height: calc($module_height + 40px);
}

.project_experience {
    // height: $module_height;
    height: auto;

    li {
        margin-top: 15px;
    }
}


.competition_experience {
    // height: $module_height;
    height: auto;

    li {
        margin-top: 10px;
    }
}

.school_activity {
    // height: $module_height;
    height: auto;

    li {
        margin-top: 10px;
    }
}

.school_honor {
    // height: $module_height;
    height: auto;
}

.basic_skills {
    // height: $module_height;
    height: auto;
}

.self_evaluation {
    // height: $module_height;
    height: auto;
}
</style>