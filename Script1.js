const final_x = 625;

const start_y = 90;
const final_y = 685;
 

const union_type =
{
    none: 'none',
    VAERTSHUS: 'type1',
    Volcano: 'type2',
    japanese_1: 'type3',
    type4: 'type4',
    type5: 'type5',
    type6: 'type6',
    type7: 'type7',
    type8: 'type8',

}

const data_base =    ///길드,이름,x좌표,y좌표,문서 링크, 길드 간부인가 
    [
        [union_type.none, 'A Tun', 578, 16, 'http', false],
        [union_type.none, 'WhoYouBoy', 561, 59, 'http', false],
        [union_type.none, 'vietquang', 542, 90, 'http', false],
        [union_type.none, 'H≡GHW△Y', 578, 16, 'http', false],
        [union_type.none, 'DALDAL', 494, 66, 'http', false],
        [union_type.none, 'Sailors', 502, 51, 'http', false],
        [union_type.none, 'Qin2', 483, 21, 'http', false],
        [union_type.none, 'Gabmilk', 469, 11, 'http', false],
        [union_type.none, 'mai', 445, 48, 'http', false],
        [union_type.none, 'supperiex', 442, 10, 'http', false],
        [union_type.none, 'Sakiza', 427, 14, 'http', false],
        [union_type.none, 'cpdddddd', 411, 14, 'http', false],
        [union_type.none, 'MrD', 362, 9, 'http', false],
        [union_type.none, 'Slayer QI 6', 353, 24, 'http', false],
        [union_type.none, 'Pho Bo VN', 345, 9, 'http', false],
        [union_type.none, 'king VI', 268, 14, 'http', false],
        [union_type.none, 'LongRiverClone', 262, 32, 'http', false],
        [union_type.none, 'cai bang', 247, 59, 'http', false],
        [union_type.none, 'Mrks', 234, 32, 'http', false],
        [union_type.none, 'BeosUs', 215, 35, 'http', false],
        [union_type.none, 'NaHee', 168, 11, 'http', false],
        [union_type.none, 'T H I N H', 163, 63, 'http', false],
        [union_type.none, 'Hung Dao', 159, 80, 'http', false],
        [union_type.none, 'Daishinkan', 141, 32, 'http', false],
        [union_type.none, 'Akmbatupeeek', 137, 65, 'http', false],
        [union_type.none, 'vippro', 81, 40, 'http', false],
        [union_type.none, 'Lalmon', 82, 70, 'http', false],
        [union_type.none, 'Kinda', 71, 102, 'http', false],
        [union_type.none, 'oSuriviruSo', 63, 71, 'http', false],
        [union_type.none, 'ThanhPhuong', 54, 56, 'http', false],
        [union_type.none, 'Aekro', 46, 42, 'http', false],
        [union_type.none, 'Kb choi', 39, 9, 'http', false],
        [union_type.none, 'DSRaptor', 44, 26, 'http', false],
        [union_type.none, 'BagyoPH', 30, 28, 'http', false],
        [union_type.none, 'IMTICHAN', 571, 93, 'http', false],
        [union_type.none, 'Dark Freedom', 576, 78, 'http', false],
        [union_type.none, 'Mawfyz', 558, 79, 'http', false],
        [union_type.none, 'NLK', 556, 93, 'http', false],
        [union_type.none, 'Lam Phong', 540, 119, 'http', false],
        [union_type.none, 'Westy Reborn', 532, 104, 'http', false],
        [union_type.none, 'Trinity7', 525, 72, 'http', false],
        [union_type.none, 'old gramps', 494, 117, 'http', false],
        [union_type.none, 'AnVo', 467, 95, 'http', false],
        [union_type.none, 'RyU', 448, 65, 'http', false],
        [union_type.none, 'OnLyFanS', 388, 91, 'http', false],
        [union_type.none, 'Punkinator', 384, 106, 'http', false],
        [union_type.none, 'Ichidori', 358, 92, 'http', false],
        [union_type.none, 'Anhnv', 351, 108, 'http', false],
        [union_type.none, 'Funaro Aigama', 335, 110, 'http', false],
        [union_type.none, 'Stabgg', 311, 87, 'http', false],
        [union_type.none, 'Umbral Cliff', 294, 83, 'http', false],
        [union_type.none, 'king VII', 281, 102, 'http', false],
        [union_type.none, 'NewPK', 260, 92, 'http', false],
        [union_type.none, 'DuyAnn', 245, 91, 'http', false],
        [union_type.none, 'JQK', 231, 98, 'http', false],
        [union_type.none, 'veryluckguy', 205, 56, 'http', false],
        [union_type.none, 'SaigaiKey', 159, 35, 'http', false],
        [union_type.none, 'InvaderZa', 125, 31, 'http', false],
        [union_type.none, 'Lalmon', 82, 70, 'http', false],
        [union_type.none, 'oSuriViruSo', 63, 71, 'http', false],
        [union_type.none, 'Suverhec phu', 44, 84, 'http', false],
        [union_type.none, 'Elden Lord', 40, 104, 'http', false],
        [union_type.none, 'ToiNgu', 19, 106, 'http', false],
        [union_type.none, 'DK', 547, 133, 'http', false],
        [union_type.none, 'JoeChiu', 403, 81, 'http', false],
        [union_type.none, 'ZEEEEE', 353, 43, 'http', false],
        [union_type.none, 'Maple', 321, 69, 'http', false],
        [union_type.none, 'DuyAnh', 245, 91, 'http', false],
        [union_type.none, 'than long', 209, 99, 'http', false],
        [union_type.none, 'Boss VN', 193, 111, 'http', false],
        [union_type.none, 'Hispast', 150, 130, 'http', false],
        [union_type.none, 'CopperFill', 578, 16, 'http', false],
        [union_type.none, 'Cong Huan', 145, 98, 'http', false],
        [union_type.none, 'BUBU DUDU', 118, 109, 'http', false],
        [union_type.none, 'SaigaiKey', 159, 35, 'http', false],
        [union_type.none, 'InvaderZa', 125, 31, 'http', false],
        [union_type.none, 'Lalmon', 82, 70, 'http', false],
        [union_type.none, 'oSuriViruSo', 63, 71, 'http', false],
        [union_type.none, 'Suverhec phu', 44, 84, 'http', false],
        [union_type.none, 'Elden Lord', 40, 104, 'http', false],
        [union_type.none, 'ToiNgu', 19, 106, 'http', false],
        [union_type.none, 'DK', 547, 133, 'http', false],
        [union_type.none, 'JoeChiu', 403, 81, 'http', false],
        [union_type.none, 'ZEEEEE', 353, 43, 'http', false],
        [union_type.none, 'Maple', 321, 69, 'http', false],
        [union_type.none, 'DuyAnh', 245, 91, 'http', false],
        [union_type.none, 'than long', 209, 99, 'http', false],
        [union_type.none, 'Boss VN', 193, 111, 'http', false],
        [union_type.none, 'Hispast', 150, 130, 'http', false],
        [union_type.none, 'CopperFill', 578, 16, 'http', false],
        [union_type.none, 'Cong Huan', 145, 98, 'http', false],
        [union_type.none, 'BUBU DUDU', 118, 109, 'http', false],
        [union_type.none, 'Rooown', 590, 152, 'http', false],
        [union_type.none, 'Squarius', 558, 166, 'http', false],
        [union_type.none, 'Raikiiiiiiii', 547, 148, 'http', false],
        [union_type.none, 'JC Freddie', 541, 166, 'http', false],
        [union_type.none, 'LeonMS', 527, 161, 'http', false],
        [union_type.none, 'TrungTran', 525, 176, 'http', false],
        [union_type.none, 'NishK', 493, 169, 'http', false],
        [union_type.none, 'Ee neng Leong', 479, 128, 'http', false],
        [union_type.none, 'LittleBee', 435, 148, 'http', false],
        [union_type.none, 'Crowns', 404, 150, 'http', false],
        [union_type.none, 'MIKOYAN', 397, 232, 'http', false],
        [union_type.none, '순천', 386, 262, 'http', false],
        [union_type.none, 'pig', 381, 244, 'http', false],
        [union_type.none, 'Tangina', 363, 238, 'http', false],
        [union_type.none, 'Jc Freddie', 349, 143, 'http', false],
        [union_type.none, 'Xavia', 338, 176, 'http', false],
        [union_type.none, 'KhaZix', 343, 193, 'http', false],
        [union_type.none, 'QuynhQuynh', 264, 152, 'http', false],
        [union_type.none, 'Hung Cao', 263, 199, 'http', false],
        [union_type.none, 'PhongVan', 255, 168, 'http', false],
        [union_type.none, '티파니', 250, 139, 'http', false],
        [union_type.none, 'Tired', 234, 172, 'http', false],
        [union_type.none, 'Dai viet 00', 220, 172, 'http', false],
        [union_type.none, 'Nguyen MZin', 167, 165, 'http', false],
        [union_type.none, 'TigerXz', 162, 217, 'http', false],
        [union_type.none, 'KaiKaii', 152, 264, 'http', false],
        [union_type.none, 'BeeQ', 147, 237, 'http', false],
        [union_type.none, 'Phuc Hao', 146, 216, 'http', false],
        [union_type.none, 'Vinh Thong', 128, 186, 'http', false],
        [union_type.none, 'T Nguyen V', 130, 205, 'http', false],
        [union_type.none, '유혹의 열매', 120, 168, 'http', false],
        [union_type.none, 'ting ina mo', 111, 215, 'http', false],
        [union_type.none, 'BearKazaki', 99, 160, 'http', false],
        [union_type.none, 'JQKA2', 86, 228, 'http', false],
        [union_type.none, 'Aries', 59, 259, 'http', false],
        [union_type.none, 'Lau Thai', 74, 256, 'http', false],
        [union_type.none, 'Long Thang', 48, 243, 'http', false],
        [union_type.none, 'hawimau', 45, 226, 'http', false],
        [union_type.none, 'Quang Duong', 36, 210, 'http', false],
        [union_type.none, 'Han Q', 19, 234, 'http', false],
        [union_type.none, 'NKDUY26112009', 12, 220, 'http', false],
        [union_type.none, 'Mickeser', 541, 202, 'http', false],
        [union_type.none, 'Atis', 513, 206, 'http', false],
        [union_type.none, 'Stalingrad', 491, 234, 'http', false],
        [union_type.none, 'Yamino', 469, 249, 'http', false],
        [union_type.none, 'JazeCali03', 458, 266, 'http', false],
        [union_type.none, 'DD', 449, 296, 'http', false],
        [union_type.none, 'Teabag', 426, 279, 'http', false],
        [union_type.none, 'ElEl2', 397, 301, 'http', false],
        [union_type.none, 'KIAN EMPIRE', 389, 318, 'http', false],
        [union_type.none, 'Kylian', 381, 302, 'http', false],
        [union_type.none, 'illusionate', 367, 339, 'http', false],
        [union_type.none, 'Daima Hanzu', 352, 339, 'http', false],
        [union_type.none, 'essense', 340, 317, 'http', false],
        [union_type.none, 'Leifur', 335, 332, 'http', false],
        [union_type.none, 'Pzzy', 329, 292, 'http', false],
        [union_type.none, 'aliansi', 313, 292, 'http', false],
        [union_type.none, 'I miss Her', 307, 355, 'http', false],
        [union_type.none, 'RifandiPraset', 310, 338, 'http', false],
        [union_type.none, 'SINSINNE', 293, 333, 'http', false],
        [union_type.none, 'RamBoz', 271, 317, 'http', false],
        [union_type.none, 'SunSuy', 254, 340, 'http', false],
        [union_type.none, 'Bernhaben', 238, 344, 'http', false],
        [union_type.none, 'GusZilla', 164, 199, 'http', false],
        [union_type.none, 'sooni', 198, 306, 'http', false],
        [union_type.none, 'FeiXin', 184, 367, 'http', false],
        [union_type.none, 'God Ov War', 145, 367, 'http', false],
        [union_type.none, 'Nezha Sevenn', 135, 335, 'http', false],
        [union_type.none, 'HanCao To', 129, 307, 'http', false],
        [union_type.none, 'BB SPECTRE', 112, 356, 'http', false],
        [union_type.none, 'Haya98', 101, 328, 'http', false],
        [union_type.none, 'MRGlory', 590, 341, 'http', false],
        [union_type.none, 'OGMumey', 575, 308, 'http', false],
        [union_type.none, 'Tainagaikami', 572, 339, 'http', false],
        [union_type.none, 'Zoan', 535, 329, 'http', false],
        [union_type.none, 'Bau', 521, 339, 'http', false],
        [union_type.none, 'Bau123', 474, 316, 'http', false],
        [union_type.none, 'FAmuonnam', 466, 298, 'http', false],
        [union_type.none, 'renvensky', 458, 326, 'http', false],
        [union_type.none, 'Oa U', 434, 317, 'http', false],
        [union_type.none, 'Dragon Noi', 420, 319, 'http', false],
        [union_type.none, 'Kate Surang', 415, 302, 'http', false],
        [union_type.none, 'grieve', 287, 369, 'http', false],
        [union_type.none, 'GiveMeYourFood', 268, 374, 'http', false],
        [union_type.none, 'Chun anh Lin', 100, 393, 'http', false],
        [union_type.none, 'Back', 83, 381, 'http', false],
        [union_type.none, 'Nighia Dragon', 53, 386, 'http', false],
        [union_type.none, 'Chentung', 36, 408, 'http', false],
        [union_type.none, '동양인', 22, 392, 'http', false],
        [union_type.none, 'Tiam', 18, 408, 'http', false],
        [union_type.none, 'Tay Yi Yang', 581, 501, 'http', false],
        [union_type.none, 'MuZaSi', 581, 487, 'http', false],
        [union_type.none, 'Naro Y', 578, 16, 'http', false],
        [union_type.none, 'Lists', 550, 486, 'http', false],
        [union_type.none, 'SaturdayBugKJV', 523, 485, 'http', false],
        [union_type.none, 'Kiet CD', 519, 505, 'http', false],
        [union_type.none, 'Dacy', 508, 479, 'http', false],
        [union_type.none, 'U Oe', 404, 487, 'http', false],
        [union_type.none, 'EatLansones', 368, 487, 'http', false],
        [union_type.none, 'Naka Sarata', 351, 495, 'http', false],
        [union_type.none, 'LacViet', 351, 479, 'http', false],
        [union_type.none, 'Dang sida', 337, 478, 'http', false],
        [union_type.none, 'o kia', 315, 482, 'http', false],
        [union_type.none, 'JuBon', 303, 467, 'http', false],
        [union_type.none, 'Jinu', 294, 487, 'http', false],
        [union_type.none, 'QnA', 292, 502, 'http', false],
        [union_type.none, 'Thuy moc Hoa', 278, 499, 'http', false],
        [union_type.none, 'AquariusXlll', 248, 504, 'http', false],
        [union_type.none, 'dungdanh', 232, 509, 'http', false],
        [union_type.none, 'acerbo', 206, 482, 'http', false],
        [union_type.none, 'Omwad', 189, 454, 'http', false],
        [union_type.none, 'Quan Vu', 183, 495, 'http', false],
        [union_type.none, 'LewisRKT', 166, 498, 'http', false],
        [union_type.none, 'ddcp', 158, 473, 'http', false],
        [union_type.none, 'Anathema Eilo', 152, 492, 'http', false],
        [union_type.none, 'nubunabu', 106, 476, 'http', false],
        [union_type.none, 'Singingmice', 89, 466, 'http', false],
        [union_type.none, 'Ye Xiu', 74, 462, 'http', false],
        [union_type.none, '박지성', 28, 489, 'http', false],
        [union_type.none, 'Avira', 64, 479, 'http', false],
        [union_type.none, 'Braindead', 50, 482, 'http', false],
        [union_type.none, 'Sapi', 566, 566, 'http', false],
        [union_type.none, 'jane qt', 545, 541, 'http', false],
        [union_type.none, 'Deat', 529, 558, 'http', false],
        [union_type.none, 'SANO', 416, 548, 'http', false],
        [union_type.none, 'Magicvn', 409, 566, 'http', false],
        [union_type.none, 'Void Weir', 402, 549, 'http', false],
        [union_type.none, 'Rokuro', 382, 558, 'http', false],
        [union_type.none, 'Nezha7', 308, 555, 'http', false],
        [union_type.none, 'Khang Pham', 283, 570, 'http', false],
        [union_type.none, 'Trac Pham', 289, 548, 'http', false],
        [union_type.none, 'TrangYeu2k0', 267, 566, 'http', false],
        [ union_type.none , 'Ha Tu Lanh', 258, 550, 'http', false],
        [ union_type.none , 'Minh Do', 243, 572, 'http', false],
        [union_type.none, 'wlsl', 195, 564, 'http',false],
        [union_type.none, 'ITIAN0', 152, 543, 'http', false],
        [union_type.none, 'lithium', 90, 538, 'http', false],
        [union_type.none, 'Avi', 58, 535, 'http', false],
        [union_type.none, 'GOOD', 17, 531, 'http', false],
        [union_type.none, 'Trung4343', 520, 575, 'http', false],
        [union_type.none, 'samsungpay', 328, 582, 'http', false],
        [union_type.none, 'TuuKiemTien', 243, 590, 'http', false],
        [union_type.none, 'How to basic', 196, 580, 'http', false],
        [union_type.none, 'omwado', 85, 578, 'http', false],
        [union_type.none, 'cac di bo', 55, 586, 'http', false],
        [union_type.none, 'PsionCat', 40, 583, 'http', false],
        [union_type.none, '小小糖国', 102, 590, 'http', false],
        [union_type.none, '草泥马', 132, 583, 'http', false],
        [union_type.none, '無鳴', 440, 577, 'http', false],
        [union_type.none, '叱鬼', 504, 582, 'http', false],
        [union_type.none, '8-1操', 75, 542, 'http', false],
        [union_type.none, '星修2', 146, 557, 'http', false],
        [union_type.none, '超級大哭', 181, 559, 'http', false],
        [union_type.none, '恆', 363, 549, 'http', false],
        [union_type.none, '鑫冰林', 466, 560, 'http', false],
        [union_type.none, '嫑好', 481, 560, 'http', false],
        [union_type.none, '哈密瓜0603', 543, 555, 'http', false],
        [union_type.none, '很想耕田吧', 22, 475, 'http', false],
        [union_type.none, '大花咲豐草', 36, 471, 'http', false],
        [union_type.none, '伊姆龙 Imron', 120, 474, 'http', false],
        [union_type.none, '媽錯', 207, 467, 'http', false],
        [union_type.none, '挖人', 214, 499, 'http', false],
        [union_type.none, '小吳 道心破碎', 254, 476, 'http', false],
        [union_type.none, 'ผมคนดี', 264, 493, 'http', false],
        [union_type.none, '可樂Saiko', 437, 478, 'http', false],
        [union_type.none, '腕餅', 484, 501, 'http', false],
        [union_type.none, '重生之我是MVP', 545, 523, 'http', false],
        [union_type.none, '冷正洋', 561, 532, 'http', false],
        [union_type.none, 'ทั้มครับ', 29, 423, 'http', false],
        [union_type.none, '一支穿雲箭', 161, 379, 'http', false],
        [union_type.none, '貓又海螺', 494, 347, 'http', false],
        [union_type.none, '小吳 道心操碎', 489, 318, 'http', false],
        [union_type.none, '媽我錯了別打我', 540, 314, 'http', false],
        [union_type.none, '肥龍在天', 552, 329, 'http', false],
        [union_type.none, '九叶明镜', 64, 367, 'http', false],
        [union_type.none, '𐱸', 63, 343, 'http', false],
        [union_type.none, '豆腐.', 79, 344, 'http', false],
        [union_type.none, '青龍軍蟲榮蟲原', 95, 351, 'http', false],
        [union_type.none, '君士坦丁十一世', 232, 330, 'http', false],
        [union_type.none, '宣密', 285, 318, 'http', false],
        [union_type.none, '婕瑜', 389, 332, 'http', false],
        [union_type.none, '我龜toyota又粗', 411, 266, 'http', false],
        [union_type.none, '小龍龍', 474, 231, 'http', false],
        [union_type.none, '佳諺', 484, 216, 'http', false],
        [union_type.none, '我只想耕田', 541, 184, 'http', false],
        [union_type.none, '特殊工作隊', 585, 185, 'http', false],
        [union_type.none, '大茄水竹葉', 63, 222, 'http', false],
        [union_type.none, 'hawimau', 48, 226, 'http', false],
        [union_type.none, 'Beo', 575, 293, 'http', false],
        [union_type.none, 'hieu', 586, 393, 'http', false],
        [union_type.none, 'Maro Y', 563, 502, 'http', false],
        [union_type.none, 'PrinceWew', 540, 470, 'http', false],
        [union_type.none, 'MTrung', 577, 536, 'http', false],
        [union_type.none, 'New Battle', 391, 456, 'http', false],
        [union_type.none, 'NoahNoah', 404, 438, 'http', false],
        [union_type.none, 'Kato VN', 166, 332, 'http', false],
        [union_type.none, '14VN', 578, 253, 'http', false],
        [union_type.none, 'D763n', 538, 271, 'http', false],
        [union_type.none, 'Arthurn', 572, 268, 'http', false],
        [union_type.none, 'Ryder', 587, 449, 'http', false],
        [union_type.none, 'Chun And Lin', 553, 388, 'http', false],
        [union_type.none, 'FridayLeeHNT', 437, 337, 'http', false],
        [union_type.none, 'Qin Ruo', 430, 366, 'http', false],
        [union_type.none, 'Moil', 398, 369, 'http', false],
        [union_type.none, '7in', 411, 406, 'http', false],
        [union_type.none, 'Nhoi', 523, 468, 'http', false],
        [union_type.none, 'noobfighter', 472, 269, 'http', false],
        [union_type.none, 'forth3000', 589, 303, 'http', false],
        [union_type.none, 'HM Kingdom', 590, 360, 'http', false],
        [union_type.none, 'pawner', 573, 371, 'http', false],
        [union_type.none, 'HGN', 587, 378, 'http', false],
        [union_type.none, 'xiao Ba', 465, 371, 'http', false],
        [union_type.none, '0din', 487, 362, 'http', false],
        [union_type.none, 'OHOLA', 550, 405, 'http', false],
        [union_type.none, 'DICK DESTROYER', 539, 386, 'http', false],
        [union_type.none, 'Ke Da Tai', 529, 404, 'http', false],
        [union_type.none, 'Tonnumm', 507, 437, 'http', false],
        [union_type.none, 'Fenwe', 508, 394, 'http', false],
        [union_type.none, 'CHECKKKKKK', 455, 457, 'http', false] 


    ]

 
