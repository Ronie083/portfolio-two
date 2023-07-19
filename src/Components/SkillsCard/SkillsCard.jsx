import './SkillsCard.css'

const SkillsCard = ({ image, title, value }) => {
    return (
        <div className="flex items-end">
            <img src={image} alt="image" className="w-10 mr-5" />
            <div>
                <h2 className='text-left'>{title}</h2>
                <div class="range" style={{ "--p": value }}>
                    <div class="range__label">Progress</div>
                </div>
            </div>
        </div>
    );
};

export default SkillsCard;