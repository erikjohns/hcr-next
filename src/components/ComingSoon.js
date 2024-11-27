import LogoDark from "@/components/LogoDark";

export default function ComingSoon() {
    return (
        <div className={'coming-soon-container'}>
            <div className={'coming-soon-inner-container'}>
                <LogoDark />
                <div className={'coming-soon-text-container'}>
                    <h1>Coming Soon...</h1>
                    <p>Launching shortly, come back soon!</p>
                </div>
            </div>
            <div className={'coming-soon-email-container'}>
                <h3>Want to stay in the know?</h3>
                <p>Join the mailing list to stay up-to-date on all things Hail Columbia Ranch.</p>
                <form>
                    <div className={'field-holder'}>
                        <input name={'email'} id={'signup-list-email'} type={'text'} required />
                        <label htmlFor={'signup-list-email'}>Email</label>
                        <button type={'submit'}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}