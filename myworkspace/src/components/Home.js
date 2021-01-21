import './Home.css';
import React from "react"
import NavMenu from "./NavMenu"
import Card from './Card'



class Home extends React.Component {
 render(){

    return (
 
    
      <div href="/" className="container">
        <NavMenu />
        <div className="body">
        <Card CardDescription="Kahverengi, insanın hızlı hareket etmesini sağlıyormuş. Cansas’da yapılan bir araştırmada, sanat müzesinin duvarlarını değiştirilebilir renklerden yapmışlar. Beyaz ve kahverengi arasındaki farkı ortaya koymak için bir süre duvarları beyaz olarak bırakmışlar. " CardHeader="Brown"/>
        <Card CardDescription="Yeşil vejeteryanlığı temsil eder, kasaplar bu nedenle yeşil rengi kullanmazlar. Kırmızıyı kullanılırlar. Yeşil doğanın kendisidir. Ayrıca yeşil renk güven verir. O yüzden banka logolarında genelde yeşil kullanılır. Yatak odası için de rahatlatıcı bir renktir, yaratıcılığı körükler.  " CardHeader="Green"/>
        <Card CardDescription="Siyah hırsı, gücü ve tutkuyu temsil eder. İş görüşmelerinde: “ Şirketimizde işe başladığınızda size araba verecek olsak hangi rengi tercih edersiniz?” diye sorduklarında siyah cevabını verirseniz şirket sizi hırslı ve yükselmeyi isteyen bir elaman diye düşünür." CardHeader="Black"/>
        <Card CardDescription="Mor insanların bilinç altlarındaki korkuyu açığa çıkarttığı tespit edilmiştir. Birçok intihar vakasında intihar edenlerin tüm eşyaları mor olduğu gözlemlenmiştir." CardHeader="Purple"/>
        <Card CardDescription="Freud maviyi, okyanusa benzetir, sakin diye betimlemiştir. Faber Birren ise mavinin tansiyonu düşürdüğünü söyler. Araplar ise mavi taşların, firuzenin kanın akışını yavaşlattığına inanır. Nazar boncuğu o yüzden mavi taşlıdır." CardHeader="Blue"/>
        <Card CardDescription="Sarı geçiciliğin ifadesidir. Aynı zamanda çekiciliği temsil eder.  Tüm dünyada taksilerin sarı olmasının nedeni dikkat çeksin ve geçici olduğu bilinsin diye. Araba kiralama şirketlerinin de logoları sarı renktedir. O yüzden dünyada hiçbir banka ambleminde sarı rengi kullanmaz." CardHeader="Yellow"/>
        </div>
      
      </div>
     
 )}

}

export default Home;
