import { MetaLogoIcon, FireIcon, YoutubeLogoIcon, InstagramLogoIcon, FourKIcon, PencilIcon, CalendarDotsIcon, SpeedometerIcon, PaintBrushIcon, AtomIcon, ScissorsIcon, CameraIcon, LightbulbIcon, IdentificationBadgeIcon } from "@phosphor-icons/react";

const iconMap = {
    MetaLogo: MetaLogoIcon,
    Fire: FireIcon,
    FourK: FourKIcon,
    CalendarDots: CalendarDotsIcon,
    Pencil: PencilIcon,
    Seo: SpeedometerIcon,
    Brush: PaintBrushIcon,
    React: AtomIcon,
    Scissors: ScissorsIcon,
    Camera: CameraIcon,
    Lightbulb: LightbulbIcon,
    Id: IdentificationBadgeIcon,
    YouTube: YoutubeLogoIcon,
    Instagram: InstagramLogoIcon

};

function IconRenderer({ iconName }) {
    const Icon = iconMap[iconName];
    return Icon ? <Icon className="text-neonblue" size={32} /> : null;
}


export default IconRenderer;