function search(player) {
    const position_text_el = document.querySelectorAll('.position_text'); //귀찮으니까 클래스 전체 삭제로 만듬
    position_text_el.forEach(el => el.remove());
    const player_name_text_el = document.querySelectorAll('.player_name_text');
    player_name_text_el.forEach(el => el.remove());


    for (i = 0; i < data_base.length; i++) {
        if (data_base[i][1] == player) {
            const nikename = document.createElement("h1"); //플레이어 이름 띄어주는 코드
            nikename.textContent = player;
            nikename.classList.add('player_name_text'); //css
            document.body.appendChild(nikename);

            const position = document.createElement("p"); //좌표 띄어주는 코드
            position.textContent = '[' + data_base[i][2] + ',' + data_base[i][3] + ']';
            position.classList.add('position_text'); //css
            document.body.appendChild(position);

        }

    }
}





function createbutton(union, name, position_x, position_y, document_link, high_player)
 
{
     
    const container = document.getElementById('button-container');
    const button = document.createElement('button');

    button.classList.add('position_button'); //css

    x = start_x + (final_x - start_x) / 600 * position_x;  //x와y좌표 웹과 구만에이커 비율 맞추기
    y = start_y + (final_y - start_y) / 600 * (599 - position_y);
    button.style.left = x + 'px';
    button.style.top = y + 'px';

    //------------------------------------------------------------------------------
     //클랜 별로 색깔 맞추기
    switch (union) {
        case union_type.none: button.classList.add('none'); break;
        case union_type.VAERTSHUS: button.classList.add('type1'); break;
        case union_type.Volcano: button.classList.add('type2'); break;
        case union_type.japanese_1: button.classList.add('type3');break;
        case union_type.type4: button.classList.add('type4');break;
        case union_type.type5: button.classList.add('type5'); break;
        case union_type.type6: button.classList.add('type6'); break;
        case union_type.type7: button.classList.add('type7'); break;
        case union_type.type8: button.classList.add('type8'); break;
    }
    //---------------------------------------------------------------------------------
    if (high_player) { button.classList.add('high_player'); }

    button.addEventListener('click', () => { search(name); });



    document.body.appendChild(button);
}
 


