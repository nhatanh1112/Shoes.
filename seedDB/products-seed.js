const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });
const Product = require("../models/product");
const Category = require("../models/category");
const mongoose = require("mongoose");
const faker = require("faker");
const connectDB = require("./../config/db");
connectDB();

async function seedDB() {
  faker.seed(0);

  //----------------------Backpacks
  const runner_titles = [
    "Nike Pegasus 40",
    "Nike Vaporfly 3",
    "Nike Invincible 3",
    "Nike Quest 5",
    "Nike Structure 24",
    "Nike Run Swift 3",
    "Nike Revolution 6",
    "Nike Renew Ride 3",
    "Nike Downshifter 12",
    "Nike Zoom Fly 5",
    "Nike Juniper Trail 2",
  ];
  const runner_imgs = [
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/41a4652a-8447-4d1d-8a58-8797769eb423/pegasus-40-se-road-running-shoes-1jMJKm.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/8d3136c4-b83c-41fc-b84c-b037c82ce876/vaporfly-3-road-racing-shoes-xsDgvM.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/097596d1-f138-41e2-a72a-bc8caeb9b056/invincible-3-road-running-shoes-Wwmmlp.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/d963f94d-31a8-48ab-a87e-244543ebfa60/quest-5-road-running-shoes-8wZR01.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/9c76e5fb-174f-46c2-9f3d-28c59ca13360/structure-24-road-running-shoes-9wCgmv.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/da86f0f8-ca81-4c67-b1c5-e16baf96a078/run-swift-3-road-running-shoes-BrHm16.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/e839f55c-84d5-4030-9bcf-644e6a6463ea/revolution-6-running-shoes-5k6Jh6.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/a57a4fce-2892-4053-ab64-c427ce605117/renew-ride-3-road-running-shoes-fzS091.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/f2fb7071-fd1f-4949-bb66-78d1dff590b7/downshifter-12-road-running-shoes-kQLnZn.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/98f6e034-fbf8-4d44-9ceb-2ffa0d7bd895/zoom-fly-5-road-running-shoes-lkx7Zp.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/27c96321-e45c-4d63-ad6e-96eb63fa598c/juniper-trail-2-trail-running-shoes-PT4wqk.png",
  ];

  //--------------------Basketball
  const basketball_titles = [
    "Jordan One Take 4 PF",
    "Cosmic Unity 3",
    "LeBron Witness 7 EP",
    "Zoom Freak 4",
    "KD Trey 5 X EP",
    "Jordan Why Not .6 PF",
    "Nike Air Max Impact 4",
    "Nike Cosmic Unity 2",
    "Zoom Freak 4",
    "Nike Renew Elevate 3",
  ];

  const basketball_imgs = [
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/42cba1bc-3a7b-44df-a026-3c416d1d80b2/tatum-1-st-louis-pf-basketball-shoes-LDFvBJ.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/11ba0f3b-2077-4262-a549-05f6af02b4a0/cosmic-unity-3-basketball-shoes-hcwmW0.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/8c306596-86de-4fdd-9db9-3ef4bd1cb3fc/lebron-witness-7-ep-basketball-shoes-FKPXCg.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/9989cd60-470b-4c37-b61c-d94a019819ce/zoom-freak-4-basketball-shoes-zmXv3D.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/a2e2ba8f-5b2f-4e06-a566-a14bd0060c41/kd-trey-5-ep-basketball-shoes-mkllTG.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/f297b61a-88f4-4a64-8aca-e2402d0b9a12/jordan-why-not-6-pf-shoes-Bsggwn.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/36d173ac-71b7-4bda-8c43-b59638438051/air-max-impact-4-basketball-shoes-CcJxBx.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/1a7f9cad-5c96-446f-a9d5-2dfb9c34910f/cosmic-unity-2-basketball-shoes-S6n2s3.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/f7382cc9-e11d-4e9f-90d0-8f9ec482432a/zoom-freak-4-basketball-shoes-jFdxSB.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/1860aac9-233e-4afd-9680-4a3b3bb25457/renew-elevate-3-basketball-shoes-QT43Gj.png",
  ];

  //--------------------football
  const football_titles = [
    "Nike Tiempo Legend 9 Academy TF",
    "Nike Phantom GX Club TF",
    "Nike Mercurial Superfly 9 Club MG",
    "Nike Mercurial Vapor 15 Club TF",
    "Nike Gripknit Phantom GX Elite FG",
    "Nike Phantom GX Academy IC",
    "Nike Mercurial Vapor 15 Club MG",
    "The Nike Premier 3 FG",
    "Nike React Gato",
    "Nike Lunar Gato II IC",
  ];

  const football_imgs = [
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ccda040c-3355-46ed-99a5-78a7a8c3d3b9/tiempo-legend-9-academy-tf-football-shoe-FT9Mcp.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/93cc7d76-2039-4bca-a10a-fe095c0adb52/phantom-gx-club-tf-football-shoes-K2rSnK.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/a5f24826-f9b8-44d0-b277-baf71bbe27a6/mercurial-superfly-9-club-mg-multi-ground-football-boot-PwHVpF.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/1c69d8e6-5c77-4915-9321-b2b153e4bc6b/mercurial-vapor-15-club-tf-football-shoes-KrwVSC.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/2c5815f3-4487-49f8-92d0-02c44ae906fb/gripknit-phantom-gx-elite-fg-football-boot-6t4Xff.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/445d6af0-390e-4480-8f2d-7a179b67a38c/phantom-gx-academy-ic-indoor-court-football-shoes-H1nQBN.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/8f17dfe4-0c6f-45a8-a982-47fa7ef7e10a/mercurial-vapor-15-club-mg-multi-ground-football-boot-jkNgB1.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/f4bac890-f200-46be-8dbe-81d627c8cfb8/premier-3-fg-football-boot-5CPFpf.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/85fb3270-7879-43cd-96d2-64090fd48723/react-gato-indoor-court-football-shoes-pQBhgB.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/bbb36164-5e9a-4e34-b1c7-eda49da8886c/lunar-gato-ii-ic-indoor-court-football-shoes-pf450P.png",
  ];

  //--------------------outdoors
  const outdoors_titles = [
    "Air Jordan 1 Low FlyEase",
    "Nike Air Force 1 07",
    "Nike Air Max Pulse",
    "Nike Dunk Mid",
    "Nike Court Vision Low",
    "Nike Blazer Low 77 Vintage",
    "Nike Dunk Low Retro",
    "Nike Dunk Low Retro SE 2",
    "Nike Blazer Low 77 Jumbo",
    "Nike Air Max Plus Mercurial 25",
  ];
  const outdoors_imgs = [
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/9259e44d-8e6a-4253-aefa-7db9720ea2b4/air-jordan-1-low-flyease-easy-on-off-shoes-SsT4HK.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-shoes-WrLlWX.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/fc1ac524-05f5-4273-8281-6031f63851a2/air-max-pulse-shoes-QShhG8.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/cbc00fd0-6145-470c-97f5-24f96b161913/dunk-mid-shoes-6m6jH7.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/16cd3ba0-5496-43ea-b75d-15044501f0dc/court-vision-low-shoes-W2bfvt.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/f031c6e2-5941-4bb7-a29d-31683f5d4da2/blazer-low-77-vintage-shoes-HmmkdX.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/e0a663c0-27a8-4505-98ce-7fa11058b733/dunk-low-retro-shoes-69h36X.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/380a5dfe-f280-4550-980e-c087e69e041d/dunk-low-retro-se-2-shoes-zDQGtQ.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/18c18576-9806-4700-860c-36486a007700/blazer-low-77-jumbo-shoes-rHhr2x.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/c6704e32-5a7f-407d-bcd7-ae0b31d98791/air-max-plus-mercurial-25-shoes-KHhJBV.png",
  ];

  //--------------------tennis

  const tennis_titles = [
    "NikeCourt Air Zoom Vapor 11",
    "NikeCourt Air Zoom Vapor Pro 2",
    "NikeCourt Zoom Vapor Cage 4 Rafa",
    "NikeCourt Air Zoom Lite 3",
    "NikeCourt Vapor Lite 2",
    "NikeCourt Air Zoom NXT",
    "NikeCourt Zoom Pro",
    "NikeCourt Zoom Lite 3",
    "NikeCourt Legacy",
  ];
  const tennis_imgs = [
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/d3b7de73-a128-41a5-baec-07e6e1a0348c/nikecourt-air-zoom-vapor-11-hard-court-tennis-shoes-8PLCHs.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/9ad08032-d621-4df6-814e-800829e2a448/nikecourt-air-zoom-vapor-pro-2-hard-court-tennis-shoes-8cpW40.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/5184db53-28d0-49f7-90da-f695b368a2ec/nikecourt-zoom-vapor-cage-4-rafa-hard-court-tennis-shoes-cS7wct.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/cfecaf20-bcd1-4261-a378-c0254b41713e/nikecourt-air-zoom-lite-3-tennis-shoes-TNSHS6.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/81f39c0a-044d-42a9-9718-53ae52c56f8f/nikecourt-vapor-lite-2-hard-court-tennis-shoes-8dGHWK.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/fa5c5afb-2aeb-462a-96b0-7ce6d4ea4813/nikecourt-air-zoom-nxt-hard-court-tennis-shoes-XQQ18H.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/9ca18110-79a6-47b8-b8f9-ecf6955ecf87/nikecourt-zoom-pro-hard-court-tennis-shoes-gDWhmG.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/06692ab9-e1db-4b7d-aa72-196be0f9de4d/nikecourt-zoom-lite-3-hard-court-tennis-shoes-rzcXmR.png",
    "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/52f41a08-f3bc-4cb5-86a0-4bbf891d4eed/nikecourt-legacy-shoes-PKg8wX.png",
  ];

  //-----------------------training
  const training_titles = [
    "Nike Metcon 8",
    "Nike Free Metcon 5",
    "Nike Metcon 8 Premium",
    "Nike Renew In-Season TR 13 Premium",
    "Nike In-Season TR 13",
    "Nike SuperRep Go 3 Flyknit Next Nature",
    "Nike Legend Essential 3 Next Nature",
    "Nike SuperRep Go 3 Next Nature Flyknit Premium",
    "Nike Zoom Bella 6",
  ];
  const training_imgs = [
    "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/44e71ce8-553c-4647-b02f-a48edea791a7/metcon-8-training-shoes-vkQ0TS.png",
    "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/cff2e047-a357-4dc5-816d-47e28940583e/free-metcon-5-training-shoes-HfHgmZ.png",
    "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/57bb7ced-a7a9-4b2c-a657-306e2b5b7c47/metcon-8-training-shoes-TSn7hW.png",
    "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/6adcedf6-87b1-4041-a223-5fcac4143486/renew-in-season-tr-13-training-shoes-HLPV72.png  ",
    "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/72016816-5b42-4fa5-87a3-07a4a379b424/in-season-tr-13-training-shoes-Z3Khdg.png",
    "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/70d6a38b-7b2a-485b-bdbe-7d8d7b9837cb/superrep-go-3-flyknit-next-nature-training-shoes-zKqgRc.png",
    "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c5bc403c-d4f5-4fbf-b1eb-600c35a45acc/legend-essential-3-next-nature-training-shoes-sJBRlm.png",
    "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d2ea35df-c39c-417a-84d1-b4ea6ceefb14/superrep-go-3-next-nature-flyknit-hiit-class-shoes-lFd0wS.png",
    "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/cfa693c6-5981-486d-89c1-c3c39eb2d990/zoom-bella-6-training-shoes-PX75xS.png",
  ];

  //-----------------walking

  const walking_titles = [
    "Nike Spark",
    "ZNCHILL LIGHTMOTION+",
    "ULTRABOOST LIGHT",
    "Walking Comfort",
    "ADIZERO ADIOS PRO 3",
    "DURAMO SL 2.0",
    "BREVARD",
    "ALPHABOUNCE+ SUSTAINABLE BOUNCE",
    "ULTRABOUNCE",
    "NMD_R1 PRIMEBLUE",
    "RUNNER COMFORT",
  ];
  const walking_imgs = [
    "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b13c23ff-1fd7-4411-9a1e-599b3e26bb3e/spark-shoes-zPVQHZ.png",
    "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7d6fbaa00d0a4a218a01af3800cf2a7c_9366/Giay_ZNCHILL_LIGHTMOTION_trang_HP6089_01_standard.jpg",
    "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/443492f89d124c8aa997af89012bfdb7_9366/Giay_Ultraboost_Light_trang_GY9350_01_standard.jpg",
    "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1b453724f3934f8cbb48af4100f56f3c_9366/Giay_Runner_Comfort_nau_HQ1733_01_standard.jpg",
    "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/80841edb4f68442ab234ae9400f6d5a9_9366/Giay_Adizero_Adios_Pro_3_trang_GV7067_01_standard.jpg",
    "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/00a6a6841147431584beaf8800aaaf81_9366/Giay_Duramo_SL_2.0_trang_HP2388_01_standard.jpg",
    "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3d25329af17e4c9caef8af5b00e64fc1_9366/Giay_Brevard_Xam_HR0254_01_standard.jpg",
    "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/373371eb6f8944a3af4daf3a00a9eae2_9366/Giay_Alphabounce_Sustainable_Bounce_trang_HP6147_01_standard.jpg",
    "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/28933141bcf34d53a340af350115ad1a_9366/Giay_Ultrabounce_Hong_HP5789_01_standard.jpg",
    "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/62d96641e799450fbbdfad0800cb06ed_9366/Giay_NMD_R1_Primeblue_DJen_GZ9256_01_standard.jpg",
    "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/00a6a6841147431584beaf8800aaaf81_9366/Giay_Duramo_SL_2.0_trang_HP2388_01_standard.jpg",
  ];

  async function seedProducts(titlesArr, imgsArr, categStr) {
    try {
      const categ = await Category.findOne({ title: categStr });
      for (let i = 0; i < titlesArr.length; i++) {
        let prod = new Product({
          productCode: faker.helpers.replaceSymbolWithNumber("####-##########"),
          title: titlesArr[i],
          imagePath: imgsArr[i],
          description: faker.lorem.paragraph(),
          price: faker.random.number({ min: 10, max: 50 }),
          manufacturer: faker.company.companyName(0),
          available: true,
          category: categ._id,
        });
        await prod.save();
      }
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async function closeDB() {
    console.log("CLOSING CONNECTION");
    await mongoose.disconnect();
  }

  await seedProducts(runner_titles, runner_imgs, "Runner");

  await seedProducts(basketball_titles, basketball_imgs, "Basketball");

  await seedProducts(football_titles, football_imgs, "Football");

  await seedProducts(outdoors_titles, outdoors_imgs, "Outdoors");

  await seedProducts(tennis_titles, tennis_imgs, "Tennis");

  await seedProducts(training_titles, training_imgs, "Training and gym");

  await seedProducts(walking_titles, walking_imgs, "Walking");

  await closeDB();
}

seedDB();
