import  { Component, ErrorInfo, ReactNode } from "react";
import {  ExclamationTriangleFill } from "react-bootstrap-icons";
import {withTranslation, useTranslation} from 'react-i18next';

interface Props {
    children?: ReactNode;
    t: ReturnType<typeof useTranslation>['t'];
}

interface State {
    hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false
    };

    public static getDerivedStateFromError(): State {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    public render() {

        if (this.state.hasError) {
            return <div className="h-[80vh] w-fill bg-gray-100 flex items-center justify-center ">
                <div className="flex flex-col space-y-10 items-center">
                    <ExclamationTriangleFill color="red" size={50} />

                    <div className="p-30">
                        <h1>{this.props.t("error500")}</h1>
                    </div>
                </div>

            </div>;
        }

        return this.props.children;
    }
}

// eslint-disable-next-line react-refresh/only-export-components
export default withTranslation()(ErrorBoundary);