function union_search(uni)
{
     
    for (i = 0; i < data_base.length ; i++)
    {
         
         
        if (data_base[i][0] == uni)
       {
            
            createbutton(data_base[i][0], data_base[i][1], data_base[i][2], data_base[i][3], data_base[i][4], data_base[i][5]);
       }
    }
    over_click(uni);
}


none_up = false;
union1_up = false;
union2_up = false;
union3_up = false;
union4_up = false;
union5_up = false;
union6_up = false;
union7_up = false;
union8_up = false;

function over_click(uni) //이미 클릭된 거 였으면, 사라지게 만들기
{
    switch (uni)  
    {
        case union_type.none: if (none_up) { document.querySelectorAll('.none').forEach(el => el.remove()); }
            none_up = !none_up; break;
        case union_type.VAERTSHUS: if (union1_up) { document.querySelectorAll('.type1').forEach(el => el.remove()); }  
            union1_up = !union1_up; break;
        case union_type.Volcano: if (union2_up) { document.querySelectorAll('.type2').forEach(el => el.remove()); }
            union2_up = !union2_up;  break;
        case union_type.japanese_1: if (union3_up) { document.querySelectorAll('.type3').forEach(el => el.remove()); }  
            union3_up = !union3_up; break;
        case union_type.type4: if (union4_up) { document.querySelectorAll('.type4').forEach(el => el.remove()); }
            union4_up = !union4_up; break; 
        case union_type.type5: if (union5_up) { document.querySelectorAll('.type5').forEach(el => el.remove()); }
            union5_up = !union5_up; break; 
        case union_type.type6: if (union6_up) { document.querySelectorAll('.type6').forEach(el => el.remove()); }
            union6_up = !union6_up; break;
        case union_type.type7: if (union7_up) { document.querySelectorAll('.type7').forEach(el => el.remove()); }
            union7_up = !union7_up; break;
        case union_type.type8: if (union8_up) { document.querySelectorAll('.type8').forEach(el => el.remove()); }
            union8_up = !union8_up; break;
    }
     

}

function search_name( )
{
    player_nike_name = document.getElementById("player_name_text").value;
    search(player_nike_name);
}

function search_position() {
    pos_x = document.getElementById("position_x_text").value;
    pos_y = document.getElementById("position_y_text").value;

    for (i = 0; i < data_base.length; i++) {


        if (data_base[i][2] == pos_x && data_base[i][3] == pos_y)
        {

            player_nike_name = data_base[i][1];
        }
    }
    search(player_nike_name);
}
  
