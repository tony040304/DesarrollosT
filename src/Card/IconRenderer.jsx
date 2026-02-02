import { MetaLogoIcon, PencilIcon, CalendarDotsIcon, SpeedometerIcon, PaintBrushIcon, AtomIcon, ScissorsIcon, CameraIcon, LightbulbIcon, IdentificationBadgeIcon } from "@phosphor-icons/react";

const iconMap = {
    MetaLogo: MetaLogoIcon,
    CalendarDots: CalendarDotsIcon,
    Pencil: PencilIcon,
    Seo: SpeedometerIcon,
    Brush: PaintBrushIcon,
    React: AtomIcon,
    Scissors: ScissorsIcon,
    Camera: CameraIcon,
    Lightbulb: LightbulbIcon,
    Id: IdentificationBadgeIcon
};

function IconRenderer({ iconName }) {
    const Icon = iconMap[iconName];
    return Icon ? <Icon className="text-neonblue" size={32} /> : null;
}


export default IconRenderer;